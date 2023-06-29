import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as contractService from "../../services/contract-service/ContractService";
import * as productService from "../../services/product-service/ProductService";
import * as customerService from "../../services/customer-service/CustomerService";

export function ListContract() {
  const [contractList, setContractList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [contractById, setContractById] = useState({});

  //Phan Trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchApi = async () => {
    const result1 = await contractService.findAllContract();
    const result2 = await productService.findAll();
    const result3 = await customerService.findAll();
    setContractList(result1);
    setCustomerList(result3);
    setProductList(result2);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const handleDelete = async () => {
    await contractService.remove(contractById?.id);
    fetchApi();
  };
  const getData = async (id) => {
    const data = await contractService.findById(id);
    setContractById(data);
  };

  //Phan Trang
  const totalPages = Math.ceil(contractList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContract = contractList.slice(startIndex, endIndex);

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
                {currentContract.map((contract, index) => (
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
                      <button
                        onClick={() => getData(contract.id)}
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Xóa
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Delete action ~!
                              </h5>
                            </div>
                            <div className="modal-body">
                              <span>Bạn có muốn xóa hợp đồng </span>
                              <span className="err">
                                {" "}
                                {contractById?.code}{" "}
                              </span>
                              <span>không?</span>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                data-bs-dismiss="modal"
                              >
                                Huỷ
                              </button>
                              <button
                                onClick={() => handleDelete()}
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-dismiss="modal"
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <nav
              className="d-flex justify-content-center"
              aria-label="Page navigation example"
            >
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "d-none" : ""}`}
                  onClick={() =>
                    currentPage !== 1 && handlePageChange(currentPage - 1)
                  }
                >
                  <button
                    className="page-link mr-2"
                    style={{
                      border: "none",
                      backgroundColor: "#daeae9",
                      color: "#1d1d1c",
                    }}
                  >
                    Trước
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      i + 1 === currentPage ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    <button
                      className="page-link mr-3"
                      style={{
                        border: "none",
                        backgroundColor: "#daeae9",
                        color: "#1d1d1c",
                      }}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "d-none" : ""
                  }`}
                  onClick={() =>
                    currentPage !== totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                >
                  <button
                    className="page-link"
                    style={{
                      border: "none",
                      backgroundColor: "#daeae9",
                      color: "#1d1d1c",
                    }}
                  >
                    Sau
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
