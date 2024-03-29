const TeamPlayers = ({ id, isHost }: { id: number; isHost: boolean }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="flex justify-start flex-col gap-8">
      {array.map((item) => (
        <p
          key={item}
          className={`text-secondary text-sm font-medium ${
            !isHost && "text-left"
          }`}
        >
          1 تير
        </p>
      ))}
    </div>
  );
};

export default TeamPlayers;
