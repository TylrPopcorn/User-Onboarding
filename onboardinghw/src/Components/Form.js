import React from 'react'

const Form = function (props) {
    const { change, submit, errors } = props;
    const { username, email, password, checked } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === "checkbox" ? checked : value;
        change(name, newVal)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <h1> My Form </h1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>

            <form onSubmit={onSubmit}>
                <label> Name:
                    <input
                        type="text"
                        value={username}
                        name="username"
                        data-test-id="formName"
                        onChange={onChange}
                    />
                </label>

                <label> Email:
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}
                    />
                </label>

                <label> Password:
                    <input
                        value={password}
                        name="password"
                        type="password"
                        onChange={onChange}
                    />
                </label>

                <label> Terms of Service:
                    <input
                        type="checkbox"
                        name="checked"
                        checked={checked}
                        onChange={onChange}
                    />
                </label>

                <input name="submit" type="submit" value={"Create"} />

            </form>
        </div>
    )
}

export default Form;