var maximumLengthSubstring = function (s) {
    let maxLen = 0; // Initialize the maximum length
    let lastTwoPos = new Array(26).fill(-1).map(() => new Array(2).fill(-1)); // Array to store the last two positions of each character
    let left = 0; // Left pointer for the sliding window

    // Helper function to get the index of a character in the lastTwoPos array
    const getIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

    // Iterate through the string
    for (let right = 0; right < s.length; right++) {
        const index = getIndex(s[right]);

        // If the current character is already in the lastTwoPos array, update the left pointer
        // to the next index after the second last occurrence of this character
        if (lastTwoPos[index][0] !== -1 && lastTwoPos[index][1] !== -1) {
            left = Math.max(left, Math.min(lastTwoPos[index][0], lastTwoPos[index][1]) + 1);
        }

        // Update the maximum length
        maxLen = Math.max(maxLen, right - left + 1);

        // Update the last two positions of the current character
        lastTwoPos[index] = [lastTwoPos[index][1], right];
    }

    return maxLen;
};

// Test cases
console.log(maximumLengthSubstring("bcbbbcba")); // Output: 4
console.log(maximumLengthSubstring("aaaa"));     // Output: 2
