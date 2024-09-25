'use client';

import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apolloClient';

const GET_COURSES = gql`
  query GetCourses {
    courses {
      id
      title
      lessons {
        id
        title
        content
      }
    }
  }
`;

const CoursesPage = () => {
  const { loading, error, data } = useQuery(GET_COURSES, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Courses</h1>
      {data.courses.map((course: any) => (
        <div key={course.id}>
          <h2 className='font-bold pl-2'>{course.title}</h2>
          <ul className='pl-4 text-sm'>
            {course.lessons.map((lesson: any) => (
              <li key={lesson.id}>{lesson.title}
              <p className='pl-2 bg-red-500'>{lesson.content}</p>
              </li>
              
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
