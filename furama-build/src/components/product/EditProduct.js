import React, { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import * as ProductService from "../../services/product-service/ProductService";
import * as TypeProduct from "../../services/product-service/TypeProduct";
import { useNavigate, Link, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

export function EditProduct() {
  let navigate = useNavigate();
  const param = useParams();
  const [roomTypes, setRoomType] = useState([]);
  const [rentTypes, setRentType] = useState([]);
  const [product, setProduct] = useState();
  

  useEffect(() => {
    async function fetchData() {
      const rs1 = await TypeProduct.getRentType();
      const rs2 = await TypeProduct.getRoomType();
      const result = await ProductService.findId(param.id);
      setRoomType(rs2);
      setRentType(rs1);
      setProduct(result);
    }
    fetchData();
  }, [param.id]);
  if (!product) {
    return null;
  }
  return (
    <Formik
      initialValues={{
        name: product?.name,
        area: product?.area,
        cost: product?.cost,
        maxPeople: product?.maxPeople,
        standardRoom: product?.standardRoom,
        description: product?.description,
        poolArea: product?.poolArea,
        numberOfFloors: product?.numberOfFloors,
        roomFree: product?.roomFree,
        rentType: product?.rentType,
        roomType: product?.roomType,
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
        roomType: Yup.number().required("Không được để trống"),
        rentType: Yup.number().required("Không được để trống"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values, setSubmitting);
        try {
          values.roomType = parseInt(values.roomType);
          values.rentType = parseInt(values.rentType);
          values.id = param.id;
          ProductService.update(values);
          setSubmitting(false);
          alert("Thanh cong");
          toast("Cập nhật thành công");
          navigate("/product/list");
        } catch (error) {
          toast("Cập nhật thất bại");
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <div className="container">
          <div className="p-3">
            <h2 className="text-center fw-bold">Product edit</h2>
            <nav className="navbar navbar-expand-lg py-0 my-0">
              <div className="container-fluid"></div>
            </nav>
          </div>

          <Form>
          <Field
                  type="hidden"
                  className="form-control"
                  name="id"
                />
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
                  as="select"
                  id="roomType"
                  className="form-control"
                  name="roomType"
                  // onChange={(event) => handleTypeChange(event.target.value)}
                >
                  <option value="0">Chọn loại phòng</option>
                  {roomTypes.map((type, index) => (
                    <option key={index} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </Field>
              </div>
              <div>
                <ErrorMessage
                  name="roomType"
                  component="span"
                  className="form-err text-danger"
                />
              </div>
            </div>

            <div className="mt-3 form-group">
              <label htmlFor="rentType" style={{ fontWeight: "bold" }}>
                Kiểu thuê:<span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group">
                <Field
                  as="select"
                  id="rentType"
                  className="form-control"
                  name="rentType"
                >
                  <option value="0">Chọn kiểu thuê</option>
                  {rentTypes.map((type, index) => (
                    <option key={index} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </Field>
              </div>
              <div>
                <ErrorMessage
                  name="rentType"
                  component="span"
                  className="form-err text-danger"
                />
              </div>
            </div>
            <div className="">
              {isSubmitting ? (
                <Oval
                  height={80}
                  width={80}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                <>
                  <button type="submit" className="btn btn-sm btn-success">
                    Cập nhật
                  </button>
                  <Link to="/product/list" className="btn btn-sm btn-primary ml-3">
                    Quay lại
                  </Link>
                </>
              )}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
