import Club from "@/sections/clubs/Club";
const page = ({ params }: { params: { id: string } }) => {
  const ID = Number(params.id);
  return (
    <section className="paddings">
      <Club id={ID} />
    </section>
  );
};

export default page;
