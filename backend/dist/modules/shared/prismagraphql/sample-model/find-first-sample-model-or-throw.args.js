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
exports.FindFirstSampleModelOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sample_model_where_input_1 = require("./sample-model-where.input");
const class_transformer_1 = require("class-transformer");
const sample_model_order_by_with_relation_input_1 = require("./sample-model-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const sample_model_where_unique_input_1 = require("./sample-model-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const sample_model_scalar_field_enum_1 = require("./sample-model-scalar-field.enum");
let FindFirstSampleModelOrThrowArgs = class FindFirstSampleModelOrThrowArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstSampleModelOrThrowArgs = FindFirstSampleModelOrThrowArgs;
__decorate([
    (0, graphql_1.Field)(() => sample_model_where_input_1.SampleModelWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => sample_model_where_input_1.SampleModelWhereInput),
    __metadata("design:type", sample_model_where_input_1.SampleModelWhereInput)
], FindFirstSampleModelOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [sample_model_order_by_with_relation_input_1.SampleModelOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstSampleModelOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_where_unique_input_1.SampleModelWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstSampleModelOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstSampleModelOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstSampleModelOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [sample_model_scalar_field_enum_1.SampleModelScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstSampleModelOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstSampleModelOrThrowArgs = FindFirstSampleModelOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstSampleModelOrThrowArgs);
//# sourceMappingURL=find-first-sample-model-or-throw.args.js.map