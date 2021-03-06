(function(){
  var timedOut = false;
  var isTimedOut = function() {
    if (timedOut === true) {
      return timedOut;
    }

    if (document.body.innerText.indexOf('Whoops') >= 0 && document.body.innerText.indexOf('Playback Timed Out') >= 0) {
      return timedOut = true;
    }

    return false;
  };

  var refreshIfTimedOut = function() {
    if (isTimedOut()) {
      document.body.innerHTML = '' +
        '<style>' +
          'body > div { background: #000; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 9999999999; }' +
          'body > div > div { position: fixed; top: 0; right: 0; bottom: 0; left: 0; margin: auto; height: 56px; width: 56px; border: 2px solid #f00; border-radius: 50%; border-left-color: transparent; border-top-color: transparent; -webkit-animation: kill-netflix-timeouts-spinner 1s linear infinite }' +
          '@-webkit-keyframes kill-netflix-timeouts-spinner { to { -webkit-transform: rotate(360deg) } }' +
        '</style>' +
        '<div><div></div></div>' +
      '';
      setTimeout(function(){
        document.location.reload();
      });
    }
  };
  window.addEventListener('focus', refreshIfTimedOut);
  document.body.addEventListener('click', refreshIfTimedOut);

  var showBetterMessageIfTimedOut = function() {
    if (isTimedOut()) {
      document.body.innerHTML = '' +
        '<style>' +
          'body > div { background: #000; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 9999999999; cursor: pointer; }' +
          'body > div > div { position: fixed; top: 0; right: 0; bottom: 0; left: 0; margin: auto; height: 56px; width: 56px; border: 4px solid #fff; border-radius: 50%; }' +
          'body > div > div:before { content: ""; display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 22px; margin: auto; height: 0px; width: 0px; border: 17px solid; border-color: transparent transparent transparent #fff; }' +
        '</style>' +
        '<div><div></div></div>' +
      '';
    }
  };
  setInterval(showBetterMessageIfTimedOut, 30 * 1000);
})();
