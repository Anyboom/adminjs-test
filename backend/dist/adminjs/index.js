"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminJs = void 0;
const CResourceBuilder_1 = require("./prisma/models/CResourceBuilder");
const dynamicImport = async (packageName) => new Function(`return import('${packageName}')`)();
const createAdminJs = async (options) => {
    const adminJSModule = await dynamicImport('adminjs');
    const AdminJS = adminJSModule.default;
    const adminJsExpress = await dynamicImport('@adminjs/express');
    const AdminJSExpress = adminJsExpress.default;
    const PrismaModule = await dynamicImport('@prisma/client');
    const adminJsPrisma = await dynamicImport('@adminjs/prisma');
    const { Resource, Database } = adminJsPrisma;
    AdminJS.registerAdapter({ Database, Resource });
    const prisma = new PrismaModule.PrismaClient();
    const rootPath = options.rootPath ?? '/admin';
    const resourceBuilder = new CResourceBuilder_1.CResourceBuilder(prisma);
    options.resources?.forEach((resource) => resourceBuilder.addResource(resource)) ?? [];
    const admin = new AdminJS({
        rootPath,
        resources: resourceBuilder.build()
    });
    const adminRouter = AdminJSExpress.buildRouter(admin);
    return {
        rootPath,
        adminRouter
    };
};
exports.createAdminJs = createAdminJs;
//# sourceMappingURL=index.js.map