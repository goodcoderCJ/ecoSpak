import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { useNavigate } from "react-router-dom";
import logo from "../assets/ecospark.png";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import {
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config";

function Login() {
  const navigate = useNavigate();

  const onHandleForgottenPage = (e) => {
    e.preventDefault();
    navigate("/forgotten");
  };

  const [showPassword, setShowPassword] = useState(false);

  const [passwordTypeState, setPasswordTypeState] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    if (showPassword) {
      setPasswordTypeState(true);
    } else {
      setPasswordTypeState(false);
    }
  };
  const initialState = {
    email: "",
    password: "",
  };
  const [data, setData] = useState({ initialState });
  const { email, password } = data;
  const [userRole, setUserRole] = useState("user");
  const onChangeHandler = (e) => {
    const inputValueGetter = {
      [e.target.name]: e.target.value,
    };
    setData({ ...data, ...inputValueGetter });
    console.log(email, password);
  };
  const notValid = email === "" || password === "";
  const onChangeRoleHandler = (e) => {
    setUserRole(e.target.value);
    console.log(userRole);
  };
  const hanldleSubmit = (e) => {
    e.preventDefault();
  };
  const signInWithEmailAndPass = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // toast.success("Login successfully" + user.email, {
        //   position: toast.POSITION,
        // });
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // toast.error(errorMessage, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        console.log(errorCode, errorMessage);
      });
  };

  const facebookProvider = new FacebookAuthProvider();
  const facebookSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);
        // toast.success("Signed up successfully" + user, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // toast.error(errorMessage, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);
        console.log(user);
        // toast.success("Signed up successfully" + user, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        // toast.error(errorMessage, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex min-h-screen">
      <div className="login-page flex-1 py-1">
        <div className="backg-color bg-[#00558c] py-[2em] ">
          {/* <ToastContainer /> */}
          <div className="login-logo flex justify-center items-center my-[2em]">
            <img src={logo} alt="" width="200" height="200" />
          </div>
          <div className="form-content-position w-[60%] mx-auto my-0 bg-[#ffffff] px-[2em] py-[3em]">
            <div className="login-heading  mt-[1em]">
              <h1 className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-[#161616] text-center">
                Welcome Back!
              </h1>
              <p className="text-[0.9rem] font-medium text-center">
                Login to your ecoSpak account.
              </p>
            </div>
            <form
              className="login-form mt-[1.4em]"
              onSubmit={(e) => {
                hanldleSubmit(e);
              }}
            >
              <div className="login-form-wrapper">
                <div className="login-form-control mb-[2.5em]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="outline-none w-[100%] py-[0.5em] pl-[0.5em]"
                  />
                </div>

                <div className="login-form-control mb-[1em]">
                  <div className="login-password-wrapper w-[100%] flex items-center justify-center">
                    <input
                      type={passwordTypeState ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      className="outline-none w-[90%] py-[0.5em] pl-[0.5em]  border-r-[3px] border-[#ebe5e5]"
                    />
                    <button className="show-icon-wrapper w-[10%] bg-[#ffffff] flex items-center justify-center">
                      {showPassword ? (
                        <FaEye
                          className="eye-btn h-[100%] text-[1.2rem]"
                          onClick={(e) => {
                            handleShowPassword(e);
                          }}
                        />
                      ) : (
                        <FaEyeSlash
                          className="eye-btn h-[100%] text-[1.2rem]"
                          onClick={(e) => {
                            handleShowPassword(e);
                          }}
                        />
                      )}
                    </button>
                  </div>
                </div>

                <div className="forgotten mb-[1em]">
                  <button
                    className="forgotten-btn text-[#e7b40a]"
                    onClick={(e) => {
                      onHandleForgottenPage(e);
                    }}
                  >
                    Forgotten Password
                  </button>
                </div>

                <div className="login-role-wrapper">
                  <p className="flex items-center font-medium text-[0.9rem] mb-[0.5em]">
                    CHOOSE YOUR ROLE{" "}
                  </p>
                  <div className="login-user-role">
                    <input
                      type="radio"
                      name="role"
                      id="user"
                      value="user"
                      checked={userRole === "user"}
                      onChange={(e) => {
                        onChangeRoleHandler(e);
                      }}
                    />
                    <label htmlFor="user" className="ml-[0.5em]">
                      User
                    </label>
                  </div>
                  <div className="login-worker-role">
                    <input
                      type="radio"
                      name="role"
                      id="worker"
                      value="worker"
                      checked={userRole === "worker"}
                      onChange={(e) => {
                        onChangeRoleHandler(e);
                      }}
                    />
                    <label htmlFor="worker" className="ml-[0.5em]">
                      Worker
                    </label>
                  </div>
                </div>
                <div className="login-btn flex justify-center items-center mt-[1.5em]">
                  <button
                    className="w-[100%] h-[40px] bg-[#edc954] text-[1.2rem] font-bold  "
                    disabled={notValid}
                    onClick={(e) => {
                      signInWithEmailAndPass(e);
                    }}
                  >
                    {" "}
                    Login
                  </button>
                </div>
                <p className="my-[1em] text-center text-[0.7rem]">
                  Or Login with{" "}
                </p>
                <div className="social-login-btn-wrapper flex justify-center items-center">
                  <button
                    className="bg-[#ffffff] mr-[1em] p-[0.8em] rounded-tl-[4px] rounded-tr-[4px]  rounded-bl-[4px] rounded-br-[4px] border border-[#00558c]"
                    onClick={(e) => {
                      facebookSignIn(e);
                    }}
                  >
                    <img
                      src={facebook}
                      alt=""
                      className="w-[20px] md:w-[15px] h-[20px] md:h-[15px]"
                    />
                  </button>
                  <button
                    className="bg-[#ffffff] p-[0.8em]  rounded-tl-[4px] rounded-tr-[4px]  rounded-bl-[4px] rounded-br-[4px] border border-[#00558c]"
                    onClick={(e) => {
                      googleSignIn(e);
                    }}
                  >
                    <img
                      src={google}
                      alt=""
                      className="w-[20px] md:w-[15px] h-[20px] md:h-[15px]"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
