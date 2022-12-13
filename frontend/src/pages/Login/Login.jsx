import { useRef, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentToken,
  setCredentials,
} from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";

function Login() {
  const userRef = useRef();
  const errRef = useRef();
  const token = useSelector(selectCurrentToken);
  const [user, setUser] = useState("rozella.kling@hotmail.com");
  const [pwd, setPwd] = useState("testtest");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (token) {
  //     navigate("/home");
  //   }
  // }, []);


  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setErrMsg("err");
  // }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /* A function that returns a promise. */
      const userData = await login({ email: user, password: pwd }).unwrap();

      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/home");
    } catch (err) {
      if (!err?.status) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data.error);
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);
  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="login">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Employee Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          value={user}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handlePwdInput}
          value={pwd}
          required
        />
        <button>Sign In</button>
      </form>
    </section>
  );

  return content;
}
export default Login;
