// src/js/statistics.js

function calculateMean(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

function calculateMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function calculateMode(numbers) {
    const frequency = {};
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(frequency));
    return Object.keys(frequency).filter(num => frequency[num] === maxFreq).map(Number);
}

function calculateStandardDeviation(numbers) {
    const mean = calculateMean(numbers);
    const squaredDiffs = numbers.map(num => Math.pow(num - mean, 2));
    const variance = calculateMean(squaredDiffs);
    return Math.sqrt(variance);
}

function validateInput(input) {
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    return numbers.length > 0 ? numbers : null;
}

document.getElementById('statistics-calculate').addEventListener('click', () => {
    const input = document.getElementById('statistics-input').value;
    const numbers = validateInput(input);
    
    if (numbers) {
        const mean = calculateMean(numbers);
        const median = calculateMedian(numbers);
        const mode = calculateMode(numbers);
        const stdDev = calculateStandardDeviation(numbers);
        
        document.getElementById('statistics-result').innerHTML = `
            <p>Mean: ${mean}</p>
            <p>Median: ${median}</p>
            <p>Mode: ${mode.join(', ')}</p>
            <p>Standard Deviation: ${stdDev}</p>
        `;
    } else {
        document.getElementById('statistics-result').innerHTML = '<p>Please enter valid numbers.</p>';
    }
});