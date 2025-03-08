import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class PostOrderByWithRelationInput {
    id?: `${SortOrder}`;
    title?: `${SortOrder}`;
    content?: SortOrderInput;
    published?: SortOrderInput;
    authorId?: SortOrderInput;
    author?: UserOrderByWithRelationInput;
}
