import Match from "@/sections/matches/Match";

const page = ({ params }: { params: { id: string } }) => {
  const ID = Number(params.id);
  return (
    <section className="paddings">
      <Match id={ID - 1} />
    </section>
  );
};

export default page;
