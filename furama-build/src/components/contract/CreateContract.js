import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import * as ProductService from "../../services/product-service/ProductService";
import * as customerService from "../../services/customer-service/CustomerService";
import * as contractService from "../../services/contract-service/ContractService";
import { useNavigate } from "react-router-dom";

export function CreateContract() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result1 = await ProductService.findAll();
      const result2 = await customerService.findAll();
      setCustomerList(result2);
      setProductList(result1);
    };
    fetchApi();
  }, []);
  return (
    <>
      <Formik
        initialValues={{
          idContract: "",
          customerId: "[]",
          productId: "[]",
          startDate: "",
          endDate: "",
          deposit: "",
          totalMoney: "",
        }}
        validationSchema={Yup.object({
          idContract: Yup.string().required("Mã hợp đồng không được để trống"),
          dateStart: Yup.date().required("Ngày đặt phòng không được để trống"),
          dateEnd: Yup.date()
            .required("Ngày trả phòng không được để trống")
            .when("dateStart", (dateStart, schema) => {
              return schema.min(
                dateStart,
                "Ngày trả phòng phải bằng hoặc sau ngày đặt phòng"
              );
            }),
          deposit: Yup.number()
            .required("Tiền đặt cọc không được để trống")
            .positive("Tiền đặt cọc phải là số dương"),
        })}
        onSubmit={(values, { resetForm }) => {
          const createContract = async () => {
            await contractService.saveContract(values);
            console.log(values);
            resetForm();
            navigate("/contract/list");
          };
          createContract();
        }}
      >
        {
            <div className="row d-flex justify-content-center align-items-center h-100 m-4">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <h2 className="text-center fw-bold">Thêm mới hợp đồng</h2>
                <Form>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1cg">
                      Mã hợp đồng
                    </label>
                    <span className="text-danger">*</span>
                    <Field
                      className="form-control form-control-lg"
                      id="form3Example1cg"
                      type="text"
                      name="idContract"
                    />
                  </div>
                  <ErrorMessage
                    name="idContract"
                    component="span"
                    className="form-err"
                  />
                  <div>
                    <label className="form-label">Mã khách hàng</label>
                    <span className="text-danger">*</span>
                    <Field
                      className="form-control form-control-lg"
                      id="form3Example1cg"
                      name="customerId"
                      as="select"
                    >
                      {customerList.map((customer, index) => (
                        <option key={index} value={customer.id}>
                          {customer?.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label className="form-label">Mã dịch vụ</label>
                    <span className="text-danger">*</span>
                    <Field
                      className="form-control form-control-lg"
                      id="form3Example1cg"
                      name="productId"
                      as="select"
                    >
                      {productList.map((product, index) => (
                        <option key={index} value={product.id}>
                          {product?.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3cg">
                      Ngày đặt phòng
                    </label>
                    <span className="text-danger">*</span>
                    <Field
                      className="form-control form-control-lg"
                      id="form3Example3cg"
                      type="date"
                      name="dateStart"
                    />
                  </div>
                  <ErrorMessage
                    name="dateStart"
                    component="span"
                    className="form-err"
                  />

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3cg">
                      Ngày trả phòng phòng
                    </label>
                    <span className="text-danger">*</span>
                    <Field
                      className="form-control form-control-lg"
                      id="form3Example3cg"
                      type="date"
                      name="dateEnd"
                    />
                  </div>
                  <ErrorMessage
                    name="dateEnd"
                    component="span"
                    className="form-err"
                  />
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4cdg">
                      Tiền đặt cọc
                    </label>
                    <span className="text-danger">*</span>
                    <Field
                      className="form-control form-control-lg"
                      id="form3Example4cdg"
                      type="number"
                      name="deposit"
                    />
                  </div>
                  <ErrorMessage
                    name="deposit"
                    component="span"
                    className="form-err"
                  />

                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-success btn-block btn-sm gradient-custom-4 text-body"
                      type="submit"
                    >
                      Thêm mới
                    </button>
                  </div>
                </Form>
              </div>
            </div>
        }
      </Formik>
    </>
  );
}
