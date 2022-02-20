import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup'
import useForgotPassword from '../../../hooks/useForgotPassword';
import MyTextInput from '../../formik/myTextInput';

const ForgotPassword = () => {

  const {mutate} = useForgotPassword()

  return <Formik<{email: string}> initialValues={{email: ""}} validationSchema={yup.object({
    email: yup.string().required().email()
  })} onSubmit={(values,{setSubmitting}) => {
      mutate({input: values.email})
      setSubmitting(false)
  }}  >
    {formik => (
       <Form className="md:w-1/2 container m-auto mt-5 w-full p-6 flex flex-col gap-4 md:hover:shadow-xl transition ease-in-out duration-500 shadow-gray-500 shadow-none">
           <h1 className="text-black text-3xl font-bold ">Forgot Password</h1>
           <MyTextInput name="email" type="text" label="Email" login={false} />
           <button disabled={formik.isSubmitting ? true : false} className="bg-blue-700 duration-500 text-white hover:bg-blue-600 transition ease-in-out delay-100 px-3 py-2 rounded font-normal" type="submit">{formik.isSubmitting ? "Sending..." : "Send Email" }</button>
       </Form> 
    )}
  </Formik>;
};

export default ForgotPassword


