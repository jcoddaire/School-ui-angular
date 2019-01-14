import { Person } from './Person';
import { Course } from './Course';

export class StudentGrade{
    EnrollmentID: number;
    CourseID: number;
    StudentID: number;
    grade: number;
    course: Course;
    person: Person;
}