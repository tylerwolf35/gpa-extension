chrome.tabs.executeScript({
  file: './src/jquery.min.js'
});

$('#gpa_calc').on('click', () => {
  if(navigator.userAgent.indexOf("Chrome") != -1) {
    window.open("https://frhsd-gpa.netlify.app");
  }
  else {
    window.location.href = "https://frhsd-gpa.netlify.app/";
  }
});