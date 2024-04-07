import Image from "next/image";

const MainNews = ({ AllNews }: { AllNews: any }) => {
  return (
    <div className="col-span-2 p-4 pb-8">
      <Image
        unoptimized
        src={AllNews.img}
        alt={"img"}
        className="w-full h-[600px] object-cover rounded-xl mb-3 "
      />
      <p className="mb-4 text-secondary font-medium">
        {AllNews.author}
        <span className="mr-3">{AllNews.date}</span>
      </p>
      <h1 className="text-primary font-bold text-xl md:text-2xl mb-4">
        {AllNews.title}
      </h1>
      <p className="font font-medium leading-7 text-sm text-secondary">
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
        أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم
        أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت
        أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
        ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا
        باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت
        ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.
      </p>
    </div>
  );
};

export default MainNews;
