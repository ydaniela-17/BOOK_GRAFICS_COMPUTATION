
"use strict";

/**
 * 
 * @param {Transform} xform Transform object
 * @param {Number} r Radius of circle
 * @returns {RigidCircle} New instance of RigidCircle
 * @class RigidCircle
 */
function RigidCircle(xform, r) {
    RigidShape.call(this, xform);
    this.kNumSides = 16;
    this.mSides = new LineRenderable();
    this.mRadius = r;
}
gEngine.Core.inheritPrototype(RigidCircle, RigidShape);

/**
 * Return the type of Rigidshape
 * @returns {enum|eRigidType}
 * @memberOf RigidCircle
 */
RigidCircle.prototype.rigidType = function () {
    return RigidShape.eRigidType.eRigidCircle;
};

/**
 * Return the Cicle Radius size
 * @returns {Number} Radius of circle
 * @memberOf RigidCircle
 */
RigidCircle.prototype.getRadius = function () {
    return this.mRadius;
};

/**
 * Draw function called by GameLoop
 * @param {Camera} aCamera Camera to draw too
 * @returns {void}
 * @memberOf RigidCircle
 */
RigidCircle.prototype.draw = function (aCamera) {
    if (!this.mDrawBounds) {
        return;
    }
    RigidShape.prototype.draw.call(this, aCamera);
    
    // kNumSides forms the circle.
    var pos = this.getPosition();
    var prevPoint = vec2.clone(pos);
    var deltaTheta = (Math.PI * 2.0) / this.kNumSides;
    var theta = deltaTheta;
    prevPoint[0] += this.mRadius;
    var i, x, y;
    for (i = 1; i <= this.kNumSides; i++) {
        x = pos[0] + this.mRadius * Math.cos(theta);
        y = pos[1] +  this.mRadius * Math.sin(theta);
        
        this.mSides.setFirstVertex(prevPoint[0], prevPoint[1]);
        this.mSides.setSecondVertex(x, y);
        this.mSides.draw(aCamera);
        
        theta = theta + deltaTheta;
        prevPoint[0] = x;
        prevPoint[1] = y;
    }
};

/**
 * Set the Color of the position marker and sides
 * @param {Float[]} color new color of marker and sides [R, G, B, A]
 * @returns {void}
 * @memberOf RigidCircle
 */
RigidCircle.prototype.setColor = function (color) {
    RigidShape.prototype.setColor.call(this, color);
    this.mSides.setColor(color);
};