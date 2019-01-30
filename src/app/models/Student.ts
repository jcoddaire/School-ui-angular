import { StudentCourse } from './StudentCourse';


export class Student {
    studentID: number;
    firstName: string;
    lastName: string;
    enrollmentDate: Date;
    courses: StudentCourse[];
}
