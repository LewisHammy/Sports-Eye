// Function to fetch and display API data
async function fetchData() {
    console.log("Fetching data...");

    const url = 'https://sports-live-scores.p.rapidapi.com/baseball/live';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8516b89c04msh14301adfc08cb2ap103260jsne97130bb1c31',
            'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();

        const jsonObject = JSON.parse(result);
        const matches = jsonObject.matches;

        const apiDataDiv = document.getElementById("api-data");
        apiDataDiv.innerHTML = ''; // Clear previous data

        let currentRow = 1;
        let currentColumn = 1;
        for (let i = 0; i < matches.length; i++) {
            if (currentColumn > 5) {
                currentColumn = 1;
                currentRow++;
            }

            if (currentColumn === 1) {
                const newRow = document.createElement("div");
                newRow.classList.add("row");
                newRow.id = "row" + currentRow;
                apiDataDiv.appendChild(newRow);
            }

            const match = matches[i];
            const matchDiv = document.createElement("div");
            matchDiv.classList.add("column");
            matchDiv.innerHTML = `
                <p>Away Team: ${match["Away Team"]}: ${match["Away Score"]}</p>
                <p>Home Team: ${match["Home Team"]}: ${match["Away Score"]}</p>
                <p>Status: ${match["Status"]}</p>
                <br>
            `;

            const currentRowElement = document.getElementById("row" + currentRow);
            currentRowElement.appendChild(matchDiv);

            currentColumn++;
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const liveScoresButton = document.getElementById("live-scores-button");
    liveScoresButton.addEventListener("click", function () {
        fetchData();
    });
});
