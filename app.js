const koaConfig = require('./src/main/config/koa-config');

const app = koaConfig.configure();
const start = () => app.listen(3000);

module.exports = {
    start: start
};
