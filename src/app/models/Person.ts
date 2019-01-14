import { OfficeAssignment } from './OfficeAssignment';
import { StudentGrade } from './StudentGrade';
import { Course } from './Course';


export class Person{
    personID: number;
    lastName: string;
    firstName: string;
    hireDate: Date;
    enrollmentDate: Date;
    officeAssignment: OfficeAssignment;
    studentGrades: StudentGrade[];
    courses: Course[];
}