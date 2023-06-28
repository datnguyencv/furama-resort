import { Link } from "react-router-dom";

export function ListContract() {
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
                  <th>Ngày bắt đầu</th>
                  <th>Ngày kết thúc</th>
                  <th>Số tiền cọc trước</th>
                  <th>Tổng số tiền thanh toán</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>SV-0001</td>
                  <td>06/07/2023</td>
                  <td>22/07/2023</td>
                  <td>100.000.000</td>
                  <td>1.000.000.000</td>

                  <td>
                    <button className="btn btn-danger btn-sm">Xóa</button>
                  </td>
                </tr>
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
