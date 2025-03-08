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
exports.SampleModelGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const sample_model_count_aggregate_output_1 = require("./sample-model-count-aggregate.output");
const sample_model_avg_aggregate_output_1 = require("./sample-model-avg-aggregate.output");
const sample_model_sum_aggregate_output_1 = require("./sample-model-sum-aggregate.output");
const sample_model_min_aggregate_output_1 = require("./sample-model-min-aggregate.output");
const sample_model_max_aggregate_output_1 = require("./sample-model-max-aggregate.output");
let SampleModelGroupBy = class SampleModelGroupBy {
    id;
    name;
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
exports.SampleModelGroupBy = SampleModelGroupBy;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], SampleModelGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SampleModelGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_count_aggregate_output_1.SampleModelCountAggregate, { nullable: true }),
    __metadata("design:type", sample_model_count_aggregate_output_1.SampleModelCountAggregate)
], SampleModelGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_avg_aggregate_output_1.SampleModelAvgAggregate, { nullable: true }),
    __metadata("design:type", sample_model_avg_aggregate_output_1.SampleModelAvgAggregate)
], SampleModelGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_sum_aggregate_output_1.SampleModelSumAggregate, { nullable: true }),
    __metadata("design:type", sample_model_sum_aggregate_output_1.SampleModelSumAggregate)
], SampleModelGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_min_aggregate_output_1.SampleModelMinAggregate, { nullable: true }),
    __metadata("design:type", sample_model_min_aggregate_output_1.SampleModelMinAggregate)
], SampleModelGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_max_aggregate_output_1.SampleModelMaxAggregate, { nullable: true }),
    __metadata("design:type", sample_model_max_aggregate_output_1.SampleModelMaxAggregate)
], SampleModelGroupBy.prototype, "_max", void 0);
exports.SampleModelGroupBy = SampleModelGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], SampleModelGroupBy);
//# sourceMappingURL=sample-model-group-by.output.js.map