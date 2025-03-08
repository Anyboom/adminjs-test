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
exports.SampleModelOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sample_model_count_order_by_aggregate_input_1 = require("./sample-model-count-order-by-aggregate.input");
const sample_model_avg_order_by_aggregate_input_1 = require("./sample-model-avg-order-by-aggregate.input");
const sample_model_max_order_by_aggregate_input_1 = require("./sample-model-max-order-by-aggregate.input");
const sample_model_min_order_by_aggregate_input_1 = require("./sample-model-min-order-by-aggregate.input");
const sample_model_sum_order_by_aggregate_input_1 = require("./sample-model-sum-order-by-aggregate.input");
let SampleModelOrderByWithAggregationInput = class SampleModelOrderByWithAggregationInput {
    id;
    name;
    _count;
    _avg;
    _max;
    _min;
    _sum;
};
exports.SampleModelOrderByWithAggregationInput = SampleModelOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SampleModelOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SampleModelOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_count_order_by_aggregate_input_1.SampleModelCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_count_order_by_aggregate_input_1.SampleModelCountOrderByAggregateInput)
], SampleModelOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_avg_order_by_aggregate_input_1.SampleModelAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_avg_order_by_aggregate_input_1.SampleModelAvgOrderByAggregateInput)
], SampleModelOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_max_order_by_aggregate_input_1.SampleModelMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_max_order_by_aggregate_input_1.SampleModelMaxOrderByAggregateInput)
], SampleModelOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_min_order_by_aggregate_input_1.SampleModelMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_min_order_by_aggregate_input_1.SampleModelMinOrderByAggregateInput)
], SampleModelOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => sample_model_sum_order_by_aggregate_input_1.SampleModelSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", sample_model_sum_order_by_aggregate_input_1.SampleModelSumOrderByAggregateInput)
], SampleModelOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.SampleModelOrderByWithAggregationInput = SampleModelOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], SampleModelOrderByWithAggregationInput);
//# sourceMappingURL=sample-model-order-by-with-aggregation.input.js.map