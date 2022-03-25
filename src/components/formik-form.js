import { Formik, Form, Field, ErrorMessage } from "formik";

const DataForm = () => (
    <>
        <h1>Your Data</h1>
        <Formik
            initialValues={{ name: "", email: "", acceptedTerms: false }}
            validate={(values) => {
                const errors = {};
                if (!values.name) {
                    errors.name = "Required";
                }

                if (!values.acceptedTerms) {
                    errors.acceptedTerms =
                        "You must accept the terms and conditions before you proceed.";
                }

                if (!values.email) {
                    errors.email = "Required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = "Invalid email address";
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                // post data to server
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, dirty, handleReset }) => (
                <Form>
                    <div>
                        <label>
                            Name
                            <Field type="text" name="name" />
                        </label>
                        <ErrorMessage name="name" component="span" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="span" />
                    </div>
                    <div>
                        <label>Accept terms</label>
                        <Field type="checkbox" name="acceptedTerms" />
                        <ErrorMessage name="acceptedTerms" component="span" />
                    </div>
                    <button
                        type="button"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >
                        Reset
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </>
);

export default DataForm;