import { Course } from './Course';


export class Instructor {
    instructorID: number;
    firstName: string;
    lastName: string;
    hireDate: Date;
    terminated: boolean;
    courses: Course[];
}
