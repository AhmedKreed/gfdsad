import Player from "@/sections/players/Player";

const page = ({ params }: { params: { id: string } }) => {
  const ID = Number(params.id);
  return (
    <section className="paddings">
      <Player id={ID - 1} />
    </section>
  );
};

export default page;
