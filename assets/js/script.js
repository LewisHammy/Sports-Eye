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
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();