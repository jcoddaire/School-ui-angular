import { Course } from './Course';

export class Department{
    departmentID: number;
    name: string;
    budget: number;
    startDate: Date;
    department: Department;
    administrator: number;
    courses: Course[];
}