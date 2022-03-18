import { useFormik, Formik, Field, Form } from "formik";
import { ImCross } from "react-icons/im";
import { useState } from "react";


function AccountForm () {
    const formik = useFormik({
        initialValues: {
        name: "",
        ifsc: "",
        }
    })
    return (
    <Formik
        className="addDetailsForm"
        initialValues={{ name: "", ifsc: "" }}
        onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            console.log(formik.values);
        }}
    >
    <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" placeholder="Enter your Name" onChange={formik.handleChange} value={formik.values.name} className="name-input" id="name" />
        <label htmlFor="ifsc">IFSC Codes</label>
        <div className="container1">
        <Field name="ifsc" type="text" placeholder="Enter your IFSC" onChange={formik.handleChange} value={formik.values.ifsc} className="ifsc-input" id="ifsc" />
        <button className="cross-button"><ImCross /></button>
        </div>
        <div className="container2">
        <button className="addIFSC-button">Add IFSC</button>
        <button type="submit" className="submit-button">Submit</button>
        </div>
    </Form>
    </Formik>
    );
}

export default AccountForm;
