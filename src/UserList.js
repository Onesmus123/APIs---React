import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Optional, if you want to add styles

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong><br />
            Email: {user.email}<br />
            Phone: {user.phone}<br />
            Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
