import React from "react";
import { useState, useEffect } from "react";

function UsersList(props) {
    const [activeID, setActiveID] = useState(null);

    useEffect(() => {
        if (activeID !== null) props.onUserSelected(activeID);
    }, [activeID]);

    const isActive = (id) => {
        return id === activeID;
    };

    return (
        <>
            <ul className="UserList__ul">
                {props.list.map((user) => (
                    <li
                        key={user.id}
                        className={isActive(user.id) ? "active" : undefined}
                        onClick={() => setActiveID(user.id)}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UsersList;
