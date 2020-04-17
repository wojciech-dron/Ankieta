import { Answer } from './answer';

export interface Question {
    title: string;
    isActive: boolean;
    answers?: Answer[];
}
