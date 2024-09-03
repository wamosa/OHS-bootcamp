// src/UserPosts.tsx
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

interface Post {
  userId: number;
}

const UserPosts: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [postCounts, setPostCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    // Fetch users data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));

    // Fetch posts data
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: Post[]) => {
        // Count the number of posts per user
        const counts: { [key: number]: number } = {};
        data.forEach((post) => {
          counts[post.userId] = (counts[post.userId] || 0) + 1;
        });
        setPostCounts(counts);
      });
  }, []);

  return (
    <div>
      <h1>User Post Counts</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}: {postCounts[user.id] || 0} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
