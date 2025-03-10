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
exports.UserWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const post_list_relation_filter_input_1 = require("../post/post-list-relation-filter.input");
let UserWhereUniqueInput = class UserWhereUniqueInput {
    id;
    email;
    AND;
    OR;
    NOT;
    name;
    posts;
};
exports.UserWhereUniqueInput = UserWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_list_relation_filter_input_1.PostListRelationFilter, { nullable: true }),
    __metadata("design:type", post_list_relation_filter_input_1.PostListRelationFilter)
], UserWhereUniqueInput.prototype, "posts", void 0);
exports.UserWhereUniqueInput = UserWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], UserWhereUniqueInput);
//# sourceMappingURL=user-where-unique.input.js.map