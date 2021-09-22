
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Hero(spriteTexture, normalMap) {
    this.kDelta = 0.3;

    this.mDye = new IllumRenderable(spriteTexture, normalMap);
    this.mDye.setColor([1, 1, 1, 0]);
    this.mDye.getXform().setPosition(15, 50);
    this.mDye.getXform().setSize(18, 24);
    this.mDye.setElementPixelPositions(0, 120, 0, 180);
    GameObject.call(this, this.mDye);
}
gEngine.Core.inheritPrototype(Hero, GameObject);

Hero.prototype.update = function () {
    // control by WASD
    var xform = this.getXform();
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.W)) {
        xform.incYPosBy(this.kDelta);
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.S)) {
        xform.incYPosBy(-this.kDelta);
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.A)) {
        xform.incXPosBy(-this.kDelta);
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.D)) {
        xform.incXPosBy(this.kDelta);
    }
};