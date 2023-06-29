import { Customer } from "./customer";
import { Facility } from "./facility";

export interface Contract {
    code: string;
    customerId: Customer;
    roomId: Facility;
    dateStart: string;
    dateEnd: string;
    deposit: number;
    id: number;
  }