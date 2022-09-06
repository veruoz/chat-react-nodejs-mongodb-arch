export default ({ isAuth, values, errors }) => {

    const rules = {
        email:    (value) => {
            if (!value) {
                errors.email = 'Email is required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
                errors.email = 'Invalid email address';
            }
        },
        name:     (value) => {
            if (!value) {
                errors.name = 'Name is required';
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = 'Enter your password';
            } else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)) {
                errors.password = isAuth ? "Password isn't correct" : "Your password is simple"
            }
        },
        // repeat_password: (errors, value) => {
        //     if (!value) {
        //         errors.repeat_password = 'Repeat your password';
        //     } else if (value.password !== value) {
        //         errors.repeat_password = 'Your password is not the same';
        //     }
        // }
    }


    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
}

