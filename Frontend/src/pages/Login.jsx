import { useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/navbar";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/");
        // console.log(token)

      }
    }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", email);
      // navigate("/"); // Redirect to Dashboard
      window.location.href = "/";
    } else {
      setErr(data.message)
      // alert("Login failed");
    }
  };

  return (
    <>   
     <Navbar/>
    <div className="flex items-center justify-center mt-20">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <span className="text-sm text-red-600">{err}</span>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </p>
      </form>
    </div>
    </>
  );
}
