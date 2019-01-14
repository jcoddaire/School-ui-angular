import { OfficeAssignment } from './OfficeAssignment';
import { StudentGrade } from './StudentGrade';
import { Person } from './Person';
import { Department } from './Department';
import { OnlineCourse } from './OnlineCourse';
import { OnsiteCourse } from './OnsiteCourse';

export class Course{
    CourseID: number;
    Title: string;
    Credits: number;
    DepartmentID: number;
    department: Department;
    onlineCourse: OnlineCourse;
    onsiteCourse: OnsiteCourse;
    studentGrades: StudentGrade[];
    people: Person[];
}