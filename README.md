CordovaCanvas
=============

Checking to see if createjs manipulation of the canvas is performant enough for cordova applications


iOS is not an issue at all.

WP8 may have resolution adjustments to make. In portrait, body extends beyond the screen, and in landscape the body ends some where just before the screen.

Android is the most problematic of all.
You can't draw directly using Graphics, otherwise the performance goes down the toilet, even if you use caching.  Looks like createjs with sprite sheet seems to do well for the time being, as long as you never dip into the other modes.  Pixi JS have some bizzare artifacting at the beginning of application load that leaves elements behind.  I'm unsure how to clear it, or even what's causing it.
