import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
export declare class UserUncheckedCreateInput {
    id?: number;
    email: string;
    name?: string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
}
