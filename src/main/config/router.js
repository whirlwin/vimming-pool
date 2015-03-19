import koaRouter from 'koa-router'
import * as indexController from '../server/index-controller'

const configure = () => {
    const router = koaRouter();
    router.get('/', indexController.index);
    return router;
}

export { configure };

