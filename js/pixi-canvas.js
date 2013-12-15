var irysius = irysius || {};

irysius.pixiCanvas = {
    initialized: false,
    stage: null,
    canvas: null,
    container: null,
    _width: 0,
    _height: 0,
    width: function () {
        var self = irysius.pixiCanvas;
        return self._width;
    },
    height: function () {
        var self = irysius.pixiCanvas;
        return self._height;
    },
    init: function ($container) {
        var self = irysius.pixiCanvas;
        self.stage = new PIXI.Stage(0xFFFFFF);
        self.canvas = PIXI.autoDetectRenderer(800, 600);
        $container.append(self.canvas.view);
        self.container = $container;
        $(window).resize(function () {
            self._resizing();
        });

        self._prepareAssets();
        self.run();
        self.initialized = true;
        requestAnimFrame(self._tick);
    },
    prepareAssets: function (context) { },
    _prepareAssets: function () {
        var self = irysius.pixiCanvas;
        console.log('preparing assets');
        self._resizing();
        self.prepareAssets(self);
    },
    resizing: function (width, height) { },
    _resizing: function () {
        var self = irysius.pixiCanvas;
        var width = $(self.container).width();
        var height = $(self.container).height();
        self.canvas.resize(width, height);
        self._width = width;
        self._height = height;
        console.log('resizing to: ' + width + 'x' + height);

        self.resizing(width, height);
    },
    run: function () {
        var self = irysius.pixiCanvas;
        console.log('stage running');
        self._vars.isPaused = false;
    },
    _tick: function () {
        var self = irysius.pixiCanvas;
        requestAnimFrame(self._tick)

        if (self._vars.isPaused) return;
        self._update();
        self._draw();
    },
    _vars: {
        isPaused: true,
        prevTime: null,
        fps: {
            target: 40, // Good target for mobile.
            curr: 0,
            max: 0,
            min: 1000,
            track: false
        }
    },
    vars: {},
    update: function (context, elapsedTime) { },
    _update: function () {
        var self = irysius.pixiCanvas;
        var now = new Date();
        if (!self._vars.prevTime) self._vars.prevTime = now;
        var elapsedTime = now - self._vars.prevTime;
        self._vars.prevTime = now;
        if (elapsedTime == 0) return;

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
        var self = irysius.pixiCanvas;
        self.canvas.render(self.stage);
    },
    stop: function () {
        var self = irysius.pixiCanvas;
        console.log('stage stopped.');
        self._vars.isPaused = true;
        self._vars.fps.track = false;
        self._vars.fps.max = 0;
        self._vars.fps.min = 1000;
    }
};