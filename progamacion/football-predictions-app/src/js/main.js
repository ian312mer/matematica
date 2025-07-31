document.addEventListener('DOMContentLoaded', () => {
    const predictionInput = document.getElementById('prediction-input');
    const predictButton = document.getElementById('predict-button');
    const predictionResults = document.getElementById('prediction-results');

    // Fetch teams data from the JSON file
    fetch('data/teams.json')
        .then(response => response.json())
        .then(teams => {
            // Populate the predictions section with team names
            teams.forEach(team => {
                const teamElement = document.createElement('div');
                teamElement.textContent = team.name;
                predictionResults.appendChild(teamElement);
            });
        })
        .catch(error => console.error('Error fetching teams:', error));

    // Handle prediction submission
    predictButton.addEventListener('click', () => {
        const prediction = predictionInput.value.trim();
        if (prediction) {
            const predictionElement = document.createElement('div');
            predictionElement.textContent = `Your Prediction: ${prediction}`;
            predictionResults.appendChild(predictionElement);
            predictionInput.value = ''; // Clear input field
        }
    });
});