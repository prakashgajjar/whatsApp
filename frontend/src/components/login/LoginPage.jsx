import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useNavigation } from "react-router-dom";
import contextProvider from "../../Hooks/ContextProvider";
export default function LoginPage() {
  const {userName , setUserName , setCurrentUser} = useContext(contextProvider)
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const loginRequest = async () => {
    try {
      if (isSignup) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("avatar", avatar);

        const responseSignup = await axios.post("http://localhost:3000/signup",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        if (responseSignup.status === 200) {
          setUserName(formData.get("name"));
          navigate('/home');
      }
        console.log("Signup Response:", responseSignup);
      } else {
        const responseLogin = await axios.post("http://localhost:3000/login", {
          email,
          password,
        },{ withCredentials: true } );
        if (responseLogin.status === 200) {
          console.log("Login Response:", responseLogin.data._id);
          setCurrentUser(responseLogin.data._id);
            navigate('/home');
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          alert("Invalid email or password");
        } else if (error.response.status === 402) {
          alert("Invalid password");
        } else if (error.response.status === 400) {
          alert("Provide email or password");
        }
      } else {
        alert("Server error. Please try again later.");
      }
    }

  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-xl font-semibold mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />
        )}

        <input type="email" placeholder="Email ID"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <input type="password" placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        {isSignup && (
          <div className="text-center mb-3">
            {avatarPreview ? (
              <img src={avatarPreview} alt="Avatar" className="w-12 h-12 rounded-full mx-auto mb-2" />
            ) : (
              <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
            )}
            <input type="file" accept="image/*" onChange={handleFileChange} className="mt-2" />
          </div>
        )}

        <button onClick={loginRequest} className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p className="text-center text-sm mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
