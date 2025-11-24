controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "up"
})
// Melee attack with A
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    hitbox = sprites.create(assets.image`SwordHitBox`, SpriteKind.Projectile)
    // Position hitbox based on facing
    if (facing == "right") {
        hitbox.setPosition(mySpriteKnight.x + 16, mySpriteKnight.y)
    } else if (facing == "left") {
        hitbox.setPosition(mySpriteKnight.x - 16, mySpriteKnight.y)
    } else if (facing == "up") {
        hitbox.setPosition(mySpriteKnight.x, mySpriteKnight.y - 16)
    } else {
        hitbox.setPosition(mySpriteKnight.x, mySpriteKnight.y + 16)
    }
    // Destroy hitbox after short time
    pause(150)
    hitbox.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "left"
})
// Overlap event: hitbox kills enemies
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (hitbox, enemy) {
    // enemy dies with effect
    enemy.destroy(effects.disintegrate, 200)
    // remove hitbox too
    hitbox.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "right"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "down"
})
let hitbox: Sprite = null
let facing = ""
let mySpriteKnight: Sprite = null
scene.setBackgroundColor(1)
// Create the knight
mySpriteKnight = sprites.create(assets.image`Knight`, SpriteKind.Player)
controller.moveSprite(mySpriteKnight)
scene.cameraFollowSprite(mySpriteKnight)
// Track facing direction
facing = "right"
// Enemies
let skeleton = sprites.create(assets.image`Skeleton`, SpriteKind.Enemy)
skeleton.setPosition(80, 60)
let zombie = sprites.create(assets.image`Zombie`, SpriteKind.Enemy)
zombie.setPosition(120, 100)
let spider = sprites.create(assets.image`Spider`, SpriteKind.Enemy)
spider.setPosition(160, 80)
