import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function UserDetails({ user, onReset }) {
  return (
    <div className="card text-center">
      <div className="card-avatar">
        <img src={user.avatar_url} alt="User Avatar" width="100" height="100" className="mb-3" />
      </div>
      <div className="card-details">
        <h2>{user.name}</h2>
        <p>Location: {user.location}</p>
        <p>Bio: {user.bio}</p>
        <ul>
          {user.repos.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
        <Button onClick={onReset} variant="primary">
          Reset
        </Button>
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
