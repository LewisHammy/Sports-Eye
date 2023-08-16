var settings = document.getElementById('settingsGear');
var toggleBtn = document.getElementById("toggle-btn");
var theme = document.getElementById("theme");
var navbar = document.getElementById("navbar");
let darkMode = localStorage.getItem("dark-mode");


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








// Needs to be fixed
// smooth scrolling
document.querySelectorAll('navbar ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // pop up window for settings
  function openSettings() {
    document.getElementById('popup-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    console.log('opened');
  }
  
  function closeSettings() {
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    console.log('closed');
  }
  
  settings.addEventListener('click', openSettings);
  
  //turns on and off dark mode in local storage
  function enableDarkMode() {
    theme.classList.add("darkModeTheme");
    toggleBtn.classList.remove("darkModeToggle");
    navbar.classList.add("navDark");
    navbar.classList.remove("navBkgn");
    localStorage.setItem("dark-mode", "enabled");
  };
  
  function disableDarkMode() {
    theme.classList.remove("darkModeTheme");
    toggleBtn.classList.add("darkModeToggle");
    navbar.classList.remove("navDark");
    navbar.classList.add("navBkgn");
    localStorage.setItem("dark-mode", "disabled");
  };
  
  //auto sets to dark mode on refresh if enabled
  if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
  }
  
  //button toggles dark mode and saves in local storage
  toggleBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      console.log('dark');
      enableDarkMode();
    } else {
      console.log('light');
      disableDarkMode();
    }
  });