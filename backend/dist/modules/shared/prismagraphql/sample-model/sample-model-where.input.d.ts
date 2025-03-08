import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
export declare class SampleModelWhereInput {
    AND?: Array<SampleModelWhereInput>;
    OR?: Array<SampleModelWhereInput>;
    NOT?: Array<SampleModelWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
}
