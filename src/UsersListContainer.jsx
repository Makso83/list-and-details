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
    const [userID, setUserID] = useState(0);
    const [isFetchingUser, setIsFetchingUser] = useState(false);
    const [isFetchingList, setIsFetchingList] = useState(false);

    useEffect(() => {
        !usersList.length &&
            getData("users.json", setUsersList, setIsFetchingList);

        userID && getData(`${userID}.json`, setUserData, setIsFetchingUser);
    }, [userID]);

    return (
        <div className="list_wrapper">
            {isFetchingList ? (
                <ReactLoading className="centered" color={"#0f7ffa"} />
            ) : (
                <UsersList list={usersList} setUserID={setUserID} />
            )}
            <div className="UserDetails__wrapper">
                {isFetchingUser ? (
                    <ReactLoading
                        type="cylon"
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
