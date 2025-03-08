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
exports.UpsertOneSampleModelArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const sample_model_where_unique_input_1 = require("./sample-model-where-unique.input");
const class_transformer_1 = require("class-transformer");
const sample_model_create_input_1 = require("./sample-model-create.input");
const sample_model_update_input_1 = require("./sample-model-update.input");
let UpsertOneSampleModelArgs = class UpsertOneSampleModelArgs {
    where;
    create;
    update;
};
exports.UpsertOneSampleModelArgs = UpsertOneSampleModelArgs;
__decorate([
    (0, graphql_1.Field)(() => sample_model_where_unique_input_1.SampleModelWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => sample_model_where_unique_input_1.SampleModelWhereUniqueInput),
    __metadata("design:type", Object)
], UpsertOneSampleModelArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_create_input_1.SampleModelCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => sample_model_create_input_1.SampleModelCreateInput),
    __metadata("design:type", sample_model_create_input_1.SampleModelCreateInput)
], UpsertOneSampleModelArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_update_input_1.SampleModelUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => sample_model_update_input_1.SampleModelUpdateInput),
    __metadata("design:type", sample_model_update_input_1.SampleModelUpdateInput)
], UpsertOneSampleModelArgs.prototype, "update", void 0);
exports.UpsertOneSampleModelArgs = UpsertOneSampleModelArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneSampleModelArgs);
//# sourceMappingURL=upsert-one-sample-model.args.js.map