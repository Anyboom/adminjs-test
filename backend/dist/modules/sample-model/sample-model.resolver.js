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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleModelResolver = void 0;
const sample_model_1 = require("../shared/prismagraphql/sample-model");
const graphql_1 = require("@nestjs/graphql");
const sample_model_service_1 = require("./sample-model.service");
let SampleModelResolver = class SampleModelResolver {
    contactFormService;
    constructor(contactFormService) {
        this.contactFormService = contactFormService;
    }
    hello() {
        return 'Hello, GraphQL!';
    }
    async createSampleModel(args) {
        return this.contactFormService.create(args);
    }
};
exports.SampleModelResolver = SampleModelResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SampleModelResolver.prototype, "hello", null);
__decorate([
    (0, graphql_1.Mutation)(() => sample_model_1.SampleModel, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof sample_model_1.CreateOneSampleModelArgs !== "undefined" && sample_model_1.CreateOneSampleModelArgs) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], SampleModelResolver.prototype, "createSampleModel", null);
exports.SampleModelResolver = SampleModelResolver = __decorate([
    (0, graphql_1.Resolver)(() => sample_model_1.SampleModel),
    __metadata("design:paramtypes", [sample_model_service_1.SampleModelService])
], SampleModelResolver);
//# sourceMappingURL=sample-model.resolver.js.map