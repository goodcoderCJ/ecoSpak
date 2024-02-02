import { useState } from "react";

import logo from "../assets/ecospark.png";

function Team() {
  const initialState = {
    fullname: "",
    email: "",
    dateofBirth: "",
    tel: "",
    address: "",
    passwordone: "",
    passwordtwo: "",
  };
  const [data, setData] = useState({ initialState });
  const { fullname, email, dateofBirth, tel, address } = data;
  const [userRole, setUserRole] = useState("male");
  const onChangeHandler = (e) => {
    const inputValueGetter = {
      [e.target.name]: e.target.value,
    };
    setData({ ...data, ...inputValueGetter });

    console.log([fullname, email, dateofBirth]);
  };
  const notValid =
    fullname === "" ||
    email === "" ||
    dateofBirth === "" ||
    tel === "" ||
    address === "";

  const onChangeRoleHandler = (e) => {
    setUserRole(e.target.value);
    console.log(userRole);
  };

  const hanldleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="team-page mb-[0em]">
        <div className="backg-color bg-[#00558e] py-[2em] h-[100vh]">
          <div className="team-logo flex items-center justify-center ">
            <img src={logo} alt="" width="200" height="200" />
          </div>
          <div className="form-content-position w-[60%] mx-auto my-0 mt-[4em] bg-[#ffffff] px-[2em] pt-[2em] pb-[5em]">
            <div className="team-heading  mt-[1em]">
              <h1 className="text-[1.4rem] font-extrabold text-[#161616] text-center">
                JOIN OUR EXPERT TEAM
              </h1>
              <p className="text-[0.9rem] font-medium text-center">
                Register to join our team.Thumbs up!
              </p>
            </div>
            <form
              className="team-form mt-[3em]"
              onSubmit={(e) => {
                hanldleSubmit(e);
              }}
            >
              <div className="team-form-wrapper">
                <div className="team-form-control mb-[2.5em] team-border">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="outline-none w-[100%] py-[0.5em] pl-[0.5em] "
                  />
                </div>

                <div className="team-form-control mb-[2.5em] team-border">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="outline-none w-[100%] py-[0.5em] pl-[0.5em] "
                  />
                </div>

                <div className="team-form-control mb-[2.5em] team-border">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="mm/dd/yyyy"
                    value={dateofBirth}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="outline-none w-[100%] py-[0.5em] pl-[0.5em] "
                  />
                </div>

                <div className="team-form-control mb-[2.5em] team-border">
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Tel (+234800210011)"
                    value={tel}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="outline-none w-[100%] py-[0.5em] pl-[0.5em] "
                  />
                </div>

                <div className="team-form-control mb-[2.5em] team-border">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="#1 Uko Street Niinii"
                    value={address}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    className="outline-none w-[100%] py-[0.5em] pl-[0.5em] "
                  />
                </div>

                <div className="team-role-wrapper">
                  <p className="flex items-center font-medium text-[0.9rem] mb-[0.5em]">
                    CHOOSE YOUR Gender{" "}
                  </p>
                  <div className="w-[70%] sm:w-[70%] md:w-[50%] lg:-[50%] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between">
                    <div className="team-male-gender">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={userRole === "male"}
                        onChange={(e) => {
                          onChangeRoleHandler(e);
                        }}
                      />
                      <label htmlFor="user" className="ml-[0.5em]">
                        Male
                      </label>
                    </div>
                    <div className="team-female-gender">
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={userRole === "female"}
                        onChange={(e) => {
                          onChangeRoleHandler(e);
                        }}
                      />
                      <label htmlFor="worker" className="ml-[0.5em]">
                        Female
                      </label>
                    </div>

                    <div className="team-others-gender">
                      <input
                        type="radio"
                        name="gender"
                        id="others"
                        value="others"
                        checked={userRole === "others"}
                        onChange={(e) => {
                          onChangeRoleHandler(e);
                        }}
                      />
                      <label htmlFor="user" className="ml-[0.5em]">
                        Others
                      </label>
                    </div>
                  </div>
                </div>
                <div className="team-btn flex justify-center items-center mt-[2.5em]">
                  <button
                    className="w-[100%] h-[40px] bg-[#edc954] text-[1.2rem] font-bold "
                    disabled={notValid}
                  >
                    {" "}
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
