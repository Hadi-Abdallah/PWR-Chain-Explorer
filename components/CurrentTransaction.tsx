"use client";
import Image from "next/image";
import UnionIcon from "@/public/Union.svg";
import useTransactionsStore from "@/store/transactionsStore";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import TransactionIcon from "@/public/Group 13.svg";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function CurrentTransaction() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const labels = ["Apr 23", "Apr 30", "May 7"];

  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: labels.map(() => Math.random() * 243),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const { loading, data } = useTransactionsStore((state) => state);
  return (
    <div className="grid w-full grid-cols-1 md:grid-flow-col-dense grid-rows-2 gap-4 mt-10">
      {data.latestTransaction.length > 0 ||
        loading ? (
          <>
            <div className="bg-gray-100 p-4 rounded-md flex flex-row justify-between">
              <Image src={UnionIcon} alt="union" />
              <div className="flex flex-col w-max">
                <p className="text-sm font-medium text-gray-400">PWR PRICE</p>

                <p className="text-sm font-bold overflow-hidden text-ellipsis">
                  {loading ? (
                    <div role="status" className="max-w-sm">
                      <div className="h-2.5 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-20 mb-4 animate-pulse"></div>
                    </div>
                  ) : (
                    <>
                      ${data.pwrPrice}{" "}
                      <span className="text-red-600 text-xs">
                        ({data.pwrPercent}%)
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-medium">BLOCKS</p>
              {!loading && data.pwrPercent ? (
                <p className="text-base font-bold">{data.blocks}</p>
              ) : (
                loading && (
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-20 mb-4"></div>
                  </div>
                )
              )}
            </div>
            <div className="bg-gray-100 p-4 rounded-md col-span-2 flex flex-row justify-between">
              <Image
                src={TransactionIcon}
                alt="transactions"
                className="me-5"
              />
              <div className="h-full flex flex-col justify-between w-full overflow-hidden text-ellipsis">
                <p className="text-sm font-medium">TRANSACTIONS</p>
                {!loading && data.transactions ? (
                  <p className="text-base font-bold">{data.transactions}</p>
                ) : (
                  loading && (
                    <div role="status" className="max-w-sm animate-pulse">
                      <div className="h-2.5 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-20 mb-4"></div>
                    </div>
                  )
                )}
              </div>
              <div className="h-full flex flex-col justify-between">
                <p className="text-sm font-medium">TPS</p>

                {!loading && data.tps ? (
                  <p className="text-base font-bold overflow-hidden text-ellipsis">
                    {data.tps}
                  </p>
                ) : (
                  loading && (
                    <div role="status" className="max-w-sm animate-pulse">
                      <div className="h-2.5 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-20 mb-4"></div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md w-full">
              <p className="text-sm font-medium">PWR MARKET CAP</p>
              {!loading && data.pwrMarketCap ? (
                <p className="text-base font-bold w-full overflow-hidden text-ellipsis">
                  {data.pwrMarketCap}
                </p>
              ) : (
                loading && (
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-20 mb-4"></div>
                  </div>
                )
              )}
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-medium">VALIDATORS</p>
              {!loading && data.pwrPercent ? (
                <p className="text-base font-bold">{data.validators}</p>
              ) : (
                loading && (
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-20 mb-4"></div>
                  </div>
                )
              )}
            </div>
            <div className="bg-gray-100 p-4 rounded-md col-span-2 row-span-2 w-full">
              <p className="text-sm font-medium">
                TRANSACTION HISTORY IN 14 DAYS
              </p>
              {!loading && data.pwrPercent ? (
                <Line options={options} data={chartData} />
              ) : (
                loading && (
                  <div
                    role="status"
                    className="max-h-sm animate-pulse flex flex-row gap-2 justify-between mt-10"
                  >
                    <div className="h-20 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-2.5 mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-2.5 mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-2.5 mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-2.5 mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-2.5 mb-4"></div>
                    <div className="h-16 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-2.5 mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-2.5 mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded-full opacity-45 dark:bg-gray-700 w-2.5 mb-4"></div>
                  </div>
                )
              )}
            </div>
          </>
        ): <></>}
    </div>
  );
}

export default CurrentTransaction;
