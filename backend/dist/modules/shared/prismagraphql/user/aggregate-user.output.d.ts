import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
export declare class AggregateUser {
    _count?: UserCountAggregate;
    _avg?: UserAvgAggregate;
    _sum?: UserSumAggregate;
    _min?: UserMinAggregate;
    _max?: UserMaxAggregate;
}
