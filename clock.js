function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Ensure two-digit format
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Construct the time string
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    // Update the time on the HTML element
    document.getElementById("time").innerHTML = timeString;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the time immediately
  updateClock();
  