import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    enrolledCourses: [Course!]!
  }

  type Course {
    id: ID!
    title: String!
    lessons: [Lesson!]!
  }

  type Lesson {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    courses: [Course!]!
    course(id: ID!): Course
  }
`;
