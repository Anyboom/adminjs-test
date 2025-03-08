import { SampleModelCountAggregate } from './sample-model-count-aggregate.output';
import { SampleModelAvgAggregate } from './sample-model-avg-aggregate.output';
import { SampleModelSumAggregate } from './sample-model-sum-aggregate.output';
import { SampleModelMinAggregate } from './sample-model-min-aggregate.output';
import { SampleModelMaxAggregate } from './sample-model-max-aggregate.output';
export declare class AggregateSampleModel {
    _count?: SampleModelCountAggregate;
    _avg?: SampleModelAvgAggregate;
    _sum?: SampleModelSumAggregate;
    _min?: SampleModelMinAggregate;
    _max?: SampleModelMaxAggregate;
}
