import {useField} from "formik";
import { useRouter } from "next/router";
import React from "react";
import { appRoutes } from "../../helper/constants/pagePaths";

type MyTextInputProps = {
    [key: string]: string | boolean
    name: string
    type: string
    label: string
    login: boolean
}

const MyTextInput : React.FC<MyTextInputProps> = ({label,type,login,...props}) => {

    const [field,meta] = useField(props)
    const [show,setShow] = React.useState<boolean>(false)
    const router = useRouter()
    
    return (
        <div className="flex flex-col gap-1">
           <label className="text-black font-semibold" htmlFor={props.name}>{label}</label>
            <input className="border-2 outline-0 rounded h-10 p-2" type={show ? "text" : type}  {...field} {...props}/>
            {meta.touched && meta.error && <div><p className="text-red-700">{meta.error}</p></div>}
            <div className="flex flex-row justify-between">
                {props.name == "password" ? show ? <p className="text-sm" onClick={() => setShow(false)}>Hide Password</p> : <p className="text-sm"  onClick={() => setShow(true)}>Show Password</p> : null}
                {login && props.name == "password" ? <p className="text-sm text-blue-700"  onClick={() => router.push(appRoutes.forgotPassword)}>Forgot Password?</p> : null}
            </div>
        </div>
    )
}

export default MyTextInput