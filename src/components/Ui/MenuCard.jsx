const MenuCard = () => {
  return (
    <>
      <div className="shadow-md rounded-md w-[210px] bg-slate-100 border absolute top-16 right-1 z-50 py-3">
        <ul className="flex flex-col items-center gap-3 cursor-pointer ">
          <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out ">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out ">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out ">
            About Us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out">
            Service
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 translation-all ease-in-out">
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuCard;
