import lodash from 'lodash';
import koa from 'koa';
import * as router from './router';
import * as settings from './settings';

const configure = () => {
    GLOBAL._ = lodash;
    const app = koa();
    app.name = 'vimming-pool';
    app.use(router.configure().routes());
    app.start = () => app.listen(settings.default.port);
    return app;
}

export { configure };

