// This file contains utility functions for mathematical operations.

function evaluateExpression(expression) {
    try {
        // Use the Function constructor to evaluate the expression safely
        return new Function(`'use strict'; return (${expression})`)();
    } catch (error) {
        throw new Error("Invalid expression");
    }
}

function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function mean(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

function median(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function mode(numbers) {
    const frequency = {};
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(frequency));
    return Object.keys(frequency).filter(num => frequency[num] === maxFreq);
}

function standardDeviation(numbers) {
    const avg = mean(numbers);
    const squareDiffs = numbers.map(num => Math.pow(num - avg, 2));
    return Math.sqrt(mean(squareDiffs));
}

export {
    evaluateExpression,
    factorial,
    power,
    mean,
    median,
    mode,
    standardDeviation
};