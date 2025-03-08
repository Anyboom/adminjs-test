import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';
export declare class UserUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
}
