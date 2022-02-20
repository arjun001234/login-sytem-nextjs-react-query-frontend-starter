import {Formik, Form} from "formik";
import MyTextInput from "../../formik/myTextInput";
import * as yup from "yup";
import Link from 'next/link'
import ExternalLoginLinks from "../externalLoginLinks";
import useLoginUser from "../../../hooks/useLoginUser";
import { LoginInput } from "../../../graphql/generated/types";

const Login : React.FC = () => {

    const {mutate} = useLoginUser()

    return (
        <Formik<LoginInput> initialValues={{email: "",password: ""}} validationSchema={yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"password too weak")
        })} onSubmit={(values,{setSubmitting}) => {
            mutate({input: values})
            setSubmitting(false)
        }}>
            {formik => (
            <Form className="md:w-1/2 container m-auto mt-5 w-full p-6 flex flex-col gap-4 md:hover:shadow-xl transition ease-in-out duration-500 shadow-gray-500 shadow-none">
                <h1 className="text-black text-3xl font-bold ">Login</h1>
                <MyTextInput name="email" type="text" label="Email" login={true} />
                <MyTextInput name="password" type="password" label="Password" login={true} />
                <button disabled={formik.isSubmitting ? true : false} className="bg-blue-700 duration-500 text-white hover:bg-blue-600 transition ease-in-out delay-100 px-3 py-2 rounded font-normal" type="submit">{formik.isSubmitting ? "Logging..." : "Login" }</button>
                <ExternalLoginLinks />
                <div className="flex flex-col gap-3">
                    <p className="text-center mt-3">New Here?</p>
                    <Link href="/auth/register"><button type="button"  className="hover:-translate-y-1 transition ease-in-out duration-500 border-2 border-blue-700 px-3 py-2 rounded font-normal">Create Account</button></Link>
                </div>
            </Form>
            )}
        </Formik>
    )
}

export default Login