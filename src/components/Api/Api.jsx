const BASE_URL = 'http://localhost:9090/api';

export async function signUp(email, username, depart, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, depart }),
    });

    if (!response.ok) {
      throw new Error('Sign up failed');
    }
    return response.json();
  } catch (error) {
    throw new Error('Sign up failed');
  }
}

export async function loginApi(password, email) {
  try {

    const formdata = new FormData();
    formdata.append("password", password);
    formdata.append("email", email);

    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      body: formdata,
      redirect: "follow"
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  } catch (error) {
    throw new Error('Login failed');
  }
}

export async function forgotPassword(email){
  try {

    const formdata = new FormData();
    formdata.append("email", email);

    const response = await fetch(`${BASE_URL}/users/forgotpassword`, {
      method: "POST",
      body: formdata,
      redirect: "follow"
    });

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return response.json();
  } catch (error) {
    throw new Error('Something went wrong');
  }
}