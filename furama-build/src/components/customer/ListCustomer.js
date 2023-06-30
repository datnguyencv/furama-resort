import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as customerService from "../../services/customer-service/CustomerService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ListCustomer() {
  const [customers, setCustomers] = useState([]);
  const [customerTypes, setCustomerType] = useState([]);
  const [customerById, setCustomerById] = useState([]);
  //Phan Trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const getCustomerType = async () => {
    const result = await customerService.customerType();
    setCustomerType(result);
  };

  const getCustomer = async () => {
    const result = await customerService.findAll();
    setCustomers(result);
  };
  useEffect(() => {
    getCustomer();
    getCustomerType();
  }, []);

  //Delete
  const handleDelete = async () => {
    await customerService.remove(customerById?.id);
    toast('Delete successful')
    getCustomer();
  };
  const getData = async (id) => {
    const data = await customerService.customerById(id);
    setCustomerById(data);
  };

  //Phan Trang
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCustomers = customers.slice(startIndex, endIndex);

  return (
    <>
    <div className="container">
      <center>
        <div>
          <h1 className="text-center fw-bold">Customer List</h1>
        </div>
      </center>
      <NavLink to="/customer/create">
        <button className="btn btn-primary btn-sm">Thêm Mới</button>
      </NavLink>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên khách hàng</th>
            <th>Giới Tính</th>
            <th>Tuổi</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Loại khách hàng</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {currentCustomers.map((customerList, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{customerList.name}</td>
              <td>{customerList.gender}</td>
              <td>{customerList.age}</td>
              <td>{customerList.phoneNumber}</td>
              <td>{customerList.address}</td>
              <td>
                {
                  customerTypes.filter(
                    (customerType) =>
                      customerType.id === customerList.customerTypeId
                  )[0]?.name
                }
              </td>
              <td>
                <Link
                  to={`/customer/edit/${customerList.id}`}
                  className="btn btn-primary btn-sm"
                  type="button"
                >
                  Cập nhật
                </Link>
              </td>
              <td>
                <button
                  onClick={() => getData(customerList.id)}
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
                        <h5 className="modal-title" id="exampleModalLabel">
                          Delete action ~!
                        </h5>
                      </div>
                      <div className="modal-body">
                        <span>Bạn có muốn xóa</span>
                        <span className="err"> {customerById?.name} </span>
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
              className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
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
              currentPage !== totalPages && handlePageChange(currentPage + 1)
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
      <ToastContainer />;
    </>
  );
}

export default ListCustomer;
