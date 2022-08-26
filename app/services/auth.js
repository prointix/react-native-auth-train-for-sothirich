const BASE_URL = 'https://blogserver.fly.dev/auth';

export const addUser = async (name, email, password) => {
  try {
    const req = {
      method: 'post',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };

    const response = await fetch(`${BASE_URL}/register`, req);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const req = {
      method: 'post',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const response = await fetch(`${BASE_URL}/login`, req);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
