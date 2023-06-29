import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as contractService from "../../services/contract-service/ContractService";
import * as productService from "../../services/product-service/ProductService";
import * as customerService from "../../services/customer-service/CustomerService";

export function ListContract() {
  const [contractList, setContractList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result1 = await contractService.findAllContract();
      const result2 = await productService.findAll();
      const result3 = await customerService.findAll();
      setContractList(result1); console.log(result1);
      setCustomerList(result3);console.log(result2);
      setProductList(result2);console.log(result3);
    };
    fetchApi();
  }, []);
  return (
    <>
      <section className="ftco-section ftc-no-pb ftc-no-pt">
        <div className="container">
          <div
            className="row mx-0"
            style={{ marginTop: 96, textAlign: "center" }}
          >
            <center>
              <img
                className="img-fluid px-0 "
                style={{ height: "25rem" }}
                src="https://cdn.azvd.asia/images/furama/draf1-2.jpg"
                alt=""
              />
            </center>
          </div>
          <div>
            <h2 className="text-center fw-bold pt-4">
              Danh Sách Tất Cả Các Hợp Đồng
            </h2>
          </div>
          <div>
            <Link className="ms-5 btn btn-dark" to={"/contract/create"}>
              Thêm Mới
            </Link>
          </div>
          <div className="row mx-0 mt-3 px-5 py-1">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã hợp đồng</th>
                  <th>Tên Khách hàng</th>
                  <th>Tên Dịch vụ</th>
                  <th>Ngày bắt đầu</th>
                  <th>Ngày kết thúc</th>
                  <th>Số tiền cọc trước</th>
                  <th>Tổng số tiền thanh toán</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {contractList.map((contract, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contract.code}</td>
                    <td>
                      {
                        customerList.find(
                          (customer) => contract.customerId === customer.id
                        )?.name
                      }
                    </td>
                    <td>
                      {
                        productList.find(
                          (product) => product.id === contract.roomId
                        )?.name
                      }
                    </td>
                    <td>{contract.dateStart}</td>
                    <td>{contract.dateEnd}</td>
                    <td>{contract.deposit}</td>
                    <td>{contract.totalMoney}</td>

                    <td>
                      <button className="btn btn-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/*Phân trang*/}
            <nav
              className="d-flex justify-content-center"
              aria-label="Page navigation example"
            >
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    style={{
                      border: "none",
                      backgroundColor: "#daeae9",
                      color: "#1d1d1c",
                    }}
                  >
                    Trước
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    style={{
                      border: "none",
                      backgroundColor: "#daeae9",
                      color: "#1d1d1c",
                    }}
                  >
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    style={{
                      border: "none",
                      backgroundColor: "#daeae9",
                      color: "#1d1d1c",
                    }}
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    style={{
                      border: "none",
                      backgroundColor: "#daeae9",
                      color: "#1d1d1c",
                    }}
                  >
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    style={{
                      border: "none",
                      backgroundColor: "#daeae9",
                      color: "#1d1d1c",
                    }}
                  >
                    Sau
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
