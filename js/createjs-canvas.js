var irysius = irysius || {};

irysius.createJsCanvas = {
    initialized: false,
    stage: null,
    canvas: null,
    $container: null,
    preload: null,
    manifest: [],
    _width: 0,
    _height: 0,
    width: function () {
        var self = irysius.createJsCanvas;
        return self._width;
    },
    height: function () {
        var self = irysius.createJsCanvas;
        return self._height;
    },
    find: function (name) {
        var self = irysius.createJsCanvas;
        if (!self.stage) return null;
        return self.stage.getChildByName(name);
    },
    init: function (canvasId) {
        var self = irysius.createJsCanvas;
        self.canvas = document.getElementById(canvasId);
        self.$container = $($(self.canvas).parent());
        $(window).resize(function () {
            self._resizing();
        });

        self.stage = new createjs.Stage(self.canvas);
        //createjs.Touch.enable(self.stage);
        self.preload = new createjs.LoadQueue(true);
        self.preload.addEventListener('complete', self._prepareAssets);

        if (self.manifest && self.manifest.length > 0) {
            self.preload.loadManifest(self.manifest, false);
        }

        self.preload.load();
        self.initialized = true;
    },
    prepareAssets: function (context) { },
    _prepareAssets: function () {
        var self = irysius.createJsCanvas;
        console.log('preparing assets');
        self._resizing();
        self.prepareAssets(self);
        self.run();
    },
    resizing: function (width, height) { },
    _resizing: function () {
        var self = irysius.createJsCanvas;
        var width = self.$container.width();
        var height = self.$container.height();
        self.canvas.width = width;
        self.canvas.height = height;
        self._width = width;
        self._height = height;
        console.log('resizing to: ' + width + 'x' + height);

        self.resizing(width, height);
    },
    run: function () {
        var self = irysius.createJsCanvas;
        console.log('stage running.');
        createjs.Ticker.setInterval(1000 / self._vars.fps.target);
        createjs.Ticker.addEventListener('tick', self._tick);
    },
    _tick: function () {
        var self = irysius.createJsCanvas;
        self._update();
        self._draw();
    },
    _vars: {
        prevTime: 0,
        fps: {
            target: 40, // Good target for mobile.
            curr: 0,
            max: 0,
            min: 1000,
            track: false
        },
        reset: function () {
            var self = irysius.createJsCanvas;
            self._vars.prevTime = 0;
            self._vars.fps.target = 40;
            self._vars.fps.curr = 0;
            self._vars.fps.max = 0;
            self._vars.fps.min = 1000;
            self._vars.fps.track = false;
        }
    },
    vars: {},
    update: function (context, elapsedTime) { },
    _update: function () {
        var self = irysius.createJsCanvas;
        var totalTime = createjs.Ticker.getTime();
        var elapsedTime = totalTime - self._vars.prevTime;
        self._vars.prevTime = totalTime;

        self._vars.fps.curr = Math.round(10000 / elapsedTime) / 10;
        if (!self._vars.fps.track) {
            if (self._vars.fps.curr > self._vars.fps.target * 0.90) {
                setTimeout(function () {
                    self._vars.fps.track = true;
                }, 5000)
            }
        } else {
            if (self._vars.fps.curr > self._vars.fps.max) self._vars.fps.max = self._vars.fps.curr;
            if (self._vars.fps.curr < self._vars.fps.min) self._vars.fps.min = self._vars.fps.curr;
        }
        self.update(self, elapsedTime);
    },
    _draw: function () {
        var self = irysius.createJsCanvas;
        self.stage.update();
    },
    stop: function () {
        var self = irysius.createJsCanvas;
        console.log('stage stopped.');
        createjs.Ticker.removeEventListener('tick', self._tick);
        self._vars.fps.track = false;
        self._vars.fps.max = 0;
        self._vars.fps.min = 1000;
    }
}