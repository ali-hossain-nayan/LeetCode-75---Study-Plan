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
