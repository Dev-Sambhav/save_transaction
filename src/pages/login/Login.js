import { useState } from "react";
import useLogin from "../../hooks/useLogin";

// import styles
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {error,isLoading,login} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email,password);

  };

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {isLoading && <button className="btn" disabled>Loading...</button>}
      {!isLoading && <button className="btn">Login</button>}
      {error && <p className="error">{error}</p> }
    </form>
  );
};

export default Login;
