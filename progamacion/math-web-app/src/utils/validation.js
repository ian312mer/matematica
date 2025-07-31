function isValidAlgebraInput(input) {
    const algebraRegex = /^[\d\s\+\-\*\/\(\)xX]+$/; // Allow digits, operators, parentheses, and variable x
    return algebraRegex.test(input);
}

function isValidCalculusInput(input) {
    const calculusRegex = /^[\d\s\+\-\*\/\(\)xX^]+$/; // Allow digits, operators, parentheses, variable x, and exponentiation
    return calculusRegex.test(input);
}

function isValidStatisticsInput(input) {
    const statisticsRegex = /^(\d+(\.\d+)?)(,\s*\d+(\.\d+)?)*$/; // Allow numbers separated by commas
    return statisticsRegex.test(input);
}

export { isValidAlgebraInput, isValidCalculusInput, isValidStatisticsInput };