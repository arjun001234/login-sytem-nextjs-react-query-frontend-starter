import React from "react";
import {Form, Formik} from "formik"
import * as yup from "yup";
import MyTextInput from "../../formik/myTextInput";
import Link from "next/link";
import ExternalLoginLinks from "../externalLoginLinks";
import useCreateUser from '../../../hooks/useCreateUser'
import { UserInput } from "../../../graphql/generated/types";

const Register : React.FC = () => {

    const {mutate} = useCreateUser()

    return(
        <Formik<UserInput> initialValues={{firstName: "",lastName:"",email:"",password: ""}} validationSchema={yup.object({
            firstName: yup.string().required().min(3,"first name too short"),
            lastName: yup.string().required().min(3,"last name too short"),
            email: yup.string().required().email(),
            password: yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"password too weak")
        })} onSubmit={(values,{setSubmitting}) => {
            mutate({input: values})
            setSubmitting(false)
        }}>
           {formik => (
           <Form onSubmit={formik.handleSubmit} className="md:w-1/2 container m-auto mt-5 w-full p-6 flex flex-col gap-4 md:hover:shadow-xl transition ease-in-out duration-500 shadow-gray-500 shadow-none">
                <h1 className="text-black text-3xl font-bold ">Register</h1>
                <MyTextInput name="firstName" type="text" label="First Name" login={false} />
                <MyTextInput name="lastName" type="text" label="Last Name" login={false} />
                <MyTextInput name="email" type="text" label="Email" login={false} />
                <MyTextInput name="password" type="password" label="Password" login={false} />
                <button disabled={formik.isSubmitting ? true : false} className="bg-blue-700 duration-500 text-white hover:bg-blue-600 transition ease-in-out delay-100 px-3 py-2 rounded font-normal" type="submit"><p className="animate-spin"></p>{formik.isSubmitting ? 'Registering...' : 'Register'}</button>
                <ExternalLoginLinks />
                <div className="flex flex-col gap-3">
                    <p className="text-center mt-3">Already a user?</p>
                    <Link href="/auth/login"><button type="button"  className="hover:-translate-y-1 transition ease-in-out duration-500 border-2 border-blue-700 px-3 py-2 rounded font-normal">Login</button></Link>
                </div>
            </Form>
            )}
        </Formik>
    )
}

export default Register