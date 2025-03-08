import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
export declare class UserUpdateManyMutationInput {
    email?: StringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
}
