import { Customer } from "./customer";
import { Facility } from "./facility";

export interface Contract {
    code: string;
    customerId: number;
    roomId: number;
    dateStart: string;
    dateEnd: string;
    deposit: number;
    id: number;
    totalMoney: number;
  }