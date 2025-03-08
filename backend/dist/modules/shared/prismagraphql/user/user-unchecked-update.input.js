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
exports.UserUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const post_unchecked_update_many_without_author_nested_input_1 = require("../post/post-unchecked-update-many-without-author-nested.input");
let UserUncheckedUpdateInput = class UserUncheckedUpdateInput {
    id;
    email;
    name;
    posts;
};
exports.UserUncheckedUpdateInput = UserUncheckedUpdateInput;
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], UserUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_unchecked_update_many_without_author_nested_input_1.PostUncheckedUpdateManyWithoutAuthorNestedInput, { nullable: true }),
    __metadata("design:type", post_unchecked_update_many_without_author_nested_input_1.PostUncheckedUpdateManyWithoutAuthorNestedInput)
], UserUncheckedUpdateInput.prototype, "posts", void 0);
exports.UserUncheckedUpdateInput = UserUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateInput);
//# sourceMappingURL=user-unchecked-update.input.js.map