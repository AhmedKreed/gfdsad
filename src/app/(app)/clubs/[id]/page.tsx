import { ClubInfo } from "@/constants";
import {
  TeamInfo,
  TeamLeagues,
  TeamPlayers,
  TeamStadium,
} from "@/components/club";

const page = ({ params }: { params: { id: string } }) => {
  const ID = Number(params.id);
  return (
    <section className="paddings grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
      <TeamInfo ClubInfo={ClubInfo} />
      <TeamPlayers />
      <TeamStadium />
      <TeamLeagues />
    </section>
  );
};

export default page;
