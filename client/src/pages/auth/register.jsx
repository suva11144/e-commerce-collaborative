
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import CommonForm from "../../components/common/form";
// import { registerFormControls } from "../../config";


// const initialState = {
//     username: "",
//     email: "",
//     password: "",
// }




// function AuthRegister(){

//     const[formData, setFormData] = useState(initialState);
//     function onSubmit() {

//     }

//     return(
//      <div className="mx-auto w-full mx-w-md space-y-6 hey shadow-[5px_0px_10px_rgba(255,255,255,0.25)] p-6 pt-15 pb-15 rounded-[10px]">
//         <div className="text-center">
//             <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new Account</h1>
//             <p className="mt-2">Already have an account
//                 <Link className="font-medium text-primary hover:underline ml-2" to='/auth/login'>Login</Link>
//             </p>
//         </div>
//         <CommonForm
//         formControls={registerFormControls}
//         buttonText={"Sign Up"}
//         formData={formData}
//         setFormData={setFormData}
//         onSubmit={onSubmit}
//         />
//      </div>

//     )
// }

// export default AuthRegister




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
     <div className="mx-auto w-full max-w-md space-y-6 bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] p-12 rounded-xl border border-white/10 h-120">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">Create new Account</h1>
            <p className="mt-2 text-blue-200">Already have an account
                <Link className="font-medium text-blue-700 hover:text-blue-300 hover:underline ml-2" to='/auth/login'>Login</Link>
            </p>
        </div>
        <CommonForm
          formControls={registerFormControls}
          buttonText="Sign Up"
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
     </div>
    )
}

export default AuthRegister