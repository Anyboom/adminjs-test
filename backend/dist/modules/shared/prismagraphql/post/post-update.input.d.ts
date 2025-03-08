import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { UserUpdateOneWithoutPostsNestedInput } from '../user/user-update-one-without-posts-nested.input';
export declare class PostUpdateInput {
    title?: StringFieldUpdateOperationsInput;
    content?: NullableStringFieldUpdateOperationsInput;
    published?: NullableBoolFieldUpdateOperationsInput;
    author?: UserUpdateOneWithoutPostsNestedInput;
}
