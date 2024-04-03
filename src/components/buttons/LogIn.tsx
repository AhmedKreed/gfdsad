import Link from "next/link";

const LogIn = () => {
  return (
    <Link
      className=" px-[18px] py-[10px] text-white bg-button rounded-lg font-semibold"
      href={"/login"}
    >
      تسجيل الدخول
    </Link>
  );
};

export default LogIn;
