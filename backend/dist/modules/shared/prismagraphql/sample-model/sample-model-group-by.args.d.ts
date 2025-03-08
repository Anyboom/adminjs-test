import { SampleModelWhereInput } from './sample-model-where.input';
import { SampleModelOrderByWithAggregationInput } from './sample-model-order-by-with-aggregation.input';
import { SampleModelScalarFieldEnum } from './sample-model-scalar-field.enum';
import { SampleModelScalarWhereWithAggregatesInput } from './sample-model-scalar-where-with-aggregates.input';
import { SampleModelCountAggregateInput } from './sample-model-count-aggregate.input';
import { SampleModelAvgAggregateInput } from './sample-model-avg-aggregate.input';
import { SampleModelSumAggregateInput } from './sample-model-sum-aggregate.input';
import { SampleModelMinAggregateInput } from './sample-model-min-aggregate.input';
import { SampleModelMaxAggregateInput } from './sample-model-max-aggregate.input';
export declare class SampleModelGroupByArgs {
    where?: SampleModelWhereInput;
    orderBy?: Array<SampleModelOrderByWithAggregationInput>;
    by: Array<`${SampleModelScalarFieldEnum}`>;
    having?: SampleModelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SampleModelCountAggregateInput;
    _avg?: SampleModelAvgAggregateInput;
    _sum?: SampleModelSumAggregateInput;
    _min?: SampleModelMinAggregateInput;
    _max?: SampleModelMaxAggregateInput;
}
