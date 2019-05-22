import {Comment} from './comment'

export class Post {
    id: number;
    title: string;
    created: Date;
    from: string;
    comments: Array<Comment> = []
}