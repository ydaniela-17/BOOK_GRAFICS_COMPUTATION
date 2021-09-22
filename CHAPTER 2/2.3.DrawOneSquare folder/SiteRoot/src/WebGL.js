"use strict";
var gGL = null; //Variable global

function initializeGL() {
    var canvas = document.getElementById("GLCanvas");
    gGL = canvas.getContext("webgl") ||
    canvas.getContext("experimental-webgl");
    if (gGL !== null) {
        gGL.clearColor(0.1, 0.2, 0.8, 1.0); // set the color to be cleared

        // A. initialize the vertex buffer
        initSquareBuffer(); // This function is defined VertexBuffer.js
        // B. now load and compile the vertex and fragment shaders
        initSimpleShader("VertexShader", "FragmentShader");
        // the two shaders are defined in the index.html file
        // initSimpleShader() function is defined in ShaderSupport.js
    } else {
        document.write("<br><b>WebGL is not supported!</b>");
    }

}

/*function clearCanvas() {
    gGL.clear(gGL.COLOR_BUFFER_BIT); // clear to the color previously set, invoke the webGL context
    }*/

function drawSquare() {
    gGL.clear(gGL.COLOR_BUFFER_BIT);
    // Step A: Activate the shader to use
    gGL.useProgram(gSimpleShader);
    // Step B: Enable the vertex position attribute
    gGL.enableVertexAttribArray(gShaderVertexPositionAttribute);
    // Step C: Draw with the above settings
    gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);
    }

function doGLDraw() { //initialization and clearing of the canvas area.
    initializeGL(); // Binds gGL context to WebGL functionality
    drawSquare(); // Clears the GL area and draws one square
    //clearCanvas();
    }

