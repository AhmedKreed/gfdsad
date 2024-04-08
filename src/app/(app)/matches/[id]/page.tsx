import { Matche } from "@/constants";
import { MatchHighlights, MatchResult, MatchPlayers } from "@/components/match";

const page = ({ params }: { params: { id: string } }) => {
  const ID = Number(params.id);
  const matche = Matche[ID - 1];
  return (
    <section className="paddings grid lg:grid-cols-3 md:grid-cols-1 lg:gap-8">
      <MatchResult Matche={matche} />

      <MatchHighlights Matche={matche} />

      <div className="col-span-2 p-4 rounded-lg bg-[#FCFCFD]">
        <h1 className="text-primary text-2xl font-bold mb-10">التشكيلة</h1>
        <div className="flex justify-between mb-8">
          <h3 className="font-bold text-secondary">
            {matche.teams.theGuest.name}
          </h3>
          <h3 className="font-bold text-secondary">
            {matche.teams.theHost.name}
          </h3>
        </div>

        <div className="flex justify-between">
          <div>
            <MatchPlayers id={ID} isHost />
          </div>
          <div className="h-[480px] m-auto bg-[#CCCCCC] w-[1px]" />
          <div>
            <MatchPlayers id={ID} isHost={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
