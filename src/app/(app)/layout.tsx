import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      {children}
      <Footer />
      <Toaster />
    </main>
  );
};

export default layout;
