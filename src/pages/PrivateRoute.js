// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// // will remove later
// // import { useUserContext } from "../context/user_context";
// // import { Router } from "react-router-dom/cjs/react-router-dom.min";

// const PrivateRoute = ({ children, ...rest }) => {
//   // const { myUser } = useUserContext();
//   const { user } = useAuth0();
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         return user ? children : <Redirect to="/"></Redirect>;
//       }}
//     ></Route>
//   );
// };
// export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
