
"use strict";  // Operate in Strict mode such that variables must be declared before used!


function LightRenderable(myTexture) {
    SpriteAnimateRenderable.call(this, myTexture);
    Renderable.prototype._setShader.call(this, gEngine.DefaultResources.getLightShader());

    // here is the light source
    this.mLights = [];
}
gEngine.Core.inheritPrototype(LightRenderable, SpriteAnimateRenderable);

LightRenderable.prototype.draw = function (aCamera) {
    this.mShader.setLights(this.mLights);
    SpriteAnimateRenderable.prototype.draw.call(this, aCamera);
};

LightRenderable.prototype.getLightAt = function (index) {
    return this.mLights[index];
};
LightRenderable.prototype.addLight = function (l) {
    this.mLights.push(l);
};
//--- end of Public Methods

//</editor-fold>