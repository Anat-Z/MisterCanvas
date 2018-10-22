'use strict'

var gCanvas;
var gCtx;
var gColor;
var gCurrentShape;
var gPosXY;
var gIsMouseClicked = false;


function init() {
    gCanvas = document.querySelector('#canvas');
    gCanvas.width = document.body.clientWidth;
    gCanvas.height = document.body.clientHeight;
    gCtx = gCanvas.getContext('2d');
    gCtx.fillStyle = 'lightgray';
    gCtx.strokeStyle = 'black';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    gCurrentShape = 'Square'
}

function setCurrentShape(shape) {
    return gCurrentShape = shape;
}

function strokeColor(color) {
    gCtx.strokeStyle = color
}

function canvasClicked(event) {
    drawShape(gCurrentShape, event)
}

function drawShape(shape, ev) {
    switch (shape) {
        case 'Triangle':
            drawTriangle(ev)
            break;
        case 'Square':
            drawRect(ev)
            break;
        case 'Circle':
            drawCircle(ev)
            break;
        case 'Heart':
            drawHeart(ev)
            break;
    }
}

function setColor(color) {
    gColor = color;
    gCtx.strokeStyle = color;
}

function clearCanvas() {
    gCtx = null;
    gCtx = gCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.fillStyle = 'lightgray';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    gPosRec = null;
}

function getDistance(ev) {
console.log(ev.offsetX - gPosXY.x)

    return Math.abs((ev.offsetX - gPosXY.x)) / 2 + Math.abs((event.offsetY - gPosXY.y)) / 2
}

function drawCircle(event) {
   var shapeSize = getDistance(event)
   console.log (shapeSize)
    gCtx.beginPath();
    gCtx.arc(event.offsetX, event.offsetY, shapeSize*0.5, 0, 2 * Math.PI, true);
    gCtx.stroke();
    gPosXY = { x: event.offsetX, y: event.offsetY}
}

function drawTriangle(event) {
    var shapeSize = getDistance(event);
    gCtx.beginPath();
    gCtx.moveTo(event.offsetX, event.offsetY)
    gCtx.lineTo(event.offsetX + shapeSize, event.offsetY + shapeSize * 7)
    gCtx.lineTo(event.offsetX + shapeSize * 5, event.offsetY + shapeSize)
    gCtx.closePath()
    gCtx.stroke()
    gPosXY = { x: event.offsetX, y: event.offsetY }
}

function drawRect(event) {
    if (!gPosXY) { gPosXY = { x: event.offsetX, y: event.offsetY } };
    var shapeSize = getDistance(event);
    gCtx.strokeRect(event.offsetX, event.offsetY, gPosXY.x + shapeSize * 0.3, event.offsetY + shapeSize);
    gPosXY =  { x: event.offsetX, y: event.offsetY }
}

function saveCanvas(elLink) {
    elLink.href = canvas.toDataURL()
    elLink.download = 'my-canvas.jpg'
}

// function drawHeart(event) {
//     gCtx.beginPath();
//     gCtx.moveTo(event.offsetX, event.offsetY);
//     gCtx.bezierCurveTo(75, 37, 70, 25, 50, 25);
//     gCtx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
//     gCtx.bezierCurveTo(20, 80, 40, 102, 75, 120);
//     gCtx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
//     gCtx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
//     gCtx.bezierCurveTo(85, 25, 75, 37, 75, 40);
//     gCtx.fill();
//     gCtx.stroke();
// }


