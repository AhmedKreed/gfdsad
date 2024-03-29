import NavBar from "@/components/NavBar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      {children}
    </main>
  );
};

export default layout;
