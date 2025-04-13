import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../models/User";

export default function LoginUser() {
  const [formData, setFormData] = useState({});
  const [info, setinfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    console.log(formData);
    const user = await loginUser(formData);
    console.log(user);
    if (user.status === 200) {
      redirectToSuccessPage();
    } else {
      setinfo(user.msg);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = () => {
    return navigate(`/`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Log into your Account</h1>

      {info && <div className="alert alert-danger">{info}</div>}

      <form onSubmit={handlePost} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            name="name"
            placeholder="Enter your Name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Your password
          </label>
          <input
            type="text"
            className="form-control"
            required
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <Link to="/" className="btn btn-secondary">
            Go back
          </Link>
        </div>
      </form>
    </div>
  );
}
