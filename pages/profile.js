import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

const Profile = () => {
  useEffect(() => {
    if (window.location.hash) {
      const urlParams = new URLSearchParams(window.location.hash.substr(1));
      const access_token = urlParams.get('access_token');
      console.log(access_token);
      const fetchProfile = async () => {
        const response = await axios.get(
          'https://www.googleapis.com/auth/userinfo.profile',
          {
            headers: {
              Authorization: 'Bearer' + access_token,
            },
          }
        );
        console.log(response);
      };
      fetchProfile();
    } else {
      console.log('no hash');
    }
  });
  return (
    <div className={styles.container}>
      <h1>Profile page</h1>
    </div>
  );
};

export default Profile;
