import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
export declare class PostScalarWhereInput {
    AND?: Array<PostScalarWhereInput>;
    OR?: Array<PostScalarWhereInput>;
    NOT?: Array<PostScalarWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    content?: StringNullableFilter;
    published?: BoolNullableFilter;
    authorId?: IntNullableFilter;
}
