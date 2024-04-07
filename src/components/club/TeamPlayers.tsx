const x = ["", "", "", "", "", "", "", "", "", "", ""];
const TeamPlayers = () => (
  <div className="md:col-span-1 col-span-2">
    <h1 className="text-2xl text-primary font-bold">التشكيلة</h1>
    <div className="p-4 bg-[#FCFCFD] rounded-lg mb-8 shadow-md">
      <div className="text-sm flex items-center">
        <p className=" font-medium flex-1 text-[#4D4D4D]">كارلو انشيلوتي</p>
        <p className="font-semibold text-[#4D4D4D]">مدرب</p>
      </div>
      {x.map((item, index) => (
        <div key={index} className="flex gap-3 mt-3">
          <p className="text-sm text-[#4D4D4D] font-bold w-5">{index + 1}</p>
          <p className="text-sm text-[#4D4D4D] flex-1">تيبو كورتوا</p>
          <p className="text-sm text-[#4D4D4D]">حارس</p>
        </div>
      ))}
    </div>
  </div>
);

export default TeamPlayers;
