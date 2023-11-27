import { useEffect, useRef, useState } from "react";
import avatar from "@assets/avatar.png";
import { motion } from "framer-motion";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const Menu = () => {
  const [isLogin, setIsLogin] = useState(false);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const userLogin = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsLogin(!isLogin);
      // console.error("Error signing in:", error.message);
    }
  };

  const [open, setOpen] = useState("");
  const menuRef = useRef(null);

  const showMenu = () => {
    setOpen(!open);
  };
  const hideMenu = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      hideMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div>
        <motion.img
          src={user ? user.photoURL : avatar}
          alt="avatar"
          className="w-9 h-9 rounded-full"
          whileTap={{ scale: 0.6 }}
          onClick={open ? hideMenu : showMenu}
        />
        {open ? (
          <>
            <div className="shadow-md rounded-md bg-slate-100 border absolute top-16 right-1 z-50 py-3">
              <ul className="flex flex-col gap-3 cursor-pointer ">
                <li className="text-base text-textColor px-20 hover:bg-blue-300 text-center hover:rounded-md duration-100 translation-all ease-in-out ">
                  Home
                </li>
                <li className="text-base text-textColor hover:bg-blue-300 text-center hover:rounded-md duration-100 translation-all ease-in-out ">
                  Menu
                </li>
                <li className="text-base text-textColor hover:bg-blue-300 text-center hover:rounded-md duration-100 translation-all ease-in-out ">
                  About Us
                </li>
                <li className="text-base text-textColor hover:bg-blue-300 text-center hover:rounded-md duration-100 translation-all ease-in-out">
                  Service
                </li>
                {isLogin && (
                  <ul>
                    <li className="text-base text-textColor hover:bg-blue-300 text-center hover:rounded-md duration-100 translation-all ease-in-out">
                      Add Items
                    </li>
                    <li
                      className="text-base text-textColor hover:bg-blue-300 text-center hover:rounded-md duration-100 translation-all ease-in-out"
                      onClick={userLogin}
                    >
                      Login
                    </li>
                  </ul>
                )}

                <li className="text-base text-textColor hover:bg-blue-300 text-center hover:rounded-md duration-100 translation-all ease-in-out">
                  Logout
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
