import { SampleModelWhereInput } from './sample-model-where.input';
import { SampleModelOrderByWithRelationInput } from './sample-model-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SampleModelWhereUniqueInput } from './sample-model-where-unique.input';
import { SampleModelCountAggregateInput } from './sample-model-count-aggregate.input';
import { SampleModelAvgAggregateInput } from './sample-model-avg-aggregate.input';
import { SampleModelSumAggregateInput } from './sample-model-sum-aggregate.input';
import { SampleModelMinAggregateInput } from './sample-model-min-aggregate.input';
import { SampleModelMaxAggregateInput } from './sample-model-max-aggregate.input';
export declare class SampleModelAggregateArgs {
    where?: SampleModelWhereInput;
    orderBy?: Array<SampleModelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SampleModelWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: SampleModelCountAggregateInput;
    _avg?: SampleModelAvgAggregateInput;
    _sum?: SampleModelSumAggregateInput;
    _min?: SampleModelMinAggregateInput;
    _max?: SampleModelMaxAggregateInput;
}
