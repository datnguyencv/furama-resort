import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import * as customerService from "../../services/customer-service/CustomerService";

function EditCustomer() {
  const navigate = useNavigate();
  const [type, setType] = useState();
  const [customer, setCustomer] = useState();
  const [typeCustomerList, setTypeCustomerList] = useState([]);
  const param = useParams();
  const handleTypeChange = (event) => {
    setType(event);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const result = await customerService.customerType();
      const findCustomer = await customerService.customerById(param.id);
      setTypeCustomerList(result);
      setCustomer(findCustomer);
      setType(findCustomer?.customerTypeId);
    };
    fetchApi();
  }, [param.id]);
  if (!customer) {
    return null;
  }
  return (
    <>
      <Formik
        initialValues={{
          name: customer?.name,
          gender: customer?.gender,
          age: customer?.age,
          phoneNumber: customer?.phoneNumber,
          address: customer?.address,
          customerTypeId: type.name,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Không được để trống")
            .min(2, "độ dài ký tự phải từ 2 trở lên")
            .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/, 'Tên phải đúng theo định dạng không có số, các ký tự đàu tiên của mỗi từ phải viết hoa'),
          age: Yup.number().required("Không được để trống")
          .min('Tuổi phải lớn hơn 18'),
          phoneNumber: Yup.string()
            .required("Không được để trống")
            .min(10, "số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số")
            .max(
              12,
              "số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số")
        })}
        onSubmit={(values, { resetForm }) => {
          const updateCus = async () => {
            values.customerTypeId = parseInt(type);
            await customerService.updateCustomer(customer.id, values);
            alert("Updated thanh cong");
            resetForm();
            navigate("/customer/list");
          };
          updateCus();

          console.log(values);
        }}
      >
        <Form>
          <center>
            <h1 className="text-center fw-bold" style={{ textAlign: "center" }}>
              Edit Customer
            </h1>
          </center>
          <div className="mb-3">
            <label htmlfor="name">
              Name: <span>*</span>
            </label>
            <Field type="text" className="form-control" id="name" name="name" />
            <ErrorMessage name="name" component="span" className="form-err" />
          </div>
          <div className="mb-3">
            <label htmlfor="age">
              Age: <span>*</span>
            </label>

            <Field type="text" className="form-control" id="age" name="age" />
            <ErrorMessage name="age" component="span" className="form-err" />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Giới tính:
            </label>
            <div>
              <label>
                <Field type="radio" name="gender" value="Nam" />
                Nam
              </label>
            </div>
            <div>
              <label>
                <Field type="radio" name="gender" value="Nữ" />
                Nữ
              </label>
            </div>
            <ErrorMessage
              component="span"
              name="gender"
              className="error-flag"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber">
              {" "}
              Phone Number <span>*</span>
            </label>

            <Field
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
            />
            <ErrorMessage
              name="phoneNumber"
              component="span"
              className="form-err"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address">
              {" "}
              Address <span>*</span>
            </label>

            <Field
              type="text"
              className="form-control"
              id="address"
              name="address"
            />
            <ErrorMessage
              name="address"
              component="span"
              className="form-err"
            />
          </div>
          <label htmlfor="customerType">
            Loại khách hàng: <span>*</span>
          </label>
          <Field
            className="form-control form-control-lg"
            id="form3Example1cg"
            type="text"
            name="customerTypeId"
            render={() => (
              <select
                className="form-control form-control-lg"
                style={{ borderRadius: 5, width: "94%" }}
                onChange={(event) => handleTypeChange(event.target.value)}
              >
                {typeCustomerList.map((typeCustomer, index) => (
                  <option key={index} value={typeCustomer?.id}>
                    {typeCustomer?.name}
                  </option>
                ))}
              </select>
            )}
          />
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
              type="submit"
            >
              Cập nhật
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default EditCustomer;
