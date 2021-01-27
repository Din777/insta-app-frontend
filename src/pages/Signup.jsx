import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form } from 'formik';

export const Signup = () => (
    <div className="signup-page">
        <h1>Sign Up</h1>
        <form
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <form>
                <label htmlFor="firstName">First Name</label>
                {/* <Field id="firstName" name="firstName" placeholder="Jane" /> */}

                <label htmlFor="lastName">Last Name</label>
                {/* <Field id="lastName" name="lastName" placeholder="Doe" /> */}

                <label htmlFor="email">Email</label>
                {/* <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                /> */}
                <button type="submit">Submit</button>
            </form>
        </form>
    </div>
);
