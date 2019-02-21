import { Course } from './Course';


export interface Instructor {
    instructorID: number;
    firstName: string;
    lastName: string;
    hireDate: Date;
    terminated: boolean;
    courses: Course[];
}
