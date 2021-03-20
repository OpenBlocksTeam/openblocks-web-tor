const expressJS = require('express');
const expressApp = expressJS();
const expressPort = process.env.PORT || 8080;

expressApp.use(expressJS.static('public'));

expressApp.listen(expressPort, () => {
  console.log(`[WEBSERVER] Running on port ${expressPort}.`);
});
