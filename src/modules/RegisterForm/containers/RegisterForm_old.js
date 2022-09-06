import RegisterForm from "../components/RegisterForm";
import {withFormik} from "formik";

export default withFormik({
    // mapPropsToValues: () => ({email: 'ewwgewge'}),
    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.password) {
            errors.password = 'Enter your password';
        } else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password)) {
            errors.password = "Your password is simple"
        }

        if (!values.repeat_password) {
            errors.repeat_password = 'Repeat your password';
        } else if (values.password !== values.repeat_password) {
            errors.repeat_password = 'Your password is not the same';
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);


