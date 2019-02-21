import { Course } from './Course';

export interface StudentCourse {
    studentID: number;
    courseID: number;
    course: Course;
    grade: number;
    enrolledYear: number;
    enrolledSemester: string;
    completed: boolean;
    dropped: boolean;
    droppedTime: Date;
}
