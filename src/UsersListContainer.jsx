import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UsersList from "./UsersList";
import getData from "./userApi";
import UserDetails from "./UserDetails";
import ReactLoading from "react-loading";

function UsersListContainer() {
    const [usersList, setUsersList] = useState([]);
    const [userData, setUserData] = useState({});
    const [isFetchingUser, setIsFetchingUser] = useState(false);
    const [isFetchingList, setIsFetchingList] = useState(false);

    useEffect(() => {
        getData("users.json", setUsersList, setIsFetchingList);
    }, []);

    const onUserSelected = (id) => {
        getData(`${id}.json`, setUserData, setIsFetchingUser);
    };

    return (
        <div className="list_wrapper">
            {isFetchingList ? (
                <ReactLoading className="centered" color={"#0f7ffa"} />
            ) : (
                <UsersList list={usersList} onUserSelected={onUserSelected} />
            )}
            <div className="UserDetails__wrapper">
                {isFetchingUser ? (
                    <ReactLoading
                        type="bubbles"
                        className="centered"
                        color={"#0f7ffa"}
                    />
                ) : (
                    <UserDetails data={userData} />
                )}
            </div>
        </div>
    );
}

export default UsersListContainer;
