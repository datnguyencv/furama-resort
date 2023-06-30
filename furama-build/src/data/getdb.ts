import { Contract } from './contract';
import { Customer } from './customer';
import { Facility } from './facility';

// Đọc dữ liệu từ tệp JSON
import('./db.json')
  .then((data) => {
    // Lấy danh sách khách hàng từ tệp JSON
    const customers: Customer[] = data.customers;

    // Lấy danh sách cách loại khách hàng từ tệp JSON
    const customerTypes = data.customerType;

    // Lấy danh sách phòng từ tệp JSON
    const facilities: Facility[] = data.room;

    // Lấy danh sách hợp đồng từ tệp JSON
    const contracts: Contract[] = data.contract;

    // In ra danh sách khách hàng
    console.log(customers);

    // In ra danh sách phòng
    console.log(facilities);

    // In ra danh sách hợp đồng
    console.log(contracts);
  })
  .catch((error) => {
    console.error('Lỗi khi đọc dữ liệu từ tệp JSON:', error);
  });