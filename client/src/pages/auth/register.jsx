
import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "../../components/common/form";
import { registerFormControls } from "../../config";


const initialState = {
    username: "",
    email: "",
    password: "",
}




function AuthRegister(){

    const[formData, setFormData] = useState(initialState);
    function onSubmit() {

    }

    return(
     <div className="mx-auto w-full mx-w-md space-y-6 hey">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new Account</h1>
            <p className="mt-2">Already have an account
                <Link className="font-medium text-primary hover:underline ml-2" to='/auth/login'>Login</Link>
            </p>
        </div>
        <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
     </div>

    )
}

export default AuthRegister