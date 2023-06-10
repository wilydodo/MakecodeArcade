scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.setGameOverMessage(false, "you Trolled. Lol")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.setGameOverMessage(false, "you Trolled. Lol")
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    mySprite.setVelocity(-50, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    mySprite.setVelocity(50, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.setGameOverMessage(false, "you Trolled. Lol")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.setGameOverMessage(true, "GG")
    game.gameOver(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f f . . 
    . . f e e e 4 d d d d f d d f . 
    . . . . f e e 4 e e e f b b f . 
    . . . . f 2 2 2 4 d d e b b f . 
    . . . f f 4 4 4 e d d e b f . . 
    . . . f f f f f f e e f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`strt`)
mySprite.ay = 500
forever(function () {
    if (controller.A.isPressed()) {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
            mySprite.vy = -220
        } else {
            if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile4`)) {
                mySprite.vy = -220
            } else {
                if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`)) {
                    mySprite.vy = -220
                } else {
                    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile6`)) {
                        mySprite.vy = -220
                    } else {
                        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
                            mySprite.vy = -220
                        } else {
                            if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile7`)) {
                                mySprite.vy = -220
                            }
                        }
                    }
                }
            }
        }
    }
})
