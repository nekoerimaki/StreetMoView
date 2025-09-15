/**
 * VOICEVOX WEB版APIと通信するためのモジュール
 */
export class VoiceVoxWebApi {
    /**
     * @param {string} [baseUrl='https://deprecatedapis.tts.quest/v2/'] APIのベースURL
     */
    constructor(baseUrl = 'https://deprecatedapis.tts.quest/v2/') {
        this.baseUrl = baseUrl;
        this.speakerId = 1;
        this.points = 0;
        /** @type {AudioContext} */
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.isAvailable = false;
        /** @private @type {AudioBufferSourceNode | null} */
        this.currentSource = null;
    }

    /**
     * Initializes the engine with API Key.
     * @param {string} apiKey APIキー
     * @returns {Promise<boolean>} A promise that resolves to true if the API is available, false otherwise.
     */
    async initialize(apiKey) {
        if (!apiKey) {
            throw new Error('APIキーは必須です。');
        }
        this.apiKey = apiKey;
        try {
            const apiStatus = await this._request('api');
            this.points = apiStatus.points;
            if (this.points < 100000) {
                console.error("too few API points remains");
                this.isAvailable = false;
                return false;
            }
            this.isAvailable = true;
            console.log("VOICEVOX WEB API is available.");
            return true;
        } catch (error) {
            console.error("Failed to connect to VOICEVOX WEB API:", error);
        }
        this.isAvailable = false;
        return false;
    }
    /**
     * APIリクエストを送信するための共通メソッド
     * @param {string} path APIのパス
     * @param {RequestInit} options fetchのオプション
     * @returns {Promise<any>} レスポンスのJSONオブジェクト
     * @private
     */
    async _request(path, options = {}) {
        const url = new URL(path, this.baseUrl);
        // su-shiki APIの仕様では、APIキーはクエリパラメータ 'key' で渡す
        url.searchParams.append('key', this.apiKey);

        const response = await fetch(url.toString(), options);

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`APIリクエストに失敗しました: ${response.status} ${response.statusText} - ${errorBody}`);
        }
        
        // Content-Typeに応じてレスポンスを処理
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        }
        if (contentType && (contentType.includes('audio/wav') || contentType.includes('audio/x-wav'))) {
            return response.blob();
        }
        return response.text();
    }

    /**
     * 話者の一覧を取得します。
     * @returns {Promise<Array<object>>} 話者のリスト
     */
    async getSpeakers() {
        return this._request('voicevox/speakers');
    }

    /**
     * Sets the speaker ID to be used for synthesis.
     * @param {number|string} speakerId The ID of the speaker.
     */
    setSpeakerId(speakerId) {
        this.speakerId = speakerId;
    }

    /**
     * テキストから直接音声データを生成します。
     * @param {string} text 読み上げるテキスト
     * @param {number} speakerId 話者ID
     * @returns {Promise<Blob>} 音声データ (WAV形式)
     */
    async speak(text) {
        if (!this.isAvailable) {
            console.error("API not available.");
            return false;
        }

        if (!text) {
            console.error("Text is empty.");
            return false;
        }
        if (this.speakerId === null) {
            console.error("Speaker ID is not set. Call setSpeakerId() first.");
            return false;
        }

        const params = new URLSearchParams({
            text: text,
            speaker: this.speakerId.toString()
        });
        const path = `voicevox/audio?${params.toString()}`;
        // 音声を取得し、その後にAPIステータスを更新する
        const audioBlob = await this._request(path, { method: 'GET' });
        const apiStatus = await this._request('api');
        this.points = apiStatus.points;

        const audioData = await audioBlob.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(audioData);
            
        if (this.currentSource) {
            this.currentSource.stop();
        }
        const source = this.audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this.audioContext.destination);
        source.start(0);
        this.currentSource = source;
        return true;
    }
}
