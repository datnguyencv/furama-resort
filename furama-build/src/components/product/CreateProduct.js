import React, { useState, useEffect } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import * as ProductService from "../services/product-service/ProductService";
import * as TypeProduct from "../services/product-service/TypeProduct";
import { useNavigate, Link } from "react-router-dom";

export function CreateProduct() {
  let navigate = useNavigate();
  const [typeRoom, setTypeRoom] = useState();
  const [typeRent, setTypeRent] = useState();
  const [roomTypes, setRoomType] = useState([]);
  const [rentTypes, setRentType] = useState([]);
  const handleTypeChange1 = (event) => {
    setTypeRoom(event);
  };
  const handleTypeChange2 = (event) => {
    setTypeRent(event);
  };
  useEffect(() => {
    async function fetchData() {
      setRoomType(await TypeProduct.getRoomType());
      setRentType(await TypeProduct.getRentType());
    }
    fetchData();
  }, []);

  return (
    <Formik
      initialValues={{
        name: "",
        area: "",
        cost: "",
        maxPeople: "",
        standardRoom: "",
        description: "",
        poolArea: "",
        numberOfFloors: "",
        roomFree: "",
        rentType: "",
        roomType: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Không được để trống"),
        area: Yup.number().required("Không được để trống"),
        cost: Yup.number().required("Không được để trống"),
        maxPeople: Yup.number().required("Không được để trống"),
        standardRoom: Yup.string().required("Không được để trống"),
        description: Yup.string().required("Không được để trống"),
        poolArea: Yup.number().required("Không được để trống"),
        numberOfFloors: Yup.number().required("Không được để trống"),
      })}
      onSubmit={async (values) => {
        values.roomType = parseInt(typeRoom);
        values.rentType = parseInt(typeRent);
        console.log(typeRent, typeRoom);
        await ProductService.create(values);
        alert("Thêm mới thành công");
        navigate("/product/list");
      }}
    >
      <div className="container">
        <div className="p-3">
          <h2 className="text-center fw-bold">Product create</h2>
          <nav className="navbar navbar-expand-lg py-0 my-0">
            <div className="container-fluid"></div>
          </nav>
        </div>

        <Form>
          <div className="form-group">
            <label htmlFor="name" style={{ fontWeight: "bold" }}>
              Tên:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                type="text"
                id="name"
                className="form-control"
                placeholder="Nhập tên"
                name="name"
              />
            </div>
            <div>
              <ErrorMessage
                name="name"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="area" style={{ fontWeight: "bold" }}>
              Diện tích:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                type="number"
                id="area"
                className="form-control"
                placeholder="Nhập diện tích"
                name="area"
              />
            </div>
            <div>
              <ErrorMessage
                name="area"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="cost" style={{ fontWeight: "bold" }}>
              Giá tiền:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                type="number"
                id="cost"
                className="form-control"
                placeholder="Nhập giá tiền"
                name="cost"
              />
            </div>
            <div>
              <ErrorMessage
                name="cost"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="maxPeople" style={{ fontWeight: "bold" }}>
              Số người tối đa:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                type="number"
                id="maxPeople"
                className="form-control"
                placeholder="Nhập số người tối đa"
                name="maxPeople"
              />
            </div>
            <div>
              <ErrorMessage
                name="maxPeople"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="standardRoom" style={{ fontWeight: "bold" }}>
              Tiêu chuẩn phòng:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                type="text"
                id="standardRoom"
                className="form-control"
                placeholder="Tiêu chuẩn phòng"
                name="standardRoom"
              />
            </div>
            <div>
              <ErrorMessage
                name="standardRoom"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="description" style={{ fontWeight: "bold" }}>
              Mô tả:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                type="text"
                id="description"
                className="form-control"
                placeholder="Nhập mô tả"
                name="description"
              />
            </div>
            <div>
              <ErrorMessage
                name="description"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="poolArea" style={{ fontWeight: "bold" }}>
              Diện tích hồ bơi:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                type="number"
                id="poolArea"
                className="form-control"
                placeholder="Nhập diện tích hồ bơi"
                name="poolArea"
              />
            </div>
            <div>
              <ErrorMessage
                name="poolArea"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="numberOfFloors" style={{ fontWeight: "bold" }}>
              Số tầng:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                type="number"
                id="numberOfFloors"
                className="form-control"
                placeholder="Nhập số tầng"
                name="numberOfFloors"
              />
            </div>
            <div>
              <ErrorMessage
                name="numberOfFloors"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="roomFree" style={{ fontWeight: "bold" }}>
              Dịch vụ miễn phí:
            </label>
            <div className="input-group">
              <Field
                type="text"
                id="roomFree"
                className="form-control"
                placeholder="Nhập dịch vụ miễn phí"
                name="roomFree"
              />
            </div>
            <div>
              <ErrorMessage
                name="roomFree"
                component="span"
                className="form-err text-danger"
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="roomType" style={{ fontWeight: "bold" }}>
              Loại dịch vụ:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                id="roomType"
                name="roomType"
                render={() => (
                  <select
                    className="form-control form-control-lg"
                    style={{ borderRadius: 5, width: "94%" }}
                    onChange={(event) => handleTypeChange1(event.target.value)}
                  >
                    {roomTypes.map((typeRoom, index) => (
                      <option key={index} value={typeRoom.id}>
                        {typeRoom.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="rentType" style={{ fontWeight: "bold" }}>
              Kiểu thuê:<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group">
              <Field
                id="rentType"
                name="rentType"
                render={() => (
                  <select
                    className="form-control form-control-lg"
                    style={{ borderRadius: 5, width: "94%" }}
                    onChange={(event) => handleTypeChange2(event.target.value)}
                  >
                    {rentTypes.map((typeRent, index) => (
                      <option key={index} value={typeRent.id}>
                        {typeRent.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="">
              <>
                <button type="submit" className="btn btn-primary btn-sm">
                  Thêm
                </button>
                <Link to="/product/list" className="btn btn-primary btn-sm">
                  Thoát
                </Link>
              </>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
}
