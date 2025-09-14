/**
 * A class to interact with a VOICEVOX-compatible TTS API engine.
 */
export class VVoxEngine {
    /**
     * @param {string} baseUrl The base URL of the TTS API (e.g., http://localhost:50021)
     */
    constructor(baseUrl = 'http://localhost:50021') {
        // Remove trailing slashes from the baseUrl if they exist
        this.baseUrl = baseUrl.replace(/\/$/, '');
        /** @type {AudioContext} */
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        /** @private @type {AudioBufferSourceNode | null} */
        this.currentSource = null;
        /** @private @type {number|string|null} */
        this.speakerId = 1; // デフォルトの話者IDを1に設定
        /** @private @type {boolean} */
        this.isAvailable = false;
    }

    /**
     * Initializes the engine by checking for API availability.
     * @returns {Promise<boolean>} A promise that resolves to true if the API is available, false otherwise.
     */
    async initialize() {
        try {
            // A lightweight endpoint like /version is good for a health check.
            const response = await fetch(`${this.baseUrl}/version`);
            if (response.ok) {
                this.isAvailable = true;
                console.log("VOICEVOX API is available.");
                return true;
            }
        } catch (error) {
            console.error("Failed to connect to VOICEVOX API:", error);
        }
        this.isAvailable = false;
        return false;
    }

    /**
     * Fetches the list of available speakers from the engine.
     * @returns {Promise<Array<any>>} A promise that resolves to an array of speaker objects.
     */
    async getSpeakers() {
        if (!this.isAvailable) throw new Error("VOICEVOX API is not available.");
        const response = await fetch(`${this.baseUrl}/speakers`);
        if (!response.ok) {
            throw new Error(`Failed to fetch speakers: ${response.statusText}`);
        }
        return await response.json();
    }

    /**
     * Sets the speaker ID to be used for synthesis.
     * @param {number|string} speakerId The ID of the speaker.
     */
    setSpeakerId(speakerId) {
        this.speakerId = speakerId;
    }

    /**
     * Generates and plays audio from the given text and speaker ID.
     * @param {string} text The text to be spoken.
     */
    async speak(text) {
        if (!this.isAvailable) {
            alert("VOICEVOX APIに接続できません。ポート番号が正しいか、エンジンが起動しているか確認してください。");
            return;
        }

        if (!text) {
            console.error("Text is empty.");
            return;
        }
        if (this.speakerId === null) {
            console.error("Speaker ID is not set. Call setSpeakerId() first.");
            alert('話者が設定されていません。「話者リストを更新」ボタンを押して、話者を選択してください。');
            return;
        }

        try {
            // --- VOICEVOX Flow ---

            // 1. Create audio_query via POST
            const audioQueryUrl = `${this.baseUrl}/audio_query?text=${encodeURIComponent(text)}&speaker=${this.speakerId}`;
            const queryResponse = await fetch(audioQueryUrl, { method: 'POST' });
            if (!queryResponse.ok) {
                throw new Error(`Failed to create audio query: ${queryResponse.statusText}`);
            }
            const audioQuery = await queryResponse.json();

            // 2. Synthesize voice via POST with query in body
            const synthesisUrl = `${this.baseUrl}/synthesis?speaker=${this.speakerId}`;
            const synthResponse = await fetch(synthesisUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(audioQuery),
            });

            if (!synthResponse.ok) {
                throw new Error(`Failed to synthesize audio: ${synthResponse.statusText}`);
            }

            // 3. Decode and play audio
            const audioData = await synthResponse.arrayBuffer();
            const audioBuffer = await this.audioContext.decodeAudioData(audioData);
            
            if (this.currentSource) {
                this.currentSource.stop();
            }
            const source = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.audioContext.destination);
            source.start(0);
            this.currentSource = source;

        } catch (error) {
            console.error("TTS Error:", error);
            alert(`Error during text-to-speech process: ${error.message}`);
        }
    }
}