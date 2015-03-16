var koaConfig = require('./src/main/config/koa-config');

var app = koaConfig.configure();
var start = () => app.listen(3000);

module.exports = {
    start: start
};
