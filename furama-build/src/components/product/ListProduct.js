import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ProductService from "../services/product-service/ProductService";
import * as TypeProduct from "../services/product-service/TypeProduct";
import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [roomTypes, setRoomType] = useState([]);
  const [rentTypes, setRentType] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setRoomType(await TypeProduct.getRoomType());
      setRentType(await TypeProduct.getRentType());
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      let result = await ProductService.findAll();
      setProducts(result);
      console.log(result);
    };

    fetchProducts();
  }, []);
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
              {products.map((roomIs, temp) => (
                <div key={temp} className="col-sm col-md-6 col-lg-4">
                  <div className="room">
                    <a
                      href="rooms.html"
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
                        <a href="rooms.html">{roomIs.name}</a>
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
                        <a href="/" className="btn-custom">
                          View Room Details{" "}
                          <span className="icon-long-arrow-right" />
                          <button className="btn btn-sm btn-primary">
                            <Link
                              className="icon-edit"
                              style={{ textDecoration: "none", color: "white" }}
                              to={`/product/edit/${roomIs.id}`}
                            ></Link>
                          </button>
                          <Button className="btn btn-sm btn-danger icon-delete"></Button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
      <center>
        <h1 className="text-center fw-bold">Product List</h1>
      </center>
      <Link to="/product/create">
        <button className="btn btn-sm btn-primary">Create Product</button>
      </Link>

      <table
        id="productTable"
        className="table table-light table-striped table-bordered"
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
          {products.map((value, index) => (
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
                  rentTypes.filter((values) => values.id === value.rentType)[0]
                    ?.name
                }
              </td>
              <td>
                {roomTypes.filter((val) => val.id === value.roomType)[0]?.name}
              </td>
              <td>
                <button className="icon-edit">
                  <Link
                    style={{ textDecoration: "none" }}
                    className="btn-sm"
                    to={`/product/edit/${value.id}`}
                  ></Link>
                </button>
              </td>
              <td>
                <Button className="icon-delete"></Button>
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
              href="/#"
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
              href="/#"
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
              href="/#"
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
              href="/#"
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
              href="/#"
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
      <ToastContainer />;
    </>
  );
}

