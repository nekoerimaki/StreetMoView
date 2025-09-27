// TTSエンジンクラスをモジュールからインポート
import { VVoxEngine } from './VVoxEngine.js';
import { VoiceVoxWebApi } from './VoiceVoxWeb.js';


const uiStrings = {
    ja: {
        routeSettings: '経路設定',
        originPlaceholder: '出発地: 例. 東京駅',
        destinationPlaceholder: '目的地: 例. 渋谷スクランブル交差点',
        driving: '自動車',
        bicycling_road: '自転車(車道)',
        bicycling: '自転車',
        walking: '徒歩',
        interpolationInterval: '補間間隔 (m):',
        searchRoute: '経路を検索',
        loadGpx: 'GPXを読み込む',
        speed: '速度 (km/時):',
        userContent: 'ユーザー投稿',
        startTour: 'ツアー開始',
        stopTour: 'ツアー停止',
        connectPower: 'パワーソースに接続',
        connectHr: '心拍計に接続',
        disconnect: '接続解除',
        startLog: 'ログ開始',
        stopLog: 'ログ終了',
        distTraveled: '移動距離',
        totalDist: '経路全体',
        currentPos: '現在位置',
        timeElapsed: '移動時間',
        actualSpeed: '移動速度',
        timeRemaining: '残り時間',
        elevation: '標高',
        gradient: '勾配',
        power: 'パワー',
        boost: 'ブースト',
        cadence: 'ケイデンス',
        heartRate: '心拍数',
        calories: 'カロリー',
        directionSettings: '表示方向',
        left90: '左90°',
        left45: '左45°',
        front: '正面',
        right45: '右45°',
        right90: '右90°',
        startPoint: '出発地',
        endPoint: '目的地',
        currentLocation: '現在地',
        // messages
        noStreetView: 'この経路のストリートビューデータが見つかりませんでした。',
        routeFound: '経路が見つかりました！巡回を開始できます。',
        elevationProcessed: '経路の標高データを補正しました。',
        elevationError: '標高データの取得または補正に失敗しました。',
        originDestRequired: '出発地と目的地を入力してください。',
        invalidInterval: '有効な補間間隔を入力してください。',
        routeSearchFailed: '経路検索に失敗しました: ',
        routeNotFound: '経路が見つかりませんでした。場所を確認してください。',
        gpxNoTrackpoints: 'GPXファイルにトラックポイントが見つかりませんでした。',
        gpxNoCoordinates: 'GPXファイルから有効な座標を抽出できませんでした。',
        gpxParseError: 'GPXファイルの解析中にエラーが発生しました。',
        destinationReached: '目的地に到達しました。',
        noRouteForTour: 'まず経路を検索するかGPXファイルを読み込んでください。',
        invalidSpeed: '有効な速度を入力してください。',
        searchingDevice: 'デバイスを検索中です...',
        connectingDevice: 'デバイスに接続中です...',
        gattConnected: 'GATTサーバーに接続しました。',
        ftmsConnected: 'FTMSデバイスに接続しました。',
        btConnectionFailed: 'Bluetooth接続に失敗しました:',
        btConnectionError: 'Bluetooth接続エラー: ',
        deviceDisconnected: 'デバイスから切断しました。',
        searchingHr: '心拍計を検索中です...',
        connectingHr: '心拍計に接続中です...',
        hrConnected: '心拍計に接続しました。',
        hrConnectionFailed: '心拍計の接続に失敗しました:',
        hrConnectionError: '心拍計接続エラー: ',
        hrDisconnected: '心拍計から切断しました。',
        hrTimeout: '心拍計からのデータ受信がタイムアウトしました。',
        logStarted: 'ログ記録を開始しました。',
        logStopped: 'ログ記録を終了しました。',
        confirmSaveTcx: '記録したアクティビティをTCXファイルとして保存しますか？',
        powerZeroStop: '速度が低下したためツアーを停止しました。',
        powerDetectedStart: 'パワーを検出。ツアーを開始します。',
        jumpDisabledDuringTour: 'ツアー中はジャンプできません。',
        fullscreen: 'フルスクリーン',
        exitFullscreen: 'フルスクリーン解除',
        fullscreenError: 'フルスクリーンモードへの移行に失敗しました: ',
        setAsOrigin: 'ここへ移動',
        setAsDestinationAndSearch: 'ここへの経路を検索',
        setAsDestination: '目的地に設定',
        setAsHome: 'ホームに設定',
        arrivedAt: '{location}に到着しました。おつかれさまでした。',
        homeSet: 'ホーム地点を設定しました。次回起動時にこの場所から開始します。',
        boost: 'ブースト',
        municipalityGuidance: '{municipality}を移動中です。',
        roadGuidance: '{road}を走行中です。',
        settings: '設定',
        voiceGuidance: '地名アナウンス',
        departingFrom: '{location}から 出発します。',
        voiceSelect: '声色',
        geocodeInterval: '地名確認の間隔 (m)',
        autoBoostSettings: '自動ブースト',
        autoBoostThresholdLabel: '自動ブースト勾配 (%)',
        boostOn: 'ブーストON',
        gradientLimiterLabel: '勾配リミッター (%)',
        speedLimiterLabel: '速度リミッター (km/h)',
        routeSettingsDisabled: 'ツアー中またはログ記録中は経路設定を変更できません。',
        searchForPlace: '場所を検索',
        svCoverage: 'SV道路表示',
        //headingUp: '進行方向を上に',
        satelliteView: '航空写真',
        tiltView: 'チルト表示',
    },
    en: {
        routeSettings: 'Route Settings',
        originPlaceholder: 'Origin: e.g., Tokyo Station',
        destinationPlaceholder: 'Destination: e.g., Shibuya Crossing',
        driving: 'Driving',
        bicycling_road: 'Bicycling (Road)',
        bicycling: 'Bicycling',
        walking: 'Walking',
        interpolationInterval: 'Interval (m):',
        searchRoute: 'Search Route',
        loadGpx: 'Load GPX',
        userContent: 'User Content',
        speed: 'Speed (km/h):',
        startTour: 'Start Tour',
        stopTour: 'Stop Tour',
        connectPower: 'Connect P.S.',
        connectHr: 'Connect H.R.',
        disconnect: 'Disconnect',
        startLog: 'Start Logging',
        stopLog: 'Stop Logging',
        distTraveled: 'Distance Traveled',
        totalDist: 'Total Distance',
        currentPos: 'Current Position',
        timeElapsed: 'Time Elapsed',
        actualSpeed: 'Actual Speed',
        timeRemaining: 'Time Remaining',
        elevation: 'Elevation',
        gradient: 'Gradient',
        power: 'Power',
        boost: 'boost',
        cadence: 'Cadence',
        heartRate: 'Heart Rate',
        calories: 'Calories',
        directionSettings: 'View Dir',
        left90: 'Left 90°',
        left45: 'Left 45°',
        front: 'Front',
        right45: 'Right 45°',
        right90: 'Right 90°',
        startPoint: 'Start Point',
        endPoint: 'End Point',
        currentLocation: 'Current Location',
        // messages
        noStreetView: 'Street View data could not be found for this route.',
        routeFound: 'Route found! You can start the tour.',
        elevationProcessed: 'Route elevation data has been processed.',
        elevationError: 'Failed to get or process elevation data.',
        originDestRequired: 'Please enter an origin and destination.',
        invalidInterval: 'Please enter a valid interpolation interval.',
        routeSearchFailed: 'Directions request failed due to: ',
        routeNotFound: 'Route not found. Please check the locations.',
        gpxNoTrackpoints: 'No trackpoints found in the GPX file.',
        gpxNoCoordinates: 'Could not extract valid coordinates from the GPX file.',
        gpxParseError: 'An error occurred while parsing the GPX file.',
        destinationReached: 'You have reached your destination.',
        noRouteForTour: 'Please search for a route or load a GPX file first.',
        invalidSpeed: 'Please enter a valid speed.',
        searchingDevice: 'Searching for device...',
        connectingDevice: 'Connecting to device...',
        gattConnected: 'Connected to GATT Server.',
        ftmsConnected: 'Connected to FTMS device.',
        btConnectionFailed: 'Bluetooth connection failed:',
        btConnectionError: 'Bluetooth connection error: ',
        deviceDisconnected: 'Disconnected from device.',
        searchingHr: 'Searching for heart rate monitor...',
        connectingHr: 'Connecting to heart rate monitor...',
        hrConnected: 'Connected to heart rate monitor.',
        hrConnectionFailed: 'Failed to connect to heart rate monitor:',
        hrConnectionError: 'Heart rate monitor connection error: ',
        hrDisconnected: 'Disconnected from heart rate monitor.',
        hrTimeout: 'Data reception from heart rate monitor timed out.',
        logStarted: 'Log recording started.',
        logStopped: 'Log recording stopped.',
        confirmSaveTcx: 'Do you want to save the recorded activity as a TCX file?',
        powerZeroStop: 'Tour stopped due to low speed.',
        powerDetectedStart: 'Power detected. Starting the tour.',
        jumpDisabledDuringTour: 'Cannot jump during an active tour.',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Jump Here',
        fullscreenError: 'Error attempting to enable full-screen mode: ',
        setAsOrigin: 'Set as Origin',
        setAsDestinationAndSearch: 'Route to here',
        setAsDestination: 'Set as Destination',
        setAsHome: 'Set as Home',
        arrivedAt: 'Arrived at {location}. Well done!',
        homeSet: 'Home location set. The app will start here next time.',
        boost: 'Boost',
        municipalityGuidance: 'Now passing through {municipality}.',
        roadGuidance: 'Now on {road}.',
        settings: 'Settings',
        voiceGuidance: 'Location Announcement',
        departingFrom: 'Departing from {location}.',
        voiceSelect: 'Voice',
        geocodeInterval: 'Location Check Interval (m)',
        autoBoostSettings: 'Auto Boost',
        autoBoostThresholdLabel: 'Auto Boost Gradient',
        boostOn: 'Boost ON',
        gradientLimiterLabel: 'Gradient Limiter (%)',
        speedLimiterLabel: 'Speed Limiter (km/h)',
        routeSettingsDisabled: 'Cannot change route settings during a tour or while logging.',
        searchForPlace: 'Search for a Place',
        svCoverage: 'SV Coverage',
        //headingUp: 'Heading Up',
        satelliteView: 'Satellite View',
        tiltView: 'Tilt View',
    }
};
let currentLang = 'ja';

/**
 * メッセージボックスにメッセージを表示します。
 * @param {string} message - 表示するメッセージ
 * @param {boolean} isError - エラーメッセージかどうか
 */
function showMessage(message, isError = true) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
    messageBox.style.backgroundColor = isError ? '#e74c3c' : '#27ae60';
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.opacity = '1';
    }, 10);
    setTimeout(() => {
        messageBox.style.opacity = '0';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 500);
    }, 3000);
}

/**
 * グラフの横軸に最適な目盛り間隔を計算します。
 * @param {number} totalDistance - 経路の総距離 (m)
 * @returns {number} - 目盛り間隔 (m)
 */
function getNiceTickInterval(totalDistance) {
    if (totalDistance <= 0) return 500; // デフォルト値

    const targetTicks = 16; // 目指す目盛りの数
    const rawInterval = totalDistance / targetTicks;
    const power = Math.pow(10, Math.floor(Math.log10(rawInterval)));
    const normalizedInterval = rawInterval / power;

    if (normalizedInterval < 1.5) {
        return Math.max(1 * power, 10);
    } else if (normalizedInterval < 3) {
        return Math.max(2 * power, 10);
    } else if (normalizedInterval < 7) {
        return Math.max(5 * power, 10);
    }
    return Math.max(10 * power, 10);
}

const elevationChartPadding = { top: 5, bottom: 20, left: 40, right: 5 };  //drawElevationChartとhandleChartClickで使用

/**
 * 経路全体の標高グラフを描画します。
 * @param {number} currentDistance - 現在の移動距離 (m)
 */
function drawElevationChart(currentDistance = 0) {
    // グラフ描画に必要なデータが揃っているか確認
    const container = document.getElementById('elevation-chart-container');
    container.style.display = 'block';

    const canvas = document.getElementById('elevation-chart');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 最初にキャンバスをクリア

    if (routeElevations.length < 2) {
        return; // 描画するデータがなければここで終了
    }

    // 高DPIディスプレイに対応
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // 標高データの範囲を計算
    const minElev = Math.min(...routeElevations);
    const maxElev = Math.max(...routeElevations);
    const elevRange = maxElev - minElev;

    const padding = elevationChartPadding; //{ top: 5, bottom: 20, left: 40, right: 5 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // 座標計算用のヘルパー関数
    const getX = (dist) => padding.left + (dist / totalDistance) * chartWidth;
    const getElevY = (elev) => padding.top + chartHeight - ((elev - minElev) / (elevRange || 1)) * chartHeight;

    // --- グラフの描画 ---

    // 2. 標高グラフ（エリア）
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(52, 152, 219, 0.3)');
    gradient.addColorStop(1, 'rgba(44, 62, 80, 0.1)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(getX(0), getElevY(routeElevations[0]));
    for (let i = 1; i < routeElevations.length; i++) {
        ctx.lineTo(getX(cumulativeDistances[i]), getElevY(routeElevations[i]));
    }
    ctx.lineTo(getX(totalDistance), height - padding.bottom);
    ctx.lineTo(getX(0), height - padding.bottom);
    ctx.closePath();
    ctx.fill();

    // 4. 標高グラフ（線）
    ctx.beginPath();
    ctx.moveTo(getX(0), getElevY(routeElevations[0]));
    for (let i = 1; i < routeElevations.length; i++) {
        ctx.lineTo(getX(cumulativeDistances[i]), getElevY(routeElevations[i]));
    }
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 5. 横軸の目盛りとラベルを描画
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(189, 195, 199, 0.2)'; // #bdc3c7 with alpha
    ctx.lineWidth = 1;
    ctx.font = '9px Inter';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#bdc3c7';

    const tickInterval = getNiceTickInterval(totalDistance);
    for (let dist = tickInterval; dist < totalDistance; dist += tickInterval) {
        const x = getX(dist);
        ctx.moveTo(x, height - padding.bottom);
        ctx.lineTo(x, height - padding.bottom + 4); // 4pxの短い線

        const distKm = (dist / 1000);
        const precision = Math.max(0, -Math.floor(Math.log10(tickInterval / 1000)));
        const label = distKm.toFixed(precision);
        ctx.fillText(label, x, height - padding.bottom + 15);
    }
    ctx.stroke();

    // 6. 軸ラベルの描画
    ctx.fillStyle = '#bdc3c7';
    ctx.font = '10px Inter';
    // 左側：標高
    ctx.textAlign = 'right';
    ctx.fillText(`${maxElev.toFixed(0)} m`, padding.left - 5, padding.top + 5);
    ctx.fillText(`${minElev.toFixed(0)} m`, padding.left - 5, height - padding.bottom);

    // 7. 現在地マーカー
    if (currentDistance > 0 && currentDistance < totalDistance) {
        const markerX = getX(currentDistance);
        const markerY = getElevY(routeElevations[currentPointIndex]);
        ctx.beginPath();
        ctx.moveTo(markerX, padding.top);
        ctx.lineTo(markerX, height - padding.bottom);
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(markerX, markerY, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#e74c3c';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}


/**
 * 標高データの急激な変化を平滑化します。
 * 一定間隔でサンプリングし、2点間の勾配がしきい値を超える場合、次の点の標高を現在の点の標高に合わせます。
 * @param {Array<Object>} pointsData - 'distance'と'elevation'プロパティを持つオブジェクトの配列
 * @param {number} [samplingInterval=50] - 標高をチェックする間隔 (m)
 * @param {number} [maxGradient=15] - 許容される最大の勾配 (%)
 * @returns {Array<Object>} - 補正された標高データを持つ新しい配列
 */
function smoothElevationsByGradient(pointsData, samplingInterval = 50, maxGradient = 20) {
    if (pointsData.length < 2) {
        return pointsData;
    }

    const correctedPoints = JSON.parse(JSON.stringify(pointsData)); // 元のデータを変更しないようにディープコピー

    for (let i = 0; i < correctedPoints.length - 1; i++) {
        const currentPoint = correctedPoints[i];
        const nextPoint = correctedPoints[i + 1];

        const distanceDiff = nextPoint.distance - currentPoint.distance;
        if (distanceDiff <= 0) continue; // 距離が増えていない場合はスキップ

        const elevationDiff = nextPoint.elevation - currentPoint.elevation;
        const gradient = (elevationDiff / distanceDiff) * 100;
        if (gradient > maxGradient) {
            // 勾配がしきい値を超えたら、次のポイントの標高を現在のポイントに合わせる
            correctedPoints[i + 1].elevation = currentPoint.elevation;
        }
        else if (i < (correctedPoints.length - 2)) {
            // 次と、次の次のポイントとの勾配が大きな下り勾配になるときも次のポイントの標高を現在のポイントに合わせる
            // →トンネル出口のスパイクをなくす為
            const nextPoint2 = correctedPoints[i + 2];
            const distanceDiff2 = nextPoint2.distance - nextPoint.distance;
            const elevationDiff2 = nextPoint2.elevation - nextPoint.elevation;
            const gradient2 = (elevationDiff2 / distanceDiff2) * 100;
            if (gradient2 < -maxGradient) {
                correctedPoints[i + 1].elevation = currentPoint.elevation;
            }
            else if (gradient > 10 && gradient2 < -10) {
                correctedPoints[i + 1].elevation = currentPoint.elevation;
            }
        }

    }
    return correctedPoints;
}

/**
 * 移動平均法を用いて標高データを平滑化します。
 * @param {Array<Object>} pointsData - 'elevation'プロパティを持つオブジェクトの配列
 * @param {number} windowSize - 平滑化のウィンドウサイズ（奇数を推奨）。大きいほど平滑化が強くなる。
 * @returns {Array<Object>} - 平滑化された標高データを持つ新しい配列
 */
function applyMovingAverage(pointsData, windowSize) {
    if (pointsData.length < windowSize || windowSize <= 1) {
        return pointsData;
    }

    const smoothedPoints = JSON.parse(JSON.stringify(pointsData));
    const halfWindow = Math.floor(windowSize / 2);
    const elevations = pointsData.map(p => p.elevation);

    for (let i = 0; i < pointsData.length; i++) {
        const start = Math.max(0, i - halfWindow);
        const end = Math.min(pointsData.length, i + halfWindow + 1);
        const windowSlice = elevations.slice(start, end);

        const sum = windowSlice.reduce((acc, val) => acc + val, 0);
        const average = sum / windowSlice.length;

        smoothedPoints[i].elevation = average;
    }

    return smoothedPoints;
}

//異常勾配の始点、終点を探し範囲で標高を補正
function correctAnomalyElevation(pointsData, maxGradient = 20) {
    if (pointsData.length < 3) {
        return pointsData;
    }

    const correctedPoints = JSON.parse(JSON.stringify(pointsData)); // 元のデータを変更しないようにディープコピー
    let startOfAnomaly = -1;
    const maxGradientAS = 3;
    let minGradientAS = maxGradientAS;
    let indexMinGradientAS = -1;
    for (let i = 0; i < correctedPoints.length - 2; i++) {
        const currentPoint = correctedPoints[i];
        const nextPoint = correctedPoints[i + 1];

        const distanceDiff = nextPoint.distance - currentPoint.distance;
        if (distanceDiff <= 0) continue; // 距離が増えていない場合はスキップ

        const elevationDiff = nextPoint.elevation - currentPoint.elevation;
        const gradient = (elevationDiff / distanceDiff) * 100;


        if (startOfAnomaly === -1) {
            if (gradient > maxGradient) {
                startOfAnomaly = i;
                console.log(`startOfAnomaly: ${startOfAnomaly} gradient: ${gradient.toFixed(2)} elvation: ${currentPoint.elevation.toFixed(1)}}`);
                minGradientAS = maxGradientAS;
                indexMinGradientAS = -1;
                continue;
            }
        }
        else {
            const startAnomalyDistance = correctedPoints[startOfAnomaly].distance; //異常勾配の始点からの距離
            if ((currentPoint.distance - startAnomalyDistance) > 3000) { // から4km以上離れたら
                console.log(`cancel correct anomaly elevation by long distance`);
                startOfAnomaly = -1; // 異常標高の終点の探索をあきらめる
            }
            else if (Math.abs(gradient) < maxGradient) { //現在の勾配は正常値なら
                //現在の地点と異常勾配発生前の地点を結び
                const startAnomalyElevation = correctedPoints[startOfAnomaly].elevation;
                let evelationDiffAS = currentPoint.elevation - startAnomalyElevation;
                let distanceDiffAS = currentPoint.distance - startAnomalyDistance;
                let gradientAS = (evelationDiffAS / distanceDiffAS) * 100;
                let doCorrect = false;
                if (Math.abs(gradientAS) < maxGradientAS) { //その勾配も正常（長い距離をとる場合もあるので厳しい判断で）なら
                    if (gradientAS < minGradientAS) {
                        minGradientAS = gradientAS;
                        indexMinGradientAS = i;
                    }
                    else {
                        doCorrect = true;
                    }
                }
                else {
                    doCorrect = (indexMinGradientAS !== -1);
                }
                if (doCorrect) {
                    const endPoint = correctedPoints[indexMinGradientAS];
                    evelationDiffAS = endPoint.elevation - startAnomalyElevation;
                    distanceDiffAS = endPoint.distance - startAnomalyDistance;
                    gradientAS = (evelationDiffAS / distanceDiffAS) * 100;
                    //現地点までの標高を異常勾配の発生前の標高に補正
                    console.log(`correct anomaly elevation to index: ${indexMinGradientAS} gradient: ${gradient.toFixed(2)} elvation: ${endPoint.elevation}`);
                    console.log(`gradientAS: ${gradientAS.toFixed(2)}`);
                    for (let j = startOfAnomaly + 1; j < indexMinGradientAS; j++) {
                        const distFormAS = correctedPoints[j].distance - startAnomalyDistance;
                        correctedPoints[j].elevation = startAnomalyElevation + (distFormAS * gradientAS / 100);
                    }
                    startOfAnomaly = -1;
                }
            }
        }
    }
    return correctedPoints;
}
/**
 * 2つの緯度/経度座標間の距離をメートル単位で計算します。
 * @param {google.maps.LatLng} p1 - 最初の座標
 * @param {google.maps.LatLng} p2 - 2番目の座標
 * @returns {number} - 2点間の距離（メートル）
 */
function getDistance(p1, p2) {
    const R = 6371e3;
    const φ1 = p1.lat() * Math.PI / 180;
    const φ2 = p2.lat() * Math.PI / 180;
    const Δφ = (p2.lat() - p1.lat()) * Math.PI / 180;
    const Δλ = (p2.lng() - p1.lng()) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

/**
 * 2つの緯度/経度座標間の距離をメートル単位で計算します。
 * @param {google.maps.LatLng} p1 - 最初の座標
 * @param {google.maps.LatLng} p2 - 2番目の座標
 * @returns {number} - 2点間の距離（メートル）
 */
function getDistanceP(p1lat, p1lng, p2lat, p2lng) {
    const R = 6371e3;
    const φ1 = p1lat * Math.PI / 180;
    const φ2 = p2lat * Math.PI / 180;
    const Δφ = (p2lat - p1lat) * Math.PI / 180;
    const Δλ = (p2lng - p1lng) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

/**
 * 2点間で補間された緯度/経度座標を計算します。
 * @param {google.maps.LatLng} from - 開始点
 * @param {google.maps.LatLng} to - 終了点
 * @param {number} fraction - 補間率 (0-1)
 * @returns {google.maps.LatLng} - 補間された座標
 */
function interpolate(from, to, fraction) {
    const lat = from.lat() + (to.lat() - from.lat()) * fraction;
    const lng = from.lng() + (to.lng() - from.lng()) * fraction;
    return new google.maps.LatLng(lat, lng);
}

/**
 * 2点間の進行方向（ヘディング）を度単位で計算します。
 * @param {google.maps.LatLng} from - 開始点
 * @param {google.maps.LatLng} to - 終了点
 * @returns {number} - 進行方向（度）
 */
function getHeading(from, to) {
    if (from.lat() === to.lat() && from.lng() === to.lng()) {
        return 0;
    }

    const lat1 = from.lat() * Math.PI / 180;
    const lon1 = from.lng() * Math.PI / 180;
    const lat2 = to.lat() * Math.PI / 180;
    const lon2 = to.lng() * Math.PI / 180;

    const dLon = lon2 - lon1;
    const y = Math.sin(dLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    let heading = Math.atan2(y, x) * 180 / Math.PI;

    heading = (heading + 360) % 360;
    return heading;
}

/**
 * 秒数を hh:mm:ss 形式にフォーマットします。
 * @param {number} seconds - 秒数
 * @returns {string} - フォーマットされた時間文字列
 */
function formatTime(seconds) {
    const h = Math.floor(Math.abs(seconds) / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}

/**
 * UI上の情報を更新します。
 */
function updateInfoDisplay() {
    const totalDistanceKm = (totalDistance / 1000).toFixed(2);
    const currentPositionKm = (currentPositionDistance / 1000).toFixed(2);
    const distanceTraveledKm = (distanceTraveled / 1000).toFixed(2);
    const timeElapsed = totalTimeElapsed + (tourStartTime > 0 ? (Date.now() - tourStartTime) / 1000 : 0);

    const remainingDistance = Math.max(0, totalDistance - currentPositionDistance);
    const speedKmH = actualSpeedKmh;
    let timeRemaining = 0;
    if (speedKmH > 0) {
        timeRemaining = (remainingDistance / 1000) / speedKmH * 3600;
    }

    document.getElementById('current-pos').textContent = `${currentPositionKm} km`;
    document.getElementById('total-dist').textContent = `${totalDistanceKm} km`;
    document.getElementById('dist-traveled').textContent = `${distanceTraveledKm} km`;
    document.getElementById('time-elapsed').textContent = formatTime(timeElapsed);
    document.getElementById('time-remaining').textContent = formatTime(timeRemaining);

    const speedValue = document.getElementById('speed-value');
    const speedValueParts = `${actualSpeedKmh.toFixed(1)}`.split('.');
    speedValue.innerHTML = `${speedValueParts[0]}<span class="decimal-small">.${speedValueParts[1]}</span>`;

    if (routeElevations.length > 0 && currentPointIndex < routeElevations.length && cumulativeDistances.length > currentPointIndex) {
        const currentElevation = routeElevations[currentPointIndex];
        document.getElementById('elevation').textContent = `${currentElevation.toFixed(1)} m`;

    }
    document.getElementById('gradient').textContent = `${currentGradient.toFixed(1)} %`;

    // 勾配の値に応じて色を変更
    document.getElementById('calories-display').textContent = `${totalCalories.toFixed(0)} kcal`;
    const gradientValueEl = document.getElementById('gradient');
    if (currentGradient >= 10) {
        gradientValueEl.style.color = '#e74c3c'; // 赤
    } else if (currentGradient >= 5) {
        gradientValueEl.style.color = '#f1c40f'; // 黄
    } else {
        gradientValueEl.style.color = ''; // デフォルトに戻す
    }

    // グラフを更新
    drawElevationChart(currentPositionDistance);
}
//!!グローバル変数・定数
let map, panorama;
let directionsService, directionsRenderer, elevationService, streetViewService, streetViewCoverageLayer;
let routePoints = [];
let routeElevations = [];
let gpxRoutePolyline = null;
let cumulativeDistances = [];
let sampledPointsData = [];
let physicsIntervalId = null;
let lastPhysicsUpdateTime = 0;
let distanceSinceLastSvUpdate = 0;
const STREETVIEW_UPDATE_DISTANCE = 20; // 20mごとにストリートビューを更新
let deltaTimeSinceLastSvUpdate = 0;
const STREETVIEW_UPDATE_INTERVAL = 2 // 2secごとにストリートビューを更新
const PHYSICS_INTERVAL_MS = 500; // 500ms (2Hz)
let currentLocationMarker;
let isTourRunning = false;
let currentPointIndex = 0;
let startMarker, endMarker;
let totalDistance = 0;
let wakeLockSentinel = null;
let currentPositionDistance = 0; // 経路上の現在位置を示す距離
let distanceTraveled = 0; // 実際に走行した総距離
let tourStartTime = 0;
let directionOffset = 0;
let totalTimeElapsed = 0;
let currentGradient = 0;
let isLogging = false;
let logData = [];
let logStartDistance = 0; // ログ開始時の走行距離
let logStartTime = 0; // ログ開始時刻
let currentPower = 0;
let showUserContent = true; // ユーザー投稿データを表示するかのフラグ
let currentCadence = 0;
let currentHeartRate = 0;
let totalCalories = 0;
let isBoostActive = false;
let isVectorMap = false; // ベクターマップが有効かどうかのフラグ
let isTiltView = false; // チルト表示が有効かどうかのフラグ
const BOOST_FACTOR = 1.5;
let isFallbackModeActive = false; // 代替表示モードが有効かどうかのフラグ
let savedZoomLevel; // 代替表示モードでズーム倍率をセットする前に元の値を保持
let autoBoostThreshold = 10; // オートブーストのしきい値（%）
let autoTravelSpeed = 0; // 自動ツアー速度 (km/h)
let gradientLimiter = 0; // 勾配リミッターの値 (%) 0は無効
let speedLimiter = 0; // 速度リミッターの値 (km/h) 0は無効
let actualSpeedKmh = 0; // 実際の移動速度 (km/h)

let isChartPreviewing = false; // 標高グラフのプレビュー中かどうかのフラグ
let previewStartIndex = -1; // プレビュー開始前のインデックス

let placesService, infoWindow, selectedPlace = null;
let geocoder;
let originLatLng = null, destinationLatLng = null;

let infoWindowTemplate = null;
// 場所検索モーダル用
// 出発地・目的地のオートコンプリート用
let currentRoadName = ''; // 現在の道路名を保持
let distanceOnCurrentRoad = 0; // 現在の道路を走行した距離
const ROAD_ANNOUNCE_INTERVAL = 1000; //PIN 道路名を再アナウンスする間隔 (m)
let originAutocomplete, destinationAutocomplete;

let currentMunicipality = ''; // 現在の市区町村名を保持
let distanceSinceLastGeocode = 0; // 最後のジオコードからの距離
let distanceWithoutStreetView = 0; // ストリートビューが見つからない連続距離
let geocodeIntervalDistance = 1000; // 住所確認の間隔 (m)
const PHYSICS_CONSTANTS = {
    RIDER_MASS: 70, // kg
    BIKE_MASS: 10, // kg
    get TOTAL_MASS() { return this.RIDER_MASS + this.BIKE_MASS; },
    CRR: 0.005, // 転がり抵抗係数 (asphalt)
    CDA: 0.3,   // 空気抵抗係数 * 前面投影面積 (m^2)
    RHO: 1.225, // 空気密度 (kg/m^3)
    G: 9.81,    // 重力加速度 (m/s^2)
    DRIVETRAIN_EFFICIENCY: 0.95, // 駆動系の効率
    MIN_SPEED_FOR_FORCE_CALC_MPS: 1.0, // 推進力計算時の最低速度 (m/s)
    STOPPING_SPEED_KMH: 3 // ツアーが自動停止する速度 (km/h)
};

let bleDevice = null;
let ftmsCharacteristic = null;
let hrDevice = null;
let hrCharacteristic = null;
let hrWebSocket = null;
let hrWebSocketTimeoutId = null;
const HR_WEBSOCKET_TIMEOUT = 180000; // 3分で心拍数を受信できてないと判断

let lastPosition;
let lastElevation;

const FTMS_SERVICE_UUID = 'fitness_machine';
const INDOOR_BIKE_DATA_UUID = 'indoor_bike_data';

const HR_SERVICE_UUID = 'heart_rate';
const HR_MEASUREMENT_UUID = 'heart_rate_measurement';

const routeSettingsButton = document.getElementById('route-settings-button');
const routeSettingsDropdown = document.getElementById('route-settings-dropdown');
const routeButton = document.getElementById('route-button');
const loadGpxButton = document.getElementById('load-gpx-button');
const gpxFileInput = document.getElementById('gpx-file-input');
const toggleTourButton = document.getElementById('toggle-tour-button');
const bleConnectButton = document.getElementById('ble-connect-button');
const hrConnectButton = document.getElementById('hr-connect-button');
const logToggleButton = document.getElementById('log-toggle-button');
const boostButton = document.getElementById('boost-button');
const settingsContainer = document.getElementById('settings-container');
const settingsButton = document.getElementById('settings-button');
const settingsDropdown = document.getElementById('settings-dropdown');
const voiceGuidanceToggle = document.getElementById('voice-guidance-toggle');
const voiceSelect = document.getElementById('voice-select');
const geocodeIntervalInput = document.getElementById('geocode-interval-input');
const autoBoostThresholdInput = document.getElementById('auto-boost-threshold');
const gradientLimiterInput = document.getElementById('gradient-limiter-input');
const speedLimiterInput = document.getElementById('speed-limiter-input');
const hideToolbarButton = document.getElementById('hide-toolbar-button');
const originInput = document.getElementById('origin-input');
const splitContainer = document.getElementById('split-container');
const destinationInput = document.getElementById('destination-input');
let mapSearchInput = null;

// 新しいオーバーレイのボタンのみを取得
const directionButtons = document.querySelectorAll('#direction-control-overlay button');
const speedInput = document.getElementById('speed-input');
let travelModeButtons;
let fullscreenButton; let currentTravelMode = 'BICYCLING';
let ratioButtons;
const controlsArea = document.querySelector('.controls-area');
const mainContainer = document.getElementById('main-container');

const TILT_ANGLE = 67.5;    //最大値。ズームアウトすると小さくなる
const interpolationInterval = 20;   //補間間隔固定化
const FALLBACK_THRESHOLD = 50;   //代替表示モードに移行するストリートビュー未取得距離

/**
 * ストリートビューとマップの分割比率を設定します。
 * @param {string} ratio - "sv:map" 形式の比率文字列 (例: "7:3")
 */
function setSplitRatio(ratio) {
    const [svRatio, mapRatio] = ratio.split(':').map(Number);
    const totalRatio = svRatio + mapRatio;

    const streetViewDiv = document.getElementById('street-view');
    const mapDiv = document.getElementById('map');

    if (svRatio === 0) {
        streetViewDiv.style.display = 'none';
        mapDiv.style.display = 'block';
        mapDiv.style.flexBasis = '100%';
    } else if (mapRatio === 0) {
        streetViewDiv.style.display = 'block';
        streetViewDiv.style.flexBasis = '100%';
        mapDiv.style.display = 'none';
    } else {
        streetViewDiv.style.display = 'block';
        mapDiv.style.display = 'block';

        const isMobile = window.innerWidth <= 767;
        const containerSize = isMobile ? splitContainer.offsetHeight : splitContainer.offsetWidth;
        streetViewDiv.style.flexBasis = `${containerSize * (svRatio / totalRatio)}px`;
        mapDiv.style.flexBasis = `${containerSize * (mapRatio / totalRatio)}px`;
    }

    // ボタンのアクティブ状態を更新
    ratioButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.ratio === ratio);
    });

    google.maps.event.trigger(map, 'resize');
}

/**
 * フルスクリーンモードを切り替えます。
 */
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            showMessage(`${uiStrings[currentLang].fullscreenError}${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

/**
 * ストリートビュー要素のフルスクリーンモードを切り替えます。
 */
function toggleStreetViewFullscreen() {
    const streetViewContainer = document.getElementById('street-view');
    if (!document.fullscreenElement) {
        streetViewContainer.requestFullscreen().catch(err => {
            showMessage(`${uiStrings[currentLang].fullscreenError}${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
/**
 * マップ要素のフルスクリーンモードを切り替えます。
 */
function toggleMapFullscreen() {
    const mapContainer = document.getElementById('map');
    if (!document.fullscreenElement) {
        mapContainer.requestFullscreen().catch(err => {
            showMessage(`${uiStrings[currentLang].fullscreenError}${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
/**
 * フルスクリーンボタンのテキストを現在の状態に合わせて更新します。
 */
function updateFullscreenButtonState() {
    if (!fullscreenButton) return;
    const iconFullscreen = fullscreenButton.querySelector('.icon-fullscreen');
    const iconExitFullscreen = fullscreenButton.querySelector('.icon-exit-fullscreen');

    if (document.fullscreenElement) {
        iconFullscreen.style.display = 'none';
        iconExitFullscreen.style.display = 'block';
        fullscreenButton.title = uiStrings[currentLang].exitFullscreen;
    } else {
        iconFullscreen.style.display = 'block';
        iconExitFullscreen.style.display = 'none';
        fullscreenButton.title = uiStrings[currentLang].fullscreen;
    }
}

// --- 音声合成関連 ---
let voices = [];
let isVoiceGuidanceEnabled = true;
let vvoxEngine; // TTSエンジンインスタンスを保持する変数

function populateVoiceList() {
    if (!vvoxEngine || !vvoxEngine.isAvailable) {
        if (typeof speechSynthesis === 'undefined') { return; }
        voices = speechSynthesis.getVoices().filter(voice => voice.lang.startsWith(currentLang));
        voiceSelect.innerHTML = '';
        if (voices.length > 0) {
            voices.forEach(voice => {
                const option = document.createElement('option');
                option.textContent = `${voice.name} (${voice.lang})`;
                option.setAttribute('data-name', voice.name);
                voiceSelect.appendChild(option);
            });
            voiceSelect.disabled = false;
            // 保存された音声を選択 (言語が変わっても対応できるように)
            const savedVoiceName = localStorage.getItem('selectedVoiceName');
            if (savedVoiceName) {
                const savedOption = Array.from(voiceSelect.options).find(opt => opt.getAttribute('data-name') === savedVoiceName);
                if (savedOption) savedOption.selected = true;
            }
        } else {
            voiceSelect.disabled = true;
        }
    }
}

/**
 * 指定されたテキストを音声で読み上げます。
 * @param {string} text - 読み上げるテキスト
 * @param {string} lang - 言語コード (e.g., 'ja-JP')
 */
function speak(text, lang) {
    // VOICEVOXが利用可能で、話者が選択されている場合はそちらを優先
    if (vvoxEngine && vvoxEngine.isAvailable && vvoxEngine.speakerId !== null) {
        if (isVoiceGuidanceEnabled) {
            vvoxEngine.speak(text);
        }
    } else if ('speechSynthesis' in window && isVoiceGuidanceEnabled) {
        // 既存の発言があればキャンセル
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 1.1; // 少し早口に
        utterance.pitch = 1.0;

        const selectedVoiceName = voiceSelect.selectedOptions[0]?.getAttribute('data-name');
        if (selectedVoiceName) {
            const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
            if (selectedVoice) utterance.voice = selectedVoice;
        }

        window.speechSynthesis.speak(utterance);
    } else {
        console.warn('このブラウザは音声合成をサポートしていません。');
    }
}
/**
 * UIの言語を設定します。
 * @param {string} lang - 言語コード ('ja' or 'en')
 */
function setLanguage(lang) {
    if (!uiStrings[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    // data-i18n属性を持つ静的なテキストを更新
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (uiStrings[lang][key]) {
            el.textContent = uiStrings[lang][key];
        }
    });

    // data-i18n-placeholder属性を持つプレースホルダーを更新
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (uiStrings[lang][key]) {
            el.placeholder = uiStrings[lang][key];
        }
    });

    // 検索ボックスのプレースホルダーを更新
    const searchInput = document.getElementById('pac-input');
    if (searchInput) {
        searchInput.placeholder = uiStrings[lang].searchForPlace || 'Search for a Place';
    }

    // 状態によってテキストが変わるボタンを更新
    toggleTourButton.textContent = isTourRunning ? uiStrings[lang].stopTour : uiStrings[lang].startTour;
    bleConnectButton.textContent = (bleDevice && bleDevice.gatt.connected) ? uiStrings[lang].disconnect : uiStrings[lang].connectPower;
    hrConnectButton.textContent = (hrDevice && hrDevice.gatt.connected) ? uiStrings[lang].disconnect : uiStrings[lang].connectHr;
    logToggleButton.textContent = isLogging ? uiStrings[lang].stopLog : uiStrings[lang].startLog;
    updateFullscreenButtonState();

    // マーカーのタイトルを更新
    if (startMarker) startMarker.setTitle(uiStrings[lang].startPoint);
    if (endMarker) endMarker.setTitle(uiStrings[lang].endPoint);
    if (currentLocationMarker) currentLocationMarker.setTitle(uiStrings[lang].currentLocation);

    // 声色の選択肢を更新
    populateVoiceList();

    // 言語スイッチャーボタンのアクティブ状態を更新
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}

// ドロップダウンの表示/非表示を切り替える
routeSettingsButton.addEventListener('click', (event) => {
    // ツアー実行中は経路設定を変更できない
    if (isTourRunning) {
        showMessage(uiStrings[currentLang].routeSettingsDisabled, true);
        return;
    }
    event.stopPropagation();
    routeSettingsDropdown.classList.toggle('show');

    // ログ記録中は出発地を編集不可にする
    // メニューが開かれるたびに状態をチェックして設定する
    originInput.disabled = isLogging;
});

// ドロップダウン外をクリックしたら閉じる
window.addEventListener('click', (event) => {
    if (routeSettingsDropdown.classList.contains('show') && !routeSettingsDropdown.contains(event.target) && !routeSettingsButton.contains(event.target)) {
        routeSettingsDropdown.classList.remove('show');
    }
    if (settingsDropdown.classList.contains('show') && !settingsContainer.contains(event.target)) {
        settingsDropdown.classList.remove('show');
    }
});

/**
 * 巡回モードを設定し、UIを更新します。
 * @param {string} mode - ツアーモード ('DRIVING', 'BICYCLING', 'WALKING')
 */
function setTravelMode(mode) {
    localStorage.setItem('streetMoViewTravelMode', mode); //選択されたモードを保存
    currentTravelMode = mode;
    travelModeButtons.forEach(btn => {
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

directionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        directionOffset = parseInt(btn.dataset.angle, 10);

        directionButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (!isTourRunning && routePoints.length > 0) {
            updateStreetView();
        }
    });
});

hideToolbarButton.addEventListener('click', () => {
    hideToolbar();
});

document.getElementById('street-view').addEventListener('click', () => showToolbar());
document.getElementById('map').addEventListener('click', () => showToolbar());

let toolBarHidden = false;

function hideToolbar() {
    controlsArea.classList.add('hidden');
    mainContainer.classList.add('toolbar-hidden');
    toolBarHidden = true;
    autoHideToolbarTimer = AUTO_HIDE_TOOLBAR_SEC;
}
function showToolbar() {
    controlsArea.classList.remove('hidden');
    mainContainer.classList.remove('toolbar-hidden');
    toolBarHidden = false;
    autoHideToolbarTimer = AUTO_HIDE_TOOLBAR_SEC;
}

// 手動ブーストボタンのクリックイベント
boostButton.addEventListener('click', () => {
    if (autoBoostThreshold > 0 || !bleDevice || !bleDevice.gatt.connected) {
        return; //オートブーストの設定がある場合やパワーソースに接続してない時は手動操作できない
    }
    isBoostActive = !isBoostActive;
    boostButton.classList.toggle('active', isBoostActive);
    boostButton.title = isBoostActive ? uiStrings[currentLang].boostOn : uiStrings[currentLang].boost;
});

// --- 設定メニュー関連のイベントリスナー ---
settingsButton.addEventListener('click', (event) => {
    event.stopPropagation();
    settingsDropdown.classList.toggle('show');
});

voiceGuidanceToggle.addEventListener('change', () => {
    isVoiceGuidanceEnabled = voiceGuidanceToggle.checked;
    localStorage.setItem('isVoiceGuidanceEnabled', isVoiceGuidanceEnabled);
});

voiceSelect.addEventListener('change', () => {
    if (vvoxEngine && vvoxEngine.isAvailable) {
        const selectedSpeakerId = voiceSelect.value;
        vvoxEngine.setSpeakerId(selectedSpeakerId);
        localStorage.setItem('vvoxSpeakerId', selectedSpeakerId);
    } else {
        const selectedVoiceName = voiceSelect.selectedOptions[0]?.getAttribute('data-name');
        if (selectedVoiceName) localStorage.setItem('selectedVoiceName', selectedVoiceName);
    }
});

geocodeIntervalInput.addEventListener('input', () => {
    const interval = parseInt(geocodeIntervalInput.value, 10);
    if (!isNaN(interval) && interval >= 100) {
        geocodeIntervalDistance = interval;
        localStorage.setItem('geocodeIntervalDistance', geocodeIntervalDistance);
    }
});

autoBoostThresholdInput.addEventListener('input', () => {
    const threshold = parseInt(autoBoostThresholdInput.value, 10);
    if (!isNaN(threshold)) {
        autoBoostThreshold = threshold;
        localStorage.setItem('autoBoostThreshold', autoBoostThreshold);
    }
});

gradientLimiterInput.addEventListener('input', () => {
    const limiter = parseInt(gradientLimiterInput.value, 10);
    // isNaN(limiter) は空文字の場合にtrueになるので、空文字を許容する
    if (!isNaN(limiter) && limiter >= 0) {
        gradientLimiter = limiter;
        localStorage.setItem('gradientLimiter', gradientLimiter);
    }
});

speedLimiterInput.addEventListener('input', () => {
    const limiter = parseInt(speedLimiterInput.value, 10);
    // isNaN(limiter) は空文字の場合にtrueになるので、空文字を許容する
    if (!isNaN(limiter) && limiter >= 0) {
        speedLimiter = limiter;
        localStorage.setItem('speedLimiter', speedLimiter);
    }
});

/**
 * マップ上のすべてのマーカーをクリアします。
 */
function clearMarkers() {
    if (startMarker) startMarker.setMap(null);
    if (endMarker) endMarker.setMap(null);
    if (currentLocationMarker) currentLocationMarker.setMap(null);
    startMarker = null;
    endMarker = null;
    currentLocationMarker = null;
}

/**
 * ツアー状態を初期化します。
 */
function resetTourState() {
    closeChartPopup();
    stopTour();
    clearMarkers();
    directionsRenderer.setDirections({ routes: [] });
    if (gpxRoutePolyline) {
        gpxRoutePolyline.setMap(null);
        gpxRoutePolyline = null;
    }
    routePoints = [];
    routeElevations = [];
    totalDistance = 0;
    currentPositionDistance = 0;
    if (!isLogging) {
        distanceTraveled = 0; // 走行距離もリセット
        totalCalories = 0;
    }
    currentPointIndex = 0;

    document.getElementById('elevation').textContent = `N/A`;
    document.getElementById('gradient').textContent = `N/A`;
    updateInfoDisplay();
    toggleTourButton.disabled = true;

    // グラフをクリアする
    drawElevationChart();
}

/**
 * //!!経路データを処理し、マップとストリートビューを初期化します。
 * @param {google.maps.LatLng[]} path - 経路の座標の配列
 * @param {Array<{location: google.maps.LatLng, elevation: number}>} [gpxElevationData=null] - GPXから読み込んだ標高データ（オプション）
 */
async function processRoute(path, gpxElevationAvailable = false) {
    routePoints = path;
    if (routePoints.length === 0) {
        showMessage(uiStrings[currentLang].noStreetView);
        return;
    }

    const firstPoint = routePoints[0];
    const lastPoint = routePoints[routePoints.length - 1];

    // 最初に全ポイントの累積距離を計算
    cumulativeDistances = [0];
    for (let i = 1; i < path.length; i++) {
        cumulativeDistances.push(cumulativeDistances[i - 1] + getDistance(path[i - 1], path[i]));
    }
    totalDistance = cumulativeDistances[cumulativeDistances.length - 1];

    try {
        // GPXから標高データが渡された場合、それを利用する
        if (gpxElevationAvailable) {
            console.log("Using elevation data from GPX file.");
        } else {
            // 1. 経路長に応じてサンプリング距離を動的に決定する
            // const minSamplingDistance = 25;  // 最小サンプリング距離 (m)
            // const maxSamplingDistance = 150; // 最大サンプリング距離 (m)
            // let samplingDistance = (totalDistance >= 1000) ? (totalDistance * 0.025) : minSamplingDistance;
            // samplingDistance = Math.min(samplingDistance, maxSamplingDistance);

            const samplingDistance = interpolationInterval * 10;

            sampledPointsData = [{ point: path[0], distance: 0 }];
            let distanceSinceLastSample = 0;
            for (let i = 1; i < path.length; i++) {
                const dist = cumulativeDistances[i] - cumulativeDistances[i - 1];
                distanceSinceLastSample += dist;
                if (distanceSinceLastSample >= samplingDistance) {
                    sampledPointsData.push({ point: path[i], distance: cumulativeDistances[i] });
                    distanceSinceLastSample = 0;
                }
            }
            // 最後のポイントがサンプリングされていない場合、追加する
            // 最後のポイントへの残り間隔がサンプリング間隔の半分より短いときは追加でなく書き換え
            const lastSampledDistance = sampledPointsData[sampledPointsData.length - 1].distance;
            if (lastSampledDistance < totalDistance) {
                if ((totalDistance - lastSampledDistance) < (samplingDistance / 2)) {
                    sampledPointsData[sampledPointsData.length - 1].point = path[path.length - 1];
                    sampledPointsData[sampledPointsData.length - 1].distance = totalDistance;
                }
                else {
                    sampledPointsData.push({ point: path[path.length - 1], distance: totalDistance });
                }
            }

            // 2. サンプリングした点の標高を取得
            const sampledPoints = sampledPointsData.map(d => d.point);
            const sampleLimit = 512; // APIの上限
            let allElevationResults = [];

            for (let i = 0; i < sampledPoints.length; i += sampleLimit) {
                const chunk = sampledPoints.slice(i, i + sampleLimit);
                const { results: chunkResults } = await elevationService.getElevationForLocations({
                    locations: chunk,
                });
                if (!chunkResults || chunkResults.length !== chunk.length) {
                    const errorMessage = chunkResults ? `Expected ${chunk.length} results but got ${chunkResults.length}.` : 'No results from API.';
                    throw new Error(`Elevation fetch error in chunk [${i}-${i + chunk.length - 1}]: ${errorMessage}`);
                }
                allElevationResults = allElevationResults.concat(chunkResults);
            }

            if (allElevationResults.length !== sampledPoints.length) {
                throw new Error('Failed to get elevation for all sampled points.');
            }
            sampledPointsData.forEach((data, i) => {
                data.elevation = allElevationResults[i].elevation;
            });

            // 移動平均法による一般的なスムージングを適用
            // const smoothingWindowSize = 5; // スムージング強度（奇数を推奨）
            // const trimRatio = 2; // 上下から除外する割合（例: 0.2 = 上下20%ずつ除外）
            // sampledPointsData = applyMovingAverage(sampledPointsData, smoothingWindowSize, trimRatio);

            if (currentTravelMode !== 'WALKING') {
                // 徒歩は以外では勾配によるフィルタリング
                console.log(`Applying elevation smoothing`);
                sampledPointsData = correctAnomalyElevation(sampledPointsData, 25);
            }
            // 3. 元の経路の各点の標高を計算する
            routeElevations = new Array(path.length);

            // サンプリングされた点が2つ未満の場合（経路が非常に短い場合など）、
            // 全ポイントを最初の点の標高にするか、0で埋める
            if (sampledPointsData.length < 2) {
                const singleElevation = sampledPointsData.length === 1 ? sampledPointsData[0].elevation : 0;
                routeElevations.fill(singleElevation);
            } else {
                // 線形補間で各点の標高を計算
                let currentSegmentIndex = 0;
                for (let i = 0; i < path.length; i++) {
                    const pointDistance = cumulativeDistances[i];
                    // 現在の点がどの補間セグメントに属するかを見つける
                    while (currentSegmentIndex < sampledPointsData.length - 2 && pointDistance > sampledPointsData[currentSegmentIndex + 1].distance) {
                        currentSegmentIndex++;
                    }
                    const startSample = sampledPointsData[currentSegmentIndex];
                    const endSample = sampledPointsData[currentSegmentIndex + 1];
                    const segmentDistance = endSample.distance - startSample.distance;
                    const distanceIntoSegment = pointDistance - startSample.distance;
                    const fraction = (segmentDistance > 0) ? distanceIntoSegment / segmentDistance : 0;
                    const interpolatedElevation = startSample.elevation + (endSample.elevation - startSample.elevation) * Math.max(0, Math.min(1, fraction));
                    routeElevations[i] = interpolatedElevation;
                }
            }

        }



        const halfWindow = 10;

        for (let i = 0; i < routeElevations.length; i++) {
            const start = Math.max(0, i - halfWindow);
            const end = Math.min(routeElevations.length, i + halfWindow + 1);
            const windowSlice = routeElevations.slice(start, end);

            const sum = windowSlice.reduce((acc, val) => acc + val, 0);
            const average = sum / windowSlice.length;

            routeElevations[i] = average;
        }
        console.log("applied Moving Average");

        showMessage(uiStrings[currentLang].elevationProcessed, false);
    } catch (error) {
        showMessage(uiStrings[currentLang].elevationError, true);
        console.error("Elevation processing error:", error);
        routeElevations = new Array(routePoints.length).fill(0);
    }

    startMarker = new google.maps.Marker({
        map: map,
        position: firstPoint,
        title: uiStrings[currentLang].startPoint,
        icon: {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW, // 三角形
            scale: 7,
            fillColor: '#2ecc71', // 緑色
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#ffffff', // 白い縁取り
            rotation: 90 // 上向きにする
        },
        zIndex: 1000
    });
    endMarker = new google.maps.Marker({
        map: map,
        position: lastPoint,
        title: uiStrings[currentLang].endPoint,
        icon: {
            path: 'M -5,-5 5,-5 5,5 -5,5 Z', // 四角形
            scale: 1.5,
            fillColor: '#e74c3c', // 赤色
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#ffffff' // 白い縁取り
        },
        zIndex: 1000
    });
    currentLocationMarker = new google.maps.Marker({
        map: map,
        title: uiStrings[currentLang].currentLocation,
        // アイコンとしてSVG画像を直接指定する (データURI形式)
        icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 384 512">
                    <path fill="#2ecc71" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 0 1-35.464 0z"/>
                    <circle cx="192" cy="192" r="64" fill="white"/>
                </svg>
            `)}`,
            scaledSize: new google.maps.Size(36, 48), // 表示サイズ
            anchor: new google.maps.Point(18, 48)     // ピンの先端の位置
        },
        position: firstPoint,
        zIndex: 9999,
    });

    if (panorama) {
        panorama.setPosition(firstPoint);
        map.panTo(firstPoint);

        try {
            if (routePoints.length > 1) {
                const heading = getHeading(routePoints[0], routePoints[1]);
                if (!isNaN(heading)) {
                    panorama.setPov({ heading: (heading + directionOffset + 360) % 360, pitch: 0 });
                }
            }
        } catch (e) {
            console.error("Error setting initial POV:", e);
        }
    }

    showMessage(uiStrings[currentLang].routeFound, false);
    // 経路の開始地点を出発地として設定する
    setOriginToGeocodedLocation(firstPoint);

    currentGradient = calculateCurrentGradient();
    updateInfoDisplay();
    toggleTourButton.disabled = false;

    document.getElementById('elevation-chart').style.cursor = 'pointer';
    // 初期グラフを描画 (現在地は0)
    drawElevationChart(0);
}

/**
 * //!!ユーザー入力に基づいて経路を計算し表示します。
 */
async function calculateAndDisplayRoute() {
    resetTourState();

    const originValue = originInput.value;
    const destinationValue = destinationInput.value;

    if (!originValue || !destinationValue) {
        showMessage(uiStrings[currentLang].originDestRequired);
        return;
    }
    if (isNaN(interpolationInterval) || interpolationInterval <= 0) {
        showMessage(uiStrings[currentLang].invalidInterval);
        return;
    }

    const apiTravelMode = google.maps.TravelMode[currentTravelMode];

    const request = {
        origin: originLatLng || originValue,
        destination: destinationLatLng || destinationValue,
        travelMode: apiTravelMode
    };

    //!! 「自転車(車道)」モードの場合、高速道路と有料道路を避ける
    // if (currentTravelMode === 'BICYCLING_ROAD') {
    //     request.avoidHighways = true;
    //     request.avoidTolls = true;
    // }

    try {
        const routeResponse = await directionsService.route(request);
        if (routeResponse.status === 'OK') {
            // 経路の色を赤に変更 (既に適用済みですが、確認のため記載)
            directionsRenderer.setOptions({
                polylineOptions: { strokeColor: '#e74c3c', strokeWeight: 5, strokeOpacity: 0.8 }
            });
            // overview_pathの代わりに、より詳細なstepsのpathを連結して使用する
            const detailedPath = routeResponse.routes[0].legs.flatMap(leg => leg.steps.flatMap(step => step.path));

            if (detailedPath.length < 2) {
                showMessage(uiStrings[currentLang].routeNotFound);
                return;
            }
            //const routeDistance = routeResponse.routes[0].legs[0].distance.value;

            const interpolatedPath = [];
            routeElevations = [];

            const API_LIMIT = 512;
            let cumulativeDistance = 0;
            let startChunk = 0;
            let previousPath = detailedPath[0];
            for (let i = 1; i < detailedPath.length; i++) {
                const chunkLength = i - startChunk + 1;//chunkLength++;
                cumulativeDistance += google.maps.geometry.spherical.computeDistanceBetween(previousPath, detailedPath[i]);
                previousPath = detailedPath[i];
                let sliceLength = 0;
                let sampleLength = 0;
                const isLastChunk = (i === detailedPath.length - 1);
                if (cumulativeDistance > API_LIMIT * interpolationInterval) {
                    sliceLength = chunkLength; //i - startChunk;
                    sampleLength = API_LIMIT;
                }
                else if (chunkLength === API_LIMIT) { // detailedPathの解像度がinterpolationIntervalより小さい傾向
                    sliceLength = API_LIMIT;
                    sampleLength = API_LIMIT;
                } else if (isLastChunk) { // 最後のチャンク
                    sliceLength = chunkLength;  //i - startChunk;
                    sampleLength = Math.max(sliceLength, Math.trunc(cumulativeDistance / interpolationInterval));
                }
                if (sliceLength > 0) {
                    const chunkPath = detailedPath.slice(startChunk, startChunk + sliceLength);

                    try {
                        const elevationResponse = await elevationService.getElevationAlongPath({
                            path: chunkPath,
                            samples: sampleLength
                        });
                        //最後のチャンクでなけれ次のチャンクの開始点が追加されるのでばこのチャンク終了点は追加しない
                        const pushLength = elevationResponse.results.length - (isLastChunk ? 0 : 1);

                        for (let j = 0; j < pushLength; j++) {
                            interpolatedPath.push(elevationResponse.results[j].location);
                            routeElevations.push(elevationResponse.results[j].elevation);
                        }
                        startChunk = i;
                        cumulativeDistance = 0;
                    }
                    catch (e) {
                        console.error(e);
                        showMessage(uiStrings[currentLang].routeNotFound);
                    }

                }
            }
            directionsRenderer.setDirections(routeResponse);
            await processRoute(interpolatedPath, routeElevations.length > 0);
        }
    }
    catch (e) {
        console.error(e);
        showMessage(uiStrings[currentLang].routeNotFound);
    }

    // try {
    //     const routeResponse = await directionsService.route(request);
    //     if (routeResponse.status === 'OK') {
    //     // 経路の色を赤に変更 (既に適用済みですが、確認のため記載)
    //         directionsRenderer.setOptions({
    //             polylineOptions: { strokeColor: '#e74c3c', strokeWeight: 5, strokeOpacity: 0.8 }
    //         });
    //         // overview_pathの代わりに、より詳細なstepsのpathを連結して使用する
    //         const detailedPath = routeResponse.routes[0].legs.flatMap(leg => leg.steps.flatMap(step => step.path));
    //         directionsRenderer.setDirections(routeResponse);
    //         //const routeDistance = routeResponse.routes[0].legs[0].distance.value;

    //         const interpolatedPath = [];
    //         routeElevations = [];

    //         const API_LIMIT = 512;
    //         let cumulativeDistance = 0;
    //         let startChunk = 0;
    //         //let chunkLength = 0;
    //         let previousPath = detailedPath[0];
    //         for (let i = 1; i < detailedPath.length; i++) {
    //             const chunkLength = i - startChunk + 1;//chunkLength++;
    //             cumulativeDistance += google.maps.geometry.spherical.computeDistanceBetween(previousPath, detailedPath[i]);
    //             previousPath = detailedPath[i];
    //             let sliceLength = 0;
    //             let sampleLength = 0;
    //             const isLastChunk = (i === detailedPath.length - 1);
    //             if (cumulativeDistance > API_LIMIT * interpolationInterval) {
    //                 sliceLength = chunkLength; //i - startChunk;
    //                 sampleLength = API_LIMIT; 
    //             }
    //             else if (chunkLength === API_LIMIT) { // detailedPathの解像度がinterpolationIntervalより小さい傾向
    //                 sliceLength = API_LIMIT;
    //                 sampleLength = API_LIMIT; 
    //             } else if (isLastChunk) { // 最後のチャンク
    //                 sliceLength = chunkLength;  //i - startChunk;
    //                 sampleLength = Math.max(sliceLength, Math.trunc(cumulativeDistance / interpolationInterval));
    //             }    
    //             if (sliceLength > 0) {
    //                 const chunkPath = detailedPath.slice(startChunk, startChunk + sliceLength);
    //                 const elevationResponse = await elevationService.getElevationAlongPath({
    //                     path: chunkPath,
    //                     samples: sampleLength });
    //                 //最後のチャンクでなけれ次のチャンクの開始点が追加されるのでばこのチャンク終了点は追加しない
    //                 const pushLength = elevationResponse.results.length - (isLastChunk ? 0 : 1);
    //                 for (let j = 0; j < pushLength; j++) {
    //                     interpolatedPath.push(elevationResponse.results[j].location);
    //                     routeElevations.push(elevationResponse.results[j].elevation);
    //                 }
    //                 //chunkLength = 0;
    //                 startChunk = i;
    //                 cumulativeDistance = 0;
    //             }
    //         }
    //         await processRoute(interpolatedPath, routeElevations.length > 0);
    //     }
    // }
    // catch(e) {
    //     console.error(e);
    //     showMessage(uiStrings[currentLang].routeNotFound);
    // }

}

loadGpxButton.addEventListener('click', () => {
    gpxFileInput.click();
});

gpxFileInput.addEventListener('change', (event) => {
    resetTourState();

    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const gpxText = e.target.result;
            const parser = new DOMParser();
            const gpxDoc = parser.parseFromString(gpxText, 'application/xml');

            const trkpts = gpxDoc.querySelectorAll('trkpt');
            if (trkpts.length === 0) {
                showMessage(uiStrings[currentLang].gpxNoTrackpoints);
                return;
            }

            const gpxPoints = [];
            let hasElevationData = false;
            trkpts.forEach(pt => {
                const lat = parseFloat(pt.getAttribute('lat'));
                const lon = parseFloat(pt.getAttribute('lon'));
                const eleEl = pt.querySelector('ele');
                const ele = eleEl ? parseFloat(eleEl.textContent) : null;
                if (!isNaN(lat) && !isNaN(lon)) {
                    gpxPoints.push({ lat: lat, lng: lon, ele: ele });
                    if (ele !== null) hasElevationData = true;
                }
            });

            if (gpxPoints.length === 0) {
                showMessage(uiStrings[currentLang].gpxNoCoordinates);
                return;
            }

            const pathForPolyline = gpxPoints.map(p => new google.maps.LatLng(p.lat, p.lng));
            const interpolatedPath = [];
            routeElevations = [];
            for (let i = 0; i < pathForPolyline.length - 1; i++) {
                const p1 = pathForPolyline[i];
                const p2 = pathForPolyline[i + 1];
                const distance = getDistance(p1, p2);
                const segments = Math.ceil(distance / (interpolationInterval * 2));
                for (let j = 0; j < segments; j++) {
                    const fraction = j / segments;
                    interpolatedPath.push(interpolate(p1, p2, fraction));
                    if (hasElevationData) {
                        const elevation1 = gpxPoints[i].ele;
                        const elevation2 = gpxPoints[i + 1].ele;
                        routeElevations.push(elevation1 + (elevation2 - elevation1) * fraction);
                    }
                }
            }
            interpolatedPath.push(pathForPolyline[pathForPolyline.length - 1]);
            if (hasElevationData) {
                routeElevations.push(gpxPoints[gpxPoints.length - 1].ele);
            }

            gpxRoutePolyline = new google.maps.Polyline({
                path: pathForPolyline,
                geodesic: true,
                strokeColor: '#e74c3c', // 赤色に変更
                strokeOpacity: 0.8,
                strokeWeight: 5
            });
            gpxRoutePolyline.setMap(map);

            processRoute(interpolatedPath, hasElevationData);
        } catch (error) {
            showMessage(uiStrings[currentLang].gpxParseError);
        }
    };
    reader.readAsText(file);
});

/**
 * 代替表示モードを開始します。
 */
function startFallbackMode() {
    if (isFallbackModeActive) return;
    isFallbackModeActive = true;
    console.log("Entering fallback display mode.");
    setSplitRatio('0:10'); // マップを全画面表示
    map.setMapTypeId('hybrid'); // 航空写真に切り替え

    if (isVectorMap) {
        savedZoomLevel = map.getZoom();
        map.setZoom(25);    //最大２２程度との事。見ているマップの解像度により変化する。先にズームインすれば最大のチルト角にできる
        map.setTilt(TILT_ANGLE);
    }
}

/**
 * 代替表示モードを終了し、通常の表示に戻します。
 */
function stopFallbackMode() {
    if (!isFallbackModeActive) return;
    isFallbackModeActive = false;
    console.log("Exiting fallback display mode.");
    setSplitRatio(localStorage.getItem('splitRatio') || '7:3'); // 元の比率に戻す
    if (isVectorMap) {
        map.setZoom(savedZoomLevel);
    }
}

async function updateStreetView(targetPosition) { //!!updateStreetView()
    //if (routePoints.length === 0 || currentPointIndex >= routePoints.length) return;
    //const targetPosition = routePoints[currentPointIndex];

    try {
        const { data } = await streetViewService.getPanorama({
            location: targetPosition,
            radius: 20,
            source: showUserContent ? google.maps.StreetViewSource.DEFAULT : google.maps.StreetViewSource.GOOGLE,
            preference: google.maps.StreetViewPreference.NEAREST
        });

        if (data && data.location) {
            // ストリートビューが見つかったので、代替モードを解除し、距離をリセット
            stopFallbackMode();
            distanceWithoutStreetView = 0;

            const currentPanoId = panorama.getPano();
            const newPanoId = data.location.pano;

            if (newPanoId && newPanoId !== currentPanoId) {
                panorama.setPosition(data.location.latLng);
            }

            if (currentPointIndex + 1 < routePoints.length) {
                const heading = getHeading(routePoints[currentPointIndex], routePoints[currentPointIndex + 1]);
                if (!isNaN(heading)) {
                    panorama.setPov({ heading: (heading + directionOffset + 360) % 360, pitch: 0 });
                }
            }
        } else {
            // ストリートビューが見つからなかった場合
            catchNoPanorama();
        }
    } catch (e) {
        if (e.endpoint === 'STREETVIEW_GET_PANORAMA' && e.code === 'ZERO_RESULTS') {
            catchNoPanorama();
            return;
        }
        else {
            console.error(`Error getting panorama data for point ${currentPointIndex}:`, e);
        }
    }
}
function catchNoPanorama() {
    console.log(`No panorama found near point ${currentPointIndex}. Skipping Street View update.`);
    distanceWithoutStreetView += STREETVIEW_UPDATE_DISTANCE; // 最後に更新してからの距離を加算

    if (distanceWithoutStreetView > FALLBACK_THRESHOLD) {
        startFallbackMode();
    }
}
const AUTO_HIDE_TOOLBAR_SEC = 5;
let autoHideToolbarTimer = AUTO_HIDE_TOOLBAR_SEC;
//!!移動しミューレーションの基幹処理updatePhysics()
function updatePhysics() {
    const now = Date.now();
    const deltaTime = (now - lastPhysicsUpdateTime) / 1000; // 秒単位
    lastPhysicsUpdateTime = now;
    let currentSpeedMps = actualSpeedKmh / 3.6;

    // パワーソースが接続されている場合は物理モデルに基づいて速度を更新
    if (bleDevice && bleDevice.gatt.connected) {
        const C = PHYSICS_CONSTANTS;

        // 1. 抵抗力の計算 (ツアー実行中のみ物理モデルを適用)
        const gradientAngle = Math.atan(currentGradient / 100);
        const rollingResistanceForce = C.CRR * C.TOTAL_MASS * C.G * Math.cos(gradientAngle);
        const airResistanceForce = 0.5 * C.CDA * C.RHO * Math.pow(currentSpeedMps, 2);
        const gradientResistanceForce = C.TOTAL_MASS * C.G * Math.sin(gradientAngle);
        const totalResistanceForce = rollingResistanceForce + airResistanceForce + gradientResistanceForce;

        // 2. 推進力の計算
        // 速度が非常に遅い場合の発散を防ぐ (ツアー実行中のみ)
        const effectiveSpeed = Math.max(currentSpeedMps, C.MIN_SPEED_FOR_FORCE_CALC_MPS);
        const boostedPower = isBoostActive ? currentPower * BOOST_FACTOR : currentPower;
        const propulsiveForce = (boostedPower * C.DRIVETRAIN_EFFICIENCY) / effectiveSpeed;

        // オートブーストのロジック
        if (autoBoostThreshold > 0) {
            if (currentGradient >= autoBoostThreshold) {
                isBoostActive = true;
            } else {
                isBoostActive = false;
            }
            boostButton.classList.toggle('active', isBoostActive);
        }
        // 3. 加速度と新しい速度の計算
        if (isTourRunning) {
            const netForce = propulsiveForce - totalResistanceForce;
            const acceleration = netForce / C.TOTAL_MASS;
            currentSpeedMps += acceleration * deltaTime;
            currentSpeedMps = Math.max(0, currentSpeedMps); // 速度が負にならないように
        }

        // 実際の移動速度を更新
        actualSpeedKmh = currentSpeedMps * 3.6;

        //スピードリミッターの適用
        actualSpeedKmh = Math.min(actualSpeedKmh, speedLimiter);
    } else {
        // パワーソースが接続されていない場合は、手動入力された速度(manualSpeedKmh)を実際の速度(actualSpeedKmh)に反映する
        actualSpeedKmh = autoTravelSpeed;
        currentSpeedMps = actualSpeedKmh / 3.6;
    }
    //ツアー中で時速5Km以上になっているときツールバーが表示されていたら消す(設定メニューを開いているときを除く)
    if (isTourRunning && actualSpeedKmh >= 5 && !toolBarHidden && !settingsDropdown.classList.contains('show')) {
        autoHideToolbarTimer -= deltaTime;
        if (autoHideToolbarTimer <= 0) {    //即座に消すと操作不能になるので５秒の猶予をつくる
            hideToolbar();
        }
    }

    // 現在の位置を計算（ログ記録のために isTourRunning の外で定義）
    let currentPosition = (routePoints.length > 0) ? routePoints[currentPointIndex] : null;

    // ツアー実行中のみ位置やUIを更新する
    if (isTourRunning) {
        const deltaDistance = currentSpeedMps * deltaTime;
        currentPositionDistance += deltaDistance;
        distanceTraveled += deltaDistance; // 実際に走行した距離も加算
        distanceSinceLastGeocode += deltaDistance;
        distanceSinceLastSvUpdate += deltaDistance;
        // 道路名アナウンス用の距離も加算
        if (currentPower > 0) {
            // 消費カロリー(kcal)を計算して加算
            // エネルギー(J) = パワー(W) * 時間(s)。1kcal ~= 4184J。人間の効率を約24%とすると、1W・sあたり約1cal。
            totalCalories += (currentPower * deltaTime) / 1000;
        }
        if (distanceOnCurrentRoad > 0) {
            distanceOnCurrentRoad += deltaDistance;
        }

        if (currentPositionDistance >= totalDistance) {
            currentPositionDistance = totalDistance;
            currentPointIndex = routePoints.length - 1;
            if (currentLocationMarker && routePoints.length > 0) {
                currentLocationMarker.setPosition(routePoints[currentPointIndex]);
            }
            updateInfoDisplay();
            stopTour();
            announceLocation(routePoints[currentPointIndex], 'arrival');
            showMessage(uiStrings[currentLang].destinationReached, false);
            return;
        }

        // 現在のインデックスを更新
        const lastPointIndex = currentPointIndex;
        while (currentPointIndex < cumulativeDistances.length - 1 && currentPositionDistance > cumulativeDistances[currentPointIndex + 1]) {
            currentPointIndex++;
        }
        //let heading = 0;    //北が上（デフォルト）
        if (currentPointIndex !== lastPointIndex) { // currentPointIndex変化したら勾配を再計算
            const newGradient = calculateCurrentGradient();
            //一瞬で大きな変化をするのを抑える
            currentGradient = Math.max(currentGradient - 3, Math.min(newGradient, currentGradient + 3));
        }
        const diffToNextPosition = cumulativeDistances[currentPointIndex + 1] - cumulativeDistances[currentPointIndex];
        const fraction = (currentPositionDistance - cumulativeDistances[currentPointIndex]) / diffToNextPosition;
        //console.log(`currretDistance: ${currentPositionDistance} currentIndex: ${currentPointIndex} fraction: ${fraction}`);
        const targetPosition = interpolate(routePoints[currentPointIndex], routePoints[currentPointIndex + 1], fraction);

        // マーカーは常に正確な現在地に表示
        currentLocationMarker.setPosition(targetPosition);
        let tilt = 0;
        let cameraCenter = targetPosition;
        if (isVectorMap) {  //ベクターマップの場合
            const heading = getHeading(routePoints[currentPointIndex], routePoints[currentPointIndex + 1]);
            if (isTiltView || isFallbackModeActive) {   //チルト表示または代替モードの場合
                tilt = isFallbackModeActive ? 80 : 75;
                // if (currentPointIndex > 0 && currentPointIndex + 1 < routePoints.length) {
                // }
                // ズームレベルに応じてオフセット距離を計算 (ズームアウトするほど遠くを見る)
                // ズームレベル17で約150m、ズームレベル12で約4800mになるような計算式
                const zoomLevel = map.getZoom() || 17;
                const lookAheadDistance = 300 * Math.pow(2, 17 - zoomLevel);
                cameraCenter = google.maps.geometry.spherical.computeOffset(targetPosition, lookAheadDistance, heading);
            }
            map.moveCamera({ center: cameraCenter, tilt: tilt });
            map.setHeading(heading);
        }
        else {
            map.setCenter(targetPosition);
        }

        updateInfoDisplay();

        // if (distanceSinceLastSvUpdate >= STREETVIEW_UPDATE_DISTANCE) {
        //     updateStreetView();
        //     distanceSinceLastSvUpdate = 0;
        // }
        deltaTimeSinceLastSvUpdate += deltaTime;
        if (deltaTimeSinceLastSvUpdate >= STREETVIEW_UPDATE_INTERVAL) {
            updateStreetView(targetPosition);
            deltaTimeSinceLastSvUpdate -= STREETVIEW_UPDATE_INTERVAL;
        }


        if (distanceSinceLastGeocode >= geocodeIntervalDistance) {
            announceLocation(currentPosition, 'moving');
            distanceSinceLastGeocode = 0;
        }
    }

    if (isLogging) {
        // ツアーが停止している場合、ログに記録する速度は0にする
        const loggedSpeedKmh = isTourRunning ? actualSpeedKmh : 0;

        let currentElevation = (routeElevations.length > currentPointIndex) ? routeElevations[currentPointIndex] : 0;
        if (!currentPosition) { //再経路検索する間に値がクリアされるのに対応
            currentPosition = lastPosition;
            currentElevation = lastElevation;
        }
        else {  //最後の値を覚えておく
            lastPosition = currentPosition;
            lastElevation = currentElevation;
        }

        logData.push({
            timestamp: new Date().toISOString(),
            position: currentPosition,
            elevation: currentElevation,
            power: currentPower,
            cadence: currentCadence,
            heartRate: currentHeartRate,
            distance: distanceTraveled, // ログには実際に走行した総距離を記録
            speed: loggedSpeedKmh // km/hで記録 (actualSpeedKmh)
        });
    }
}

/**
 * 指定された距離に最も近い経路上のポイントのインデックスを検索します。
 * @param {number} distance - 検索する距離 (m)
 * @returns {number} - 経路ポイントのインデックス
 */
function findIndexByDistance(distance) {
    if (distance <= 0) return 0;
    if (distance >= totalDistance) return routePoints.length - 1;

    // 二分探索の方が効率的ですが、今回は線形探索で実装します
    let index = cumulativeDistances.findIndex(d => d >= distance);
    return index === -1 ? routePoints.length - 1 : index;
}

/**
 * 指定された距離にツアーの現在地をジャンプさせます。
 * @param {number} newDistance - ジャンプ先の距離 (m)
 */
function jumpToDistance(newDistance) {
    if (routePoints.length < 2) return;

    // 距離を経路の範囲内に収める
    newDistance = Math.max(0, Math.min(newDistance, totalDistance));
    currentPositionDistance = newDistance;

    // 新しい現在地のインデックスを探す
    let newIndex = 0;
    while (newIndex < cumulativeDistances.length - 1 && newDistance > cumulativeDistances[newIndex + 1]) {
        newIndex++;
    }
    currentPointIndex = newIndex;
    currentGradient = calculateCurrentGradient();

    // マーカーの位置を即時更新
    const newPosition = routePoints[currentPointIndex];
    if (currentLocationMarker) {
        currentLocationMarker.setPosition(newPosition);
        map.panTo(newPosition);
    }

    // ストリートビューを即時更新
    updateStreetView();

    // ジャンプした地点を出発地として設定
    setOriginToGeocodedLocation(newPosition);

    // グラフ上のマーカーも更新
    drawElevationChart(newDistance);

    // 情報表示とグラフを更新
    updateInfoDisplay();
}
/**
 * 現在地周辺の標高データから線形回帰を用いて現在の勾配を計算します。
 * @param {number} [pointsToConsider=20] - 勾配計算に考慮するデータ点の数（現在地を含む前方）。
 * @returns {number} - 計算された勾配 (%)。
 */
function calculateCurrentGradient(fwPointsToConsider = 2, bwPointsToConsider = 1) {
    if (routeElevations.length < 2 || currentPointIndex >= routeElevations.length) {
        return 0;
    }

    // 現在地を中心として、前後のデータ点を収集する
    //const halfPoints = Math.floor(pointsToConsider / 2);
    const startIndex = Math.max(0, currentPointIndex - bwPointsToConsider);
    const endIndex = Math.min(routeElevations.length, currentPointIndex + fwPointsToConsider);

    if (endIndex - startIndex < 2) {
        // 2点未満では勾配を計算できない
        // 経路の始点か終点付近でデータが少ない場合は、直近2点の勾配を返す（簡易版）
        if (currentPointIndex > 0) {
            const elevChange = routeElevations[currentPointIndex] - routeElevations[currentPointIndex - 1];
            const distChange = cumulativeDistances[currentPointIndex] - cumulativeDistances[currentPointIndex - 1];
            return distChange > 0 ? (elevChange / distChange) * 100 : 0;
        }
        return 0;
    }

    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    const n = endIndex - startIndex;

    for (let i = startIndex; i < endIndex; i++) {
        const x = cumulativeDistances[i]; // 距離
        const y = routeElevations[i];     // 標高

        sumX += x;
        sumY += y;
        sumXY += x * y;
        sumX2 += x * x;
    }

    // 線形回帰の傾き(m)を計算: m = (n * Σ(xy) - Σx * Σy) / (n * Σ(x^2) - (Σx)^2)
    const numerator = n * sumXY - sumX * sumY;
    const denominator = n * sumX2 - sumX * sumX;

    if (denominator === 0) {
        // 垂直な線（ありえないが念のため）
        return 0;
    }

    const slope = numerator / denominator * 100;

    return Math.max(-gradientLimiter, Math.min(slope, gradientLimiter));
}
/**
 * //!!指定された座標の地名を取得し、状況に応じた音声ガイダンスを再生します。
 * @param {google.maps.LatLng} location - 確認する場所の座標
 * @param {'departure' | 'moving' | 'arrival'} context - 'departure' (出発時), 'moving' (移動中), 'arrival' (到着時)
 */
async function announceLocation(location, context) {
    if (!geocoder || !isVoiceGuidanceEnabled) return;

    try {
        const { results } = await geocoder.geocode({ location: location, language: currentLang });
        if (!results || !results[0]) return;
        // デバッグ用に取得した住所情報をコンソールに出力
        console.log('Geocoding Result:', results[0]?.formatted_address, results[0]?.address_components);

        const addressComponents = results[0].address_components;
        let prefecture = '', locality = '', sublocality = '', sublocality2 = '', routeName = '';

        for (const component of addressComponents) {
            if (component.types.includes('administrative_area_level_1')) {
                prefecture = component.long_name;
            }
            if (component.types.includes('route')) { routeName = component.long_name; }
            if (locality === '' && component.types.includes('locality')) {
                locality = component.long_name;
            }
            if (locality === '' && component.types.includes('administrative_area_level_2')) {
                locality = component.long_name;
            }
            if (sublocality === '' && component.types.includes('sublocality_level_2')) {
                sublocality = component.long_name.trim();
            }
            if (sublocality2 === '' && component.types.includes('sublocality_level_3')) {
                sublocality2 = component.long_name.trim();
            }
        }
        const locationName = sublocality ? locality + ' ' + sublocality + sublocality2 : prefecture + ' ' + locality;

        if (mapSearchInput && mapSearchInput.value !== locationName) {
            mapSearchInput.value = locationName;
        }

        const newFullMunicipality = prefecture + locality + sublocality + sublocality2;
        let announced = false; // この呼び出しで何かアナウンスしたか

        if (context === 'departure') {
            const message = (uiStrings[currentLang].departingFrom || '{location}から 出発します。').replace('{location}', locationName);
            speak(message, currentLang === 'ja' ? 'ja-JP' : 'en-US');
            currentMunicipality = newFullMunicipality;
        } else if (context === 'moving') {
            // 町」レベルの地名が取得できた場合のみ比較・アナウンス
            if (newFullMunicipality && !currentMunicipality.includes(newFullMunicipality) && (locality !== '' || sublocality !== '')) {
                if (currentMunicipality !== '') { // 初回はメッセージを表示しない
                    const messageTemplate = uiStrings[currentLang].municipalityGuidance || '{municipality}を、移動中です。';
                    const message = messageTemplate.replace('{municipality}', locationName);
                    showMessage(message, false); // 緑色のメッセージボックス
                    speak(message, currentLang === 'ja' ? 'ja-JP' : 'en-US');
                    announced = true;
                }
                currentMunicipality = newFullMunicipality;
            }

            // 地名アナウンスがなかった場合、道路名アナウンスを試みる
            if (!announced && routeName) {
                if (routeName !== currentRoadName) {
                    currentRoadName = routeName;
                    console.log(`reset currentRoadName: ${currentRoadName}`);
                    distanceOnCurrentRoad = 0; // 新しい道路に入ったので距離をリセット
                }
                console.log(`${currentRoadName} distanceOnCurrentRoad: ${distanceOnCurrentRoad}`);

                if (distanceOnCurrentRoad === 0 || distanceOnCurrentRoad >= ROAD_ANNOUNCE_INTERVAL) {
                    const message = (uiStrings[currentLang].roadGuidance || '{road}を走行中です。').replace('{road}', routeName);
                    speak(message, currentLang === 'ja' ? 'ja-JP' : 'en-US');
                    distanceOnCurrentRoad = 1; // アナウンスしたので0からリセット(1にすることで次回以降の判定を>=にする)
                }
            }
        } else if (context === 'arrival') {
            const message = (uiStrings[currentLang].arrivedAt || '{location}に、到着しました。おつかれさまでした。').replace('{location}', locationName);
            speak(message, currentLang === 'ja' ? 'ja-JP' : 'en-US');
        }
    } catch (e) {
        console.error(`Geocoding failed during location announcement ('${context}'):`, e);
    }
}
/**
 * 標高グラフのクリックイベントを処理します。
 * グラフ上のクリックした場所にポップアップを表示します。
 * @param {MouseEvent} event - クリックイベント
 */
function handleChartClick(event) {
    // プレビューを開始する前に、現在の状態を保存
    if (!isChartPreviewing) {
        previewStartIndex = currentPointIndex;
    }
    isChartPreviewing = true;

    closeChartPopup(); // 既存のポップアップを閉じる

    if (isTourRunning) {
        showMessage(uiStrings[currentLang].jumpDisabledDuringTour);
        return;
    }
    if (routePoints.length < 2) return;

    const canvas = event.target;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;

    const padding = elevationChartPadding;
    const chartWidth = canvas.clientWidth - padding.left - padding.right;

    if (x < padding.left || x > canvas.clientWidth - padding.right) {
        return;
    }

    const clickedX = x - padding.left;
    const fraction = Math.max(0, Math.min(1, clickedX / chartWidth));
    const newDistance = totalDistance * fraction;

    // プレビュー用の位置情報を取得
    const previewIndex = findIndexByDistance(newDistance);
    const previewPosition = routePoints[previewIndex];

    // ストリートビューとマップをプレビュー位置に移動
    panorama.setPosition(previewPosition);
    map.panTo(previewPosition);

    // グラフ上にカスタムポップアップを作成して表示
    const chartContainer = document.getElementById('elevation-chart-container');
    const popup = document.createElement('div');
    popup.id = 'chart-popup';
    // スタイルを直接設定
    popup.style.cssText = `
        position: absolute;
        left: ${event.offsetX}px;
        top: ${event.offsetY}px;
        transform: translate(-50%, calc(-100% - 10px)); /* 矢印の分だけ上にオフセット */
        background-color: white;
        padding: 10px 15px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 10;
        border: 1px solid #ccc;
        /* 吹き出しの矢印部分を作成 */
        &::after {
            content: '';
            position: absolute;
            bottom: -10px; /* 吹き出しの下にくっつける */
            left: 50%;
            transform: translateX(-50%);
            border-width: 10px 10px 0;
            border-style: solid;
            border-color: white transparent transparent transparent;
        }
    `;

    const distanceKm = (newDistance / 1000).toFixed(2);
    popup.innerHTML = `
        <button id="chart-popup-close-btn" style="position: absolute; top: 2px; right: 5px; border: none; background: none; font-size: 20px; cursor: pointer; color: #888; padding: 0; line-height: 1;">&times;</button>
        <div style="color: #333; font-family: 'Inter', sans-serif; line-height: 1.5; padding-right: 15px;">
            <div style="font-size: 14px; margin-bottom: 12px;">距離: <strong>${distanceKm} km</strong> 地点</div>
            <button class="infowindow-btn" id="jump-confirm-btn" style="width: 100%;">この地点にジャンプ</button>
        </div>
    `;
    chartContainer.appendChild(popup);

    // ポップアップ内のボタンにイベントリスナーを設定
    document.getElementById('jump-confirm-btn').addEventListener('click', () => {
        jumpToDistance(newDistance);
        isChartPreviewing = false; // ジャンプしたのでプレビュー状態を解除
        previewStartIndex = -1;
        closeChartPopup();
    });

    // ポップアップ内の閉じるボタンにイベントリスナーを設定
    document.getElementById('chart-popup-close-btn').addEventListener('click', () => {
        closeChartPopup(); // プレビューをキャンセルして元の位置に戻す
    });
}

/**
 * 標高グラフのポップアップを閉じます。
 */
function closeChartPopup() {
    const existingPopup = document.getElementById('chart-popup');
    if (existingPopup) {
        // プレビュー中であれば、元の位置にビューを戻す
        if (isChartPreviewing && previewStartIndex !== -1 && routePoints.length > previewStartIndex) {
            const originalPosition = routePoints[previewStartIndex];
            panorama.setPosition(originalPosition);
            map.panTo(originalPosition);

            // ストリートビューの向きも元に戻す
            updateStreetView();
        }
        isChartPreviewing = false;
        previewStartIndex = -1;

        existingPopup.remove();
    }
}

/**
 * 画面のスリープを防止するWake Lockを要求します。
 */
const requestWakeLock = async () => {
    if ('wakeLock' in navigator) {
        try {
            wakeLockSentinel = await navigator.wakeLock.request('screen');
            wakeLockSentinel.addEventListener('release', () => {
                // システムによってロックが解放された場合（例：タブの非表示化）
                console.log('Screen Wake Lock was released by the system.');
                wakeLockSentinel = null;
            });
            console.log('Screen Wake Lock is active.');
        } catch (err) {
            console.error(`Failed to acquire wake lock: ${err.name}, ${err.message}`);
        }
    }
};

/**
 * Wake Lockを解放します。
 */
const releaseWakeLock = async () => {
    if (wakeLockSentinel !== null) {
        await wakeLockSentinel.release();
        wakeLockSentinel = null;
        console.log('Screen Wake Lock released.');
    }
};

async function toggleTour() {
    closeChartPopup(); // ツアー操作時にポップアップを閉じる
    if (isTourRunning) {
        await stopTour();
    } else {
        await startTour();
    }
}

async function startTour() {
    if (isTourRunning) return;

    if (routePoints.length === 0) {
        showMessage(uiStrings[currentLang].noRouteForTour);
        return;
    }

    // パワーソースが接続されていない場合のみ、手動速度をチェック
    if (!(bleDevice && bleDevice.gatt.connected)) {
        const speed = parseFloat(speedInput.value);
        if (isNaN(speed) || speed <= 0) {
            showMessage(uiStrings[currentLang].invalidSpeed, true);
            return;
        }
        actualSpeedKmh = autoTravelSpeed;
    } else {
        // パワーソース接続時は0からスタート
        actualSpeedKmh = 0;
    }

    // 画面のスリープを防止
    await requestWakeLock();
    isTourRunning = true;
    toggleTourButton.textContent = uiStrings[currentLang].stopTour;
    tourStartTime = Date.now();
    lastPhysicsUpdateTime = Date.now();
    distanceSinceLastSvUpdate = 0;

    map.setZoom(17);

    // 出発地の地名を取得してアナウンス
    if (routePoints.length > 0) {
        announceLocation(routePoints[currentPointIndex], 'departure');
    }

    physicsIntervalId = setInterval(updatePhysics, PHYSICS_INTERVAL_MS);
}

async function stopTour() {
    if (physicsIntervalId) {
        clearInterval(physicsIntervalId);
        physicsIntervalId = null;
    }
    isTourRunning = false;
    // ログ記録中は物理演算ループが動き続けるため、速度をリセットしない
    actualSpeedKmh = 0;

    // 画面のスリープ防止を解除
    await releaseWakeLock();

    // 代替表示モード中だったら戻す
    stopFallbackMode();

    if (tourStartTime > 0) {
        totalTimeElapsed = totalTimeElapsed + (Date.now() - tourStartTime) / 1000;
        //console.log(formatTime(Date.now()));
        //console.log(formatTime(tourStartTime));
        //console.log(formatTime(totalTimeElapsed));
        tourStartTime = 0;
    }
    toggleTourButton.textContent = uiStrings[currentLang].startTour;
    updateInfoDisplay(); // UIとグラフの状態を更新

    // ツアー停止地点を次の出発地として設定
    if (currentLocationMarker) {
        setOriginToGeocodedLocation(currentLocationMarker.getPosition());
    }
}

async function connectToBleDevice() {
    if (bleDevice && bleDevice.gatt.connected) {
        await disconnectFromBleDevice();
        return;
    }

    try {
        showMessage(uiStrings[currentLang].searchingDevice, false);
        bleDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: [FTMS_SERVICE_UUID] }]
        });

        showMessage(uiStrings[currentLang].connectingDevice, false);
        const server = await bleDevice.gatt.connect();
        showMessage(uiStrings[currentLang].gattConnected, false);

        const ftmsService = await server.getPrimaryService(FTMS_SERVICE_UUID);
        ftmsCharacteristic = await ftmsService.getCharacteristic(INDOOR_BIKE_DATA_UUID);

        await ftmsCharacteristic.startNotifications();
        ftmsCharacteristic.addEventListener('characteristicvaluechanged', handleFTMSData);

        showMessage(uiStrings[currentLang].ftmsConnected, false);
        bleConnectButton.textContent = uiStrings[currentLang].disconnect;
        bleConnectButton.style.backgroundColor = '#e74c3c';
        speedInput.readOnly = true; // 速度入力を読み取り専用に
        actualSpeedKmh = 0;
    } catch (error) {
        console.error(`${uiStrings[currentLang].btConnectionFailed}`, error);
        showMessage(`${uiStrings[currentLang].btConnectionError}${error.message}`);
        bleConnectButton.textContent = uiStrings[currentLang].connectPower;
        bleConnectButton.style.backgroundColor = '#3498db';
        bleDevice = null;
        ftmsCharacteristic = null;
    }
}

async function disconnectFromBleDevice() {
    if (bleDevice && bleDevice.gatt.connected) {
        bleDevice.gatt.disconnect();
        showMessage(uiStrings[currentLang].deviceDisconnected, false);
    }
    if (ftmsCharacteristic) {
        ftmsCharacteristic.removeEventListener('characteristicvaluechanged', handleFTMSData);
        ftmsCharacteristic = null;
    }
    bleConnectButton.textContent = uiStrings[currentLang].connectPower;
    bleConnectButton.style.backgroundColor = '#3498db';
    speedInput.readOnly = false; // 速度入力を編集可能に戻す
    actualSpeedKmh = 0;
    isBoostActive = false;
    boostButton.classList.remove('active');
    document.getElementById('power-display').textContent = '0 W';
    document.getElementById('cadence-display').textContent = '0 rpm';
    await stopTour(); // 切断時にツアーを停止
}

async function toggleHrConnection() {
    const urlParams = new URLSearchParams(window.location.search);
    const hrwsPort = urlParams.get('hrwsPort');

    if (hrwsPort) {
        if (hrWebSocket && hrWebSocket.readyState === WebSocket.OPEN) {
            disconnectFromHrWebSocket();
        } else {
            connectToHrWebSocket(hrwsPort);
        }
    } else {
        if (hrDevice && hrDevice.gatt.connected) {
            disconnectFromHrDevice();
        } else {
            await connectToHrDevice();
        }
    }
}

async function connectToHrDevice() {
    try {
        showMessage(uiStrings[currentLang].searchingHr, false);
        hrDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: [HR_SERVICE_UUID] }]
        });

        showMessage(uiStrings[currentLang].connectingHr, false);
        const server = await hrDevice.gatt.connect();
        showMessage(uiStrings[currentLang].gattConnected, false);

        const hrService = await server.getPrimaryService(HR_SERVICE_UUID);
        hrCharacteristic = await hrService.getCharacteristic(HR_MEASUREMENT_UUID);

        await hrCharacteristic.startNotifications();
        hrCharacteristic.addEventListener('characteristicvaluechanged', handleHRData);

        showMessage(uiStrings[currentLang].hrConnected, false);
        hrConnectButton.textContent = uiStrings[currentLang].disconnect;
        hrConnectButton.style.backgroundColor = '#e74c3c';

    } catch (error) {
        console.error(`${uiStrings[currentLang].hrConnectionFailed}`, error);
        showMessage(`${uiStrings[currentLang].hrConnectionError}${error.message}`);
        hrConnectButton.textContent = uiStrings[currentLang].connectHr;
        hrConnectButton.style.backgroundColor = '#3498db';
        hrDevice = null;
        hrCharacteristic = null;
    }
}

function disconnectFromHrDevice() {
    if (hrDevice && hrDevice.gatt.connected) {
        hrDevice.gatt.disconnect();
        showMessage(uiStrings[currentLang].hrDisconnected, false);
    }
    if (hrCharacteristic) {
        hrCharacteristic.removeEventListener('characteristicvaluechanged', handleHRData);
        hrCharacteristic = null;
    }
    hrConnectButton.textContent = uiStrings[currentLang].connectHr;
    hrConnectButton.style.backgroundColor = '#3498db';
    document.getElementById('hr-display').textContent = '0 bpm';
}

function connectToHrWebSocket(port) {
    if (hrWebSocket && (hrWebSocket.readyState === WebSocket.OPEN || hrWebSocket.readyState === WebSocket.CONNECTING)) {
        return;
    }

    showMessage(uiStrings[currentLang].connectingHr, false);
    hrWebSocket = new WebSocket(`ws://localhost:${port}`);

    hrWebSocket.onopen = () => {
        showMessage(uiStrings[currentLang].hrConnected, false);
        hrConnectButton.textContent = uiStrings[currentLang].disconnect;
        hrConnectButton.style.backgroundColor = '#e74c3c';
        resetHrWebSocketTimeout(); // ソケットオープン時からタイマーをセット
    };

    const resetHrWebSocketTimeout = () => {
        clearTimeout(hrWebSocketTimeoutId);
        hrWebSocketTimeoutId = setTimeout(() => {
            showMessage(uiStrings[currentLang].hrTimeout, true);
            disconnectFromHrWebSocket();
        }, HR_WEBSOCKET_TIMEOUT);
    };

    hrWebSocket.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            if (data && typeof data.heartRate === 'number') {
                currentHeartRate = data.heartRate;
                document.getElementById('hr-display').textContent = `${currentHeartRate} bpm`;
                resetHrWebSocketTimeout(); // データ受信時にタイマーをリセット
            }
        } catch (error) {
            console.error('Failed to parse heart rate data from WebSocket:', error);
        }
    };

    hrWebSocket.onerror = (error) => {
        console.error(`${uiStrings[currentLang].hrConnectionError}`, error);
        showMessage(`${uiStrings[currentLang].hrConnectionError} WebSocket error.`);
        // 接続失敗時に状態をリセット
        if (hrWebSocket) {
            hrWebSocket.close(); //念のため閉じる
        }
    };

    hrWebSocket.onclose = () => {
        // ユーザーが意図的に切断した場合以外でも呼ばれるため、状態をリセットする
        clearTimeout(hrWebSocketTimeoutId); // タイマーをクリア
        if (hrWebSocket) { // 既にnullでなければ
            showMessage(uiStrings[currentLang].hrDisconnected, false);
            hrConnectButton.textContent = uiStrings[currentLang].connectHr;
            hrConnectButton.style.backgroundColor = '#3498db';
            document.getElementById('hr-display').textContent = '0 bpm';
            hrWebSocket = null;
            currentHeartRate = 0;
        }
    };
}

function disconnectFromHrWebSocket() {
    if (hrWebSocket && hrWebSocket.readyState === WebSocket.OPEN) {
        clearTimeout(hrWebSocketTimeoutId); // 手動切断時にもタイマーをクリア
        hrWebSocket.close();
    }
}

/**
 * BLEから受信した心拍数データを処理します。
 * @param {Event} event - characteristicvaluechanged イベント
 */
function handleHRData(event) {
    const value = event.target.value;
    const flags = value.getUint8(0);
    const rate16Bits = (flags & 0x1) !== 0;
    let heartRate;
    if (rate16Bits) {
        heartRate = value.getUint16(1, true); // Little endian
    } else {
        heartRate = value.getUint8(1);
    }
    currentHeartRate = heartRate;
    document.getElementById('hr-display').textContent = `${currentHeartRate} bpm`;
}

/**
 * ログ記録の開始/終了を切り替えます。
 */
function toggleLogging() {
    if (!isLogging) {
        // ログ記録を開始
        isLogging = true;
        logData = []; // ログを初期化
        logStartDistance = distanceTraveled; // ログ開始時の走行距離を記録
        logStartTime = Date.now(); // ログ開始時刻を記録
        logToggleButton.textContent = uiStrings[currentLang].stopLog;
        totalCalories = 0;
        logToggleButton.style.backgroundColor = '#f39c12'; // 記録中を示す色
        showMessage(uiStrings[currentLang].logStarted, false);

        // 物理演算ループが動いていなければ開始する
        if (!physicsIntervalId) {
            lastPhysicsUpdateTime = Date.now();
            physicsIntervalId = setInterval(updatePhysics, PHYSICS_INTERVAL_MS);
        }
    } else {
        // ログ記録を終了
        isLogging = false;
        logToggleButton.textContent = uiStrings[currentLang].startLog;
        logToggleButton.style.backgroundColor = '#3498db';
        showMessage(uiStrings[currentLang].logStopped, false);

        // ツアーも停止していれば、物理演算ループを止める
        if (!isTourRunning && physicsIntervalId) {
            clearInterval(physicsIntervalId);
            physicsIntervalId = null;
        }

        if (logData.length > 1) {
            if (confirm(uiStrings[currentLang].confirmSaveTcx)) {
                saveLogAsTcx();
            }
        }
    }
}

/**
 * 記録したログをTCXファイルとして保存します。
 */
function saveLogAsTcx() {
    let maxSpeedMs = 0; // m/s単位での最大速度

    let trackpointsXml = logData.map(p => {
        let positionXml = '';
        if (p.position) {
            positionXml = `
            <Position>
              <LatitudeDegrees>${p.position.lat()}</LatitudeDegrees>
              <LongitudeDegrees>${p.position.lng()}</LongitudeDegrees>
            </Position>`;
        }

        let altitudeXml = '';
        if (p.elevation !== undefined) {
            altitudeXml = `
            <AltitudeMeters>${p.elevation.toFixed(2)}</AltitudeMeters>`;
        }

        const speedMs = p.speed ? (p.speed * 1000 / 3600) : 0;
        if (speedMs > maxSpeedMs) {
            maxSpeedMs = speedMs;
        }

        // Garmin拡張スキーマ(TPX)に速度を追加
        const tpxExtensions = `
              <TPX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2">
                <Watts>${p.power}</Watts>
                <Speed>${speedMs.toFixed(2)}</Speed>
              </TPX>`;

        return `
          <Trackpoint>
            <Time>${p.timestamp}</Time>${positionXml}${altitudeXml}
            <DistanceMeters>${p.distance.toFixed(2)}</DistanceMeters>
            <HeartRateBpm>
              <Value>${p.heartRate}</Value>
            </HeartRateBpm>
            <Cadence>${p.cadence}</Cadence>
            <Extensions>
              ${tpxExtensions}
            </Extensions>
          </Trackpoint>`;
    }).join('');

    const lapStartTimeISO = new Date(logStartTime).toISOString();
    const logEndTime = Date.now();
    const totalTimeSeconds = (logEndTime - logStartTime) / 1000;
    const totalDistanceMeters = distanceTraveled - logStartDistance;

    const tcxContent = `<?xml version="1.0" encoding="UTF-8"?>
<TrainingCenterDatabase xsi:schemaLocation="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2 http://www.garmin.com/xmlschemas/TrainingCenterDatabasev2.xsd" xmlns:ns5="http://www.garmin.com/xmlschemas/ActivityGoals/v1" xmlns:ns3="http://www.garmin.com/xmlschemas/ActivityExtension/v2" xmlns:ns2="http://www.garmin.com/xmlschemas/UserProfile/v2" xmlns="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://www.garmin.com/xmlschemas/ProfileExtension/v1">
  <Activities>
    <Activity Sport="Biking">
      <Id>${lapStartTimeISO}</Id>
      <Lap StartTime="${lapStartTimeISO}">
        <TotalTimeSeconds>${totalTimeSeconds.toFixed(0)}</TotalTimeSeconds>
        <DistanceMeters>${totalDistanceMeters.toFixed(2)}</DistanceMeters>
        <MaximumSpeed>${maxSpeedMs.toFixed(2)}</MaximumSpeed>        
        <Calories>${Math.round(totalCalories)}</Calories>
        <Intensity>Active</Intensity>
        <TriggerMethod>Manual</TriggerMethod>
        <Track>${trackpointsXml}</Track>
      </Lap>
    </Activity>
  </Activities>
</TrainingCenterDatabase>`;

    const blob = new Blob([tcxContent], { type: 'application/vnd.garmin.tcx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; const date = new Date(logStartTime);
    const filename = `activity_${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}.tcx`;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * BLEから受信したFTMSデータを処理します。
 * 速度を動的に計算し、UIを更新します。
 * @param {Event} event - characteristicvaluechanged イベント
 */
function handleFTMSData(event) {
    const value = event.target.value;
    const data = new DataView(value.buffer);
    const rawData = Array.from(new Uint8Array(data.buffer)).join(' ');

    const flags = data.getUint16(0, true);
    let offset = 2;

    if (flags & 0x01) {
    }
    if (flags & 0x02) {
        offset += 2;
    }
    if (flags & 0x04) {
        const instantaneousCadence = data.getUint16(offset, true) / 2;
        currentCadence = instantaneousCadence.toFixed(0);
        document.getElementById('cadence-display').textContent = `${currentCadence} rpm`;
        offset += 2;
    }
    if (flags & 0x08) {
        offset += 2;
    }
    if (flags & 0x10) {
        offset += 3;
    }
    if (flags & 0x20) {
        offset += 2;
    }
    if (flags & 0x40) {
        const power = data.getInt16(offset, true);
        currentPower = power;   //!!パワーソースからワット数を得ているところ
        document.getElementById('power-display').textContent = `${currentPower} W`;

        // ツアーが実行中でなく、パワーが検出され、かつ有効な経路が存在する場合にツアーを開始
        const hasValidRoute = routePoints.length > 0 && currentPositionDistance < totalDistance;
        if (!isTourRunning && power > 0 && hasValidRoute) {
            startTour();
            showMessage(uiStrings[currentLang].powerDetectedStart, false);
        }
        offset += 2;
    }
    if (flags & 0x80) {
        offset += 2;
    }
}

/**
 * 指定された場所にマップとストリートビューを移動させます。
 * @param {google.maps.places.PlaceResult} place - 移動先の場所情報
 */
function jumpToPlace(place) {
    if (!place || !place.geometry || !place.geometry.location) return;

    const location = place.geometry.location;

    // 既存の経路やマーカーをクリア
    resetTourState();

    map.setCenter(location);
    map.setZoom(17);
    panorama.setPosition(location);

    // ストリートビューの向きを調整（利用可能な場合）
    streetViewService.getPanorama({ location: location, radius: 50 })
        .then(({ data }) => {
            if (data && data.links && data.links.length > 0 && data.links[0].pano) {
                // 最も近い道路の方向に向ける
                const heading = google.maps.geometry.spherical.computeHeading(location, data.links[0].pano);
                panorama.setPov({ heading: heading, pitch: 0, zoom: 1 });
            } else {
                panorama.setPov({ heading: 0, pitch: 0, zoom: 1 });
            }
        })
        .catch(e => console.log("Could not set POV for jumped location:", e));
}

/**
 * formatted_addressから国名と郵便番号を除去して整形します。
 * @param {string} formattedAddress - Google Geocoding APIから返されるformatted_address
 * @param {Array<Object>} addressComponents - Google Geocoding APIから返されるaddress_components
 * @returns {string} - 整形された住所文字列
 */
function formatAddress(formattedAddress, addressComponents) {
    // addressComponentsがなければ、元のformattedAddressをそのまま返す
    if (!addressComponents) return formattedAddress || '';

    // 日本語環境を優先し、住所を構成する要素を定義
    const desiredTypes = [
        'administrative_area_level_1', // 都道府県
        'locality',                      // 市区町村
        'sublocality_level_1',           // 区 (例: 東京都千代田区)
        'sublocality_level_2',           // 〇〇町
        'sublocality_level_3',           // 〇〇丁目
        'sublocality_level_4'            // 番地など
    ];

    const addressParts = [];
    for (const type of desiredTypes) {
        const component = addressComponents.find(c => c.types.includes(type));
        if (component && !addressParts.includes(component.long_name)) {
            addressParts.push(component.long_name);
        }
    }

    // 連結した結果が空なら、元のformattedAddressを返す
    return addressParts.length > 0 ? addressParts.join('') : formattedAddress;
}

/**
 * 指定された座標を逆ジオコーディングし、結果を分析して最適な地名を出発地として設定します。
 * 施設名があればそれを優先し、なければ住所を設定します。
 * @param {google.maps.LatLng} location - 出発地として設定する座標
 */
async function setOriginToGeocodedLocation(location) {
    if (!location) return;

    originLatLng = location;

    try {
        const { results } = await geocoder.geocode({ location: location, language: currentLang });
        if (results && results.length > 0) {
            // 最初の結果の住所を整形して使用する
            originInput.value = formatAddress(results[0].formatted_address, results[0].address_components);
        }
    } catch (e) {
        console.error("Geocoding failed for new origin:", e);
    }
}

// モジュールスコープ内の関数をグローバルに公開して、Google Mapsのコールバックから呼び出せるようにする
window.initMap = initMap;

async function initMap() {
    // URLからMap IDを取得
    const urlParams = new URLSearchParams(window.location.search);
    const mapId = urlParams.get('mapId');

    // localStorageから保存されたマップタイプを読み込む
    const savedMapTypeId = localStorage.getItem('streetMoViewMapTypeId') || 'terrain';

    map = new google.maps.Map(document.getElementById('map'), {
        center: initialLocation,
        zoom: 12,
        disableDefaultUI: true,
        streetViewControl: false, // ストリートビューのペグマンを非表示
        mapTypeControl: false,    // デフォルトのマップ/航空写真コントロールを非表示
        // Map IDが指定されていれば、ベクターマップとして初期化
        ...(mapId && { mapId: mapId, tilt: 45, heading: 0 }),
        mapTypeId: savedMapTypeId, // デフォルトを地形マップに
        zoomControl: false,       // デフォルトのズームは非表示
        fullscreenControl: false, // デフォルトのフルスクリーンは非表示
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.LEFT_TOP // 新しい位置を指定
        },
        zoomControlOptions: { //ズーム コントロール
            position: google.maps.ControlPosition.RIGHT_BOTTOMC,
        },
    });

    // マップタイプが変更されたらlocalStorageに保存するリスナーを追加
    map.addListener('maptypeid_changed', () => {
        const currentMapType = map.getMapTypeId();
        localStorage.setItem('streetMoViewMapTypeId', currentMapType);
        // トグルスイッチの状態も同期させる
        const satelliteToggle = document.getElementById('satellite-toggle');
        satelliteToggle.checked = currentMapType === 'hybrid';
    });

    // Map IDが指定され、正常に読み込めたかを確認、作成時のtiltが反映されているかでベクターマップと判断する
    if (mapId && map.mapId === mapId && map.tilt === 45) {
        map.setTilt(0); // 判断に使った４５度を解除
        isVectorMap = true;
        console.log('Vector map enabled with Map ID:', mapId);
        // 「進行方向を上に」のラベルを「チルト表示」に変更
        const tiltViewLabel = document.getElementById('tilt-view-label');
        if (tiltViewLabel) {
            tiltViewLabel.parentElement.style.display = 'flex'; // チルト表示のitemを表示

            const tiltViewToggle = document.getElementById('tilt-view-toggle');
            tiltViewToggle.checked = isTiltView;
            map.setTilt(isTiltView ? TILT_ANGLE : 0);
        }
    } else {
        const tiltViewLabel = document.getElementById('tilt-view-label');
        if (tiltViewLabel) tiltViewLabel.parentElement.style.display = 'none'; // チルト表示のitemを非表示
        isVectorMap = false;
        console.log('Raster map enabled (No valid Map ID provided or failed to load).');
    }

    // ズームレベルが変更されたときにチルトを再適用するリスナー
    map.addListener('zoom_changed', () => {
        if (isVectorMap && isTiltView) {
            // setTilt() は即時反映されないことがあるため、moveCamera() を使用してビューの更新を強制する。
            // これにより、現在の中心位置やズームレベルを維持したまま、チルト角だけを更新できる。
            map.moveCamera({ tilt: TILT_ANGLE });
        }
    });
    // --- TTSエンジンの初期化 ---
    // URLパラメータからAPIキーを取得
    const apiKey = urlParams.get('apiKey');

    let isVvoxAvailable = false;
    if (apiKey) {
        // APIキーがあればWeb版APIを使用
        console.log("Using VOICEVOX Web API with provided key.");
        vvoxEngine = new VoiceVoxWebApi();
        isVvoxAvailable = await vvoxEngine.initialize(apiKey);
    } else {
        // APIキーがなければローカルエンジンを試す
        console.log("No API key found, trying to connect to local VOICEVOX engine.");
        vvoxEngine = new VVoxEngine();
        isVvoxAvailable = await vvoxEngine.initialize();
    }

    if (isVvoxAvailable) {
        try {
            const speakers = await vvoxEngine.getSpeakers();
            voiceSelect.innerHTML = ''; // 既存の選択肢をクリア
            speakers.forEach(speaker => {
                speaker.styles.forEach(style => {
                    const option = document.createElement('option');
                    option.value = style.id;
                    option.textContent = `${speaker.name} (${style.name})`;
                    voiceSelect.appendChild(option);
                });
            });
            voiceSelect.disabled = false;
            // 保存されたVOICEVOX話者IDを選択
            const savedSpeakerId = localStorage.getItem('vvoxSpeakerId');
            if (savedSpeakerId) {
                voiceSelect.value = savedSpeakerId;
                // setSpeakerIdを呼び出してエンジンに話者IDを設定
                vvoxEngine.setSpeakerId(savedSpeakerId);
            } else if (speakers.length > 0 && speakers[0].styles.length > 0) {
                // デフォルトの話者を設定
                vvoxEngine.setSpeakerId(savedSpeakerId);
            }
        } catch (error) {
            console.error("Failed to load VOICEVOX speakers:", error);
            populateVoiceList(); // VOICEVOX話者取得失敗時はOS標準に戻す
        }
    } else {
        // VOICEVOXが利用できない場合は、OS標準の音声リストを読み込む
        populateVoiceList();
        if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }
    }
    // 以下の初期化はmapオブジェクトが生成された後に行う
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({ map: map, suppressMarkers: true });
    elevationService = new google.maps.ElevationService();
    geocoder = new google.maps.Geocoder();
    streetViewService = new google.maps.StreetViewService();

    // localStorageからホーム地点を読み込み、設定する
    const savedHome = localStorage.getItem('streetMoViewHomeLocation');
    if (savedHome) {
        try {
            const homeCoords = JSON.parse(savedHome);
            if (homeCoords && typeof homeCoords.lat === 'number' && typeof homeCoords.lng === 'number') {
                initialLocation = homeCoords;
                map.setCenter(initialLocation);
                // 新しい関数を使って出発地を設定
                await setOriginToGeocodedLocation(new google.maps.LatLng(homeCoords.lat, homeCoords.lng));
            }
        } catch (e) {
            console.error("Failed to parse or geocode home location from localStorage", e);
            localStorage.removeItem('streetMoViewHomeLocation');
        }
    }

    // 地図上に検索ボックスを作成して配置
    const searchInput = document.createElement('input');
    mapSearchInput = searchInput;
    searchInput.id = 'pac-input';
    searchInput.type = 'text';
    searchInput.placeholder = '場所を検索';
    searchInput.style.cssText = 'background-color: rgba(255,255,255,0.8); font-family: Roboto; font-size: 15px; font-weight: 300; margin: 12px; padding: 5px 10px; width: 180px; border: 1px solid #ccc; box-shadow: 0 2px 6px rgba(0,0,0,0.3); border-radius: 3px;';

    const searchBox = new google.maps.places.SearchBox(searchInput);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchInput);

    // 検索ボックスのプレースホルダーを初期設定
    searchInput.placeholder = uiStrings[currentLang].searchForPlace;
    panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
        position: initialLocation,
        visible: true,
        pov: { heading: 0, pitch: 0, zoom: 1 },
        addressControl: true,      // 住所表示を非表示
        panControl: true,          // コンパスを非表示
        zoomControl: false,         // デフォルトのズームコントロールを非表示
        fullscreenControl: false,   // デフォルトのフルスクリーンコントロールを非表示
        motionTracking: false,      // モーショントラッキングを無効化
        motionTrackingControl: false, // モーショントラッキングボタンを非表示
        source: google.maps.StreetViewSource.DEFAULT, // 初期状態ではユーザー投稿も表示
        linksControl: false, // ナビゲーション矢印の表示/非表示
        clickToGo: false,
    });

    map.setStreetView(panorama);

    // SearchBoxで場所が選択されたときのリスナー
    streetViewCoverageLayer = new google.maps.StreetViewCoverageLayer();

    // SearchBoxで場所が選択されたときのリスナー
    // マップ左下のコントロールを配置
    const mapControlsContainer = document.getElementById('map-controls-container');
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(mapControlsContainer);

    // マップ右上の自作コントロールを配置
    const mapCustomControls = document.getElementById('map-custom-controls');
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(mapCustomControls);

    // InfoWindowテンプレートを取得
    infoWindowTemplate = document.getElementById('infowindow-template');


    mapControlsContainer.style.display = 'flex'; // 表示を有効にする

    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // 最初の場所を取得してジャンプ
        jumpToPlace(places[0]);
    });

    // POIクリックで情報ウィンドウを表示し、出発地/目的地に設定する機能
    placesService = new google.maps.places.PlacesService(map);
    infoWindow = new google.maps.InfoWindow({
        // InfoWindow内のコンテンツがはみ出ないように最大幅を設定
        maxWidth: 350,
        headerDisabled: true,
        // 表示位置を上に調整（吹き出しの先端がアイコンに合うように）
        // 数値を調整して最適な位置を見つけてください
        pixelOffset: new google.maps.Size(0, -25),
    });

    map.addListener('click', (e) => {
        closeChartPopup(); // マップクリックでグラフのポップアップを閉じる
        // クリックした場所に既にInfoWindowが開いていたら閉じる
        infoWindow.close();
        selectedPlace = null;

        if (e.placeId) {
            e.stop(); // デフォルトのPOI情報ウィンドウの表示を停止

            placesService.getDetails({ placeId: e.placeId }, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && place && place.geometry && place.geometry.location) {
                    selectedPlace = place; // クリックされた場所の情報を保持

                    // 出発地が入力されているかチェック
                    const contentClone = infoWindowTemplate.firstElementChild.cloneNode(true);

                    // 場所の名前と住所を設定
                    contentClone.querySelector('.place-name').textContent = place.name;
                    const placeAddressEl = contentClone.querySelector('.place-address');
                    placeAddressEl.innerHTML = place.adr_address.replace('、', ''); //国名と郵便番号はCSSで消してるが句読点が残っているのを除去

                    // 出発地が設定されていれば、直線距離を計算して表示
                    const distanceEl = contentClone.querySelector('.place-distance');
                    if (originLatLng) {
                        const distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(originLatLng, place.geometry.location);
                        const distanceInKm = (distanceInMeters / 1000).toFixed(2);
                        distanceEl.textContent = `現在地からの直線距離: 約 ${distanceInKm} km`;
                    } else {
                        distanceEl.style.display = 'none';
                    }

                    // ログ記録中でなければ「ここへ移動」ボタンを表示する
                    if (isLogging) {
                        contentClone.querySelector('#set-origin-btn').style.display = 'none';
                    }

                    // 目的地ボタンのテキストとIDを更新
                    const isOriginSet = originInput.value.trim() !== '' || originLatLng !== null;
                    contentClone.querySelector('#set-dest-btn').textContent = isOriginSet ? uiStrings[currentLang].setAsDestinationAndSearch : uiStrings[currentLang].setAsDestination;

                    infoWindow.setContent(contentClone);
                    infoWindow.setPosition(e.latLng);
                    infoWindow.open(map);

                    // ストリートビューの位置をクリックした場所に更新
                    panorama.setPosition(place.geometry.location);
                }
            });
        }
    });

    // InfoWindow内のボタンにイベントリスナーを設定
    infoWindow.addListener('domready', () => {
        infoWindow.getContent().querySelector('#set-origin-btn')?.addEventListener('click', () => {
            if (selectedPlace && selectedPlace.geometry && selectedPlace.geometry.location) {
                // POIクリック時は、まず場所の名前(place.name)を優先して使う
                // これにより「東京駅」のような短い名前が表示される
                const displayName = selectedPlace.name || selectedPlace.formatted_address;
                if (displayName) {
                    originInput.value = displayName;
                    if (mapSearchInput) {
                        mapSearchInput.value = displayName;
                    }
                } else {
                    // 名前がない場合は逆ジオコーディングで住所を取得
                    setOriginToGeocodedLocation(selectedPlace.geometry.location);
                }

                originLatLng = selectedPlace.geometry.location;
                jumpToPlace(selectedPlace);
                infoWindow.close();
            }
        });

        infoWindow.getContent().querySelector('#set-dest-btn')?.addEventListener('click', () => {
            if (selectedPlace) {
                destinationInput.value = selectedPlace.name || selectedPlace.formatted_address;
                destinationLatLng = selectedPlace.geometry.location;
                infoWindow.close();

                // 出発地が設定されていれば、即座に経路検索を実行
                const isOriginSet = originInput.value.trim() !== '' || originLatLng !== null;
                if (isOriginSet) {
                    calculateAndDisplayRoute();
                }
            }
        });
        travelModeButtons = infoWindow.getContent().querySelectorAll('#travel-mode-switcher button');
        // --- 保存された設定を読み込む ---
        const savedTravelMode = localStorage.getItem('streetMoViewTravelMode');
        if (savedTravelMode) {
            setTravelMode(savedTravelMode);
        }

        travelModeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                setTravelMode(btn.dataset.mode);
            });
        });


        infoWindow.getContent().querySelector('#set-home-btn')?.addEventListener('click', () => {
            if (selectedPlace && selectedPlace.geometry && selectedPlace.geometry.location) {
                const homeLocation = {
                    lat: selectedPlace.geometry.location.lat(),
                    lng: selectedPlace.geometry.location.lng()
                };
                // ホーム地点をlocalStorageに保存
                localStorage.setItem('streetMoViewHomeLocation', JSON.stringify(homeLocation));
                showMessage(uiStrings[currentLang].homeSet, false);
                infoWindow.close();
            }
        });
    });

    // 出発地・目的地のオートコンプリート設定
    const autocompleteOptions = {
        fields: ["geometry", "name", "formatted_address"],
        types: ["geocode", "establishment"],
    };
    originAutocomplete = new google.maps.places.Autocomplete(originInput, autocompleteOptions);
    destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput, autocompleteOptions);

    originAutocomplete.addListener('place_changed', () => {
        originLatLng = originAutocomplete.getPlace()?.geometry?.location || null;
    });
    destinationAutocomplete.addListener('place_changed', () => {
        destinationLatLng = destinationAutocomplete.getPlace()?.geometry?.location || null;
    });

    ratioButtons = document.querySelectorAll('#split-ratio-switcher button');
    ratioButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setSplitRatio(btn.dataset.ratio);
            // 状態を保存
            localStorage.setItem('splitRatio', btn.dataset.ratio);
        });
    });


    const elevationChartCanvas = document.getElementById('elevation-chart');
    elevationChartCanvas.addEventListener('click', handleChartClick);

    routeButton.addEventListener('click', calculateAndDisplayRoute);
    toggleTourButton.addEventListener('click', toggleTour);
    bleConnectButton.addEventListener('click', connectToBleDevice);

    // 自作ストリートビューUIのイベントリスナー（ストリートビューのみフルスクリーン）
    const svFullscreenButton = document.getElementById('sv-fullscreen-button');
    svFullscreenButton.addEventListener('click', toggleStreetViewFullscreen);

    const svZoomInButton = document.getElementById('sv-zoom-in-button');
    svZoomInButton.addEventListener('click', () => {
        panorama.setZoom(panorama.getZoom() + 1);
    });
    const svZoomOutButton = document.getElementById('sv-zoom-out-button');
    svZoomOutButton.addEventListener('click', () => {
        panorama.setZoom(panorama.getZoom() - 1);
    });

    // 自作マップUIのイベントリスナー
    const mapFullscreenButton = document.getElementById('map-fullscreen-button');
    mapFullscreenButton.addEventListener('click', toggleMapFullscreen);

    const mapZoomInButton = document.getElementById('map-zoom-in-button');
    mapZoomInButton.addEventListener('click', () => {
        map.setZoom(map.getZoom() + 1);
    });
    const mapZoomOutButton = document.getElementById('map-zoom-out-button');
    mapZoomOutButton.addEventListener('click', () => {
        const currentZoom = map.getZoom();
        if (currentZoom > 0) {
            map.setZoom(currentZoom - 1);
        }
    });

    // フルスクリーン状態を監視して、自作ボタンのアイコンも切り替える
    // このリスナーはページ全体のフルスクリーン状態も監視するため、両方のボタンアイコンが同期される
    document.addEventListener('fullscreenchange', () => {
        const iconFullscreen = svFullscreenButton.querySelector('.icon-fullscreen');
        const iconExitFullscreen = svFullscreenButton.querySelector('.icon-exit-fullscreen');
        if (document.fullscreenElement) {
            iconFullscreen.style.display = 'none';
            iconExitFullscreen.style.display = 'block';
        } else {
            iconFullscreen.style.display = 'block';
            iconExitFullscreen.style.display = 'none';
        }

        // マップのフルスクリーンボタンも更新
        const mapIconFullscreen = document.querySelector('#map-fullscreen-button .icon-fullscreen');
        const mapIconExitFullscreen = document.querySelector('#map-fullscreen-button .icon-exit-fullscreen');
        if (document.fullscreenElement) {
            mapIconFullscreen.style.display = 'none';
            mapIconExitFullscreen.style.display = 'block';
        } else {
            mapIconFullscreen.style.display = 'block';
            mapIconExitFullscreen.style.display = 'none';
        }
        // アプリ全体のフルスクリーンボタンも更新
        if (fullscreenButton) {
            const appIconFullscreen = fullscreenButton.querySelector('.icon-fullscreen');
            const appIconExitFullscreen = fullscreenButton.querySelector('.icon-exit-fullscreen');
            if (document.fullscreenElement) {
                appIconFullscreen.style.display = 'none';
                appIconExitFullscreen.style.display = 'block';
            } else {
                appIconFullscreen.style.display = 'block';
                appIconExitFullscreen.style.display = 'none';
            }
        }
    });
    logToggleButton.addEventListener('click', toggleLogging);
    hrConnectButton.addEventListener('click', toggleHrConnection);

    // 言語スイッチャーのイベントリスナー
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });

    // ストリートビューカバレッジのトグルスイッチ
    const svCoverageToggle = document.getElementById('sv-coverage-toggle');
    svCoverageToggle.addEventListener('change', (event) => {
        streetViewCoverageLayer.setMap(event.target.checked ? map : null);
    });

    // ユーザー投稿データ表示のトグルスイッチ
    const userContentToggle = document.getElementById('user-content-toggle');
    userContentToggle.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        showUserContent = isChecked;
        localStorage.setItem('showUserContent', isChecked);
        // panoramaのsourceを更新して即時反映
        panorama.setOptions({ source: showUserContent ? google.maps.StreetViewSource.DEFAULT : google.maps.StreetViewSource.OUTDOOR });
    });

    // 航空写真表示のトグルスイッチ
    const satelliteToggle = document.getElementById('satellite-toggle');
    // 初期状態をマップタイプに合わせる
    satelliteToggle.checked = map.getMapTypeId() === 'hybrid' || map.getMapTypeId() === 'satellite';
    satelliteToggle.addEventListener('change', (event) => {
        if (event.target.checked) {
            map.setMapTypeId('hybrid'); // 航空写真 + ラベル
        } else {
            map.setMapTypeId('terrain'); // 地図 + 地形
        }
    });

    // 進行方向を上にするトグルスイッチ
    const tiltViewToggle = document.getElementById('tilt-view-toggle');
    tiltViewToggle.addEventListener('change', (event) => {
        if (isVectorMap) {
            // ベクターマップの場合：チルト表示の切り替え
            isTiltView = event.target.checked;
            const isChecked = event.target.checked;
            isTiltView = isChecked;
            localStorage.setItem('isTiltViewEnabled', isChecked);
            map.setTilt(isTiltView ? TILT_ANGLE : 0);
            // チルト表示、現在の進行方向に地図の向きを反映させる
            const heading = (isTiltView && currentPointIndex + 1 < routePoints.length) ?
                getHeading(routePoints[currentPointIndex], routePoints[currentPointIndex + 1]) : 0;
            map.setHeading(heading);
        }
    });

    // タブが再度表示されたときにWake Lockを再取得する
    document.addEventListener('visibilitychange', async () => {
        if (isTourRunning && document.visibilityState === 'visible') {
            await requestWakeLock();
        }
    });

    // 手動での速度変更を検知
    speedInput.addEventListener('input', () => {
        autoTravelSpeed = parseFloat(speedInput.value) || 0;
        localStorage.setItem('autoTravelSpeed', autoTravelSpeed);
        if (!isTourRunning && !bleDevice?.gatt.connected) actualSpeedKmh = autoTravelSpeed;
    });

    [originInput, destinationInput].forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                calculateAndDisplayRoute();
            }
        });
    });

    // ユーザーが手動で入力した場合、保存されたLatLngをクリアする
    originInput.addEventListener('input', () => {
        originLatLng = null;
    });
    destinationInput.addEventListener('input', () => {
        destinationLatLng = null;
    });

    //const splitter = document.getElementById('splitter');
    const mapDiv = document.getElementById('map');
    const streetViewDiv = document.getElementById('street-view');

    // モバイル端末向けに、ストリートビュータップで方向コントロールの表示/非表示を切り替え
    const directionControlOverlay = document.getElementById('direction-control-overlay');
    const svCustomControls = document.getElementById('sv-custom-controls');
    // const mapCustomControls = document.getElementById('map-custom-controls'); // map.controlsに移動したので不要
    // streetViewDiv.addEventListener('click', (e) => {
    //     // コントロール自体をクリックした場合は何もしない
    //     if (directionControlOverlay.contains(e.target) || svCustomControls.contains(e.target)) {
    //         return;
    //     }
    //     //const isSvVisible = directionControlOverlay.style.opacity === '1';
    //     //const newSvOpacity = isSvVisible ? '0' : '1';
    //     //const newSvPointerEvents = isSvVisible ? 'none' : 'auto';
    //     //directionControlOverlay.style.opacity = newSvOpacity;
    //     //directionControlOverlay.style.pointerEvents = newSvPointerEvents;
    //     //svCustomControls.style.opacity = newSvOpacity;
    //     //svCustomControls.style.pointerEvents = newSvPointerEvents;
    // });

    // mapDivのクリックイベントリスナーも修正
    // mapDiv.addEventListener('click', (e) => {
    //     // mapDivの領域内、かつコントロール自体ではない場合
    //     if (mapCustomControls.contains(e.target) || mapControlsContainer.contains(e.target)) {
    //         return;
    //     }
    //     const isVisible = mapCustomControls.style.opacity === '1';
    //     const newOpacity = isVisible ? '0' : '1';
    //     const newPointerEvents = isVisible ? 'none' : 'auto';
    //     mapCustomControls.style.opacity = newOpacity;
    //     mapCustomControls.style.pointerEvents = newPointerEvents;
    //     mapControlsContainer.style.opacity = newOpacity;
    //     mapControlsContainer.style.pointerEvents = newPointerEvents;

    // });
    // 初期比率を設定（localStorageから読み込む）
    const savedRatio = localStorage.getItem('splitRatio') || '7:3';
    setSplitRatio(savedRatio);

    const isMobile = window.innerWidth <= 767;

    window.addEventListener('resize', () => {
        if (isFallbackModeActive) return;
        const currentRatio = localStorage.getItem('splitRatio');
        if (currentRatio) setSplitRatio(currentRatio);
    });
}

function loadMapsScript() {
    if (window.google && window.google.maps) {
        initMap();
        return;
    }

    // Google Maps APIキーが無効だった場合に呼び出されるコールバック
    window.gm_authFailure = function () {
        console.error("Google Maps API key authentication failed. Clearing the stored key.");
        // 保存されている無効なAPIキーを削除
        localStorage.removeItem('streetMoViewApiKey');
        // ページをリロードして、再度キー入力を促す
        location.reload();
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

function disableApiDependentFeatures(disabled) {
    routeButton.disabled = disabled;
    loadGpxButton.disabled = disabled;
    // 他のAPI依存機能があればここに追加
}

let GOOGLE_MAPS_API_KEY = localStorage.getItem('streetMoViewApiKey');
let initialLocation = { lat: 35.681236, lng: 139.767125 }; // デフォルト: 東京駅

// APIキーを読み込む前に、まずlocalStorageからホーム位置を読み込んでおく
// これにより、APIキー入力プロンプトが表示される前に地図の中心位置が決まる
const savedHomeBeforeApi = localStorage.getItem('streetMoViewHomeLocation');
if (savedHomeBeforeApi) {
    try {
        const homeCoords = JSON.parse(savedHomeBeforeApi);
        if (homeCoords && typeof homeCoords.lat === 'number' && typeof homeCoords.lng === 'number') {
            initialLocation = homeCoords;
        }
    } catch (e) { /* パース失敗時はデフォルト値を使用 */ }
}

window.addEventListener('DOMContentLoaded', () => {
    // アプリ全体のフルスクリーンボタン（ページ全体をフルスクリーン）
    fullscreenButton = document.getElementById('fullscreen-button');
    fullscreenButton.addEventListener('click', toggleFullscreen);
    // fullscreenchangeイベントは1つのリスナーで両方のボタンを更新できるので、ここでは重複して登録しない
    document.addEventListener('fullscreenchange', updateFullscreenButtonState);

    const savedAutoTravelSpeed = localStorage.getItem('autoTravelSpeed') || '20';
    autoTravelSpeed = parseInt(savedAutoTravelSpeed, 10);
    speedInput.value = autoTravelSpeed;

    // --- 保存された設定を読み込む ---
    const savedVoiceEnabled = localStorage.getItem('isVoiceGuidanceEnabled');
    if (savedVoiceEnabled !== null) {
        isVoiceGuidanceEnabled = (savedVoiceEnabled === 'true');
    }
    voiceGuidanceToggle.checked = isVoiceGuidanceEnabled;

    const savedGeocodeInterval = localStorage.getItem('geocodeIntervalDistance');
    if (savedGeocodeInterval !== null) {
        geocodeIntervalDistance = parseInt(savedGeocodeInterval, 10);
    }
    geocodeIntervalInput.value = geocodeIntervalDistance;

    const savedThreshold = localStorage.getItem('autoBoostThreshold');
    if (savedThreshold !== null) {
        autoBoostThreshold = parseInt(savedThreshold, 10);
    }
    autoBoostThresholdInput.value = autoBoostThreshold;

    const savedGradientLimiter = localStorage.getItem('gradientLimiter');
    if (savedGradientLimiter !== null) {
        gradientLimiter = parseInt(savedGradientLimiter, 10);
    }
    gradientLimiterInput.value = gradientLimiter;

    const savedSpeedLimiter = localStorage.getItem('speedLimiter');
    if (savedSpeedLimiter !== null) {
        speedLimiter = parseInt(savedSpeedLimiter, 10);
    }
    speedLimiterInput.value = speedLimiter;

    const savedIsTiltView = localStorage.getItem('isTiltViewEnabled');
    if (savedIsTiltView !== null) {
        isTiltView = (savedIsTiltView === 'true');
    }
    // isVectorMapが確定した後にUIに反映させるため、ここでは変数のみ更新

    const savedShowUserContent = localStorage.getItem('showUserContent');
    if (savedShowUserContent !== null) {
        showUserContent = (savedShowUserContent === 'true');
    }
    document.getElementById('user-content-toggle').checked = showUserContent;
    // panoramaオブジェクトが生成された後に反映させるため、ここではUIのみ更新


    // ---------------------------------

    setLanguage(currentLang); // ★最初に言語を設定

    let GOOGLE_MAPS_API_KEY = localStorage.getItem('streetMoViewApiKey');

    if (GOOGLE_MAPS_API_KEY) {
        loadMapsScript();
    } else {
        const promptMessages = {
            ja: 'このアプリケーションを利用するにはGoogle Maps APIキーが必要です。\nAPIキーを入力してください。キーはブラウザに保存され、外部には送信されません。',
            en: 'A Google Maps API Key is required to use this application.\nPlease enter your API key. It will be stored in your browser and will not be sent externally.'
        };
        GOOGLE_MAPS_API_KEY = prompt(promptMessages[currentLang]);
        if (GOOGLE_MAPS_API_KEY && GOOGLE_MAPS_API_KEY.trim() !== '') {
            localStorage.setItem('streetMoViewApiKey', GOOGLE_MAPS_API_KEY);
            // キーを保存したらリフレッシュしてAPIスクリプトを読み込ませる
            setTimeout(() => {
                location.reload();
            }, 100);
            return; // リフレッシュするので以降の処理は不要
        } else {
            // キーが入力されなかった場合はブランクページに移動
            //window.location.href = 'about:blank';
            // 代わりにメッセージを表示する改善案
            document.body.innerHTML = '<h1>Google Maps API Key is required. Please reload and enter your key.</h1>';
            return;
        }
    }

    // グラフのポップアップ用のスタイルを<head>に追加
    const style = document.createElement('style');
    style.textContent = `
        #chart-popup::after {
            content: '';
            position: absolute;
            bottom: -10px; /* 吹き出しの下にくっつける */
            left: 50%;
            transform: translateX(-50%);
            border-width: 10px 10px 0;
            border-style: solid;
            border-color: white transparent transparent transparent;
            /* 枠線と合わせるための追加スタイル */
            filter: drop-shadow(0 1px 0px #ccc);
        }
    `;
    document.head.appendChild(style);

});
/*-
TODOトンネル標高半自動補正機能：標高グラフでトンネルの上の山頂上付近でボタンを押すとトンネルの入口、出口を探して標高データを補正しグラフに反映させる
TODO目標地点の設定と目標地方角ロック機能（ベクターマップ時）
TODO経路をアペンドできるようにする
TODOパワー値を指定しての自動ツアー
TODO経路設定メニューの調整
BUG代替表示モードからの復帰でちゃんと元の表示に戻ってない
BUGPOIクリックしたときマップの回転がリセットされる
BUGストリートビューやマップのフルスクリーンボタンの動作がちゃんとしてない
*/