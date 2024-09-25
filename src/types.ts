// Define los tipos de Course, Lesson y User.
export interface Lesson {
    id: string;
    title: string;
    content: string;
  }
  
  export interface Course {
    id: string;
    title: string;
    lessonIds: string[];
    lessons?: Lesson[];
  }
  
  export interface User {
    id: string;
    name: string;
    enrolledCourseIds: string[];
    enrolledCourses?: Course[];
  }