# :8ball::dash: Breakout Game

## Introduction
Typical arcade breakout game.
```
|    #### #### ################# ###############   |
|    #########################################     |
|    ########### #############################     |
|    #########    ##############  ##############   |
|    ######        ##########      ######## ####   |
|                                                  |
|        o                                         |
|                                                  |
|                                                  |
|        <======>                                  |
```

Ball `o` bounces from sides `|`, top and any bricks `#` and must be rebound by player 
using the paddle `<======>`. 
The paddle can only move left or right. 

A life is lost if the ball passes the paddle and falls in the pit.


## Power Items

Some bricks drop power items when hit by the ball. 
These items can be picked up by the paddle. 
While some are good others are bad. 

* &#9924; ICE: freezes paddle for a brief time
* &#128405; SHRINK: makes paddle permanently smaller
* &#128406; EXTEND: makes paddle permanently larger
* &#128123; FUZZ: game looks briefly fuzzy
* &#128064; GLASS: paddle turns into glass for a short time
* &#128007; FAST: speeds up ball for a short time
* &#128012; SLOW: slows down ball for a short time
* &#127744; CRAZY-BOUNCE: ball bounces funny for some time
* &#128128; DEAD: instant death
* &#128169; POOP: you stepped in poop which brings luck :wink:


## Implementation

The game runs in the browser, it's :balloon: programmed in `HTML` and `JavaScript`.


## Try it out

You can try it out [here](http://bauplanung-dittmar.de/breakout).

Note that it seems to run faster and smoother on Edge or Chrome and hang a bit on FireFox :disappointed:.
