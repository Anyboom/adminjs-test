import { SampleModelWhereInput } from './sample-model-where.input';
import { SampleModelOrderByWithRelationInput } from './sample-model-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SampleModelWhereUniqueInput } from './sample-model-where-unique.input';
import { SampleModelScalarFieldEnum } from './sample-model-scalar-field.enum';
export declare class FindFirstSampleModelOrThrowArgs {
    where?: SampleModelWhereInput;
    orderBy?: Array<SampleModelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SampleModelWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<`${SampleModelScalarFieldEnum}`>;
}
