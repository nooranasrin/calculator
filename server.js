const app = require('./src/routes');

const main = function() {
  app.listen(8000, () => console.log('started listening on port', 8000));
};

main();
