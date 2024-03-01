import { create } from "zustand";

type dataType = {
  pwrPrice: number;
  pwrPercent: number;
  transactions: string;
  tps: string;
  blocks: string;
  pwrMarketCap: string;
  validators: number;
  lastestBlock: {
    number: number;
    timeAgo: string;
    txns: number;
    pwr: number;
  }[];
  latestTransaction: {
    timeAgo: string;
    from: string;
    to: string;
    pwr: number;
    code: string;
  }[];
};

interface TransactionsStore {
  loading: boolean;
  searchValue: string;
  data: dataType;
  updateData: (newData: dataType) => void;
  open: boolean;
  toggleNavbar: () => void;
  setLoading: (state: boolean) => void;
}
const useTransactionsStore = create<TransactionsStore>((set) => ({
  loading: false,
    searchValue: "",
  data: {
    pwrPrice: 0,
    pwrPercent: 0,
    transactions: "",
    tps: "",
    blocks: "",
    pwrMarketCap: "",
    validators: 0,
    lastestBlock: [],
    latestTransaction: []
  },
  open: false,
  toggleNavbar: () => {
    set((state) => ({
      open: !state.open,
    }));
  },
  setLoading: (state) => set(() => ({ loading: state })),
  updateData: (data: dataType) => {
    set((state) => ({data}));
  },
}));

export default useTransactionsStore;
