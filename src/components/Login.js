import React from "react";

function Login() {
  return (
    <>
      <form>
        <input type="text" name="name" placeholder="name" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit"> send </button>
      </form>
    </>
  );
}

export default Login;
