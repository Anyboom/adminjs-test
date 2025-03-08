import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
export declare class UserCreateInput {
    email: string;
    name?: string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
}
