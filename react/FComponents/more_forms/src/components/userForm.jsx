import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <form>
                <div>
                    <span>First Name: </span>
                    <input onChange={(e) => { setFirstName(e.target.value) }} type="text" name="firstName"/>
                </div>
                { firstName.length > 0 && firstName.length < 2 ?
                    <p>First Name must be at least 2 characters.</p> : ""
                }
                <div>
                    <span>Last Name: </span>
                    <input onChange={(e) => { setLastName(e.target.value) }} type="text" name="lastName"/>
                </div>
                { lastName.length > 0 && lastName.length < 2 ?
                    <p>Last Name must be at least 2 characters.</p> : ""
                }
                <div>
                    <span>Email: </span>
                    <input onChange={(e) => { setEmail(e.target.value) }} type="text" name="email"/>
                </div>
                { email.length > 0 && email.length < 5 ?
                    <p>Email must be at least 5 characters.</p> : ""
                }
                <div>
                    <span>Password: </span>
                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password"/>
                </div>
                { password.length > 0 && password.length < 8 ?
                    <p>Password must be at least 8 characters.</p> : ""
                }
                <div>
                    <span>Confirm Password: </span>
                    <input onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" name="confirmPassword"/>
                </div>
                { confirmPassword.length > 0 && confirmPassword !== password ?
                    <p>Passwords must match.</p> : ""
                }
            </form>
        </>
    );
}

export default UserForm;