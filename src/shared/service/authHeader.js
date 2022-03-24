export default function authHeader() {
  const token = localStorage.getItem("token");
  const refreshToken=localStorage.getItem("refreshToken");
  return {
    Authorization: token,
    refreshauthorization: refreshToken
  };
}
