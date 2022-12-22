import {postsData, authorData} from "./dataset"

interface Post{
    id:string;
    title:string;
    complain: string;
    authorId:string;
}
interface Author {
    id: string
    name: string
}

const createPost = (name: string) =>
{
    const author = {
        name: name,
        id:(authorData.length +1).toString(),
    };
    authorData.push(author)
    return author.id
}




const Resolvers = {

    Mutation: {
        addPost: (_: null, args: {title: string; author: string; complain: string;}) => {
            const authorAvailable = authorData.find((author)=> author.name.toLocaleLowerCase() === args.author.toLocaleLowerCase());
            const postAvailable = postsData.find((post) => post.title.toLocaleLowerCase()=== args.title.toLocaleLowerCase())
            if(authorAvailable && postAvailable)
            {
                if(postAvailable.authorId === authorAvailable.id){
                    return postAvailable;
                }
            };
            const newPost: Post ={
                id:(postsData.length +1).toString(),
                title: args.title,
                complain: args.complain,
                authorId: authorAvailable ? authorAvailable.id : createPost(args.author)
        
            };
            postsData.push(newPost);
            return newPost;
            
        }
    },

    
    Query: {
        post: (_: null, args: { id: string }) => {
            return postsData.find((post) => post.id === args.id);
        },
        posts:() => {
            return postsData;
        },
        author:(_: null, args: {id: string}) => {
            return authorData.find((author)=> author.id == args.id)
        },
        authors:() => {
            return authorData;
        }
    },
    Post: {
        author: (parent: Post) => {
            return authorData.find((author) => author.id === parent.id)
        },
    },
    Author: {
        post:(parent:Author) => {
            return postsData.filter((post)=> post.authorId === parent.id )
        }
    }
}
export default Resolvers