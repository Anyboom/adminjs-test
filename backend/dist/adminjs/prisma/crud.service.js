"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCrudService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let BaseCrudService = class BaseCrudService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findFirst(args) {
        try {
            return await this.prisma[this.getModelName()].findFirst(args);
        }
        catch (e) {
            return undefined;
        }
    }
    findUnique(args) {
        return this.prisma[this.getModelName()].findUnique(args);
    }
    findMany(args) {
        return this.prisma[this.getModelName()].findMany(args);
    }
    groupBy(args) {
        return this.prisma[this.getModelName()].groupBy(args);
    }
    aggregate(args) {
        return this.prisma[this.getModelName()].aggregate(args);
    }
    create(args) {
        return this.prisma[this.getModelName()].create(args);
    }
    createMany(args) {
        return this.prisma[this.getModelName()].createMany(args);
    }
    update(args) {
        return this.prisma[this.getModelName()].update(args);
    }
    updateMany(args) {
        return this.prisma[this.getModelName()].updateMany(args);
    }
    delete(args) {
        return this.prisma[this.getModelName()].delete(args);
    }
    deleteMany(args) {
        return this.prisma[this.getModelName()].deleteMany(args);
    }
    getModelName() {
        return this.constructor.name.replace('Service', '');
    }
};
exports.BaseCrudService = BaseCrudService;
exports.BaseCrudService = BaseCrudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BaseCrudService);
//# sourceMappingURL=crud.service.js.map