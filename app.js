import * as koaConfig from './src/main/config/koa-config';

const app = koaConfig.configure();
const start = () => app.start();

export { start };

