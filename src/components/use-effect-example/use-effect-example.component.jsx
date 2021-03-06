import React, {useEffect, useState} from 'react';

import Card from '../card/card.component';

const UseEffectExample = () => {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    /*

    // Usage Notes:

    useEffect(() => {
        console.log("Component Mounted");
    }, []); // Fire when component mounted

    useEffect(() => {
        console.log("State Changed");
    }); // Fire every time state changes

    useEffect(() => {
        console.log("User Changed");
    }, [user]); // Fire when user changes

    */

    useEffect(() => {
        if(!searchQuery) return;
        const fetchFunc = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
            const resJson = await response.json();
            setUser(resJson[0]);
        }
        fetchFunc();
        return () => {
            // Perform cleanup
            // Runs when component unmounts


        }
    }, [searchQuery]);


    return (
        <Card>
            <input
                type='search'
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
            />
            {user ? (
                <div>
                    <h3>{user.name}</h3>
                    <h3> {user.username} </h3>
                    <h3> {user.email} </h3>
                </div>
            ) : (
                <p>No user found</p>
            )}
        </Card>
    );
};

export default UseEffectExample;
