import DataLoader from 'dataloader';
import { users, courses, lessons } from '../data/mockData';

// Tipos para mejorar la legibilidad
interface User {
  id: string;
  name: string;
  enrolledCourseIds: string[];
}

interface Course {
  id: string;
  title: string;
  lessonIds: string[];
}

interface Lesson {
  id: string;
  title: string;
}

interface Loaders {
  courseLoader: DataLoader<string, Course | undefined>;
  lessonLoader: DataLoader<string, Lesson | undefined>;
}

// Resolver para consultas
const getUsers = (): User[] => users;
const getUserById = (_: unknown, { id }: { id: string }): User | undefined =>
  users.find(user => user.id === id);

const getCourses = (): Course[] => courses;
const getCourseById = (_: unknown, { id }: { id: string }): Course | undefined =>
  courses.find(course => course.id === id);

// Resolver para asociaciones
const getEnrolledCourses = (user: User, _: unknown, { loaders }: { loaders: Loaders }) =>
  loaders.courseLoader.loadMany(user.enrolledCourseIds);

const getLessonsForCourse = (course: Course, _: unknown, { loaders }: { loaders: Loaders }) =>
  loaders.lessonLoader.loadMany(course.lessonIds);

// Resolvers
export const resolvers = {
  Query: {
    users: getUsers,
    user: getUserById,
    courses: getCourses,
    course: getCourseById,
  },
  User: {
    enrolledCourses: getEnrolledCourses,
  },
  Course: {
    lessons: getLessonsForCourse,
  },
};

// DataLoader functions for batching and caching
export const createLoaders = (): Loaders => ({
  courseLoader: new DataLoader(async (courseIds: readonly string[]) => {
    return courseIds.map(id => courses.find(course => course.id === id));
  }),
  lessonLoader: new DataLoader(async (lessonIds: readonly string[]) => {
    return lessonIds.map(id => lessons.find(lesson => lesson.id === id));
  }),
});
