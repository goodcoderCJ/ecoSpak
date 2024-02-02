import logo from "../assets/ecospark.png";
// import { toast, ToastContainer } from "react-toastify";

// import "react-toastify/dist/ReactToastify.min.css";
import { updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../config";

function Forgotten() {
  const initialState = {
    password: "",
  };
  const [data, setData] = useState({ ...initialState });
  const { password } = data;
  const onChangeHandler = (e) => {
    const inputValueGetter = {
      [e.target.name]: e.target.value,
    };
    setData({ ...data, ...inputValueGetter });

    console.log([password]);
  };
  const notValid = password === "";
  const hanldleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const resetPassword = (e) => {
    e.preventDefault();
    updatePassword(auth.currentUser, password)
      .then(() => {
        setData({ ...initialState });
        // toast.success("Password updated successfully", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="forgotten-page mb-[0em]">
      <div className="forgotten-bg bg-[#00558e] py-[4em] mb-[0em] h-[100vh]">
        {/* <ToastContainer /> */}
        <div className="signup-logo flex items-center justify-center my-[2em] ">
          <img src={logo} alt="" width="200" height="200" />
        </div>
        <div className="form-content-position w-[60%] mx-auto bg-[#ffffff] px-[2em] py-[2em]">
          <div className="forgotten-heading  mt-[1em]">
            <h1 className="text-[1.4rem] font-extrabold text-[#161616] text-center">
              Welcome!
            </h1>
            <p className="text-[0.9rem] font-medium text-center">
              Please input a new password.
            </p>
          </div>
          <form
            className="forgotten-form mt-[1.4em]"
            onSubmit={(e) => {
              hanldleSubmit(e);
            }}
          >
            <div className="fogotten-form-wrapper">
              <div className="forgotten-form-control mb-[2.5em]">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  className="input outline-none w-[100%] py-[0.5em] pl-[0.5em] "
                />
              </div>
              <div
                className="forgoten-btn flex justify-center items-center mt-[1.5em] mb-[2em]
              "
              >
                <button
                  className="w-[100%] h-[40px] bg-[#edc954] text-[0.8rem] sm:text-[0.9rem] md:text-[1.2rem]  lg:text-[1.2rem] font-bold "
                  disabled={notValid}
                  onClick={(e) => {
                    resetPassword(e);
                  }}
                >
                  {" "}
                  Update Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgotten;
