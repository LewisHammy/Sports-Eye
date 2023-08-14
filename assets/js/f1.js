// const url = 'https://fia-formula-1-championship-statistics.p.rapidapi.com/api/standings/drivers-standings?year=2023';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '7564f1cff3mshb76416c5fbcccacp17fa9djsn027a5a72bd56',
//     'X-RapidAPI-Host': 'fia-formula-1-championship-statistics.p.rapidapi.com'
//   }
// };

// const getDriversStandings = async () => {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     const driversStandingsDiv = document.getElementById('driversStandings');
//     const driverStandings = result.driverStandings;
//     const driverInfo = driverStandings.map(driver => `${driver.driver.firstname} - ${driver.car}`);
//     driversStandingsDiv.innerHTML = driverInfo.join('<br>');
//   } catch (error) {
//     console.error(error);
//   }
// };

const url = 'https://fia-formula-1-championship-statistics.p.rapidapi.com/api/standings/drivers-standings?year=2023';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7564f1cff3mshb76416c5fbcccacp17fa9djsn027a5a72bd56',
    'X-RapidAPI-Host': 'fia-formula-1-championship-statistics.p.rapidapi.com'
  }
};

const getDriversStandings = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const driversStandingsDiv = document.getElementById('driversStandings');
    const driverStandings = result.driverStandings;
    const driverInfo = driverStandings.map(driver => `${driver.driver.firstname} - ${driver.car}`);
    const ul = document.createElement('ul');
    driverInfo.forEach(info => {
      const li = document.createElement('li');
      li.textContent = info;
      ul.appendChild(li);
    });
    driversStandingsDiv.innerHTML = '';
    driversStandingsDiv.appendChild(ul);
  } catch (error) {
    console.error(error);
  }
}