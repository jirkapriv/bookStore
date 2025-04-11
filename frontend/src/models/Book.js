const url = "http://localhost:3000/api/books";

export const getAllBooks = async () => {
  const req = await fetch(`${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
  const req = await fetch(`${url}/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
  const req = await fetch(`${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData)
  });
  const data = await req.json();

  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};


