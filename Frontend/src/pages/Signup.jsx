import { useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import Navbar from "../components/navbar";

export default function Signup() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username:userName, email, password }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", userName);
      // alert("Signup Successful");
      // navigate("/"); // Redirect to Home
      window.location.href = "/";
    } else {
      setErr(data.message)
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center mt-20 ">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <span className="text-sm text-red-600">{err}</span>
        <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-4" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded mb-4" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Sign Up</button>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
    </>
  );
}
