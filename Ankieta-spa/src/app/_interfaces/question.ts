import { Answer } from './answer';

export interface Question {
    id: number;
    title: string;
    isActive: boolean;
    expirationAt: Date;
    answers?: Answer[];
}
