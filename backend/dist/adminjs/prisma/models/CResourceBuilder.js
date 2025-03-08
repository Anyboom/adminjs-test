"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CResourceBuilder = void 0;
const CResource_1 = require("./CResource");
const client_1 = require("@prisma/client");
class CResourceBuilder {
    prisma;
    resources = [];
    dmmf;
    constructor(prisma) {
        this.prisma = prisma;
        this.dmmf = client_1.Prisma.dmmf;
    }
    addResource(resource, options) {
        const model = this.dmmf.datamodel.models.find((model) => model.name === resource);
        if (!model) {
            throw new Error(`Model "${resource}" not found in DMMF.`);
        }
        const obj = new CResource_1.CResource(model, options);
        this.resources.push(obj);
        return this;
    }
    build() {
        return this.resources.map((resource) => ({
            resource: {
                model: resource.model,
                client: this.prisma,
            },
            options: resource.options,
        }));
    }
}
exports.CResourceBuilder = CResourceBuilder;
//# sourceMappingURL=CResourceBuilder.js.map