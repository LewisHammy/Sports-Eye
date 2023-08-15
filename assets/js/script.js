var settings = document.getElementById('settingsGear');


// Needs to be fixed
// smooth scrolling
document.querySelectorAll('navbar ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });


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
  