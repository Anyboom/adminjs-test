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
exports.PostWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const user_nullable_scalar_relation_filter_input_1 = require("../user/user-nullable-scalar-relation-filter.input");
let PostWhereInput = class PostWhereInput {
    AND;
    OR;
    NOT;
    id;
    title;
    content;
    published;
    authorId;
    author;
};
exports.PostWhereInput = PostWhereInput;
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PostWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PostWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PostWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], PostWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PostWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PostWhereInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], PostWhereInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], PostWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_nullable_scalar_relation_filter_input_1.UserNullableScalarRelationFilter, { nullable: true }),
    __metadata("design:type", user_nullable_scalar_relation_filter_input_1.UserNullableScalarRelationFilter)
], PostWhereInput.prototype, "author", void 0);
exports.PostWhereInput = PostWhereInput = __decorate([
    (0, graphql_2.InputType)()
], PostWhereInput);
//# sourceMappingURL=post-where.input.js.map