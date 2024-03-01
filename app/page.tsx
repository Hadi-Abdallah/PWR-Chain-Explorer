import ArrowSrc from "@/public/path.svg";
import EnterArrowSrc from "@/public/enter.svg";
import Image from "next/image";
import UnionIcon from "@/public/Union.svg";
import CubeSrc from "@/public/block.svg";
import ListSrc from "@/public/list.svg";
import ArrowRight from "@/public/right-arrow.svg"
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen p-5 pt-10 md:px-16 text-[#1E1F31]">
      <h1 className="text-6xl text-center font-bold">The PWR Chain Explorer</h1>
      <div className="mt-10 flex flex-row w-full items-center justify-between px-2 py-3 sm:px-9 sm:py-4 rounded-2xl border-solid border-[1px] border-[#DEDDF6]">
        <div className="flex flex-row gap-4 cursor-pointer rounded-lg bg-slate-100 p-3 items-center">
          <h2 className="text-sm smd:text-lg font-medium">All Filters</h2>
          <Image src={ArrowSrc} alt="arrow" />
        </div>
        <input
          type="text"
          name=""
          className="w-3/5 outline-none border-none"
          placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
          id=""
        />
        <p className="select-none font-medium pointer-events-none hidden md:block">
          <Image
            className="inline-block pr-1"
            src={EnterArrowSrc}
            alt="enter arrow right"
          />{" "}
          Enter
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-flow-col-dense grid-rows-2 gap-4 mt-10">
        <div className="bg-gray-100 p-4 rounded-md flex flex-row justify-between">
          <Image src={UnionIcon} alt="union" />
          <div className="flex flex-col w-max">
            <p className="text-sm font-medium text-gray-400">PWR PRICE</p>
            <p className="text-sm font-bold overflow-hidden text-ellipsis">
              $1.098 <span className="text-red-600 text-xs">(-4.19%)</span>
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-sm font-medium">BLOCKS</p>
          <p className="text-base font-bold">10,199</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md col-span-2 flex flex-row justify-between">
          <div className="h-full flex flex-col justify-between w-full overflow-hidden text-ellipsis">
            <p className="text-sm font-medium">TRANSACTIONS</p>
            <p className="text-base font-bold">1,960.01 M</p>
          </div>
          <div className="h-full flex flex-col justify-between">
            <p className="text-sm font-medium">TPS</p>
            <p className="text-base font-bold overflow-hidden text-ellipsis">
              5,200
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md w-full">
          <p className="text-sm font-medium">PWR MARKET CAP</p>
          <p className="text-base font-bold w-full overflow-hidden text-ellipsis">
            $1,000,000,000...
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-sm font-medium">VALIDATORS</p>
          <p className="text-base font-bold">191910</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md col-span-2 row-span-2 w-full">
          <p className="text-sm font-medium">TRANSACTION HISTORY IN 14 DAYS</p>
        </div>
      </div>
      <div className="flex flex-wrap w-full mt-10 flex-row gap-2 justify-between">
        <div className="flex flex-col items-center w-full md:w-2/5">
          <h2 className="mb-5 font-medium text-xl">Latest Block</h2>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={CubeSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs md:text-sm">17214042</p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between h-full text-sm">
              <p className="text-xs md:text-sm">Fee Recipient</p>
              <p className="text-gray-400">89 txns</p>
            </div>
            <div className="flex flex-col gap-2 justify-between h-full text-sm">
              <p className="text-gray-400">rsync-build</p>
              <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
                0.49867 PWR
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={CubeSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs md:text-sm">17214042</p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between h-full text-sm">
              <p className="text-xs md:text-sm">Fee Recipient</p>
              <p className="text-gray-400">89 txns</p>
            </div>
            <div className="flex flex-col gap-2 justify-between h-full text-sm">
              <p className="text-gray-400">rsync-build</p>
              <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
                0.49867 PWR
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={CubeSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs md:text-sm">17214042</p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between h-full text-sm">
              <p className="text-xs md:text-sm">Fee Recipient</p>
              <p className="text-gray-400">89 txns</p>
            </div>
            <div className="flex flex-col gap-2 justify-between h-full text-sm">
              <p className="text-gray-400">rsync-build</p>
              <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
                0.49867 PWR
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={CubeSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs md:text-sm">17214042</p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between h-full text-sm">
              <p className="text-xs md:text-sm">Fee Recipient</p>
              <p className="text-gray-400">89 txns</p>
            </div>
            <div className="flex flex-col gap-2 justify-between h-full text-sm">
              <p className="text-gray-400">rsync-build</p>
              <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
                0.49867 PWR
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={CubeSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs md:text-sm">17214042</p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between h-full text-sm">
              <p className="text-xs md:text-sm">Fee Recipient</p>
              <p className="text-gray-400">89 txns</p>
            </div>
            <div className="flex flex-col gap-2 justify-between h-full text-sm">
              <p className="text-gray-400">rsync-build</p>
              <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
                0.49867 PWR
              </p>
            </div>
          </div>
          <button className="flex flex-row gap-2 w-max mx-auto my-5 group">
            <span className="block">View All Blocks</span>

            <Image
              src={ArrowRight}
              className="block group-hover:translate-x-1 transition-transform"
              alt="arrow right"
            />
          </button>
        </div>
        <div className="flex flex-col items-center w-full md:w-2/5">
          <h2 className="mb-5 mt-8 md:mt-0 font-medium text-xl">
            Latest Transactions
          </h2>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={ListSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs w-[8ch] overflow-hidden text-ellipsis md:text-sm">
                0x7796ao2567
              </p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between gap-4 h-full text-sm">
              <p className="text-xs">
                From
                <span className="text-gray-400 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis">
                  0x95222...feg5
                </span>
              </p>
              <p className="text-gray-400 text-xs">
                To
                <span className="text-blue-800 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis font-medium">
                  0x95222...CC4ba
                </span>
              </p>
            </div>
            <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
              0.49867 PWR
            </p>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={ListSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs w-[8ch] overflow-hidden text-ellipsis md:text-sm">
                0x7796ao2567
              </p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between gap-4 h-full text-sm">
              <p className="text-xs">
                From
                <span className="text-gray-400 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis">
                  0x95222...feg5
                </span>
              </p>
              <p className="text-gray-400 text-xs">
                To
                <span className="text-blue-800 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis font-medium">
                  0x95222...CC4ba
                </span>
              </p>
            </div>
            <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
              0.49867 PWR
            </p>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={ListSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs w-[8ch] overflow-hidden text-ellipsis md:text-sm">
                0x7796ao2567
              </p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between gap-4 h-full text-sm">
              <p className="text-xs">
                From
                <span className="text-gray-400 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis">
                  0x95222...feg5
                </span>
              </p>
              <p className="text-gray-400 text-xs">
                To
                <span className="text-blue-800 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis font-medium">
                  0x95222...CC4ba
                </span>
              </p>
            </div>
            <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
              0.49867 PWR
            </p>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={ListSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs w-[8ch] overflow-hidden text-ellipsis md:text-sm">
                0x7796ao2567
              </p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between gap-4 h-full text-sm">
              <p className="text-xs">
                From
                <span className="text-gray-400 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis">
                  0x95222...feg5
                </span>
              </p>
              <p className="text-gray-400 text-xs">
                To
                <span className="text-blue-800 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis font-medium">
                  0x95222...CC4ba
                </span>
              </p>
            </div>
            <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
              0.49867 PWR
            </p>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max">
            <Image src={ListSrc} alt="cube" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-400 text-xs w-[8ch] overflow-hidden text-ellipsis md:text-sm">
                0x7796ao2567
              </p>
              <p className="text-xs md:text-sm">10 secs ago</p>
            </div>
            <div className="flex flex-col justify-between gap-4 h-full text-sm">
              <p className="text-xs">
                From
                <span className="text-gray-400 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis">
                  0x95222...feg5
                </span>
              </p>
              <p className="text-gray-400 text-xs">
                To
                <span className="text-blue-800 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis font-medium">
                  0x95222...CC4ba
                </span>
              </p>
            </div>
            <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
              0.49867 PWR
            </p>
          </div>
          <button className="flex flex-row gap-2 w-max mx-auto my-5 group">
            <span className="block">View All Transcations</span>

            <Image
              src={ArrowRight}
              className="block group-hover:translate-x-1 transition-transform"
              alt="arrow right"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
