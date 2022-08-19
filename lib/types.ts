export type CredentialType = {
  email: string;
  passHash: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  accountNumber: number;
};

export type BankAccount = {
  id: number;
  name: string;
  accountNumber: number;
  balance: number;
};

export type Book = {
  id: number;
  name: string;
  author: string;
  price: number;
  image: string;
  publisher: string;
  supplier: string;
  quantity: string;
  sale: string;
  catagory: string;
};

export type Supplier = {
  id: number;
  name: string;
  accountNumber: number;
};

export type Transaction = {
  id: number;
  sender: string;
  reciever: string;
  amount: number;
}
