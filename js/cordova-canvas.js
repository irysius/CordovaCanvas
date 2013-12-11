var irysius = irysius || {};

irysius.cordovaCanvas = {
    initialized: false,
    stage: null,
    canvas: null,
    container: null,
    preload: null,
    width: function () {
        var self = this;
        if (!self.canvas) return 0;
        return $(self.canvas).width();
    },
    height: function () {
        var self = this;
        if (!self.canvas) return 0;
        return $(self.canvas).height();
    },
    find: function (name) {
        var self = this;
        if (!self.stage) return null;
        return self.stage.getChildByName(name);
    },
    init: function (canvasId) {
        var self = this;
        self.canvas = document.getElementById(canvasId);
        self.container = $(self.canvas).parent();
        $(window).resize(function () {
            self._resizing();
        });

        self.stage = new createjs.Stage(self.canvas);
        self.preload = new createjs.LoadQueue(true);
        self.preload.addEventListener('complete', self._prepareAssets);
        self.preload.load();
        self.initialized = true;
    },
    prepareAssets: function (context) { },
    _prepareAssets: function () {
        var self = irysius.cordovaCanvas;
        console.log('preparing assets');
        self.prepareAssets(self);
        self._run();
        self._resizing();
    },
    resizing: function (width, height) { },
    _resizing: function () {
        var self = irysius.cordovaCanvas;
        var width = $(self.container).width();
        var height = $(self.container).height();
        self.canvas.width = width;
        self.canvas.height = height;
        console.log('resizing to: ' + width + 'x' + height);

        self.resizing(width, height);
    },
    run: function () { },
    _run: function () {
        var self = irysius.cordovaCanvas;
        console.log('stage running.')
        self.run();
        createjs.Ticker.setInterval(30);
        createjs.Ticker.addEventListener('tick', self._tick);
    },
    _tick: function () {
        var self = irysius.cordovaCanvas;
        self._update();
        self._draw();
    },
    _vars: {
        prevTime: 0,
        fps: {
            target: 30,
            curr: 0,
            max: 0,
            min: 100,
            track: false
        }
    },
    update: function (context, elapsedTime) { },
    _update: function () {
        var self = irysius.cordovaCanvas;
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
    draw: function () { },
    _draw: function () {
        var self = irysius.cordovaCanvas;
        self.draw();
        self.stage.update();
    }
}