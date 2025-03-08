import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
export declare class UserOrderByWithRelationInput {
    id?: `${SortOrder}`;
    email?: `${SortOrder}`;
    name?: SortOrderInput;
    posts?: PostOrderByRelationAggregateInput;
}
