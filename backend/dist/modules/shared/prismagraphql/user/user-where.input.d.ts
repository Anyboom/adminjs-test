import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: IntFilter;
    email?: StringFilter;
    name?: StringNullableFilter;
    posts?: PostListRelationFilter;
}
