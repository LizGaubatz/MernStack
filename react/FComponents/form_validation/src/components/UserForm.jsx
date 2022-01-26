import React, { useReducer } from "react";

const initialState = {
    firstname: {
        value: '',
        error: 'Please enter a valid name'
    },
    lastname: {
        value: '',
        error: 'Please enter a valid name'
    },
    email: {
        value: '',
        error: 'Please enter a valid email'
    }
};


function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const UserForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {/* {JSON.stringify(state)} */}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstname"
                        value={state.firstname.value}
                        onChange={handleChange}
                    />
                </label>
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastname"
                        value={state.lastname.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}

export default UserForm;