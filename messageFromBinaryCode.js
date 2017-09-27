// You are taking part in an
// Escape Room challenge designed specifically for programmers.
// In your efforts to find a clue, you've found a binary code written on
// the wall behind a vase, and realized that it must be an encrypted message.
// After some thought, your first guess is that each consecutive 8 bits of the code
// stand for the character with the corresponding extended ASCII code.

// Assuming that your hunch is correct, decode the message.

function messageFromBinaryCode(code) {
    // Removes the spaces from the binary string
    code = code.replace(/\s+/g, '');
    // add a space every 8 characters
    code = code.match(/.{1,8}/g).join(" ");
    var newBinary = code.split(" ");
    var binaryCode = [];

    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }

    return binaryCode.join("");
}
