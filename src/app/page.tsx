import Navbar from "@/components/global/Navbar";
import Header from "./home/Header";
import Card from "./home/Card";

export default function Home() {
  return (
    <div className="container pb-6">
      <div className="lg:border-r border-b lg:fixed top-0 bottom-0 bg-white border-gray-300 overflow-y-scroll">
        <Navbar />
      </div>
      <div className="flex-grow lg:ml-[290px]">
        <Header />
        <Card />
      </div>
    </div>
  );
}
