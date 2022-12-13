import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

function RequireAuth() {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;

/**
 *
 * import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { useRefreshMutation } from "./authApiSlice";
import { refreshToken } from "./authSlice";
function RequireAuth() {
  const token = useSelector(selectCurrentToken);
  const [refresh, { isSuccess, isError }] = useRefreshMutation();
  const location = useLocation();
  const dispatch = useDispatch();

  async function askRefresh() {
    let data
    try {
       data = await refresh().unwrap();

    } catch (error) {
      throw new Error(error);
    }
    dispatch(refreshToken(data));
  }
  if (token) {
    return <Outlet />;
  } else if (!token && localStorage.getItem("refresh")) {
    askRefresh();
    console.log(isError);

    return isError ? (
      <Navigate to="/login" state={{ from: location }} replace />
    ) : (
      <Outlet />
    );
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default RequireAuth;

 *
 */
