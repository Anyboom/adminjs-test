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
exports.UpdateManySampleModelArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sample_model_update_many_mutation_input_1 = require("./sample-model-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const sample_model_where_input_1 = require("./sample-model-where.input");
const graphql_3 = require("@nestjs/graphql");
let UpdateManySampleModelArgs = class UpdateManySampleModelArgs {
    data;
    where;
    limit;
};
exports.UpdateManySampleModelArgs = UpdateManySampleModelArgs;
__decorate([
    (0, graphql_1.Field)(() => sample_model_update_many_mutation_input_1.SampleModelUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => sample_model_update_many_mutation_input_1.SampleModelUpdateManyMutationInput),
    __metadata("design:type", sample_model_update_many_mutation_input_1.SampleModelUpdateManyMutationInput)
], UpdateManySampleModelArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_where_input_1.SampleModelWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => sample_model_where_input_1.SampleModelWhereInput),
    __metadata("design:type", sample_model_where_input_1.SampleModelWhereInput)
], UpdateManySampleModelArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateManySampleModelArgs.prototype, "limit", void 0);
exports.UpdateManySampleModelArgs = UpdateManySampleModelArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManySampleModelArgs);
//# sourceMappingURL=update-many-sample-model.args.js.map