var koa = require('koa');

var configure = () => {
    var app = koa();

    app.use(function *() {
        this.body = 'Welcome to the vimming pool';
    });

    return app;
}

module.exports = {
    configure: configure
};