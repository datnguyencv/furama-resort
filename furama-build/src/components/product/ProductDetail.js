import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ProductService from "../../services/product-service/ProductService";

export function ProductDetail() {
  const param = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await ProductService.findId(param.id);
      setProduct(result);
      console.log(result);
    }
    fetchData();
  }, [param.id]);
  if (!product) {
    return null;
  }

  return (
    <div className="container">
      <center>
        <h1 className="m-3">Room Detail</h1>
      </center>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Room Information</h5>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-rulers"></i>
                  Area: {product.area} sqm
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-cash"></i>
                  Cost: ${product.cost}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-people"></i>
                  Max People: {product.maxPeople}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-card-checklist"></i>
                  Standard Room: {product.standardRoom}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-info-circle"></i>
                  Description: {product.description}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-pool"></i>
                  Pool Area: {product.poolArea} sqm
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-building"></i>
                  Number of Floors: {product.numberOfFloors}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-door-open"></i>
                  Room Free: {product.roomFree}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-currency-dollar"></i>
                  Rent Type: {product.rentType}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-door-closed"></i>
                  Room Type: {product.roomType}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <i className="bi bi-card-list"></i>
                  ID: {product.id}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + '/images/room-1.jpg'} className="d-block w-100" alt="Room 1" />
          </div>
          <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + '/images/room-2.jpg'} className="d-block w-100" alt="Room 2" />
          </div>
          <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + '/images/room-3.jpg'} className="d-block w-100" alt="Room 3" />
          </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
