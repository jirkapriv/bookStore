const url = "http://localhost:3000/api/books";

const getToken = () => localStorage.getItem("token");

export const getAllBooks = async () => {
  const token = getToken();
  const req = await fetch(`${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  const data = await req.json();

  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};

export const getBook = async (id) => {
  const token = getToken();
  const req = await fetch(`${url}/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  const data = await req.json();

  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const createBook = async (formData) => {
  const token = localStorage.getItem("token");
  try {
    const req = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const contentType = req.headers.get("content-type");
    const isJSON = contentType && contentType.includes("application/json");

    if (!req.ok) {
      const errorMsg = isJSON ? (await req.json()).msg : await req.text();
      return {
        status: req.status,
        msg: errorMsg || "Unknown error",
      };
    }

    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  } catch (error) {
    console.error("Error while creating book:", error);
    return {
      status: 500,
      msg: "Network or server error",
    };
  }
};

export const updateBook = async (id, formData) => {
  const token = getToken();
  const req = await fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });

  const data = await req.json();

  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};

export const deleteBook = async (id) => {
  const token = getToken();
  const req = await fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });

  const data = await req.json();

  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
