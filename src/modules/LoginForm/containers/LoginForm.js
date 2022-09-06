import LoginForm from "../components/LoginForm";
import {withFormik} from "formik";
import validateForm from "../../../helpers/validate";

export default withFormik({
    // mapPropsToValues: () => ({email: 'ewwgewge'}),
    // Custom sync validation
    mapPropsToValues:   () => ({
        email:    '',
        password: ''
    }),
    enableReinitialize: true,

    validate: values => {
        const errors = {};
        validateForm({ isAuth: true, values, errors })
        // const validate = validateForm({ isAuth: true })
        // Object.keys(values).forEach(key => validate[key] && validate[key](errors, values[key]))

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'LoginForm',
})(LoginForm);


