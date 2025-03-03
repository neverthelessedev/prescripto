import { navigates } from "./navigates";
import { lazy, Suspense, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import axios from "axios";
import Prescripto from "/prescripto.png";

function Header() {
  const [user, setUser] = useState(false);
  const location = window.location.pathname.split("/")[1];
  const locate = window.location.pathname;
  const [islight, setIslight] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:9000/api/user`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
            "custom-header": "custom value",
          },
        })
        .then((res) => console.log(res.data));
    }
  }, []);

  function toggleTheme() {
    if (islight) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    setIslight(!islight);
  }

  const UserAccount = lazy(() => import("./User"));
  return (
    <header className="fixed z-[100]  w-full p-3 px-[5rem] top-0">
      <div className="flex items-center justify-between w-full px-6 py-2 border-b rounded-full shadow ">
        <a href="/" className="flex items-center">
          <img src={Prescripto} alt="logo" className="size-[3rem] " />
          <p className="ml-2 text-3xl font-bold font-['eufm10'] italic">
            Prescripto
          </p>
        </a>
        <div className="flex w-[50%] justify-around">
          {navigates.map((navigate) => (
            <a
              href={navigate.link}
              key={navigate.id}
              className={`text-2xl py-2 hover:bg-bgcolor duration-150  rounded-full  px-6 uppercase 
                ${
                  navigate.link == locate &&
                  "bg-primaryColor font-bold text-white"
                }
                ${
                  navigate.name == location &&
                  "bg-primaryColor font-bold text-white"
                }
                 `}
            >
              {navigate.name}
            </a>
          ))}
        </div>
        <div className="flex items-center ">
          {islight ? (
            <FaSun
              className="mr-8 text-3xl cursor-pointer"
              onClick={toggleTheme}
            />
          ) : (
            <FaMoon
              className="mr-8 text-3xl cursor-pointer"
              onClick={toggleTheme}
            />
          )}
          {user ? (
            <Suspense fallback={"loading"}>
              <UserAccount />
            </Suspense>
          ) : (
            <a
              href="/login"
              className="px-8 py-2 text-2xl font-bold duration-150 rounded-full hover:bg-coverColor bg-primaryColor"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
