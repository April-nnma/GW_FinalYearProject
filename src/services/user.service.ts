import axios from "axios";

export const registerUser = async (data) => {
  try {
    console.log("data: ", data);
    const response = await axios.post(
      "http://localhost:3000/auth/register",
      data
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error register user:", error);
  }
};

export const loginUser = async (data) => {
  try {

    const reponse = await axios.post("http://localhost:3000/auth/login", data);
    console.log(reponse.data)
    localStorage.setItem('token', reponse.data.content.token);
  } catch (error) {
    console.error("Error login user:", error);
  }
};
