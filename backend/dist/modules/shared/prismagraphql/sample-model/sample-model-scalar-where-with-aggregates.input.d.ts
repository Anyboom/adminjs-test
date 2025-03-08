import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
export declare class SampleModelScalarWhereWithAggregatesInput {
    AND?: Array<SampleModelScalarWhereWithAggregatesInput>;
    OR?: Array<SampleModelScalarWhereWithAggregatesInput>;
    NOT?: Array<SampleModelScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
}
