import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
export declare class PostScalarWhereWithAggregatesInput {
    AND?: Array<PostScalarWhereWithAggregatesInput>;
    OR?: Array<PostScalarWhereWithAggregatesInput>;
    NOT?: Array<PostScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    title?: StringWithAggregatesFilter;
    content?: StringNullableWithAggregatesFilter;
    published?: BoolNullableWithAggregatesFilter;
    authorId?: IntNullableWithAggregatesFilter;
}
