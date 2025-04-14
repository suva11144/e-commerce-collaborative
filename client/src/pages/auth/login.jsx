
import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "../../components/common/form";
import { loginFormControls } from "../../config";


const initialState = {
    email: "",
    password: "",
}




function AuthLogin(){

    const[formData, setFormData] = useState(initialState);
    function onSubmit() {

    }

    return(
     <div className="mx-auto w-full mx-w-md space-y-6 hey shadow-[5px_0px_10px_rgba(255,255,255,0.25)] p-6 pt-15 pb-15 rounded-[10px]">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your account</h1>
            <p className="mt-2">Don't have an account
                <Link className="font-medium text-primary hover:underline ml-2" to='/auth/register'>Register</Link>
            </p>
        </div>
        <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
     </div>

    )
}

export default AuthLogin