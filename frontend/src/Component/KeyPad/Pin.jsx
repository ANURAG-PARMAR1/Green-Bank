import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

export function Pin() {

  const [otp, setOtp] = useState("");
//   const { signupData, loading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

    const loading = false

  const navigate = useNavigate();
  
//   useEffect(() => {                // Only allow access of this route when user has filled the signup form
//      if(!signupData) navigate("/signup");
//   }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    // const { accountType,  firstName, lastName, email, password, confirmPassword, } = signupData;

    // dispatch(
    //   signUp( accountType,  firstName, lastName, email, password, confirmPassword,  otp, navigate )
    //   )
  };


  return (

    <div className="min-h-[calc(100vh)] bg-black  grid place-items-center">
      { loading ? ( <div className="spinner"></div> ) : (
       
            <div className="max-w-[500px] p-4 lg:p-8 bg-white rounded-xl">

              <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]"> Enter Pin </h1>
              <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100"> Enter Your 6-Digit UPI PIN </p>
                
              <form onSubmit={handleVerifyAndSignup}>

                <OtpInput value={otp} onChange={setOtp} numInputs={6}                      // this otp box conatiner is copied from internet  
                  renderInput = {(props) => (
                    <input {...props}  placeholder="--"  style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}  className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-black"  />
                        )}
                  containerStyle = {{ justifyContent: "space-between", gap: "0 6px", }} 
                />
                <button type="submit" className="cursor-pointer text-white uppercase bg-black w-full py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"> SEND </button>
                
              </form>

            </div>
           )
       }
    </div>
  
)}
