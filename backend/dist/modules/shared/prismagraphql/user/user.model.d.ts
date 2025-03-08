import { Post } from '../post/post.model';
import { UserCount } from './user-count.output';
export declare class User {
    id: number;
    email: string;
    name: string | null;
    posts?: Array<Post>;
    _count?: UserCount;
}
