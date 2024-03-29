import Link from "next/link";

const SignUp = () => (
  <Link
    className="bg-button px-[18px] py-[10px] text-white rounded-lg font-semibold"
    href={"/signup"}
  >
    إنشاء حساب
  </Link>
);

export default SignUp;
