import React, { createContext, useState} from 'react';

export const UserContext = createContext({
state : '',
updateState: (user) => {}


});

const UserProvider = ( { children } ) => {

    const [state, setState] = useState();

    const updateState = (user) => setState(user);

return <UserContext.Provider value={{state, updateState}} >{ children }</UserContext.Provider>;

}


export default UserProvider;