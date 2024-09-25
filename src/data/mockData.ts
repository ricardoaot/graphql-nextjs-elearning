import {User, Course, Lesson } from "../types"

export const users: User[] = [
    { id: '1', name: 'John Doe', enrolledCourseIds: ['101', '102'] },
    { id: '2', name: 'Jane Smith', enrolledCourseIds: ['101'] },
  ];
  
  export const courses: Course[] = [
    { id: '101', title: 'GraphQL Basics', lessonIds: ['1001', '1002'] },
    { id: '102', title: 'Advanced GraphQL', lessonIds: ['1003'] },
  ];
  
  export const lessons: Lesson[] = [
    { id: '1001', title: 'Introduction to GraphQL', content: 'Learn the basics of GraphQL.' },
    { id: '1002', title: 'Queries and Mutations', content: 'Learn about queries and mutations in GraphQL.' },
    { id: '1003', title: 'Optimizing GraphQL Queries', content: 'Learn how to optimize queries in GraphQL.' },
  ];
  