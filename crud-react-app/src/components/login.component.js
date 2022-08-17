import React, { useContext, useState } from "react";
import{AuthenticationContext} from "../service/authentication/authentication.context";

const LoginComponent = () => {
  const [email, setEmail] = useState("nmtri31082001@gmail.com");
  const [password, setPassword] = useState("123456789");
  const {isAuthenticated, user, onLogout, onLogin} = useContext(AuthenticationContext);


  const onSubmit = async (e) => {
    e.preventDefault();
    await onLogin(email,password);
  };

  return (
    <div className="container">
        <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
    
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
       {
        isAuthenticated ? <p>Hello, {user.name}</p>
        : <p>Please sign in.</p>
      }
       {
        isAuthenticated ? <button onClick={onLogout}>Logout</button>
        : <button onClick={onLogin}>Log in</button>
      }
    </div>
  );
};

export default LoginComponent;
