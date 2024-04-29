/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let winners = {}, losers = {};

    matches.forEach((match) => {
        let [winner, loser] = match;
        winners[winner] = (winners[winner] || 0) + 1;
        losers[loser] = (losers[loser] || 0) + 1;
    });

    let undefeated = Object.keys(winners).filter((player) => winners[player] > 0 && !(player in losers));
    let lostOneMatch = Object.keys(losers).filter((player) => losers[player] === 1);

    undefeated.sort((a, b) => a - b);
    lostOneMatch.sort((a, b) => a - b);

    return [undefeated, lostOneMatch];
};





//practice
const IdentifyWinnerLosser = (matches) => {
    let winner = {}, losser = {}
    matches.forEach((match) => {
        let [win, loss] = match;
        winner[win] = (winner[win] || 0) + 1;
        losser[loss] = (losser[loss] || 0) + 1;



    })
    let wins = Object.keys(winner).filter((player) => winner[player] > 0 && !(player in losser))
    let losses = Object.keys(losser).filter((player) => losser[player] === 1)

    wins.sort((a, b) => a - b)
    losses.sort((x, y) => x - y)

    return [wins, losses]
}
