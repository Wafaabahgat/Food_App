// import { useEffect, useRef, useState } from "react";
import avatar from "@assets/avatar.png";
import { motion } from "framer-motion";
// import MenuCard from "./MenuCard";

const Menu = ({ onClick }) => {
  // const [open, setOpen] = useState("");
  // const menuRef = useRef(null);

  // const showMenu = () => {
  //   setOpen(!open);
  // };
  // const hideMenu = () => {
  //   setOpen(false);
  // };

  // const handleClick = (e) => {
  //   if (menuRef.current && !menuRef.current.contains(e.target)) {
  //     hideMenu();
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <>
      <div onClick={onClick}>
        <motion.img
          src={avatar}
          alt="avatar"
          className="w-9 h-9"
          whileTap={{ scale: 0.6 }}
          // onClick={open ? hideMenu : showMenu}
        />
        {/* {open ? <MenuCard /> : null} */}
      </div>
    </>
  );
};

export default Menu;
