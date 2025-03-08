import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
export declare class UserUncheckedUpdateWithoutPostsInput {
    id?: IntFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
}
