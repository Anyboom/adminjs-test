import { SampleModelWhereInput } from './sample-model-where.input';
import { StringFilter } from '../prisma/string-filter.input';
export declare class SampleModelWhereUniqueInput {
    id?: number;
    AND?: Array<SampleModelWhereInput>;
    OR?: Array<SampleModelWhereInput>;
    NOT?: Array<SampleModelWhereInput>;
    name?: StringFilter;
}
