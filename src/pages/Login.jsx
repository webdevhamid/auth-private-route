import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // Calling the signInUser function and passing the email and password as arguments
    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result);
        navigate("/orders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        console.log("Sign in with google successful");
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-[400px] shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              New to this website?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </p>
            <div>
              <button className="btn btn-error mr-3" onClick={handleGoogleSignIn}>
                Login with Google
              </button>
              <button className="btn">Login with Github</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
