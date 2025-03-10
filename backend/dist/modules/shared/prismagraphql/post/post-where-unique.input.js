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
exports.PostWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const user_nullable_scalar_relation_filter_input_1 = require("../user/user-nullable-scalar-relation-filter.input");
let PostWhereUniqueInput = class PostWhereUniqueInput {
    id;
    AND;
    OR;
    NOT;
    title;
    content;
    published;
    authorId;
    author;
};
exports.PostWhereUniqueInput = PostWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_input_1.PostWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_input_1.PostWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_input_1.PostWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PostWhereUniqueInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PostWhereUniqueInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], PostWhereUniqueInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], PostWhereUniqueInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_nullable_scalar_relation_filter_input_1.UserNullableScalarRelationFilter, { nullable: true }),
    __metadata("design:type", user_nullable_scalar_relation_filter_input_1.UserNullableScalarRelationFilter)
], PostWhereUniqueInput.prototype, "author", void 0);
exports.PostWhereUniqueInput = PostWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], PostWhereUniqueInput);
//# sourceMappingURL=post-where-unique.input.js.map