export interface GetData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  judul: string;
  tanggal: string;
};
