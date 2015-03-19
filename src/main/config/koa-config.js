import lodash from 'lodash'
import koa from 'koa';
import * as router from './router';

const configure = () => {
    GLOBAL._ = lodash
    const app = koa();
    const r = router.configure();
    app.use(r.routes());
    return app;
}

export { configure };

