import { Provider } from "react-redux";

import { SnackbarProvider } from "notistack";
import Header from "./components/Header";
import { lazy, Suspense } from "react";
import Doctor from "./doctor/Doctor";
import Signup from "./signnup/Signup";
import Login from "./login/Login";
import Account from "./account/Account";
import store from "./redux/store";

function App() {
  const Home = lazy(() => import("./home/Home"));
  const About = lazy(() => import("./about/About"));
  const DoctorId = lazy(() => import("./doctor/id/DoctorId"));
  const Contact = lazy(() => import("./contact/Contact"));
  const Admin = lazy(() => import("./admin/Admin"));
  const ConfirmGmail = lazy(() => import("./ConfirmGmeil"));

  return (
    <Provider store={store}>
      <Header />
      <SnackbarProvider />
      <Suspense fallback={"loading"}>
        <Home />
      </Suspense>
      {/* <Suspense fallback={"loading"}>
        <About />
      </Suspense>
      <Suspense fallback={"loading"}>
        <ConfirmGmail />
      </Suspense>
      <Suspense fallback={"loading"}>
        <Admin />
      </Suspense>
      <Suspense fallback={"loading"}>
        <Login />
      </Suspense>
      <Suspense fallback={"loading"}>
        <Signup />
      </Suspense>
      <Suspense fallback={"loading"}>
        <Contact />
      </Suspense>
      <Suspense fallback={"loading"}>
        <DoctorId />
      </Suspense>
      <Suspense fallback={"loading"}>
        <Doctor />
      </Suspense>
      <Suspense fallback={"loading"}>
        <Account />
      </Suspense> */}
    </Provider>
  );
}

export default App;
