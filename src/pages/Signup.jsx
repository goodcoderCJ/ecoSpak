import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import logo from "../assets/ecospark.png";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

function Signup() {
  const navigate = useNavigate();

  const handleSignInNavigate = (e) => {
    navigate("/login");
    e.preventDefault();
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
    fullname: "",
    email: "",
    passwordone: "",
    passwordtwo: "",
  };
  const [data, setData] = useState({ ...initialState });
  const { fullname, email, passwordone, passwordtwo } = data;
  const [userRole, setUserRole] = useState("user");
  const onChangeHandler = (e) => {
    const inputValueGetter = {
      [e.target.name]: e.target.value,
    };
    setData({ ...data, ...inputValueGetter });

    console.log([fullname, email, passwordone, passwordtwo]);
  };
  const notValid =
    fullname === "" ||
    email === "" ||
    passwordone !== passwordtwo ||
    passwordone === "" ||
    passwordtwo === "" ||
    passwordone.length < 8 ||
    passwordone.length > 40;

  const onChangeRoleHandler = (e) => {
    setUserRole(e.target.value);
    console.log(userRole);
  };

  const hanldleSubmit = (e) => {
    e.preventDefault();
  };

  const db = getFirestore();
  const createUserAccount = async () => {
    await createUserWithEmailAndPassword(auth, email, passwordone)
      .then((userCredential) => {
        const user = userCredential.user;
        const data = {
          name: fullname,
          role: userRole,
          id: user.uid,
        };
        setDoc(doc(db, "users", user.uid), data);
        setData({ ...initialState });
        setUserRole("user");
        // toast.success("Signed up successfully" + user, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        navigate("/");
        console.log(user);
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
        console.log(user);
        // toast.success("Signed up successfully" + user, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
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
        // const errorMessage = error.message;
        // toast.error(errorMessage, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        console.log(error);
      });
  };

  return (
    <div className="flex min-h-screen">
      <div className="signup-page flex-1 py-1">
        <div className="backg-color bg-[#00558e] py-[2em] ">
          {/* <ToastContainer /> */}
          <div className="signup-logo flex items-center justify-center my-[2em] ">
            <img src={logo} alt="" width="200" height="200" />
          </div>
          <div className="form-content-position w-[60%] mx-auto bg-[#ffffff] px-[2em] py-[1em]">
            <div className="signup-heading  mt-[1em]">
              <h1 className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-[#161616] text-center">
                Welcome!
              </h1>
              <p className="text-[0.9rem] font-medium text-center">
                Create your free ecoSpak account to get started.
              </p>
            </div>
            <form
              className="signup-form mt-[1.4em]"
              onSubmit={(e) => {
                hanldleSubmit(e);
              }}
            >
              <div className="signup-form-wrapper">
                <div className="signup-form-control mb-[2.5em]">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={fullname}
                    placeholder="Full Name"
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="input outline-none w-[100%] py-[0.5em] pl-[0.5em]"
                  />
                </div>

                <div className="signup-form-control mb-[2.5em]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="input outline-none w-[100%] py-[0.5em] pl-[0.5em] "
                  />
                </div>

                <div className="signup-form-control mb-[2.5em] ">
                  <div className="signup-password-wrapper w-[100%] flex items-center justify-center ">
                    <input
                      type={passwordTypeState ? "text" : "password"}
                      id="passwordone"
                      name="passwordone"
                      value={passwordone}
                      placeholder="Password"
                      onChange={(e) => {
                        onChangeHandler(e);
                      }}
                      className="outline-none w-[100%] py-[0.5em] pl-[0.5em] "
                    />
                    <button className="show-icon-wrapper w-[10%] bg-[#ffffff] flex items-end justify-center">
                      {showPassword ? (
                        <FaEye
                          className="eye-btn h-[100%] text-[1.2rem] "
                          onClick={(e) => {
                            handleShowPassword(e);
                          }}
                        />
                      ) : (
                        <FaEyeSlash
                          className="eye-btn h-[100%] text-[1.2rem] "
                          onClick={(e) => {
                            handleShowPassword(e);
                          }}
                        />
                      )}
                    </button>
                  </div>
                </div>

                <div className="signup-form-contr mb-[2.5em]">
                  <input
                    type="password"
                    id="passwordtwo"
                    name="passwordtwo"
                    value={passwordtwo}
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="input outline-none w-[100%] py-[0.5em] pl-[0.5em] rounded-tl-[6px] rounded-tr-[6px] rounded-bl-[6px] rounded-br-[6px]"
                  />
                  <p className="text-[0.7rem] text-[#3b3b3b] mt-[0.7em]">
                    Between 8 and 40 characters
                  </p>
                </div>

                <div className="sign-up-role-wrapper">
                  <p className="flex items-center font-medium text-[0.9rem] mb-[0.5em]">
                    CHOOSE YOUR ROLE{" "}
                  </p>
                  <div className="signup-user-role">
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
                  <div className="signup-worker-role">
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
                <div className="signup-btn flex justify-center items-center mt-[1.5em]">
                  <button
                    className="w-[100%] h-[40px] bg-[#edc954] text-[1.2rem] font-bold "
                    disabled={notValid}
                    onClick={createUserAccount}
                  >
                    {" "}
                    Sign Up
                  </button>
                </div>
                <p className="my-[1em] text-center text-[0.7rem]">
                  Or Sign up with{" "}
                </p>
                <div className="social-signup-btn-wrapper flex justify-center items-center">
                  <button
                    className="bg-[#ffffff] mr-[1em] p-[0.8em] rounded-tl-[4px] rounded-tr-[4px]  rounded-bl-[4px] rounded-br-[4px] border border-[#00558e]"
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
                    className="bg-[#ffffff] p-[0.8em]  rounded-tl-[4px] rounded-tr-[4px]  rounded-bl-[4px] rounded-br-[4px] border border-[#00558e]"
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
                <div className="signup-navigate-wrapper my-[1.5em] flex justify-center items-center">
                  <p className="">
                    Already have an account?{" "}
                    <button
                      className="signup-navigate-btn text-[#00558e] font-medium"
                      onClick={(e) => {
                        handleSignInNavigate(e);
                      }}
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
