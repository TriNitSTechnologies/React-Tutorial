import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

export default function EmployeeForm({ onCancelClick, onSaveEmployee, empModel }) {
  return (
    <div className="w-50 m-auto border p-2">
      <h1>Employee Form</h1>

      <Formik
        initialValues={empModel}
        validationSchema={Yup.object({
          empName: Yup.string().required("Name is required"),
          bankAccount: Yup.string().required("Bank no is required"),
          pan: Yup.string().required("Pan no is required"),
        })}
        onSubmit={(values, {resetForm}) => {
          // alert(JSON.stringify(values, null, 2));
          onSaveEmployee(values);
          resetForm();
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="empName">Name</label>
            <Field name="empName" type="text" className="form-control"/>
            <small className="text-danger"><ErrorMessage name="empName" /></small>
            
          </div>
          <div className="mb-3">
            <label htmlFor="bankAccount">Bank no</label>
            <Field name="bankAccount" type="text" className="form-control"/>
            <ErrorMessage name="bankAccount" />
          </div>
          <div className="mb-3">
            <label htmlFor="pan">Pan no</label>
            <Field name="pan" type="text" className="form-control"/>
            <ErrorMessage name="pan" />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">save</button>
            <button type="button" className="ms-2 btn btn-secondary" onClick={onCancelClick}>Cancel</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
