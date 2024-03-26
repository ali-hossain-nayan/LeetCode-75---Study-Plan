/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let radiantQueue = [];
    let direQueue = [];

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            radiantQueue.push(i);
        } else {
            direQueue.push(i);
        }
    }

    while (radiantQueue.length > 0 && direQueue.length > 0) {
        let radiantIndex = radiantQueue.shift();
        let direIndex = direQueue.shift();

        if (radiantIndex < direIndex) {
            radiantQueue.push(radiantIndex + senate.length);
        } else {
            direQueue.push(direIndex + senate.length);
        }
    }

    return radiantQueue.length > 0 ? "Radiant" : "Dire";
};