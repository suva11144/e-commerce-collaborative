import { useState } from "react";
import CommonForm from "../../components/common/form";

const adminLoginControls = [
  { name: "username", label: "Admin Username", type: "text", placeholder: "Enter admin username", required: true, errorMessage: "Username is required" },
  { name: "password", label: "Password", type: "password", placeholder: "Enter password", required: true, errorMessage: "Password is required" }
];

const initialState = { username: "", password: "" };

function AdminLogin() {
  const [formData, setFormData] = useState(initialState);
  function onSubmit() {
    // TODO: Connect to backend for admin authentication
  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6 bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] p-12 rounded-xl border border-white/10 h-105">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">Admin Login</h1>
      </div>
      <CommonForm
        formControls={adminLoginControls}
        buttonText="Sign In"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}
export default AdminLogin;