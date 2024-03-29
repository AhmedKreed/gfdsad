import Image from "next/image";
import logo from "@/assets/Logo.png";
import { FooterLinks, SocialMedia } from "@/constants";
import Link from "next/link";
const Footer = () => (
  <footer className="paddings">
    <div className="pb-16">
      <Image
        unoptimized
        src={logo}
        alt={"logo"}
        width={32}
        height={32}
        className="object-contain"
      />
      <p className="text-secondary my-8">وصف</p>
      <div className="flex flex-col md:flex-row gap-8 font-semibold text-secondary">
        {FooterLinks.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
    <div className="w-full h-[1px] mx-auto bg-[#cccccc]" />
    <div className="flex mt-8">
      <span className="flex-1">© وصف</span>
      <div className="flex gap-6">
        {SocialMedia.map((item) => (
          <Image
            unoptimized
            key={item.id}
            src={item.img}
            alt={"item"}
            width={24}
            height={24}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
