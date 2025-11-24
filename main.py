def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            SwordHitBox
            """),
        mySpriteKnight,
        50,
        50)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

projectile: Sprite = None
mySpriteKnight: Sprite = None
scene.set_background_color(1)
scene.camera_follow_sprite(mySpriteKnight)
mySpriteKnight = sprites.create(assets.image("""
    Knight
    """), SpriteKind.player)
controller.move_sprite(mySpriteKnight)