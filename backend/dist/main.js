"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicImport = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const adminjs_1 = require("./adminjs");
const dynamicImport = async (packageName) => new Function(`return import('${packageName}')`)();
exports.dynamicImport = dynamicImport;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const { rootPath, adminRouter } = await (0, adminjs_1.createAdminJs)({
        rootPath: '/admin',
        resources: ['SampleModel']
    });
    app.use(rootPath, adminRouter);
    const port = process.env.PORT || 3000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map