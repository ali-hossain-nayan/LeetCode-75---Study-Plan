/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let visited = new Array(isConnected.length).fill(false)
    let count = 0;
    const NumberOfProvinces = (city) => {
        visited[city] = true;
        for (let neighbour = 0; neighbour < isConnected.length; neighbour++) {
            if (isConnected[city][neighbour] === 1 && !visited[neighbour]) {
                NumberOfProvinces(neighbour)
            }
        }
    }
    for (let city = 0; city < isConnected.length; city++) {
        if (!visited[city]) {
            count++;
            NumberOfProvinces(city)
        }
    }


    return count;
};