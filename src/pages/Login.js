import {useState} from 'react';
import {authContext} from 'providers/AuthProvider';
import {useContext} from 'react';
import Counter from 'Counter';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(authContext);

  const onSubmit = function(event) {
    event.preventDefault();
    email && login(email, password);
  };

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="username"
            value={email} placeholder="Enter Username or email"
            onChange={event => setEmail(event.target.value)} />
        </p>
        <p>
          <input type="password" name="password"
            value={password} placeholder="Password"
            onChange={event => setPassword(event.target.value)} />
        </p>
        <p className="submit">
          <button type="submit" name="commit">Login</button>
        </p>
      </form>

      <Counter />
    </div>
  );
};
