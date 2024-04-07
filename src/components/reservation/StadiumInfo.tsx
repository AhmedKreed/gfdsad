import Image from "next/image";
import logo from "@/assets/Icon (1).png";
import stadiums from "@/assets/image20(1).png";

const StadiumInfo = () => {
  return (
    <div>
      <h1 className="mb-3 text-primary text-2xl font-bold">سوكر وورلد</h1>
      <div className="flex items-center gap-3 mb-8">
        <Image unoptimized src={logo} alt={"logo"} className="w-auto h-auto" />{" "}
        <span className="text-sm medium text-secondary">الرياض</span>
      </div>
      <Image
        unoptimized
        src={stadiums}
        alt={"stadium"}
        className="w-full h-auto object-cover mb-6"
      />
      <div className="p-4 mb-8">
        <h3 className="text-base font-bold text-primary mb-3">لمحة عامة</h3>
        <p className="text-xs font-medium text-secondary">
          جرافيتي هو ملعب كرة قدم يقع في البحرين. تتميز بإضاءة ممتازة وأفضل
          رعاية للعملاء. جرافيتي هو ملعب خارجي في الزلاق. إنه يوفر مكانًا
          مثاليًا لكرة القدم
        </p>
      </div>
    </div>
  );
};

export default StadiumInfo;
