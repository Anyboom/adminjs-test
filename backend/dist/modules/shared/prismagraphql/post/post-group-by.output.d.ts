import { PostCountAggregate } from './post-count-aggregate.output';
import { PostAvgAggregate } from './post-avg-aggregate.output';
import { PostSumAggregate } from './post-sum-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';
export declare class PostGroupBy {
    id: number;
    title: string;
    content?: string;
    published?: boolean;
    authorId?: number;
    _count?: PostCountAggregate;
    _avg?: PostAvgAggregate;
    _sum?: PostSumAggregate;
    _min?: PostMinAggregate;
    _max?: PostMaxAggregate;
}
