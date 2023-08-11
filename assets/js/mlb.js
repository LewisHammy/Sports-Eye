// Function to fetch and display API data
async function fetchData() {
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
        for (const match of matches) {
            const matchDiv = document.createElement("div");
            matchDiv.innerHTML = `
                <p>Away Team: ${match["Away Team"]}</p>
                <p>Home Team: ${match["Home Team"]}</p>
                <p>Status: ${match["Status"]}</p>
                <hr>
            `;
            apiDataDiv.appendChild(matchDiv);
        }
    } catch (error) {
        console.error(error);
    }
}

// Call the fetchData function when the document is ready
document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});
