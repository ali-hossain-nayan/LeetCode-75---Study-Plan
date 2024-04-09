/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const visitedRooms = new Set()
    const KeysRooms = (room) => {
        visitedRooms.add(room)

        for (let key of rooms[room]) {
            if (!visitedRooms.has(key)) {
                KeysRooms(key)
            }
        }
    }
    KeysRooms(0)
    return visitedRooms.size === rooms.length
}