// Handles location selection
function selectLocation() {
    let location = prompt("Enter your location (e.g., New York):");
    if (location) {
      alert("Location selected: " + location);
    } else {
      alert("Please enter a valid location.");
    }
  }
  
  // Handles seat selection
  function selectSeat(button) {
    if (button.classList.contains('selected')) {
      button.classList.remove('selected');
      button.style.backgroundColor = '#f4a261';  // Reset color
    } else {
      button.classList.add('selected');
      button.style.backgroundColor = '#2a9d8f';  // Selected color
    }
  }
  
  // Handles showtime selection
  function selectShowtime(time) {
    document.getElementById('selected-time').innerText = "Selected Showtime: " + time;
  }
  