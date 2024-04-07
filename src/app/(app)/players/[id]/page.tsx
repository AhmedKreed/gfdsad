import { Playersd } from "@/constants";
import { PlayerInfo, PlayerLeagues, PlayerTeam } from "@/components/player";
const page = ({ params }: { params: { id: string } }) => {
  const ID = Number(params.id);
  return (
    <section className="paddings">
      <PlayerInfo Playersd={Playersd[ID]} />
      <PlayerTeam />
      <PlayerLeagues />
    </section>
  );
};

export default page;
