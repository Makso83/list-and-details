import React from "react";

function UserDetails(props) {
    if (props.data.details) {
        return (
            <ul className="UserDetails__wrapper">
                <li className="UserDetails__user-avatar">
                    <img
                        src={props.data.avatar}
                        width={"300px"}
                        height={"300px"}
                        alt={props.data.name}
                    />
                </li>
                <li className="UserDetails__user-name">{props.data.name}</li>
                <li className="UserDetails__user-details_padding">
                    City: {props.data.details.city}
                </li>
                <li className="UserDetails__user-details_padding">
                    Company: {props.data.details.company}
                </li>
                <li className="UserDetails__user-details_padding">
                    Position: {props.data.details.position}
                </li>
            </ul>
        );
    } else return null;
}

export default UserDetails;
