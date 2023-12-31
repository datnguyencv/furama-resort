import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ProductService from "../../services/product-service/ProductService";
import * as TypeProduct from "../../services/product-service/TypeProduct";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, Form, Formik } from "formik";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [roomTypes, setRoomType] = useState([]);
  const [rentTypes, setRentType] = useState([]);
  const [productById, setProductById] = useState([]);

  //Phan Trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      setRoomType(await TypeProduct.getRoomType());
      setRentType(await TypeProduct.getRentType());
    }
    fetchData();
  }, []);

  const fetchProducts = async () => {
    let result = await ProductService.findAll();
    setProducts(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //Delete
  const handleDelete = async () => {
    await ProductService.remove(productById?.id);
    toast ("Delete successful");
    fetchProducts();
  };
  const getData = async (id) => {
    const data = await ProductService.findById(id);
    setProductById(data);
  };

  //Phan Trang
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center">
                <h2 className="mb-4">Our Rooms</h2>
              </div>
            </div>
            <div className="row">
              <Formik
                initialValues={{
                  name: "",
                  roomType: "",
                }}
                onSubmit={(value) => {
                  const fetchProducts = async () => {
                    let rs = await ProductService.findNameAndRoomType(
                      value.name,
                      value.roomType
                    );
                    setProducts(rs);
                  };
                  fetchProducts();
                }}
              >
                <div className="col-5">
                  <Form>
                    <div className="form-group">
                      <Field
                        type="text"
                        className="form-control float-start w-50"
                        name="name"
                        placeholder="Tìm kiếm..."
                      />
                      <Field
                        as="select"
                        name="roomType"
                        id="roomType"
                        className="form-select w-25 d-inline"
                      >
                        <option value={""}>Lựa chọn</option>
                        {roomTypes?.map((value, index) => (
                          <option key={index} value={value.id}>
                            {value.name}
                          </option>
                        ))}
                      </Field>
                      <button type="submit" className="btn btn-primary">
                        Tìm kiếm
                      </button>
                    </div>
                  </Form>
                </div>
              </Formik>
              <div className="col-4"></div>
              <div className="col-3">
                <Link to="/product/create">
                  <button className="btn btn-sm btn-primary flex-fill">
                    Create Product
                  </button>
                </Link>
              </div>
            </div>

            <div className="row">
              {currentProducts.map((roomIs, temp) => (
                <div key={temp} className="col-sm col-md-6 col-lg-4">
                  <div className="room">
                    <a
                      href={`/product/detail/${roomIs.id}`}
                      className="img d-flex justify-content-center align-items-center"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/room-1.jpg)`,
                      }}
                    >
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-search2" />
                      </div>
                    </a>
                    <div className="text p-3 text-center">
                      <h3 className="mb-3">
                        <a href={`/product/detail/${roomIs.id}`}>
                          {roomIs.name}
                        </a>
                      </h3>
                      <p>
                        <span className="price mr-2">{roomIs.cost}</span>{" "}
                        <span className="per">
                          {
                            rentTypes.filter(
                              (values) => values.id === roomIs.rentType
                            )[0]?.name
                          }
                        </span>
                      </p>
                      <hr />
                      <p className="pt-1">
                        <a
                          href={`/product/detail/${roomIs.id}`}
                          className="btn-custom"
                        >
                          View Room Details
                          <span className="icon-long-arrow-right" />
                        </a>
                      </p>
                      <button className="btn btn-sm btn-primary mr-2">
                        <Link
                          className="icon-edit"
                          style={{ textDecoration: "none", color: "white" }}
                          to={`/product/edit/${roomIs.id}`}
                        ></Link>
                      </button>
                      <Button
                        className="btn btn-sm btn-danger icon-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => getData(roomIs.id)}
                      ></Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
      <div className="container">
        <center>
          <h1 className="text-center fw-bold">Product List</h1>
        </center>

        <table
          id="productTable"
          className="table table-light table-striped table-bordered table-responsive"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Area</th>
              <th>Cost</th>
              <th>Max people</th>
              <th>Standard</th>
              <th>Description</th>
              <th>Pool area</th>
              <th>Number of Floors</th>
              <th>Product Free</th>
              <th>Rent type</th>
              <th>Product type</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody align="center">
            {currentProducts.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.area}</td>
                <td>{value.cost}</td>
                <td>{value.maxPeople}</td>
                <td>{value.standardRoom}</td>
                <td>{value.description}</td>
                <td>{value.poolArea}</td>
                <td>{value.numberOfFloors}</td>
                <td>{value.roomFree}</td>
                <td>
                  {
                    rentTypes.filter(
                      (values) => values.id === value.rentType
                    )[0]?.name
                  }
                </td>
                <td>
                  {
                    roomTypes.filter((val) => val.id === value.roomType)[0]
                      ?.name
                  }
                </td>
                <td>
                  <button className="btn btn-primary icon-edit">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="btn-sm"
                      to={`/product/edit/${value.id}`}
                    ></Link>
                  </button>
                </td>
                <td>
                  <Button
                    className="icon-delete btn-danger"
                    onClick={() => getData(value.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  ></Button>

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
                          <span>Bạn có muốn xóa sản phẩm </span>
                          <span className="err"> {productById?.name} </span>
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
      </div>
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
      <ToastContainer />;
    </>
  );
}
