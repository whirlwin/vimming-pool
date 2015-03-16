var koa = require('koa');
var app = koa();

app.use(function *() {
    this.body = 'Welcome to the vimming pool';
});

function start() {
    app.listen(3000);
}

module.exports = {
    start: start
};
