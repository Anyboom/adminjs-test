import { UserWhereInput } from './user-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
export declare class UserWhereUniqueInput {
    id?: number;
    email?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    name?: StringNullableFilter;
    posts?: PostListRelationFilter;
}
