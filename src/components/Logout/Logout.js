import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Logout = () => {
    const {user} = useFirebase();
    return (
        <div>
            <div>
            {
            user.name && <div>
              <h3>{user.name}</h3>
            </div>
          }

            </div>
          
        </div>
    );
};

export default Logout;