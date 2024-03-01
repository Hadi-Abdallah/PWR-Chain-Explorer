"use client";
import Image from "next/image";
import ArrowSrc from "@/public/path.svg";
import EnterArrowSrc from "@/public/enter.svg";
import { FormEvent } from "react";
import useTransactionsStore from "@/store/transactionsStore";
import reqInstance from "@/utils/axios";

function SearchBar() {
  const { loading, setLoading, updateData } = useTransactionsStore(
    (state) => state
  );
  const dummyData = {
    pwrPrice: 1.098,
    pwrPercent: -4.25,
    transactions: "1,960.01 M",
    tps: "5,200",
    blocks: "10,199",
    pwrMarketCap: "$1,000,000,000...",
    validators: 191910,
    lastestBlock: [
      {
        timeAgo: "10 secs",
        number: 17214042,
        txns: 89,
        pwr: 0.49867,
      },
      {
        timeAgo: "10 secs",
        number: 17214042,
        txns: 89,
        pwr: 0.49867,
      },
      {
        timeAgo: "10 secs",
        number: 17214042,
        txns: 89,
        pwr: 0.49867,
      },
      {
        timeAgo: "10 secs",
        number: 17214042,
        txns: 89,
        pwr: 0.49867,
      },
      {
        timeAgo: "10 secs",
        number: 17214042,
        txns: 89,
        pwr: 0.49867,
      },
    ],
    latestTransaction: [
      {
        pwr: 0.49867,
        code: "0x7796ao2567",
        timeAgo: "10 secs",
        from: "0x95222...feg5",
        to: "0x95222...feg5",
      },
      {
        pwr: 0.49867,
        code: "0x7796ao2567",
        timeAgo: "10 secs",
        from: "0x95222...feg5",
        to: "0x95222...feg5",
      },
      {
        pwr: 0.49867,
        code: "0x7796ao2567",
        timeAgo: "10 secs",
        from: "0x95222...feg5",
        to: "0x95222...feg5",
      },
      {
        pwr: 0.49867,
        code: "0x7796ao2567",
        timeAgo: "10 secs",
        from: "0x95222...feg5",
        to: "0x95222...feg5",
      },
      {
        pwr: 0.49867,
        code: "0x7796ao2567",
        timeAgo: "10 secs",
        from: "0x95222...feg5",
        to: "0x95222...feg5",
      },
    ],
  };
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fakeData = await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    await reqInstance.get("/posts");
    console.log(fakeData);
    updateData(dummyData);
    setLoading(false);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-row w-full items-center justify-between px-2 py-3 sm:px-9 sm:py-4 rounded-2xl border-solid border-[1px] border-[#DEDDF6]"
    >
      <div className="flex flex-row gap-4 cursor-pointer rounded-lg bg-slate-100 p-3 items-center">
        <h2 className="text-sm smd:text-lg font-medium">All Filters</h2>
        <Image src={ArrowSrc} alt="arrow" />
      </div>
      <input
        type="text"
        disabled={loading}
        className="w-3/5 outline-none border-none disabled:bg-transparent disabled:opacity-30"
        placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
      />
      <p className="select-none font-medium pointer-events-none hidden md:block">
        <Image
          className="inline-block pr-1"
          src={EnterArrowSrc}
          alt="enter arrow right"
        />{" "}
        Enter
      </p>
    </form>
  );
}

export default SearchBar;
