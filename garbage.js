var ImageRender;
(function (ImageRender) {
    "use strict";
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var HttpRequest = (function () {
        function HttpRequest(url) {
            this.url = void 0;
            this.responseText = void 0;
            this.url = url;
            this.onSuccess = void 0;
        }
        Object.defineProperty(HttpRequest.prototype, "onSuccess", {
            set: function (success) {
                this.onsuccess = success ? success : function () { };
            },
            enumerable: true,
            configurable: true
        });
        HttpRequest.prototype.execute = function () {
            var request = HttpRequest.createXMLHttpRequest();
            this.url += "&_100=_Hybrid";
            request.open("GET", this.url, false);
            if (HttpRequest.WITH_CREDENTIALS in request) {
                request.withCredentials = true;
            }
            request.timeout = 70000;
            var self = this;
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        self.responseText = request.responseText;
                        self.onsuccess();
                    }
                    else {
                        self.responseText = request.responseText;
                    }
                    request = void 0;
                    self = void 0;
                }
            };
            request.send();
        };
        HttpRequest.createXMLHttpRequest = function () {
            try {
                return new XMLHttpRequest();
            }
            catch (e) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
            }
            return void 0;
        };
        return HttpRequest;
    }());
    HttpRequest.WITH_CREDENTIALS = "withCredentials";
    ImageRender.HttpRequest = HttpRequest;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var Browser = (function () {
        function Browser() {
            var nAgent = navigator.userAgent;
            var isIe = (nAgent.indexOf("MSIE") !== -1) || (nAgent.match(/Trident.*rv[ :]*11\./));
            if (isIe) {
                Browser.browser = "IE";
            }
            Browser.is64 = nAgent.indexOf("x64") > 0;
        }
        Object.defineProperty(Browser, "IE", {
            get: function () {
                this.init();
                return this.browser === "IE";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser, "Is64", {
            get: function () {
                this.init();
                return this.is64;
            },
            enumerable: true,
            configurable: true
        });
        Browser.init = function () {
            if (!this.browser) {
                new Browser();
            }
        };
        Browser.getOpenerWindow = function () {
            var parent = window;
            while (this.hasValidParent(parent)) {
                parent = parent.opener;
            }
            return parent;
        };
        Browser.hasValidParent = function (parent) {
            try {
                if (parent.opener && parent.opener !== parent) {
                    return parent.opener.location.host === parent.location.host;
                }
            }
            catch (ex) {
            }
            return false;
        };
        return Browser;
    }());
    Browser.browser = void 0;
    Browser.is64 = false;
    ImageRender.Browser = Browser;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var Logger = (function () {
        function Logger() {
        }
        Logger.error = function (message) {
            if (this.level >= 1) {
                window.console.error.apply(window.console, this.getText(message, "err"));
            }
        };
        Logger.info = function (message) {
            if (this.level >= 3) {
                window.console.info.apply(window.console, this.getText(message, "info"));
            }
        };
        Logger.getText = function (message, level) {
            var date = new Date();
            var format = "YYYY-MM-DD hh:mm:ss.SSS";
            format = format.replace(/YYYY/g, date.getFullYear().toString());
            format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
            format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
            format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
            format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
            format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
            if (format.match(/S/g)) {
                var ms = ('00' + date.getMilliseconds()).slice(-3);
                var length_1 = format.match(/S/g).length;
                for (var i = 0; i < length_1; i++) {
                    format = format.replace(/S/, ms.substring(i, i + 1));
                }
            }
            var texts = [];
            texts.push(format);
            texts.push("[" + level + "]");
            texts.push(message);
            return texts;
        };
        return Logger;
    }());
    Logger.level = 1;
    ImageRender.Logger = Logger;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var Version = (function () {
        function Version(major, minor, revision, minorRevision) {
            if (minorRevision === void 0) { minorRevision = 0; }
            this.major = 0;
            this.minor = 0;
            this.revision = 0;
            this.minorRevision = 0;
            this.major = major;
            this.minor = minor;
            this.revision = revision;
            this.minorRevision = minorRevision;
        }
        Version.prototype.compare = function (that) {
            if (this.major !== that.major) {
                return this.major - that.major;
            }
            if (this.minor !== that.minor) {
                return this.minor - that.minor;
            }
            return this.revision - that.revision;
        };
        Version.parse = function (version) {
            try {
                var data = version.split(".");
                return new Version(parseInt(data[0], 10), parseInt(data[1], 10), parseInt(data[2], 10), parseInt(data[3], 10));
            }
            catch (ex) {
            }
            return void 0;
        };
        return Version;
    }());
    ImageRender.Version = Version;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var ImageRenderAxBase = (function () {
        function ImageRenderAxBase(settings) {
            this.active = false;
            this.settings = settings;
        }
        Object.defineProperty(ImageRenderAxBase.prototype, "isAlive", {
            get: function () { return this.active; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageRenderAxBase.prototype, "isAlive2", {
            get: function () { return this.active; },
            enumerable: true,
            configurable: true
        });
        ;
        ImageRenderAxBase.prototype.getHostName = function () { return ""; };
        ImageRenderAxBase.prototype.subscribe = function (studies) { };
        ImageRenderAxBase.prototype.subscribeStudy = function (studies) { };
        ImageRenderAxBase.prototype.unsubscribe = function (studies, validate) { };
        ImageRenderAxBase.prototype.updatePriority = function (index, series) { };
        ImageRenderAxBase.prototype.getStatus = function (id, dataSource) { return -1; };
        ImageRenderAxBase.prototype.getStudyStatus = function () { return {}; };
        ImageRenderAxBase.prototype.render = function (url, image) { return false; };
        ImageRenderAxBase.prototype.getHeader = function (seriesKey) { return void 0; };
        ImageRenderAxBase.prototype.prerender = function (id, urls) { return false; };
        ImageRenderAxBase.prototype.useImageCache = function () { return false; };
        ImageRenderAxBase.prototype.revokeUrl = function (url) { };
        ImageRenderAxBase.prototype.playback = function (play) { };
        ImageRenderAxBase.prototype.updateSettings = function (settings) { };
        ImageRenderAxBase.prototype.handlePreset = function (uid) { return false; };
        ImageRenderAxBase.prototype.refreshSettings = function () { };
        ImageRenderAxBase.prototype.subscribeFolder = function (context) { };
        ImageRenderAxBase.prototype.uninitialize = function () { };
        ImageRenderAxBase.prototype.uninitialize2 = function (action) { };
        ImageRenderAxBase.prototype.debugLog = function (message) { };
        return ImageRenderAxBase;
    }());
    ImageRender.ImageRenderAxBase = ImageRenderAxBase;
})(ImageRender || (ImageRender = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ImageRender;
(function (ImageRender) {
    "use strict";
    var ImageRenderAx = (function (_super) {
        __extends(ImageRenderAx, _super);
        function ImageRenderAx(settings, engine) {
            var _this = _super.call(this, settings) || this;
            _this.engine = void 0;
            _this.delimiter = "$";
            _this.presetUids = [];
            _this.enableHeader = false;
            _this.headerSops = [];
            _this.server = void 0;
            _this.server = window.location.hostname;
            _this.setEngine(engine);
            if (_this.active) {
                ImageRender.Logger.info("ImageRender ActiveX initialized");
            }
            return _this;
        }
        ImageRenderAx.prototype.refreshSettings = function () {
            try {
                this.engine.RefreshSettings(JSON.stringify({ "serverName": this.server }));
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX RefreshSettings failed. " + e.message);
            }
        };
        ImageRenderAx.prototype.uninitialize2 = function (action) {
            try {
                var settings = [this.delimiter];
                settings.push(this.server);
                settings.push(action.toString());
                this.engine.Uninitialize2(settings.join(this.delimiter));
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX Uninitialize2 failed. " + e.message);
            }
        };
        ImageRenderAx.prototype.debugLog = function (message) {
            try {
                this.engine.DebugLog(message);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX DebugLog failed. " + message + " " + e.message);
            }
        };
        ;
        ImageRenderAx.prototype.initializeSettings = function () { return false; };
        ImageRenderAx.prototype.setEngine = function (engine) { };
        ImageRenderAx.prototype.localInitialize = function () { };
        ImageRenderAx.prototype.setEnableHeader = function (enable) {
            this.enableHeader = enable;
            if (this.enableHeader) {
                this.headerSops = ["1.2.840.10008.5.1.4.1.1.1.2", "1.2.840.10008.5.1.4.1.1.1.2.1", "1.2.840.10008.5.1.4.1.1.13.1.3"];
            }
        };
        ImageRenderAx.prototype.onError = function (message) {
            if (!this.active) {
                return;
            }
            try {
                if (this.engine.GetHostName()) {
                    ImageRender.Logger.error(message);
                }
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender process is not running!");
                this.active = false;
            }
        };
        return ImageRenderAx;
    }(ImageRender.ImageRenderAxBase));
    ImageRender.ImageRenderAx = ImageRenderAx;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var ImageRenderAx550 = (function (_super) {
        __extends(ImageRenderAx550, _super);
        function ImageRenderAx550(settings, engine) {
            var _this = _super.call(this, settings, engine) || this;
            _this.clientId = void 0;
            _this.subscriptions = [];
            _this.activeSeries = [];
            if (!_this.clientId) {
                _this.clientId = _this.getClientId();
            }
            return _this;
        }
        ImageRenderAx550.prototype.subscribe = function (studies) {
            if (!studies || studies.length === 0) {
                return;
            }
            var study, series, seriesKey;
            for (var i = 0; i < studies.length; i++) {
                study = studies[i];
                for (var j = 0; j < study.series.length; j++) {
                    series = study.series[j];
                    var parts = this.getUrlParts(series);
                    if (!parts || parts.length !== 2) {
                        continue;
                    }
                    seriesKey = this.getKey(series.uuid, study.dataSource);
                    try {
                        this.engineSubscribe(this.server, seriesKey, 1, parts[0], parts[1]);
                        if (this.subscriptions.indexOf(seriesKey) === -1) {
                            this.subscriptions.push(seriesKey);
                        }
                        ImageRender.Logger.info("Subscribe - " + seriesKey + " - 1");
                    }
                    catch (e) {
                        this.onError("ImageRender ActiveX Subscribe failed. " + series.uuid + " " + e.message);
                    }
                }
            }
        };
        ImageRenderAx550.prototype.unsubscribe = function (studies, validate) {
            var _this = this;
            var seriesKeys = [];
            if (!studies || studies.length === 0) {
                seriesKeys = this.subscriptions;
                this.subscriptions = [];
                this.activeSeries = [];
            }
            else {
                var study = void 0, series = void 0;
                if (validate) {
                    var seriesIds = [];
                    for (var i = 0; i < studies.length; i++) {
                        study = studies[i];
                        for (var j = 0; j < study.series.length; j++) {
                            series = study.series[j];
                            seriesIds.push(this.getKey(series.uuid, study.dataSource));
                        }
                    }
                    seriesKeys = seriesIds.filter(function (id) { return _this.subscriptions.indexOf(id) === -1; });
                    this.subscriptions = seriesIds;
                }
                else {
                    var seriesKey = void 0, index = void 0;
                    for (var i = 0; i < studies.length; i++) {
                        study = studies[i];
                        for (var j = 0; j < study.series.length; j++) {
                            series = study.series[j];
                            seriesKey = this.getKey(series.uuid, study.dataSource);
                            seriesKeys.push(seriesKey);
                            index = this.subscriptions.indexOf(seriesKey);
                            if (index !== -1) {
                                this.subscriptions.splice(index, 1);
                            }
                            for (var k = 0; k < this.activeSeries.length; k++) {
                                if (this.activeSeries[k] === seriesKey) {
                                    this.activeSeries[k] = "";
                                }
                            }
                        }
                    }
                }
            }
            if (seriesKeys.length === 0) {
                return;
            }
            try {
                this.engine.Unsubscribe(this.server, seriesKeys.join(this.delimiter));
                ImageRender.Logger.info("Unsubscribe - " + seriesKeys);
            }
            catch (e) {
                this.onError("ImageRender ActiveX Unsubscribe failed. " + e.message);
            }
        };
        ImageRenderAx550.prototype.updatePriority = function (index, series) {
            var oldSeriesKey = this.activeSeries[index];
            if (!!oldSeriesKey && this.activeSeries.indexOf(oldSeriesKey) !== this.activeSeries.lastIndexOf(oldSeriesKey)) {
                oldSeriesKey = void 0;
            }
            var seriesKey = void 0, parts = [];
            if (!!series) {
                seriesKey = this.getKey(series.uuid, series.studyId.dataSource);
                parts = this.getUrlParts(series);
                if (!parts || parts.length !== 2) {
                    return;
                }
            }
            this.activeSeries[index] = seriesKey;
            try {
                if (!!oldSeriesKey && oldSeriesKey !== seriesKey) {
                    this.engine.Subscribe(this.server, oldSeriesKey, 1, "", "");
                    ImageRender.Logger.info("Subscribe - " + oldSeriesKey + " - 1");
                }
                if (!!seriesKey) {
                    this.engine.Subscribe(this.server, seriesKey, 0, parts[0], parts[1]);
                    if (this.subscriptions.indexOf(seriesKey) === -1) {
                        this.subscriptions.push(seriesKey);
                    }
                    ImageRender.Logger.info("Subscribe - " + seriesKey + " - 0");
                }
            }
            catch (e) {
                this.onError("ImageRender ActiveX Subscribe failed. " + e.message);
            }
        };
        ImageRenderAx550.prototype.getStatus = function (seriesId, dataSource) {
            try {
                var key = this.getKey(seriesId, dataSource);
                var progress = this.engine.GetStatus(key);
                if (progress === -1 && this.subscriptions.indexOf(key) !== -1) {
                    return 0;
                }
                return progress;
            }
            catch (e) {
                this.onError("ImageRender ActiveX GetStatus failed. " + seriesId + " " + e.message);
            }
            return -1;
        };
        ImageRenderAx550.prototype.render = function (url, image) {
            if (!url) {
                return false;
            }
            try {
                return this.engine.RenderImage(this.clientId, url, image);
            }
            catch (e) {
                this.onError("ImageRender ActiveX RenderImage failed. " + url + " " + e.message);
            }
            return false;
        };
        ImageRenderAx550.prototype.revokeUrl = function (url) {
            try {
                var path = decodeURIComponent(url);
                path = path.replace(/file?:\/*/, '');
                this.engine.RevokeUrl(path);
            }
            catch (e) {
                this.onError("ImageRender ActiveX RevokeUrl failed. " + url + " " + e.message);
            }
        };
        ImageRenderAx550.prototype.uninitialize = function () {
            try {
                this.engine.Uninitialize();
            }
            catch (e) {
                this.onError("ImageRender ActiveX Uninitialize failed. " + e.message);
            }
        };
        ImageRenderAx550.prototype.uninitialize2 = function (action) {
            this.uninitialize();
        };
        ImageRenderAx550.prototype.getHeader = function (seriesKey) {
            try {
                if (this.enableHeader) {
                    return this.engine.DicomHeader(seriesKey);
                }
            }
            catch (e) {
                this.onError("ImageRender ActiveX DicomHeader failed. " + seriesKey + " " + e.message);
            }
            return void 0;
        };
        ImageRenderAx550.prototype.updateSettings = function (settings) {
            var preset = settings.presets;
            if (!preset.ipssUid && !!preset.windowCenter && !!preset.windowWidth && !preset.autoPPV) {
                this.presetUids.push(preset.presetUid);
            }
        };
        ImageRenderAx550.prototype.handlePreset = function (uid) {
            var pos = uid.indexOf('=');
            if (pos !== -1) {
                uid = uid.substring(pos + 1, uid.length);
            }
            return this.presetUids.indexOf(uid) !== -1;
        };
        ImageRenderAx550.prototype.initializeSettings = function () {
            try {
                var axSettings = [this.delimiter];
                axSettings.push(this.settings.serviceUrls[1]);
                var mode = this.getHybridSettings();
                if (!mode) {
                    this.onError("Reading hybrid mode settings failed!");
                    return false;
                }
                axSettings.push(!!mode.LogLevel ? mode.LogLevel.toString() : '1');
                var is64 = ImageRender.Browser.Is64;
                var index = is64 ? 0 : 1;
                var temp = 0;
                if (!!mode.DicomHeaderSubscription) {
                    temp = mode.DicomHeaderSubscription[index];
                }
                axSettings.push(temp.toString());
                this.setEnableHeader(temp === 1);
                axSettings.push(mode.MaxImageChannels.toString());
                temp = is64 ? 0 : 1430;
                axSettings.push(temp.toString());
                axSettings.push(mode.CacheMode[index].toString());
                temp = is64 ? mode.MaxXENAMemory[index] : 0;
                axSettings.push(temp.toString());
                temp = is64 ? 6 : 1;
                axSettings.push(temp.toString());
                temp = 15;
                axSettings.push(temp.toString());
                axSettings.push(mode.MaxRenderEngines[index].toString());
                temp = mode.ImageType;
                if (!temp || temp === 2) {
                    temp = 0;
                }
                axSettings.push(temp.toString());
                if (!mode.CacheLocation) {
                    mode.CacheLocation = " ";
                }
                axSettings.push(mode.CacheLocation);
                var settings = axSettings.join(this.delimiter);
                this.engine.Initialize(settings);
                this.localInitialize();
                return true;
            }
            catch (e) {
                this.onError("ImageRender ActiveX Initialize failed in ImageRenderAx550. " + e.message);
            }
            return false;
        };
        ImageRenderAx550.prototype.localInitialize = function () {
            this.parsePresets();
            this.setColorTable();
        };
        ImageRenderAx550.prototype.setEngine = function (engine) {
            this.engine = engine;
            this.active = this.initializeSettings();
            if (this.active) {
                this.localInitialize();
            }
            else {
                this.active = false;
                this.engine = void 0;
            }
        };
        ImageRenderAx550.prototype.engineSubscribe = function (server, seriesKey, priority, imageKeys, extImageKeys) {
            this.engine.Subscribe(server, seriesKey, priority, imageKeys, extImageKeys);
        };
        ImageRenderAx550.prototype.engineSetColorTable = function (id, hex) {
            this.engine.SetColorTable(id, hex);
        };
        ImageRenderAx550.prototype.getKey = function (id, source) {
            if (!id) {
                return void 0;
            }
            var key = [];
            key.push(id);
            key.push(source);
            return key.join("+");
        };
        ImageRenderAx550.prototype.getUrlParts = function (series) {
            var urlParts = [];
            var extParts = [];
            var image, tempSeries;
            var length = 0;
            if (series.images) {
                length = series.images.length;
            }
            for (var i = 0; i < length; i++) {
                image = series.images[i];
                tempSeries = !!image.origSeries ? image.origSeries : image.series;
                urlParts.push("&studyUID=");
                urlParts.push(tempSeries.studyId.studyInstanceId);
                urlParts.push("&dataSource=");
                urlParts.push(encodeURIComponent(tempSeries.studyId.dataSource));
                urlParts.push("&seriesUID=");
                urlParts.push(tempSeries.iuid);
                urlParts.push("&objectUID=");
                urlParts.push(image.iuid);
                urlParts.push("&frameNumber=");
                urlParts.push(image.frame.toString());
                urlParts.push(this.delimiter);
                if (this.enableHeader) {
                    extParts.push("&studyUID=");
                    extParts.push(tempSeries.studyId.studyInstanceId);
                    extParts.push("&dataSource=");
                    extParts.push(encodeURIComponent(tempSeries.studyId.dataSource));
                    extParts.push("&seriesUID=");
                    extParts.push(tempSeries.iuid);
                    extParts.push("&objectUID=");
                    extParts.push(image.iuid);
                    extParts.push("&frameNumber=");
                    extParts.push(image.frame.toString());
                    extParts.push("&anonymous=");
                    extParts.push(this.settings.anonymous.toString());
                    extParts.push("&onlyHeader=");
                    extParts.push((this.headerSops.indexOf(image.sopClassUid) !== -1).toString());
                    extParts.push(this.delimiter);
                }
            }
            return [urlParts.join(""), extParts.join("")];
        };
        ImageRenderAx550.prototype.setColorTable = function () {
            try {
                var colorTables = this.settings.colorTables;
                if (!!colorTables && colorTables.length > 0) {
                    var colorTable = void 0;
                    for (var i = 0; i < colorTables.length; i++) {
                        colorTable = colorTables[i];
                        var hex = this.toHexString(colorTable.Table);
                        this.engineSetColorTable(colorTable.Id, hex);
                    }
                }
            }
            catch (e) {
                this.onError("ImageRender ActiveX SetColorTable failed. " + e.message);
            }
        };
        ImageRenderAx550.prototype.parsePresets = function () {
            var _this = this;
            if (!this.presetUids) {
                this.presetUids = [];
            }
            var allPresets = this.settings.presets;
            if (!allPresets) {
                return;
            }
            try {
                for (var i = 0; i < allPresets.length; i++) {
                    var presetGroup = allPresets[i];
                    if (!presetGroup) {
                        continue;
                    }
                    var _loop_1 = function (j) {
                        var presets = presetGroup[j].presets;
                        if (!presets) {
                            return "continue";
                        }
                        Object.keys(presets).forEach(function (key) {
                            var preset = presets[key];
                            if (preset.ipss || preset.ipssUid || preset.autoPPV) {
                                return;
                            }
                            if (preset.displayAsAcquired) {
                                _this.presetUids.push(key);
                                return;
                            }
                            if (!!preset.windowCenter && !!preset.windowWidth) {
                                _this.presetUids.push(key);
                            }
                        });
                    };
                    for (var j = 0; j < presetGroup.length; j++) {
                        _loop_1(j);
                    }
                }
            }
            catch (e) {
                this.onError("ImageRender ActiveX Preset parsing failed. " + e.message);
            }
        };
        ImageRenderAx550.prototype.toHexString = function (table) {
            var hexString = [];
            for (var i = 0; i < table.length; i++) {
                var _a = table[i], r = _a[0], g = _a[1], b = _a[2];
                var bin = r << 16 | g << 8 | b;
                hexString.push((function (h) { return new Array(7 - h.length).join("0") + h; })(bin.toString(16).toUpperCase()));
            }
            return hexString.join("");
        };
        ImageRenderAx550.prototype.getHybridSettings = function () {
            if (!this.clientId) {
                this.clientId = this.getClientId();
            }
            var url = this.settings.serviceUrls[0] + "/settings?userName=" + this.settings.user + "&hostName=Synapse&clientid=" + this.clientId;
            var request = new ImageRender.HttpRequest(url);
            var mode = void 0;
            request.onSuccess = function () {
                var settings = JSON.parse(request.responseText);
                if (!!settings && !!settings.hybridMode) {
                    mode = settings.hybridMode;
                    if (!!settings.subscriptionRules) {
                        mode.CacheLocation = settings.subscriptionRules.ImageCachePath;
                    }
                }
            };
            request.execute();
            return mode;
        };
        ImageRenderAx550.prototype.getClientId = function () {
            return "Axxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxZ".replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0;
                var v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        return ImageRenderAx550;
    }(ImageRender.ImageRenderAx));
    ImageRender.ImageRenderAx550 = ImageRenderAx550;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var ImageRenderAx570 = (function (_super) {
        __extends(ImageRenderAx570, _super);
        function ImageRenderAx570(settings, engine) {
            var _this = _super.call(this, settings, engine) || this;
            _this.adapter = void 0;
            if (_this.active) {
                _this.readSettings();
                _this.createAdapter();
                _this.localInitialize();
            }
            return _this;
        }
        ImageRenderAx570.prototype.render = function (url, image) {
            if (!url) {
                return false;
            }
            try {
                return this.adapter.renderImage(this.server, url, image);
            }
            catch (e) {
                this.onError("ImageRender ActiveX RenderImage failed. " + url + " " + e.message);
            }
            return false;
        };
        ImageRenderAx570.prototype.prerender = function (id, urls) {
            try {
                if (!!urls && urls.length > 0) {
                    return this.adapter.prerender(this.server + id, urls.join(this.delimiter));
                }
            }
            catch (e) {
                this.onError("ImageRender ActiveX prerender failed for " + id + " " + e.message);
            }
            return false;
        };
        ImageRenderAx570.prototype.revokeUrl = function (url) {
        };
        ImageRenderAx570.prototype.playback = function (play) {
            try {
                this.engine.Playback(play);
            }
            catch (e) {
                this.onError("ImageRender ActiveX playback failed. " + e.message);
            }
        };
        ImageRenderAx570.prototype.useImageCache = function () {
            return this.active;
        };
        ImageRenderAx570.prototype.subscribeStudy = function (studies) {
            if (!studies || !studies.length) {
                return;
            }
            try {
                this.adapter.subscribeStudy(this.server, studies[0].studyInstanceId, studies[0].dataSource);
            }
            catch (e) {
                this.onError("ImageRender ActiveX subscribe study failed.");
            }
        };
        ImageRenderAx570.prototype.uninitialize2 = function (action) {
            try {
                var settings = [this.delimiter];
                settings.push(this.server);
                settings.push(action.toString());
                this.engine.Uninitialize2(settings.join(this.delimiter));
            }
            catch (e) {
                this.onError("ImageRender ActiveX Uninitialize2 failed. " + e.message);
            }
        };
        ImageRenderAx570.prototype.engineSubscribe = function (server, seriesKey, priority, imageKeys, extImageKeys) {
            this.adapter.subscribe(server, seriesKey, priority, imageKeys, extImageKeys);
        };
        ImageRenderAx570.prototype.engineSetColorTable = function (id, hex) {
            this.adapter.setColorTable(id, hex);
        };
        ImageRenderAx570.prototype.initializeSettings = function () {
            try {
                var axSettings = [this.delimiter];
                axSettings.push(this.settings.version);
                axSettings.push(this.server);
                axSettings.push(this.settings.serviceUrls[0]);
                axSettings.push(this.settings.user);
                axSettings.push(this.settings.token);
                var settings = axSettings.join(this.delimiter);
                this.engine.Initialize(settings);
                return true;
            }
            catch (e) {
                this.onError("ImageRender ActiveX Initialize failed in ImageRenderAx570. " + e.message);
            }
            return false;
        };
        ImageRenderAx570.prototype.setEngine = function (engine) {
            var parent = ImageRender.Browser.getOpenerWindow();
            this.engine = parent.HybridRender;
            if (this.engine !== engine) {
                this.engine = engine;
                this.active = this.initializeSettings();
                parent.HybridRender = this.active ? this.engine : void 0;
            }
            if (!!this.engine) {
                this.active = true;
            }
            else {
                this.active = false;
                parent.HybridRender = void 0;
            }
        };
        ImageRenderAx570.prototype.readSettings = function () {
            var settings = void 0;
            try {
                settings = this.engine.GetSettings(this.server);
            }
            catch (e) {
                this.onError("ImageRender ActiveX GetSettings failed. " + e.message);
            }
            if (!settings) {
                return;
            }
            var json = JSON.parse(settings);
            ImageRender.Logger.level = json.LogLevel;
            this.setEnableHeader(json.EnableHeader);
        };
        ImageRenderAx570.prototype.createAdapter = function () {
            this.adapter = new ImageRender.ImageRenderAdapterAx(this.engine);
            if (!this.adapter.isAlive) {
                this.adapter = new ImageRender.ImageRenderAdapterBase(this.engine);
            }
        };
        return ImageRenderAx570;
    }(ImageRender.ImageRenderAx550));
    ImageRender.ImageRenderAx570 = ImageRenderAx570;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var ImageRenderAx570W = (function (_super) {
        __extends(ImageRenderAx570W, _super);
        function ImageRenderAx570W(settings, engine) {
            return _super.call(this, settings, engine) || this;
        }
        Object.defineProperty(ImageRenderAx570W.prototype, "isAlive2", {
            get: function () {
                var settings = void 0;
                try {
                    settings = this.engine.GetSettings(this.server);
                }
                catch (e) {
                    this.onError("ImageRender ActiveX GetSettings failed in ImageRenderAx570W. " + e.message);
                }
                if (!settings) {
                    return false;
                }
                var json = JSON.parse(settings);
                return !!json.Enabled;
            },
            enumerable: true,
            configurable: true
        });
        ImageRenderAx570W.prototype.getHostName = function () {
            return this.engine.GetHostName();
        };
        ImageRenderAx570W.prototype.getStudyStatus = function () {
            try {
                var status = this.engine.GetStudyStatus();
                return JSON.parse(status || '{}');
            }
            catch (e) {
                this.onError("ImageRender ActiveX GetStudyStatus failed. " + e.message);
            }
            return {};
        };
        ImageRenderAx570W.prototype.subscribeFolder = function (context) {
            if (!context) {
                context.serverName = this.server;
            }
            try {
                this.engine.RefreshSettings(JSON.stringify({ "serverName": this.server, "subscriptionSettings": context }));
            }
            catch (e) {
                this.onError("ImageRender ActiveX subscribe context failed. " + e.message);
            }
        };
        ImageRenderAx570W.prototype.subscribeStudy = function (studies) {
            if (!studies || !studies.length) {
                return;
            }
            try {
                this.engine.SubscribeStudy(this.server, studies[0].studyInstanceId, studies[0].dataSource);
            }
            catch (e) {
                this.onError("ImageRender ActiveX subscribe study failed.");
            }
        };
        ImageRenderAx570W.prototype.setEngine = function (engine) {
            var parent = ImageRender.Browser.getOpenerWindow();
            this.engine = parent.HybridRender;
            if (this.engine !== engine) {
                this.engine = engine;
                this.active = this.initializeSettings();
                parent.HybridRender = this.active ? this.engine : void 0;
            }
            if (!!this.engine) {
                this.active = true;
            }
            else {
                this.active = false;
                parent.HybridRender = void 0;
            }
        };
        ImageRenderAx570W.prototype.initializeSettings = function () {
            try {
                var axSettings = [this.delimiter];
                axSettings.push(this.settings.version);
                axSettings.push(this.server);
                axSettings.push(this.settings.serviceUrls[0]);
                axSettings.push(this.settings.user);
                axSettings.push(this.settings.token);
                var settings = axSettings.join(this.delimiter);
                this.engine.Initialize(settings);
                return true;
            }
            catch (e) {
                this.onError("ImageRender ActiveX Initialize failed in ImageRenderAx570W. " + e.message);
            }
            return false;
        };
        return ImageRenderAx570W;
    }(ImageRender.ImageRenderAx));
    ImageRender.ImageRenderAx570W = ImageRenderAx570W;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var ImageRenderAdapterBase = (function () {
        function ImageRenderAdapterBase(render) {
            this.render = void 0;
            this.active = false;
            this.render = render;
        }
        Object.defineProperty(ImageRenderAdapterBase.prototype, "isAlive", {
            get: function () {
                return this.active;
            },
            enumerable: true,
            configurable: true
        });
        ImageRenderAdapterBase.prototype.renderImage = function (clienId, url, image) {
            try {
                return this.render.RenderImage(clienId, url, image);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender RenderImage failed. " + e.message);
            }
            return false;
        };
        ImageRenderAdapterBase.prototype.playback = function (play) {
            try {
                this.render.Playback(play);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX playback failed. " + e.message);
            }
        };
        ImageRenderAdapterBase.prototype.prerender = function (id, urls) {
            try {
                return this.render.Prerender(id, urls);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX prerender failed for " + id + ". " + e.message);
            }
            return false;
        };
        ImageRenderAdapterBase.prototype.subscribeStudy = function (server, studyId, dataSource) {
            try {
                this.render.SubscribeStudy(server, studyId, dataSource);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX Subscribe Study failed. " + e.message);
            }
        };
        ImageRenderAdapterBase.prototype.setColorTable = function (id, hex) {
            try {
                this.render.SetColorTable(id, hex);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX SetColorTable failed. " + e.message);
            }
        };
        ImageRenderAdapterBase.prototype.subscribe = function (server, seriesKey, priority, imageKeys, extImageKeys) {
            try {
                this.render.Subscribe(server, seriesKey, priority, imageKeys, extImageKeys);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX Subscribe failed. " + e.message);
            }
        };
        return ImageRenderAdapterBase;
    }());
    ImageRender.ImageRenderAdapterBase = ImageRenderAdapterBase;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var ImageRenderAdapterAx = (function (_super) {
        __extends(ImageRenderAdapterAx, _super);
        function ImageRenderAdapterAx(render) {
            var _this = _super.call(this, render) || this;
            _this.adpater = void 0;
            _this.active = _this.createAdapter(render);
            return _this;
        }
        ImageRenderAdapterAx.prototype.renderImage = function (clienId, url, image) {
            try {
                return this.adpater.RenderImage(clienId, url, image);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRenderAdapter RenderImage failed. " + e.message);
            }
            return false;
        };
        ImageRenderAdapterAx.prototype.playback = function (play) {
            try {
                this.adpater.Playback(play);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRenderAdapter ActiveX Playback failed. " + e.message);
            }
        };
        ImageRenderAdapterAx.prototype.prerender = function (id, urls) {
            try {
                return this.adpater.Prerender(id, urls);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRenderAdapter ActiveX Prerender failed for " + id + ". " + e.message);
            }
            return false;
        };
        ImageRenderAdapterAx.prototype.subscribeStudy = function (server, studyId, dataSource) {
            try {
                this.adpater.SubscribeStudy(server, studyId, dataSource);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRenderAdapter ActiveX SubscribeStudy failed. " + e.message);
            }
        };
        ImageRenderAdapterAx.prototype.subscribe = function (server, seriesKey, priority, imageKeys, extImageKeys) {
            try {
                this.adpater.Subscribe(server, seriesKey, priority, imageKeys, extImageKeys);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRenderAdapter ActiveX Subscribe failed. " + e.message);
            }
        };
        ImageRenderAdapterAx.prototype.setColorTable = function (id, hex) {
            try {
                this.adpater.SetColorTable(id, hex);
            }
            catch (e) {
                ImageRender.Logger.error("ImageRenderAdapter ActiveX SetColorTable failed. " + e.message);
            }
        };
        ImageRenderAdapterAx.prototype.createAdapter = function (render) {
            try {
                this.adpater = new ActiveXObject("Fujifilm.Synapse.Viewer.ImageRenderAdapter");
                this.adpater.Initialize(render, ImageRender.Logger.level.toString());
                return true;
            }
            catch (e) {
                ImageRender.Logger.error("ImageRenderAdapter ActiveX creation failed. " + e.message);
            }
            return false;
        };
        return ImageRenderAdapterAx;
    }(ImageRender.ImageRenderAdapterBase));
    ImageRender.ImageRenderAdapterAx = ImageRenderAdapterAx;
})(ImageRender || (ImageRender = {}));
var ImageRender;
(function (ImageRender) {
    "use strict";
    var Factory = (function () {
        function Factory() {
        }
        Factory.create = function (settings) {
            if (!settings.version || !settings.enable || !ImageRender.Browser.IE) {
                return new ImageRender.ImageRenderAxBase(settings);
            }
            var engine = this.createEngine();
            if (!engine) {
                return new ImageRender.ImageRenderAxBase(settings);
            }
            var engineVersion = this.getVersion(engine);
            var version = ImageRender.Version.parse(engineVersion);
            if (!version) {
                ImageRender.Logger.error("Invalid Hybrid Version " + engineVersion);
                return new ImageRender.ImageRenderAxBase(settings);
            }
            var render = void 0;
            if (settings.autoSubscribe) {
                if (version.compare(new ImageRender.Version(5, 7, 0, 0)) === 0) {
                    render = new ImageRender.ImageRenderAx570W(settings, engine);
                }
                else {
                    return new ImageRender.ImageRenderAxBase(settings);
                }
            }
            else {
                if (version.compare(new ImageRender.Version(5, 7, 0, 0)) === 0) {
                    render = new ImageRender.ImageRenderAx570(settings, engine);
                }
                else {
                    render = new ImageRender.ImageRenderAx550(settings, engine);
                }
            }
            if (render.isAlive) {
                return render;
            }
            return new ImageRender.ImageRenderAxBase(settings);
        };
        Factory.createEngine = function () {
            var engine = void 0;
            try {
                var parent_1 = ImageRender.Browser.getOpenerWindow();
                engine = parent_1.HybridRender;
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender ActiveX reading from parent failed. " + e.message);
            }
            if (!engine) {
                try {
                    engine = new ActiveXObject("Fujifilm.Synapse.Viewer.ImageRender");
                }
                catch (e) {
                    ImageRender.Logger.error("ImageRender ActiveX creation failed. " + e.message);
                }
            }
            return engine;
        };
        Factory.getVersion = function (engine) {
            try {
                return engine.GetVersion();
            }
            catch (e) {
                ImageRender.Logger.error("ImageRender get version failed. " + e.message);
            }
            return void 0;
        };
        return Factory;
    }());
    ImageRender.Factory = Factory;
})(ImageRender || (ImageRender = {}));
