// import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
// import { app } from "../../firebase.config";
// import { useStateValue } from "../../context/StateProvider";
// import { actionType } from "../../context/reducer";

// // import { useState } from "react";

// const MenuCard = ({ user }) => {
//   // const [isLogin, setIsLogin] = useState(false);

//   const firebaseAuth = getAuth(app);
//   const provider = new GoogleAuthProvider();

//   const [{ user }, dispatch] = useStateValue();
//   const userLogin = async () => {
//     try {
//       const {
//         user: { refreshToken, providerData },
//       } = await signInWithPopup(firebaseAuth, provider);
//       dispatch({
//         type: actionType.SET_USER,
//         user: providerData[0],
//       });
//     } catch (error) {
//       console.error("Error signing in:", error.message);
//     }
//   };
//   return (
//     <>
//       <div className="shadow-md rounded-md w-[210px] bg-slate-100 border absolute top-16 right-1 z-50 py-3">
//         <ul className="flex flex-col items-center gap-3 cursor-pointer ">
//           <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out ">
//             Home
//           </li>
//           <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out ">
//             Menu
//           </li>
//           <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out ">
//             About Us
//           </li>
//           <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out">
//             Service
//           </li>
//           <li
//             className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out"
//             onClick={userLogin}
//           >
//             Login
//           </li>

//           <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out">
//             Logout
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default MenuCard;
