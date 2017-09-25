// Correct variable names consist only of Latin letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.
function variableName(name) {
    return /^[a-z_]\w*$/i.test(name);
}
