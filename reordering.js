/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function minReorder(n, connections) {
    let tree = new Map();
    for (let [from, to] of connections) {

        if (!tree.has(from)) tree.set(from, [])
        if (!tree.has(to)) tree.set(to, [])

        tree.get(from).push(to)
        tree.get(to).push(-from)

    }
    let edges = 0;
    let visited = new Set();
    const minEdges = (node) => {
        visited.add(node)
        for (let i of tree.get(node)) {
            if (!visited.has(Math.abs(i))) {
                if (i > 0) {
                    edges++;
                }
                minEdges(Math.abs(i));
            }
        }
    }
    minEdges(0);
    return edges;
}
