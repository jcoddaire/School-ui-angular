import { StudentCourse } from './StudentCourse';


export interface Student {
    studentID: number;
    firstName: string;
    lastName: string;
    enrollmentDate: Date;
    courses: StudentCourse[];
    studentClass: string;
}
