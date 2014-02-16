var irysius = irysius || {};

irysius.input = {
    tick: function () {
        var self = irysius.input;
        self.keyboard.tick();
        self.mouse.tick();
        self.gamepad.tick();
    },
    screenScale: 1
};

irysius.input.keyboard = {
    initialized: false,
    init: function () {
        var self = irysius.input.keyboard;
        document.onkeydown = self.handleKeyDown;
        document.onkeyup = self.handleKeyUp;
        self.initialized = true;
    },
    keyEnums: {
        'KEY_A': 65, 'KEY_S': 83, 'KEY_D': 68, 'KEY_W': 87,
        'KEY_Q': 81, 'KEY_E': 69, 'KEY_R': 82, 'KEY_Z': 90, 'KEY_X': 88, 'KEY_C': 67,
        'KEY_LEFT': 37, 'KEY_UP': 38, 'KEY_RIGHT': 39, 'KEY_DOWN': 40,
        'KEY_1': 49, 'KEY_2': 50, 'KEY_3': 51, 'KEY_4': 52, 'KEY_5': 53, 'KEY_6': 54, 'KEY_7': 55, 'KEY_8': 56, 'KEY_9': 57, 'KEY_0': 48,
        'KEY_SPACE': 32, 'KEY_ENTER': 13, 'KEY_ESC': 27
    },
    pressedKeys: {},
    handleKeyDown: function (e) {
        e = e || window.event;
        irysius.input.keyboard.pressedKeys[e.keyCode] = true;
    },
    handleKeyUp: function (e) {
        e = e || window.event;
        delete irysius.input.keyboard.pressedKeys[e.keyCode];
    },
    tick: function () {
        irysius.input.keyboard.updateState();
    },
    updateState: function () {
        var prevState = irysius.input.keyboard.state.prev;
        var currState = irysius.input.keyboard.state.curr;
        var clickState = irysius.input.keyboard.state.click;
        var pressedKeys = irysius.input.keyboard.pressedKeys;
        var keyEnums = irysius.input.keyboard.keyEnums;

        // Prev State
        prevState.KEY_A = currState.KEY_A;
        prevState.KEY_S = currState.KEY_S;
        prevState.KEY_D = currState.KEY_D;
        prevState.KEY_W = currState.KEY_W;
        prevState.KEY_Q = currState.KEY_Q;
        prevState.KEY_E = currState.KEY_E;
        prevState.KEY_R = currState.KEY_R;
        prevState.KEY_Z = currState.KEY_Z;
        prevState.KEY_X = currState.KEY_X;
        prevState.KEY_C = currState.KEY_C;
        prevState.KEY_1 = currState.KEY_1;
        prevState.KEY_2 = currState.KEY_2;
        prevState.KEY_3 = currState.KEY_3;
        prevState.KEY_4 = currState.KEY_4;
        prevState.KEY_5 = currState.KEY_5;
        prevState.KEY_6 = currState.KEY_6;
        prevState.KEY_7 = currState.KEY_7;
        prevState.KEY_8 = currState.KEY_8;
        prevState.KEY_9 = currState.KEY_9;
        prevState.KEY_0 = currState.KEY_0;

        prevState.KEY_DOWN = currState.KEY_DOWN;
        prevState.KEY_UP = currState.KEY_UP;
        prevState.KEY_LEFT = currState.KEY_LEFT;
        prevState.KEY_RIGHT = currState.KEY_RIGHT;
        prevState.KEY_SPACE = currState.KEY_SPACE;
        prevState.KEY_ENTER = currState.KEY_ENTER;
        prevState.KEY_ESC = currState.KEY_ESC;

        // Curr State
        currState.KEY_A = (pressedKeys[keyEnums['KEY_A']] == true);
        currState.KEY_S = (pressedKeys[keyEnums['KEY_S']] == true);
        currState.KEY_D = (pressedKeys[keyEnums['KEY_D']] == true);
        currState.KEY_W = (pressedKeys[keyEnums['KEY_W']] == true);
        currState.KEY_Q = (pressedKeys[keyEnums['KEY_Q']] == true);
        currState.KEY_E = (pressedKeys[keyEnums['KEY_E']] == true);
        currState.KEY_R = (pressedKeys[keyEnums['KEY_R']] == true);
        currState.KEY_Z = (pressedKeys[keyEnums['KEY_Z']] == true);
        currState.KEY_X = (pressedKeys[keyEnums['KEY_X']] == true);
        currState.KEY_C = (pressedKeys[keyEnums['KEY_C']] == true);
        currState.KEY_1 = (pressedKeys[keyEnums['KEY_1']] == true);
        currState.KEY_2 = (pressedKeys[keyEnums['KEY_2']] == true);
        currState.KEY_3 = (pressedKeys[keyEnums['KEY_3']] == true);
        currState.KEY_4 = (pressedKeys[keyEnums['KEY_4']] == true);
        currState.KEY_5 = (pressedKeys[keyEnums['KEY_5']] == true);
        currState.KEY_6 = (pressedKeys[keyEnums['KEY_6']] == true);
        currState.KEY_7 = (pressedKeys[keyEnums['KEY_7']] == true);
        currState.KEY_8 = (pressedKeys[keyEnums['KEY_8']] == true);
        currState.KEY_9 = (pressedKeys[keyEnums['KEY_9']] == true);
        currState.KEY_0 = (pressedKeys[keyEnums['KEY_0']] == true);
        currState.KEY_DOWN = (pressedKeys[keyEnums['KEY_DOWN']] == true);
        currState.KEY_UP = (pressedKeys[keyEnums['KEY_UP']] == true);
        currState.KEY_LEFT = (pressedKeys[keyEnums['KEY_LEFT']] == true);
        currState.KEY_RIGHT = (pressedKeys[keyEnums['KEY_RIGHT']] == true);
        currState.KEY_SPACE = (pressedKeys[keyEnums['KEY_SPACE']] == true);
        currState.KEY_ENTER = (pressedKeys[keyEnums['KEY_ENTER']] == true);
        currState.KEY_ESC = (pressedKeys[keyEnums['KEY_ESC']] == true);

        clickState.KEY_Q = (prevState.KEY_Q && !currState.KEY_Q);
        clickState.KEY_W = (prevState.KEY_W && !currState.KEY_W);
        clickState.KEY_E = (prevState.KEY_E && !currState.KEY_E);
        clickState.KEY_R = (prevState.KEY_R && !currState.KEY_R);
        clickState.KEY_A = (prevState.KEY_A && !currState.KEY_A);
        clickState.KEY_S = (prevState.KEY_S && !currState.KEY_S);
        clickState.KEY_D = (prevState.KEY_D && !currState.KEY_D);
        clickState.KEY_Z = (prevState.KEY_Z && !currState.KEY_Z);
        clickState.KEY_X = (prevState.KEY_X && !currState.KEY_X);
        clickState.KEY_C = (prevState.KEY_C && !currState.KEY_C);
        clickState.KEY_0 = (prevState.KEY_0 && !currState.KEY_0);
        clickState.KEY_1 = (prevState.KEY_1 && !currState.KEY_1);
        clickState.KEY_2 = (prevState.KEY_2 && !currState.KEY_2);
        clickState.KEY_3 = (prevState.KEY_3 && !currState.KEY_3);
        clickState.KEY_4 = (prevState.KEY_4 && !currState.KEY_4);
        clickState.KEY_5 = (prevState.KEY_5 && !currState.KEY_5);
        clickState.KEY_6 = (prevState.KEY_6 && !currState.KEY_6);
        clickState.KEY_7 = (prevState.KEY_7 && !currState.KEY_7);
        clickState.KEY_8 = (prevState.KEY_8 && !currState.KEY_8);
        clickState.KEY_9 = (prevState.KEY_9 && !currState.KEY_9);

        clickState.KEY_UP = (prevState.KEY_UP && !currState.KEY_UP);
        clickState.KEY_DOWN = (prevState.KEY_DOWN && !currState.KEY_DOWN);
        clickState.KEY_LEFT = (prevState.KEY_LEFT && !currState.KEY_LEFT);
        clickState.KEY_RIGHT = (prevState.KEY_RIGHT && !currState.KEY_RIGHT);
        clickState.KEY_ENTER = (prevState.KEY_ENTER && !currState.KEY_ENTER);
        clickState.KEY_ESC = (prevState.KEY_ESC && !currState.KEY_ESC);
        clickState.KEY_SPACE = (prevState.KEY_SPACE && !currState.KEY_SPACE);
    },
    state: {
        curr: {
            KEY_A: false, KEY_S: false, KEY_D: false, KEY_W: false,
            KEY_Q: false, KEY_E: false, KEY_R: false, KEY_Z: false, KEY_X: false, KEY_C: false,
            KEY_DOWN: false, KEY_UP: false, KEY_LEFT: false, KEY_RIGHT: false,
            KEY_1: false, KEY_2: false, KEY_3: false, KEY_4: false, KEY_5: false, KEY_6: false, KEY_7: false, KEY_8: false, KEY_9: false, KEY_0: false,
            KEY_SPACE: false, KEY_ENTER: false, KEY_ESC: false
        },
        prev: {
            KEY_A: false, KEY_S: false, KEY_D: false, KEY_W: false,
            KEY_Q: false, KEY_E: false, KEY_R: false, KEY_Z: false, KEY_X: false, KEY_C: false,
            KEY_DOWN: false, KEY_UP: false, KEY_LEFT: false, KEY_RIGHT: false,
            KEY_1: false, KEY_2: false, KEY_3: false, KEY_4: false, KEY_5: false, KEY_6: false, KEY_7: false, KEY_8: false, KEY_9: false, KEY_0: false,
            KEY_SPACE: false, KEY_ENTER: false, KEY_ESC: false
        },
        click: {
            KEY_A: false, KEY_S: false, KEY_D: false, KEY_W: false,
            KEY_Q: false, KEY_E: false, KEY_R: false, KEY_Z: false, KEY_X: false, KEY_C: false,
            KEY_DOWN: false, KEY_UP: false, KEY_LEFT: false, KEY_RIGHT: false,
            KEY_1: false, KEY_2: false, KEY_3: false, KEY_4: false, KEY_5: false, KEY_6: false, KEY_7: false, KEY_8: false, KEY_9: false, KEY_0: false,
            KEY_SPACE: false, KEY_ENTER: false, KEY_ESC: false
        }
    }
};

irysius.input.mouse = {
    initialized: false,
    // stage = createjs stage
    init: function (stage) {
        var self = irysius.input.mouse;
        // revisit - why do i have to attach this to the stage anyways
        stage.addEventListener('stagemousedown', self.handleMouseDown);
        stage.addEventListener('stagemousemove', self.handleMouseMove);
        stage.addEventListener('stagemouseup', self.handleMouseUp);

        // Code from javascriptkit.com
        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

        if (document.attachEvent) //if IE (and Opera depending on user setting)
            document.attachEvent("on" + mousewheelevt, self.handleMouseWheel);
        else if (document.addEventListener) //WC3 browsers
            document.addEventListener(mousewheelevt, self.handleMouseWheel, false);

        self.initialized = true;
    },
    tick: function (elapsed) {
        irysius.input.mouse.updateState(elapsed);
    },
    updateState: function (elapsed) {
        var prevState = irysius.input.mouse.state.prev;
        var currState = irysius.input.mouse.state.curr;
        var rawState = irysius.input.mouse.state.raw;
        var clickState = irysius.input.mouse.state.click;
        var dragState = irysius.input.mouse.state.drag;

        prevState.X = currState.X;
        prevState.Y = currState.Y;
        prevState.LMB = currState.LMB;
        prevState.WHEEL = currState.WHEEL;
        prevState.WHEEL_DELTA = currState.WHEEL_DELTA;

        currState.X = rawState.X;
        currState.Y = rawState.Y;
        currState.LMB = rawState.LMB;
        currState.WHEEL = rawState.WHEEL;
        currState.WHEEL_DELTA = rawState.WHEEL_DELTA;

        rawState.WHEEL_DELTA = 0;

        if (clickState.LMB) {
            clickState.LMB = false;
            clickState.X = 0;
            clickState.Y = 0;
        }

        if (prevState.LMB && !currState.LMB) {
            clickState.LMB = true;
            clickState.X = currState.X;
            clickState.Y = currState.Y;
        }

        if (dragState.DRAGGING && currState.LMB) {
            dragState.MOVE_DELTA = rawState.TIMESTAMP - dragState.BEGIN_TIME;
            dragState.TIME_DELTA += elapsed;
        }

        if (dragState.DRAGGING && !currState.LMB) {
            if (dragState.END_TIME == 0) {
                dragState.END_X = currState.X;
                dragState.END_Y = currState.Y;
                dragState.END_TIME = rawState.TIMESTAMP;
                dragState.MOVE_DELTA = dragState.END_TIME - dragState.BEGIN_TIME;
            } else {
                dragState.DRAGGING = false;
                dragState.BEGIN_X = 0;
                dragState.BEGIN_Y = 0;
                dragState.BEGIN_TIME = 0;
                dragState.END_X = 0;
                dragState.END_Y = 0;
                dragState.END_TIME = 0;
                dragState.MOVE_DELTA = 0;
                dragState.TIME_DELTA = 0;
            }
        }

        if (!dragState.DRAGGING && currState.LMB) {
            dragState.DRAGGING = true;
            dragState.BEGIN_X = currState.X;
            dragState.BEGIN_Y = currState.Y;
            dragState.BEGIN_TIME = rawState.TIMESTAMP;
        }
    },
    handleMouseDown: function (e) {
        e = e || window.event;
        var input = irysius.input;
        var rawState = irysius.input.mouse.state.raw;
        rawState.LMB = true;
        rawState.X = e.stageX / input.screenScale;
        rawState.Y = e.stageY / input.screenScale;
        rawState.TIMESTAMP = e.timeStamp;
    },
    handleMouseUp: function (e) {
        e = e || window.event;
        var input = irysius.input;
        var rawState = irysius.input.mouse.state.raw;
        rawState.LMB = false;
        rawState.X = e.stageX / input.screenScale;
        rawState.Y = e.stageY / input.screenScale;
        rawState.TIMESTAMP = e.timeStamp;
    },
    handleMouseMove: function (e) {
        e = e || window.event;
        var input = irysius.input;
        var rawState = irysius.input.mouse.state.raw;
        rawState.X = e.stageX / input.screenScale;
        rawState.Y = e.stageY / input.screenScale;
        rawState.TIMESTAMP = e.timeStamp;
    },
    handleMouseWheel: function (e) {
        e = e || window.event;
        var delta = e.detail ? e.detail * (-120) : e.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
        var rawState = irysius.input.mouse.state.raw;
        rawState.WHEEL += delta;
        rawState.WHEEL_DELTA = delta;
    },
    state: {
        raw: { LMB: false, WHEEL: 0, WHEEL_DELTA: 0, X: 0, Y: 0, TIMESTAMP: 0 },
        curr: { LMB: false, WHEEL: 0, WHEEL_DELTA: 0, X: 0, Y: 0 },
        prev: { LMB: false, WHEEL: 0, WHEEL_DELTA: 0, X: 0, Y: 0 },
        click: { LMB: false, X: 0, Y: 0 },
        drag: {
            DRAGGING: false,
            BEGIN_X: 0, BEGIN_Y: 0, BEGIN_TIME: 0,
            END_X: 0, END_Y: 0, END_TIME: 0,
            TIME_DELTA: 0, // Gets updated whether or not the cursor is moving
            MOVE_DELTA: 0 // ONLY gets updated if the cursor is moving
        },
        resetMouseWheel: function () {
            irysius.input.mouse.state.raw.WHEEL = 0;
        }
    }
};

irysius.input.gamepad = {
    ANALOGUE_BUTTON_THRESHOLD: 0.5,
    available: false,
    gamepads: [],
    prevRawGamepadTypes: [],
    prevTimestamps: [],
    enabled: true,
    initialized: false,
    checkExists: function () {
        var self = irysius.input.gamepad;
        return self.gamepads.length > 0 && self.enabled;
    },
    init: function () {
        var self = irysius.input.gamepad;
        self.available = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads;
        self.initialized = true;
        return self.available;
    },
    tick: function () {
        var self = irysius.input.gamepad;
        if (self.available && self.enabled) {
            self.pollStatus();
        }
    },
    pollStatus: function () {
        var self = irysius.input.gamepad;
        self.pollGamepads();
        for (var i in self.gamepads) {
            var gamepad = self.gamepads[i];
            self.updateClick(i);

            // Don’t do anything if the current timestamp is the same as previous
            // one, which means that the state of the gamepad hasn’t changed.
            // This is only supported by Chrome right now, so the first check
            // makes sure we’re not doing anything if the timestamps are empty
            // or undefined.
            if (gamepad.timestamp && (gamepad.timestamp == self.prevTimestamps[i])) {
                continue;
            }
            self.prevTimestamps[i] = gamepad.timestamp;
            self.updateState(i);
        }
    },
    pollGamepads: function () {
        var self = irysius.input.gamepad;
        var rawGamepads = (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) || navigator.webkitGamepads;

        if (rawGamepads) {
            // We don’t want to use rawGamepads coming straight from the browser,
            // since it can have “holes” (e.g. if you plug two gamepads, and then
            // unplug the first one, the remaining one will be at index [1]).
            self.gamepads = [];

            // We only refresh the display when we detect some gamepads are new
            // or removed; we do it by comparing raw gamepad table entries to
            // “undefined.”
            var gamepadsChanged = false;

            for (var i = 0; i < rawGamepads.length; i++) {
                if (typeof rawGamepads[i] != self.prevRawGamepadTypes[i]) {
                    gamepadsChanged = true;
                    self.prevRawGamepadTypes[i] = typeof rawGamepads[i];
                }

                if (rawGamepads[i]) {
                    self.gamepads.push(rawGamepads[i]);
                }
            }
        }
    },
    updateState: function (gamepadId) {
        var self = irysius.input.gamepad;
        var prevState = irysius.input.gamepad.state.prev;
        var currState = irysius.input.gamepad.state.curr;
        var clickState = irysius.input.gamepad.state.click;
        var lockedState = irysius.input.gamepad.state.locked;

        var gamepad = self.gamepads[gamepadId];
        if (gamepad.id == 'Xbox 360 Controller (XInput STANDARD GAMEPAD)') {
            // Prev State
            // Buttons
            prevState.BTN_X = currState.BTN_X;
            prevState.BTN_Y = currState.BTN_Y;
            prevState.BTN_A = currState.BTN_A;
            prevState.BTN_B = currState.BTN_B;
            prevState.BTN_UP = currState.BTN_UP;
            prevState.BTN_DOWN = currState.BTN_DOWN;
            prevState.BTN_LEFT = currState.BTN_LEFT;
            prevState.BTN_RIGHT = currState.BTN_RIGHT;
            prevState.SHOULDER_LEFT = currState.SHOULDER_LEFT;
            prevState.SHOULDER_RIGHT = currState.SHOULDER_RIGHT;
            prevState.BTN_SELECT = currState.BTN_SELECT;
            prevState.BTN_START = currState.BTN_START
            prevState.STICK_LEFT_BTN = currState.STICK_LEFT_BTN;
            prevState.STICK_RIGHT_BTN = currState.STICK_RIGHT_BTN;

            // Triggers
            prevState.TRIGGER_LEFT = currState.TRIGGER_LEFT;
            prevState.TRIGGER_RIGHT = currState.TRIGGER_RIGHT;

            // Sticks
            prevState.STICK_LEFT_X = currState.STICK_LEFT_X;
            prevState.STICK_LEFT_Y = currState.STICK_LEFT_Y;
            prevState.STICK_RIGHT_X = currState.STICK_RIGHT_X;
            prevState.STICK_RIGHT_Y = currState.STICK_RIGHT_Y;

            // Curr State
            // Buttons
            currState.BTN_X = (gamepad.buttons[2] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_Y = (gamepad.buttons[3] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_A = (gamepad.buttons[0] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_B = (gamepad.buttons[1] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_UP = (gamepad.buttons[12] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_DOWN = (gamepad.buttons[13] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_LEFT = (gamepad.buttons[14] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_RIGHT = (gamepad.buttons[15] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.SHOULDER_LEFT = (gamepad.buttons[4] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.SHOULDER_RIGHT = (gamepad.buttons[5] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_SELECT = (gamepad.buttons[8] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.BTN_START = (gamepad.buttons[9] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.STICK_LEFT_BTN = (gamepad.buttons[10] > self.ANALOGUE_BUTTON_THRESHOLD);
            currState.STICK_RIGHT_BTN = (gamepad.buttons[11] > self.ANALOGUE_BUTTON_THRESHOLD);

            // Triggers
            currState.TRIGGER_LEFT = gamepad.buttons[6];
            currState.TRIGGER_RIGHT = gamepad.buttons[7];

            // Sticks
            currState.STICK_LEFT_X = gamepad.axes[0];
            currState.STICK_LEFT_Y = gamepad.axes[1];
            currState.STICK_RIGHT_X = gamepad.axes[2];
            currState.STICK_RIGHT_Y = gamepad.axes[3];
        }
    },
    updateClick: function (gamepadId) {
        var self = irysius.input.gamepad;
        var prevState = irysius.input.gamepad.state.prev;
        var currState = irysius.input.gamepad.state.curr;
        var clickState = irysius.input.gamepad.state.click;
        var lockedState = irysius.input.gamepad.state.locked;

        var gamepad = self.gamepads[gamepadId];
        if (gamepad.id == 'Xbox 360 Controller (XInput STANDARD GAMEPAD)') {
            if (currState.BTN_A && !lockedState.BTN_A)
                lockedState.BTN_A = true;
            if (!currState.BTN_A) {
                if (lockedState.BTN_A) clickState.BTN_A = true;
                else clickState.BTN_A = false;

                lockedState.BTN_A = false;
            }
            if (currState.BTN_B && !lockedState.BTN_B) lockedState.BTN_B = true;
            if (!currState.BTN_B) {
                if (lockedState.BTN_B) clickState.BTN_B = true;
                else clickState.BTN_B = false;

                lockedState.BTN_B = false;
            }
            if (currState.BTN_X && !lockedState.BTN_X) lockedState.BTN_X = true;
            if (!currState.BTN_X) {
                if (lockedState.BTN_X) clickState.BTN_X = true;
                else clickState.BTN_X = false;

                lockedState.BTN_X = false;
            }
            if (currState.BTN_Y && !lockedState.BTN_Y) lockedState.BTN_Y = true;
            if (!currState.BTN_Y) {
                if (lockedState.BTN_Y) clickState.BTN_Y = true;
                else clickState.BTN_Y = false;

                lockedState.BTN_Y = false;
            }
            if (currState.BTN_UP && !lockedState.BTN_UP) lockedState.BTN_UP = true;
            if (!currState.BTN_UP) {
                if (lockedState.BTN_UP) clickState.BTN_UP = true;
                else clickState.BTN_UP = false;

                lockedState.BTN_UP = false;
            }
            if (currState.BTN_DOWN && !lockedState.BTN_DOWN) lockedState.BTN_DOWN = true;
            if (!currState.BTN_DOWN) {
                if (lockedState.BTN_DOWN) clickState.BTN_DOWN = true;
                else clickState.BTN_DOWN = false;

                lockedState.BTN_DOWN = false;
            }
            if (currState.BTN_LEFT && !lockedState.BTN_LEFT) lockedState.BTN_LEFT = true;
            if (!currState.BTN_LEFT) {
                if (lockedState.BTN_LEFT) clickState.BTN_LEFT = true;
                else clickState.BTN_LEFT = false;

                lockedState.BTN_LEFT = false;
            }
            if (currState.BTN_RIGHT && !lockedState.BTN_RIGHT) lockedState.BTN_RIGHT = true;
            if (!currState.BTN_RIGHT) {
                if (lockedState.BTN_RIGHT) clickState.BTN_RIGHT = true;
                else clickState.BTN_RIGHT = false;

                lockedState.BTN_RIGHT = false;
            }
            if (currState.BTN_START && !lockedState.BTN_START) lockedState.BTN_START = true;
            if (!currState.BTN_START) {
                if (lockedState.BTN_START) clickState.BTN_START = true;
                else clickState.BTN_START = false;

                lockedState.BTN_START = false;
            }
            if (currState.BTN_SELECT && !lockedState.BTN_SELECT) lockedState.BTN_SELECT = true;
            if (!currState.BTN_SELECT) {
                if (lockedState.BTN_SELECT) clickState.BTN_SELECT = true;
                else clickState.BTN_SELECT = false;

                lockedState.BTN_SELECT = false;
            }
            if (currState.SHOULDER_LEFT && !lockedState.SHOULDER_LEFT) lockedState.SHOULDER_LEFT = true;
            if (!currState.SHOULDER_LEFT) {
                if (lockedState.SHOULDER_LEFT) clickState.SHOULDER_LEFT = true;
                else clickState.SHOULDER_LEFT = false;

                lockedState.SHOULDER_LEFT = false;
            }
            if (currState.SHOULDER_RIGHT && !lockedState.SHOULDER_RIGHT) lockedState.SHOULDER_RIGHT = true;
            if (!currState.SHOULDER_RIGHT) {
                if (lockedState.SHOULDER_RIGHT) clickState.SHOULDER_RIGHT = true;
                else clickState.SHOULDER_RIGHT = false;

                lockedState.SHOULDER_RIGHT = false;
            }
            if (currState.STICK_LEFT_BTN && !lockedState.STICK_LEFT_BTN) lockedState.STICK_LEFT_BTN = true;
            if (!currState.STICK_LEFT_BTN) {
                if (lockedState.STICK_LEFT_BTN) clickState.STICK_LEFT_BTN = true;
                else clickState.STICK_LEFT_BTN = false;

                lockedState.STICK_LEFT_BTN = false;
            }
            if (currState.STICK_RIGHT_BTN && !lockedState.STICK_RIGHT_BTN) lockedState.STICK_RIGHT_BTN = true;
            if (!currState.STICK_RIGHT_BTN) {
                if (lockedState.STICK_RIGHT_BTN) clickState.STICK_RIGHT_BTN = true;
                else clickState.STICK_RIGHT_BTN = false;

                lockedState.STICK_RIGHT_BTN = false;
            }
        }
    },
    state: {
        curr: {
            BTN_X: false, BTN_Y: false, BTN_A: false, BTN_B: false,
            BTN_DOWN: false, BTN_UP: false, BTN_LEFT: false, BTN_RIGHT: false,
            SHOULDER_LEFT: false, SHOULDER_RIGHT: false,
            TRIGGER_LEFT: 0, TRIGGER_RIGHT: 0,
            STICK_LEFT_X: 0, STICK_LEFT_Y: 0, STICK_LEFT_BTN: false,
            STICK_RIGHT_X: 0, STICK_RIGHT_Y: 0, STICK_RIGHT_BTN: false,
            BTN_START: false, BTN_SELECT: false
        },
        prev: {
            BTN_X: false, BTN_Y: false, BTN_A: false, BTN_B: false,
            BTN_DOWN: false, BTN_UP: false, BTN_LEFT: false, BTN_RIGHT: false,
            SHOULDER_LEFT: false, SHOULDER_RIGHT: false,
            TRIGGER_LEFT: 0, TRIGGER_RIGHT: 0,
            STICK_LEFT_X: 0, STICK_LEFT_Y: 0, STICK_LEFT_BTN: false,
            STICK_RIGHT_X: 0, STICK_RIGHT_Y: 0, STICK_RIGHT_BTN: false,
            BTN_START: false, BTN_SELECT: false
        },
        click: {
            BTN_X: false, BTN_Y: false, BTN_A: false, BTN_B: false,
            BTN_DOWN: false, BTN_UP: false, BTN_LEFT: false, BTN_RIGHT: false,
            SHOULDER_LEFT: false, SHOULDER_RIGHT: false,
            STICK_LEFT_BTN: false, STICK_RIGHT_BTN: false,
            BTN_START: false, BTN_SELECT: false
        },
        locked: {
            BTN_X: false, BTN_Y: false, BTN_A: false, BTN_B: false,
            BTN_DOWN: false, BTN_UP: false, BTN_LEFT: false, BTN_RIGHT: false,
            SHOULDER_LEFT: false, SHOULDER_RIGHT: false,
            STICK_LEFT_BTN: false, STICK_RIGHT_BTN: false,
            BTN_START: false, BTN_SELECT: false
        }
    }
};