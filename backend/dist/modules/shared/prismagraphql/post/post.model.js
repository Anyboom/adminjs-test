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
exports.Post = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
let Post = class Post {
    id;
    title;
    content;
    published;
    authorId;
    author;
};
exports.Post = Post;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Post.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: false, nullable: true }),
    __metadata("design:type", Object)
], Post.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Object)
], Post.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    __metadata("design:type", Object)
], Post.prototype, "author", void 0);
exports.Post = Post = __decorate([
    (0, graphql_2.ObjectType)()
], Post);
//# sourceMappingURL=post.model.js.map