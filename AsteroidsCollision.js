/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (const i of asteroids) {
        if (i > 0) {
            stack.push(i);
        } else {
            while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(i)) {
                stack.pop();
            }
            if (!stack.length || stack[stack.length - 1] < 0) {
                stack.push(i);
            } else if (stack[stack.length - 1] === Math.abs(i)) {
                stack.pop();
            }
        }
    }

    return stack;
};
