"use client";

import ListSrc from "@/public/list.svg";
import CubeSrc from "@/public/block.svg";
import ArrowRight from "@/public/right-arrow.svg";
import useTransactionsStore from "@/store/transactionsStore";
import Image from "next/image";
function LatestTransaction() {
  const { data, loading } = useTransactionsStore((state) => state);
  return (
    <div className="flex flex-col items-center w-full md:w-2/5">
      {data.latestTransaction.length > 0 || loading ? (
        <>
          <h2 className="mb-5 mt-8 md:mt-0 font-medium text-xl">
            Latest Transactions
          </h2>
          {data.lastestBlock.length > 0 &&
            !loading &&
            data.latestTransaction.map((transactionItem, i) => (
              <div
                key={i}
                className="flex flex-row justify-between gap-3 items-center rounded-md p-4 even:bg-gray-100 w-full md:w-max"
              >
                <Image src={ListSrc} alt="cube" />
                <div className="flex flex-col justify-between h-full">
                  <p className="text-gray-400 text-xs w-[8ch] overflow-hidden text-ellipsis md:text-sm">
                    {transactionItem.code}
                  </p>
                  <p className="text-xs md:text-sm">
                    {transactionItem.timeAgo} ago
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-4 h-full text-sm">
                  <p className="text-xs">
                    From
                    <span className="text-gray-400 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis">
                      {transactionItem.from}
                    </span>
                  </p>
                  <p className="text-gray-400 text-xs">
                    To
                    <span className="text-blue-800 w-[7ch] ps-1 inline-block overflow-hidden text-ellipsis font-medium">
                      {transactionItem.to}
                    </span>
                  </p>
                </div>
                <p className="bg-gray-200 p-1 rounded-md text-xs md:text-sm w-max">
                  {transactionItem.pwr} PWR
                </p>
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
              <span className="block">View All Transactions</span>

              <Image
                src={ArrowRight}
                className="block group-hover:translate-x-1 transition-transform"
                alt="arrow right"
              />
            </button>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LatestTransaction;
