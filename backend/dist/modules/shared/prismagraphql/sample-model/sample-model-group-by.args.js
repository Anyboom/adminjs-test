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
exports.SampleModelGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sample_model_where_input_1 = require("./sample-model-where.input");
const class_transformer_1 = require("class-transformer");
const sample_model_order_by_with_aggregation_input_1 = require("./sample-model-order-by-with-aggregation.input");
const sample_model_scalar_field_enum_1 = require("./sample-model-scalar-field.enum");
const sample_model_scalar_where_with_aggregates_input_1 = require("./sample-model-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const sample_model_count_aggregate_input_1 = require("./sample-model-count-aggregate.input");
const sample_model_avg_aggregate_input_1 = require("./sample-model-avg-aggregate.input");
const sample_model_sum_aggregate_input_1 = require("./sample-model-sum-aggregate.input");
const sample_model_min_aggregate_input_1 = require("./sample-model-min-aggregate.input");
const sample_model_max_aggregate_input_1 = require("./sample-model-max-aggregate.input");
let SampleModelGroupByArgs = class SampleModelGroupByArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
exports.SampleModelGroupByArgs = SampleModelGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => sample_model_where_input_1.SampleModelWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => sample_model_where_input_1.SampleModelWhereInput),
    __metadata("design:type", sample_model_where_input_1.SampleModelWhereInput)
], SampleModelGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [sample_model_order_by_with_aggregation_input_1.SampleModelOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], SampleModelGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [sample_model_scalar_field_enum_1.SampleModelScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], SampleModelGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_scalar_where_with_aggregates_input_1.SampleModelScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", sample_model_scalar_where_with_aggregates_input_1.SampleModelScalarWhereWithAggregatesInput)
], SampleModelGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SampleModelGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SampleModelGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_count_aggregate_input_1.SampleModelCountAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_count_aggregate_input_1.SampleModelCountAggregateInput)
], SampleModelGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_avg_aggregate_input_1.SampleModelAvgAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_avg_aggregate_input_1.SampleModelAvgAggregateInput)
], SampleModelGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_sum_aggregate_input_1.SampleModelSumAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_sum_aggregate_input_1.SampleModelSumAggregateInput)
], SampleModelGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_min_aggregate_input_1.SampleModelMinAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_min_aggregate_input_1.SampleModelMinAggregateInput)
], SampleModelGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_max_aggregate_input_1.SampleModelMaxAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_max_aggregate_input_1.SampleModelMaxAggregateInput)
], SampleModelGroupByArgs.prototype, "_max", void 0);
exports.SampleModelGroupByArgs = SampleModelGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], SampleModelGroupByArgs);
//# sourceMappingURL=sample-model-group-by.args.js.map