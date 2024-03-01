"use client";

import CubeSrc from "@/public/block.svg";
import ArrowRight from "@/public/right-arrow.svg";
import useTransactionsStore from "@/store/transactionsStore";
import Image from "next/image";
function LatestBlock() {
  const { data, loading } = useTransactionsStore((state) => state);
  return (
    <div className="flex flex-col items-center w-full md:w-2/5">
      {data.latestTransaction.length > 0 ||
        loading ? (
          <>
            <h2 className="mb-5 font-medium text-xl">Latest Block</h2>
            {data.lastestBlock.length > 0 &&
              !loading &&
              data.lastestBlock.map((blockItem, i) => (
                <div
                  key={i}
                  className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max"
                >
                  <Image src={CubeSrc} alt="cube" />
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-gray-400 text-xs md:text-sm">
                      {blockItem.number}
                    </p>
                    <p className="text-xs md:text-sm">
                      {blockItem.timeAgo} ago
                    </p>
                  </div>
                  <div className="flex flex-col justify-between h-full text-sm">
                    <p className="text-xs md:text-sm">Fee Recipient</p>
                    <p className="text-gray-400">{blockItem.txns} txns</p>
                  </div>
                  <div className="flex flex-col gap-2 justify-between h-full text-sm">
                    <p className="text-gray-400">rsync-build</p>
                    <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
                      {blockItem.pwr} PWR
                    </p>
                  </div>
                </div>
              ))}
            {loading && (
              <div
                role="status"
                className="max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-44 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-44 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-44 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-44 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-44 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
              </div>
            )}
            {data.lastestBlock.length > 0 && (
              <button className="flex flex-row gap-2 w-max mx-auto my-5 group">
                <span className="block">View All Blocks</span>

                <Image
                  src={ArrowRight}
                  className="block group-hover:translate-x-1 transition-transform"
                  alt="arrow right"
                />
              </button>
            )}
          </>
        ): <></>}
    </div>
  );
}

export default LatestBlock;
