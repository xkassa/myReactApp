import React, { useState } from "react";
import "./signup.css";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
const Signup = () => {
  async function handleSubmit(opt) {
    setLoading(true);
    console.log(opt);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "Ladislav",
      lastName: "Kassa",
      email: "",
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object({
      firstName: Yup.string().max(10, "Maximum length is 10 characters"),
      lastName: Yup.string().max(15, "Maximum length is 15 characters"),
      email: Yup.string()
        .max(15, "Maximum length is 15 characters")
        .required("this field is required"),
    }),
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {loading && (
        <Alert>
          <Spinner animation="grow" />
          &nbsp;
          <Spinner animation="grow" />
          &nbsp;
          <Spinner animation="grow" />
        </Alert>
      )}
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Control
          disabled={loading}
          name={"firstName"}
          type={"text"}
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <Form.Text className="text-danger">
          {formik.errors.firstName ?? ""}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Control
          disabled={loading}
          name={"lastName"}
          type={"text"}
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <Form.Text className="text-danger">
          {formik.errors.lastName ?? ""}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control
          disabled={loading}
          name={"email"}
          type={"email"}
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Form.Text className="text-danger">
          {formik.errors.email ?? ""}
        </Form.Text>
      </Form.Group>
      <Button type="submit" disabled={loading}>
        Submit
      </Button>
    </Form>
  );
};
export default Signup;
