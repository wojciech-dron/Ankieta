import { Answer } from './answer';

export interface Question {
    title: string;
    time: Date;
    answers?: Answer[];
}
