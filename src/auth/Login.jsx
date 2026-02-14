import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import departments from "../data/department"
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa6";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'; // Correct import
import { setUser } from "../redux/authSlice"
const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (data) => {
   dispatch(
  setUser({
    username: data.username,
    role: "Admin", // For now
    departments: departments, // dummy
  })
);


    navigate('/ControlPannel')
    console.log(data)
  }

  return (
   <div className="relative min-h-screen  bg-primary flex items-center justify-center overflow-hidden">

   <svg 
    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1303 770"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
  >
    <path
      d="M-340.398 711.452H-45.0387V352.368H126.139V749.273H37.8059V431.268H257.096V533.582H303.235V263.433H416.524V768.398L484.532 729.119V283.587L443.711 260.002V709.651H641.389V315.49H527.327V369.177H576.039V8.29141L733.838 1.60199V759.05H677.922V403.567H911.877V755.019L974.397 753.904C977.913 753.819 974.397 300.396 974.397 300.396H854.761V730.148H1057.24V454.853V331.528L1001.33 367.633V701.332H1090.77V496.019L1188.54 496.19L1189.4 719.257H1225.85V558.196H1266.93V709.994H1301.32V521.5"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg> 
      <Card className="lg:w-[30vw] shadow-lg z-20">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Sign In to MIS
          </CardTitle>
          <CardDescription className="text-center">
            Access your corporate dashboard and resources
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Username */}
            <div className="flex flex-col  gap-3">
              <Label>Username</Label>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-primary">
                <FaUser className="text-primary" />
                <Input
                  className="border-none focus-visible:ring-0"
                  placeholder="Enter your username"
                  {...register("username", { required: "Username is required" })}
                />
              </div>
             {errors.username && (
  <p className="text-sm text-red-500 mt-1">
    {errors.username.message}
  </p>
)}
            </div>
            {/* Password */}
            <div className="flex flex-col  gap-3">
              <Label>Password</Label>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-primary">
                <FaLock className="text-primary text-lg" />
                <Input
                  className="border-none focus-visible:ring-0 bg-transparent"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoEyeSharp className="text-primary" />
                  ) : (
                    <IoEyeOff className="text-primary" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/50 text-white"
            >
              Login
            </Button>

          </form>
        </CardContent>

        {/* Security Notice */}
          <div className="flex items-center gap-2 px-4">
  <div className="flex-1 border w-[20%]" ></div>
  <span className="text-md text-muted-foreground font-medium">
    Security Notice
  </span>
  <div className="flex-1 border w-[20%]" ></div>
</div>

        <CardFooter>
        
          <p className="text-gray-400 text-xs text-center">
            This system is for authorized users only. By signing in, you agree to
            our acceptable use policy and corporate guidelines.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login
