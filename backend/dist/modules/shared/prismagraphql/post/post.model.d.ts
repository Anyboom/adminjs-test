import { User } from '../user/user.model';
export declare class Post {
    id: number;
    title: string;
    content: string | null;
    published: boolean | null;
    authorId: number | null;
    author?: User | null;
}
