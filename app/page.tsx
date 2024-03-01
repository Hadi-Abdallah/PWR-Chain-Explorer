
import SearchBar from "@/components/SearchBar";
import CurrentTransaction from "@/components/CurrentTransaction";
import LatestBlock from "@/components/LatestBlock";
import LatestTransaction from "@/components/LatestTransaction";
export default function Home() {
  return (
    <main className="min-h-screen p-5 pt-10 md:px-16 text-[#1E1F31]">
      <h1 className="text-6xl text-center font-bold">The PWR Chain Explorer</h1>
      <SearchBar />
      <CurrentTransaction />
      <div className="flex flex-wrap w-full mt-10 flex-row gap-2 justify-between">
        <LatestBlock />
        <LatestTransaction />
      </div>
    </main>
  );
}
