export default function authHeader() {
  const token = localStorage.getItem("token");

  return {
    Authorization: token,
  };
}