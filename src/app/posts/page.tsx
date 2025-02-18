import { useEffect, useState } from 'react';

// Define the Post interface
interface Post {
    _id: string; // Assuming _id is a string
    title: string;
    content: string;
    // Add other properties if needed
}

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]); // Type the posts state

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/posts');
            const data = await res.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    {/* Add comments section here */}
                </div>
            ))}
        </div>
    );
}
