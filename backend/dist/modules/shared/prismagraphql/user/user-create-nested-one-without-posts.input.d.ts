import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserCreateOrConnectWithoutPostsInput } from './user-create-or-connect-without-posts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
