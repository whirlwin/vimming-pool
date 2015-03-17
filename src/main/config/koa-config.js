import koa from 'koa';

const configure = () => {
    const app = koa();

    app.use(function*() {
        this.body = 'Welcome to the vimming pool';
    });

    return app;
}

export { configure };

