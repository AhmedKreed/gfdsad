import Image from "next/image";
import { AllNews } from "@/constants";
import News from "@/components/News";

const page = ({ params }: { params: { id: string } }) => {
  const ID = Number(params.id);
  return (
    <section className="paddings">
      <div className=" grid lg:grid-cols-3 grid-cols-1 lg:gap-8 mb-8">
        <div className="col-span-2 p-4 pb-8">
          <Image
            unoptimized
            src={AllNews[ID].img}
            alt={"img"}
            className="w-full h-[600px] object-cover rounded-xl mb-3 "
          />
          <p className="mb-4 text-secondary font-medium">
            {AllNews[ID].author}
            <span className="mr-3">{AllNews[ID].date}</span>
          </p>
          <h1 className="text-primary font-bold text-xl md:text-2xl mb-4">
            {AllNews[ID].title}
          </h1>
          <p className="font font-medium leading-7 text-sm text-secondary">
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
            يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
            ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
            بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست
            لابوريوم.
          </p>
        </div>
        <div>
          <News title={"اخبار لتامر أبو سيدو"} news={AllNews} limit={2} col />
        </div>
      </div>
      <div>
        <News title={"أخبار اخرى"} news={AllNews} limit={3} />
      </div>
    </section>
  );
};

export default page;
