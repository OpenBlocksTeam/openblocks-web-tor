const expressJS = require('express');
const expressApp = expressJS();
const expressPort = 9050;

expressApp.use(expressJS.static('public'));

expressApp.listen(expressPort, () => {
  console.log(`[WEBSERVER] Running on port ${expressPort}.`);
});
