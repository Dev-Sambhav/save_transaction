import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// import styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isLoading, logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>My_Money</li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              {isLoading && (
                <button className="btn" onClick={logout}>
                  Logging Out..
                </button>
              )}
              {!isLoading && (
                <button className="btn" onClick={logout}>
                  Log Out
                </button>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
