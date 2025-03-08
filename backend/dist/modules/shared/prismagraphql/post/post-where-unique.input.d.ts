import { PostWhereInput } from './post-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
export declare class PostWhereUniqueInput {
    id?: number;
    AND?: Array<PostWhereInput>;
    OR?: Array<PostWhereInput>;
    NOT?: Array<PostWhereInput>;
    title?: StringFilter;
    content?: StringNullableFilter;
    published?: BoolNullableFilter;
    authorId?: IntNullableFilter;
    author?: UserNullableScalarRelationFilter;
}
