import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
export declare class PostCreateInput {
    title: string;
    content?: string;
    published?: boolean;
    author?: UserCreateNestedOneWithoutPostsInput;
}
