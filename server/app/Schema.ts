import { gql } from "apollo-server-express";

const Schema = gql`
    type Post{
        id: ID
        title: String
        complain: String
        author: Author
    },
    type Author{
        id: ID
        name:String
        authorId: String
        post: [Post]
    }
    type Query {
        post(id: ID): Post
        posts: [Post]
        author(id: ID): Author
        authors: [Author]
        
    },
    type Mutation {
        addPost(title: String!, author:String!, complain:String!): Post
    }
`;
export default Schema;