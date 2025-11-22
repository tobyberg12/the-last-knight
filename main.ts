controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`SwordHitBox`, mySpriteKnight, 50, 50)
})
let projectile: Sprite = null
let mySpriteKnight: Sprite = null
scene.setBackgroundColor(1)
scene.cameraFollowSprite(mySpriteKnight)
mySpriteKnight = sprites.create(assets.image`Knight`, SpriteKind.Player)
controller.moveSprite(mySpriteKnight)
