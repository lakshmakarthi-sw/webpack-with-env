import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const NotFoundComponent = lazy(() =>
  import("../pages/error/NotFoundComponent")
);
const UnAuthComponent = lazy(() => import("../pages/error/UnAuthComponent"));
const LoginContainer = lazy(() => import("../pages/login/LoginContainer"));
const DashboardContainer = lazy(() =>
  import("../pages/dashboard/DashboardContainer")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/">
          <Route index element={<LoginContainer />} />
          <Route path="/dashboard" exact element={<DashboardContainer />} />
          <Route path="/unauth" exact element={<UnAuthComponent />} />
        </Route>
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
