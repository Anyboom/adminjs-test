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
exports.BoolNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_bool_nullable_with_aggregates_filter_input_1 = require("./nested-bool-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_bool_nullable_filter_input_1 = require("./nested-bool-nullable-filter.input");
let BoolNullableWithAggregatesFilter = class BoolNullableWithAggregatesFilter {
    equals;
    not;
    _count;
    _min;
    _max;
};
exports.BoolNullableWithAggregatesFilter = BoolNullableWithAggregatesFilter;
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], BoolNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_with_aggregates_filter_input_1.NestedBoolNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_bool_nullable_with_aggregates_filter_input_1.NestedBoolNullableWithAggregatesFilter)
], BoolNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    __metadata("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    __metadata("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    __metadata("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.BoolNullableWithAggregatesFilter = BoolNullableWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], BoolNullableWithAggregatesFilter);
//# sourceMappingURL=bool-nullable-with-aggregates-filter.input.js.map