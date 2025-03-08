import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
export declare class PostUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    title?: StringFieldUpdateOperationsInput;
    content?: NullableStringFieldUpdateOperationsInput;
    published?: NullableBoolFieldUpdateOperationsInput;
    authorId?: NullableIntFieldUpdateOperationsInput;
}
