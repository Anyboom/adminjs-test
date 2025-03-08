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
exports.AggregateSampleModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sample_model_count_aggregate_output_1 = require("./sample-model-count-aggregate.output");
const sample_model_avg_aggregate_output_1 = require("./sample-model-avg-aggregate.output");
const sample_model_sum_aggregate_output_1 = require("./sample-model-sum-aggregate.output");
const sample_model_min_aggregate_output_1 = require("./sample-model-min-aggregate.output");
const sample_model_max_aggregate_output_1 = require("./sample-model-max-aggregate.output");
let AggregateSampleModel = class AggregateSampleModel {
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
exports.AggregateSampleModel = AggregateSampleModel;
__decorate([
    (0, graphql_1.Field)(() => sample_model_count_aggregate_output_1.SampleModelCountAggregate, { nullable: true }),
    __metadata("design:type", sample_model_count_aggregate_output_1.SampleModelCountAggregate)
], AggregateSampleModel.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_avg_aggregate_output_1.SampleModelAvgAggregate, { nullable: true }),
    __metadata("design:type", sample_model_avg_aggregate_output_1.SampleModelAvgAggregate)
], AggregateSampleModel.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_sum_aggregate_output_1.SampleModelSumAggregate, { nullable: true }),
    __metadata("design:type", sample_model_sum_aggregate_output_1.SampleModelSumAggregate)
], AggregateSampleModel.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_min_aggregate_output_1.SampleModelMinAggregate, { nullable: true }),
    __metadata("design:type", sample_model_min_aggregate_output_1.SampleModelMinAggregate)
], AggregateSampleModel.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_max_aggregate_output_1.SampleModelMaxAggregate, { nullable: true }),
    __metadata("design:type", sample_model_max_aggregate_output_1.SampleModelMaxAggregate)
], AggregateSampleModel.prototype, "_max", void 0);
exports.AggregateSampleModel = AggregateSampleModel = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateSampleModel);
//# sourceMappingURL=aggregate-sample-model.output.js.map