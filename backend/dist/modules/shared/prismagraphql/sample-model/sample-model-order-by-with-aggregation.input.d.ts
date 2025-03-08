import { SortOrder } from '../prisma/sort-order.enum';
import { SampleModelCountOrderByAggregateInput } from './sample-model-count-order-by-aggregate.input';
import { SampleModelAvgOrderByAggregateInput } from './sample-model-avg-order-by-aggregate.input';
import { SampleModelMaxOrderByAggregateInput } from './sample-model-max-order-by-aggregate.input';
import { SampleModelMinOrderByAggregateInput } from './sample-model-min-order-by-aggregate.input';
import { SampleModelSumOrderByAggregateInput } from './sample-model-sum-order-by-aggregate.input';
export declare class SampleModelOrderByWithAggregationInput {
    id?: `${SortOrder}`;
    name?: `${SortOrder}`;
    _count?: SampleModelCountOrderByAggregateInput;
    _avg?: SampleModelAvgOrderByAggregateInput;
    _max?: SampleModelMaxOrderByAggregateInput;
    _min?: SampleModelMinOrderByAggregateInput;
    _sum?: SampleModelSumOrderByAggregateInput;
}
