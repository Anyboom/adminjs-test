"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const adminjs_1 = require("./adminjs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const { rootPath, adminRouter } = await (0, adminjs_1.createAdminJs)({
        rootPath: '/admin',
        resources: ['User', 'Post']
    });
    app.use(rootPath, adminRouter);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map