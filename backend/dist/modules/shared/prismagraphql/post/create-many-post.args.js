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
exports.CreateManyPostArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_many_input_1 = require("./post-create-many.input");
const class_transformer_1 = require("class-transformer");
let CreateManyPostArgs = class CreateManyPostArgs {
    data;
    skipDuplicates;
};
exports.CreateManyPostArgs = CreateManyPostArgs;
__decorate([
    (0, graphql_1.Field)(() => [post_create_many_input_1.PostCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => post_create_many_input_1.PostCreateManyInput),
    __metadata("design:type", Array)
], CreateManyPostArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CreateManyPostArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyPostArgs = CreateManyPostArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyPostArgs);
//# sourceMappingURL=create-many-post.args.js.map