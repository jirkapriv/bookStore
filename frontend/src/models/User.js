const url = "http://localhost:3000/api/users";

export const loginUser = async (formData) => {
  const req = await fetch(`${url}/login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();

  if (req.status === 200) {
    localStorage.setItem("token", data.token);
  }

  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};

export const registerUser = async (formData) => {
  const req = await fetch(`${url}/register`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  if (req.status === 200) {
    localStorage.setItem("token", data.token);
  }
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
