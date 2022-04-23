let lsv = [
    0.07851651310920715,
    0.12902383506298065,
    -0.00045580705045722425
];

let lsv2 = [
    0.08407570893218995,
    1.5380843315017039,
    0.02890676005395356
];

lsv = lsv2;

let abs_lsv = Math.sqrt(
    lsv[0] * lsv[0] +
    lsv[1] * lsv[1] +
    lsv[2] * lsv[2]
);

let alpha = Math.acos(
    lsv[0] / abs_lsv
);

let beta = Math.acos(
    lsv[1] / abs_lsv
);

let gama = Math.acos(
    lsv[2] / abs_lsv
);

console.log(`lsv=${lsv}`);
console.log(`abs_lsv=${abs_lsv}`);
console.log(`alpha=${alpha}`);
console.log(`beta=${beta}`);
console.log(`gama=${gama}`);

function abs_v(v) {
    return Math.sqrt(
        v[0] * v[0] +
        v[1] * v[1] +
        v[2] * v[2]
    );
}

function alpha_v(v) {
    return Math.acos(
        v[0] / abs_v(v)
    );
}

function beta_v(v) {
    return Math.acos(
        v[1] / abs_v(v)
    );
}

function gama_v(v) {
    return Math.acos(
        v[2] / abs_v(v)
    );
}

console.log(`*********`);

let rootBone = { name: 'rootBone' };
rootBone.position = {
    "x": 0,
    "y": 0,
    "z": 0
}

rootBone.worldPos = {
    "x": 0,
    "y": 0,
    "z": 0
}

rootBone.rotation = {
    "_x": 0,
    "_y": 0,
    "_z": 0,
    "_order": "XYZ"
}

let hipBone = { name: 'hipBone' };
hipBone.position = {
    "x": 0.001325553166680038,
    "y": 1.053850769996643,
    "z": 0.0009611292043700814
}
hipBone.worldPos = {
    "x": 0.001325553166680038,
    "y": 1.053850769996643,
    "z": 0.0009611292043700814
}
hipBone.rotation = {
    "_x": -0.0567009341432251,
    "_y": 0.6543178608096489,
    "_z": 0.030557814100441297,
    "_order": "XYZ"
}

let spineLowerBone = { name: 'spineLowerBone' };

spineLowerBone.position = {
    "x": -2.7939672797572257e-9,
    "y": 0.10296723991632462,
    "z": -0.002336089499294758
}
spineLowerBone.worldPos = {
    "x": -0.00259244197333315,
    "y": 1.1566079909930354,
    "z": -0.004810363624898032
}
spineLowerBone.rotation = {
    "_x": 0.04474713591336175,
    "_y": -0.0807966565943948,
    "_z": 0.013385712401281655,
    "_order": "XYZ"
}

let spineMiddleBone = { name: 'spineMiddleBone' };
spineMiddleBone.position = {
    "x": 6.51925802230835e-9,
    "y": 0.12015911191701889,
    "z": 1.1641532182693481e-8
}
spineMiddleBone.worldPos = {
    "x": -0.003581709629650819,
    "y": 1.2767617085023393,
    "z": -0.004249782564400878
}
spineMiddleBone.rotation = {
    "_x": 0.13702241138731744,
    "_y": -0.16219953258429498,
    "_z": 0.03513890792909906,
    "_order": "XYZ"
}

let spineUpperBone = { name: 'spineUpperBone' };

spineUpperBone.position = {
    "x": 6.51925624595151e-9,
    "y": 0.13732467591762543,
    "z": -1.8626400422050438e-9
}
spineUpperBone.worldPos = {
    "x": 0.00106279379101325,
    "y": 1.4127805404900553,
    "z": 0.014063856125859472
}
spineUpperBone.rotation = {
    "_x": 0.1370224331444016,
    "_y": -0.16219938486233473,
    "_z": 0.035138858156953515,
    "_order": "XYZ"
}

let leftShoulderBone = { name: 'leftShoulderBone' };

leftShoulderBone.position = {
    "x": 0.07851651310920715,
    "y": 0.12902383506298065,
    "z": -0.00045580705045722425
}
leftShoulderBone.worldPos = {
    "x": 0.08407570893218995,
    "y": 1.5380843315017039,
    "z": 0.02890676005395356
}
leftShoulderBone.rotation = {
    "_x": 1.6333557640488525,
    "_y": -0.29420383383394816,
    "_z": -1.4154083427712199,
    "_order": "XYZ"
}

let leftArmBone = { name: 'leftArmBone' };
leftArmBone.position = {
    "x": -8.770485493414526e-8,
    "y": 0.15787847340106964,
    "z": 6.240637873133892e-8
}
leftArmBone.worldPos = {
    "x": 0.23151745906699855,
    "y": 1.4891447532478415,
    "z": 0.0007685192005347126
}
leftArmBone.rotation = {
    "_x": 0.8197968660598228,
    "_y": -0.3210032845398821,
    "_z": -0.22567629909046238,
    "_order": "XYZ"
}

let leftForeArmBone = { name: 'leftForeArmBone' };
leftForeArmBone.position = {
    "x": -8.437558562945924e-8,
    "y": 0.2958546578884125,
    "z": 5.8713698791734714e-8
}
leftForeArmBone.worldPos = {
    "x": 0.3174901714035816,
    "y": 1.2466672744085916,
    "z": -0.14532668617136058
}
leftForeArmBone.rotation = {
    "_x": 0.12928453464380504,
    "_y": -0.07928509147440588,
    "_z": 0.5371896885511479,
    "_order": "XYZ"
}

let leftHandBone = { name: 'leftHandBone' };
leftHandBone.position = {
    "x": 3.5871664749720367e-8,
    "y": 0.3218652904033661,
    "z": 1.3183081648548978e-7
}
leftHandBone.worldPos = {
    "x": 0.45229893909842933,
    "y": 0.9544468054187033,
    "z": -0.1397159421160327
}
leftHandBone.rotation = {
    "_x": 0.28663617434600835,
    "_y": 0.13670394687723006,
    "_z": 0.08467570961255473,
    "_order": "XYZ"
}

let boneList = [
    rootBone,
    hipBone,
    spineLowerBone,
    spineMiddleBone,
    spineUpperBone,
    leftShoulderBone,
    leftArmBone,
    leftForeArmBone,
    leftHandBone
];

let rootBoneV = [rootBone.position.x, rootBone.position.y, rootBone.position.z];
let rootBoneWV = [rootBone.worldPos.x, rootBone.worldPos.y, rootBone.worldPos.z];

let hipBoneV = [hipBone.position.x, hipBone.position.y, hipBone.position.z];
let hipBoneWV = [hipBone.worldPos.x, hipBone.worldPos.y, hipBone.worldPos.z];

let spineLowerBoneV = [spineLowerBone.position.x, spineLowerBone.position.y, spineLowerBone.position.z];
let spineLowerBoneWV = [spineLowerBone.worldPos.x, spineLowerBone.worldPos.y, spineLowerBone.worldPos.z];

let spineMiddleBoneV = [spineMiddleBone.position.x, spineMiddleBone.position.y, spineMiddleBone.position.z];
let spineMiddleBoneWV = [spineMiddleBone.worldPos.x, spineMiddleBone.worldPos.y, spineMiddleBone.worldPos.z];

let spineUpperBoneV = [spineUpperBone.position.x, spineUpperBone.position.y, spineUpperBone.position.z];
let spineUpperBoneWV = [spineUpperBone.worldPos.x, spineUpperBone.worldPos.y, spineUpperBone.worldPos.z];

let leftShoulderBoneV = [leftShoulderBone.position.x, leftShoulderBone.position.y, leftShoulderBone.position.z];
let leftShoulderBoneWV = [leftShoulderBone.worldPos.x, leftShoulderBone.worldPos.y, leftShoulderBone.worldPos.z];

let leftArmBoneV = [leftArmBone.position.x, leftArmBone.position.y, leftArmBone.position.z];
let leftArmBoneWV = [leftArmBone.worldPos.x, leftArmBone.worldPos.y, leftArmBone.worldPos.z];

let leftForeArmBoneV = [leftForeArmBone.position.x, leftForeArmBone.position.y, leftForeArmBone.position.z];
let leftForeArmBoneWV = [leftForeArmBone.worldPos.x, leftForeArmBone.worldPos.y, leftForeArmBone.worldPos.z];

let leftHandBoneV = [leftHandBone.position.x, leftHandBone.position.y, leftHandBone.position.z];
let leftHandBoneWV = [leftHandBone.worldPos.x, leftHandBone.worldPos.y, leftHandBone.worldPos.z];

for (var i = 0; i < boneList.length; i++) {

    let boneV = [boneList[i].position.x, boneList[i].position.y, boneList[i].position.z];
    let boneWV = [boneList[i].worldPos.x, boneList[i].worldPos.y, boneList[i].worldPos.z];

    console.log(`
    ${boneList[i].name}
    V
    ${boneV}
    alphs=${alpha_v(boneV)}
    beta =${beta_v(boneV)}
    gama =${gama_v(boneV)}
    WV
    ${boneWV}
    alphs=${alpha_v(boneWV)}
    beta =${beta_v(boneWV)}
    gama =${gama_v(boneWV)}
    Rotation
    ${JSON.stringify(boneList[i].rotation, null, '\t')}
    `
    );
}

