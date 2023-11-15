import logo from "@assets/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "./Ui/Menu";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../firebase.config";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const userLogin = async () => {
    try {
      const response = await signInWithPopup(firebaseAuth, provider);
      console.log(response);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="fixed w-screen z-50 left-0 top-0">
      <div className="flex bg-slate-100 shadow-lg justify-between items-center p-4 max-h-[100px]">
        <div>
          <Link to="/" className="flex items-center ml-4">
            <img src={logo} width={40} height={40} alt="" className="w-13" />
            <p className="font-bold text-xl text-headingColor">City</p>
          </Link>
        </div>

        <ul className="md:flex hidden items-center gap-7 cursor-pointer">
          <li className="text-xl text-headingColor hover:text-textColor font-semibold duration-100 translation-all ease-in-out ">
            Home
          </li>
          <li className="text-xl text-headingColor hover:text-textColor font-semibold duration-100 translation-all ease-in-out ">
            Contact Us
          </li>
        </ul>

        <div className="mr-4 flex gap-4 items-center">
          <MdShoppingBasket className="text-2xl text-headingColor" />
          <span className="absolute top-4 right-20 font-semibold text-white bg-cartNumBg rounded-full w-5 h-5 items-center flex justify-center">
            0
          </span>
          <Menu onClick={userLogin} />
        </div>
      </div>
    </div>
  );
};

export default Header;
