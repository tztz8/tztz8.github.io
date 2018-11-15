function changeDesmos(url) {
  document.getElementById('desmos-iframe').src = (url+"?embed");
  document.getElementById('desmos-iframe').contentWindow.location.reload();
}
