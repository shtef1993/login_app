import React, { useState } from 'react';
import UserForm from './komponente/obrazac';
import UserDetails from './komponente/detalji';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = async (username) => {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);

    if (!userResponse.ok) {
      console.error('Error fetching user data');
      setUserData(null);
      return;
    }

    const user = await userResponse.json();

    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!reposResponse.ok) {
      console.error('Error fetching user repositories');
      setUserData(null);
      return;
    }

    const repos = await reposResponse.json();

    setUserData({
      avatar_url: user.avatar_url,
      name: user.name,
      location: user.location,
      bio: user.bio,
      repos: repos.map(repo => ({ id: repo.id, name: repo.name })),
    });
  };

  const handleReset = () => {
    setUsername('');
    setUserData(null);
  };

  return (
    <div>
      {userData ? (
        <UserDetails user={userData} onReset={handleReset} />
      ) : (
        <UserForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;