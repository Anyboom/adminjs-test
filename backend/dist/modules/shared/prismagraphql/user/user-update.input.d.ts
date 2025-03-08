import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
export declare class UserUpdateInput {
    email?: StringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
}
