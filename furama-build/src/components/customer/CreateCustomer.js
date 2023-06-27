import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as customerService from "../../services/customer-service/CustomerService";

function CreateCustomer() {
  const navigate = useNavigate();
  const [type, setType] = useState();
  const [typeCustomerList, setTypeCustomerList] = useState([]);
  const handleTypeChange = (event) => {
    setType(event);console.log(event, type);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const result = await customerService.customerType();
      setTypeCustomerList(result);
    };
    fetchApi();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          gender: "",
          age: "",
          phoneNumber: "",
          address: "",
          customerTypeId: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Không được để trống")
            .min(2, "độ dài ký tự phải từ 2 trở lên"),
          age: Yup.number().required("Không được để trống"),
          phoneNumber: Yup.string()
            .required("Không được để trống")
            .min(10, "số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số")
            .max(
              12,
              "số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số"
            ),
          address: Yup.string().required("Không được để trống"),
        })}
        onSubmit={(values, { resetForm }) => {
          const createCus = async () => {
            values.customerTypeId = parseInt(type);
            await customerService.createCustomer(values);
            resetForm();
            navigate("/customer/list");
          };
          createCus();
        }}
      >
        <Form>
          <center>
            <h1 className="text-center fw-bold" style={{textAlign: "center"}}>Create Customer</h1>
          </center>
          <div className="mb-3">
            <label htmlFor="name">
              Name: <span style={{ color: "red" }}>*</span>
            </label>
            <Field type="text" className="form-control" id="name" name="name" />
            <ErrorMessage name="name" component="span" className="form-err" />
          </div>
          <div className="mb-3">
            <label htmlFor="age">
              Age: <span style={{ color: "red" }}>*</span>
            </label>

            <Field type="text" className="form-control" id="age" name="age" />
            <ErrorMessage name="age" component="span" className="form-err" />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Giới tính:<span style={{ color: "red" }}>*</span>
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
              Phone Number <span style={{ color: "red" }}>*</span>
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
              Address <span style={{ color: "red" }}>*</span>
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
          <label htmlFor="customerType">
            Loại khách hàng: <span style={{ color: "red" }}>*</span>
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
                {typeCustomerList.map((type, index) => (
                  <option key={index} value={type?.id}>
                    {type?.name}
                  </option>
                ))}
              </select>
            )}
          />
          <div className="d-flex justify-content-center">
            <button className="btn btn-success btn-sm text-body" type="submit">
              Tạo mới
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default CreateCustomer;
