import * as THREE from "https://threejs.org/build/three.module.js";
import * as three from "https://threejs.org/build/three.module.js";

function hello() {
    console.log('world');
    return 'world';
}

let scaleVal = 1;
let axisLength = 0.314;

// returns obj=[xAxisMesh, yAxisMesh, zAxisMesh]
function createAxes() {
    const XMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const YMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const ZMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

    let XAxisPoints = [];

    XAxisPoints.push(new THREE.Vector3(-axisLength, 0, 0));
    XAxisPoints.push(new THREE.Vector3(axisLength, 0, 0));

    let YAxisPoints = [];
    YAxisPoints.push(new THREE.Vector3(0, -axisLength, 0));
    YAxisPoints.push(new THREE.Vector3(0, axisLength, 0));

    let ZAxisPoints = [];
    ZAxisPoints.push(new THREE.Vector3(0, 0, -axisLength));
    ZAxisPoints.push(new THREE.Vector3(0, 0, axisLength));

    const XAxisGeometry = new THREE.BufferGeometry().setFromPoints(XAxisPoints);
    const XAxisLine = new THREE.Line(XAxisGeometry, XMaterial);
    XAxisLine.scale.set(scaleVal, scaleVal, scaleVal);

    const YAxisGeometry = new THREE.BufferGeometry().setFromPoints(YAxisPoints);
    const YAxisLine = new THREE.Line(YAxisGeometry, YMaterial);
    YAxisLine.scale.set(scaleVal, scaleVal, scaleVal);

    const ZAxisGeometry = new THREE.BufferGeometry().setFromPoints(ZAxisPoints);
    const ZAxisLine = new THREE.Line(ZAxisGeometry, ZMaterial);
    ZAxisLine.scale.set(scaleVal, scaleVal, scaleVal);

    return [XAxisLine, YAxisLine, ZAxisLine];
}

// expects axes object and a positionObj=[x, y, z]
function updateAxes(axes, positions, camera) {

    for (var axisIdx = 0; axisIdx < 3; axisIdx++) {
        let axisPositions = axes[axisIdx].geometry.attributes.position.array;

        if (axisIdx == 0) {
            axisPositions[0] = positions[0] - axisLength;
            axisPositions[1] = positions[1];
            axisPositions[2] = positions[2];
            axisPositions[3] = positions[0] + axisLength;
            axisPositions[4] = positions[1];
            axisPositions[5] = positions[2];
        } else if (axisIdx == 1) {
            axisPositions[0] = positions[0];
            axisPositions[1] = positions[1] - axisLength;
            axisPositions[2] = positions[2];
            axisPositions[3] = positions[0];
            axisPositions[4] = positions[1] + axisLength;
            axisPositions[5] = positions[2];
        } else if (axisIdx == 2) {
            axisPositions[0] = positions[0];
            axisPositions[1] = positions[1];
            axisPositions[2] = positions[2] - axisLength;
            axisPositions[3] = positions[0];
            axisPositions[4] = positions[1];
            axisPositions[5] = positions[2] + axisLength;
        }

        // axes[axisIdx].geometry.attributes.position.applyMatrix4(camera.matrixWorldInverse);
        // axes[axisIdx].geometry.attributes.position.applyMatrix4(camera.projectionMatrix);

        axes[axisIdx].geometry.attributes.position.needsUpdate = true;
        axes[axisIdx].needsUpdate = true;

        axes[axisIdx].geometry.computeBoundingBox();
        axes[axisIdx].geometry.computeBoundingSphere();
    }
}

function addAxesToScene(axes, scene) {
    scene.add(axes[0]);
    scene.add(axes[1]);
    scene.add(axes[2]);
}

function addGridToScene(scene) {
    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);
}

// returns obj = [[x, y, z], [x,y,z]]
function createLineVector(vectorObj, opts) {

    const dir = new THREE.Vector3(vectorObj[1][0], vectorObj[1][1], vectorObj[1][2]);

    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();

    const origin = new THREE.Vector3(vectorObj[0][0], vectorObj[0][1], vectorObj[0][2]);

    let length = 1;
    if (opts && opts.length) {
        length = opts.length;
    }

    let hex = 0xe3a857;
    if (opts && opts.color) {
        hex = opts.color;
    }

    const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);

    arrowHelper.scale.set(scaleVal, scaleVal, scaleVal);

    return arrowHelper;
}

// position [x, y, z]
function centerLineVector(lineVector, position) {

    lineVector.position.x = position[0];
    lineVector.position.y = position[1];
    lineVector.position.z = position[2];

    // let linePosition = lineVector.line.geometry.attributes.position.array;

    // linePosition[0] = linePosition[0] + position[0]
    // linePosition[1] = linePosition[1] + position[1];
    // linePosition[2] = linePosition[2] + position[2];
    // linePosition[3] = linePosition[3] + position[0];
    // linePosition[4] = linePosition[4] + position[1];
    // linePosition[5] = linePosition[5] + position[2];

    // lineVector.line.geometry.attributes.position.needsUpdate = true;
    lineVector.needsUpdate = true;
}

function positionLineVector(lineVector, position) {
    const dir = new THREE.Vector3(position[0], position[1], position[2]);

    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();

    lineVector.setDirection(dir);
    lineVector.needsUpdate = true;
}

// axis 'X'|'Y'|'Z', angle in radians
function rotateLineVectorAxisByAngle(lineVector, axis, angle) {
}

function rotateLineVectorByQuarternion(lineVector, quarternion) {
}

function addLineVectorToScene(lineVector, scene) {
    scene.add(lineVector);
}

export {
    createAxes,
    updateAxes,
    addAxesToScene,
    addGridToScene,
    createLineVector,
    centerLineVector,
    positionLineVector,
    rotateLineVectorAxisByAngle,
    rotateLineVectorByQuarternion,
    addLineVectorToScene
}