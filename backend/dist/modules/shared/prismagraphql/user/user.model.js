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
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const post_model_1 = require("../post/post.model");
const user_count_output_1 = require("./user-count.output");
let User = class User {
    id;
    email;
    name;
    posts;
    _count;
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_model_1.Post], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_count_output_1.UserCount, { nullable: false }),
    __metadata("design:type", user_count_output_1.UserCount)
], User.prototype, "_count", void 0);
exports.User = User = __decorate([
    (0, graphql_2.ObjectType)()
], User);
//# sourceMappingURL=user.model.js.map