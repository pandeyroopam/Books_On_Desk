import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import image4 from "../assets/login1.jpg"; 
// import image5 from "../assets/google_icon.png";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", email);
      window.location.href = "/";
    } else {
      setErr(data.message || "Login failed");
      alert("Login failed");
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="flex w-full h-screen"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="w-4/5 p-4 flex flex-col justify-center items-center bg-white">
          <form onSubmit={handleLogin} className="w-76 max-w-sm">
            <h2 className="text-4xl mb-2 font-semibold">Welcome Back</h2>
            <p className="text-sm text-gray-600 mb-6">
              Login to continue to Book On Desk
            </p>

            <span className="text-sm text-red-600">{err}</span>

            <div className="mb-4 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                {/* <i className="fa-solid fa-user"></i> */}
                <i class="fa-solid fa-paper-plane"></i>
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
    type="button"
    className="absolute right-2 top-2 text-xl text-gray-400 mr-2"
    onClick={() => setShowPassword(!showPassword)}
    tabindex="-1"  // Skip this button while tabbing
  >
    {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
  </button>
            </div>
            <button
              type="button"
              className="absolute right-2 top-2 text-sm text-teal-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            <button
              type="submit"
              className="bg-teal-700 text-white px-4 py-2 rounded w-full"
            >
              Login
            </button>

            <p className="mt-4  text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-teal-700 font-medium">
                Sign Up
              </Link>
            </p>
          </form>
          <div className="text-center my-4 font-semibold text-gray-500">- OR -</div>
    <div className="flex justify-center gap-6 text-2xl">
                <a href="https://www.google.com/"><i class="fab fa-google"></i></a>
                <a href="https://x.com/"><i class="fab fa-x-twitter"></i></a>
    </div>
        </div>

        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${image4})` }}
        >
          <div className=" w-full h-full bg-linear-to-t from-[#00000088] to-transparent backdrop-blur-[4px]  flex justify-center">
            <div className="text-center p-8 text-white mt-[20vh]">
              <h3 className="text-4xl font-semibold mb-4 ">(^-^) &lt;3 </h3>
              <p className="">
                “Lets dive into the mysterious world of books.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
