import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, {  useEffect, useState } from "react";
import * as ProductService from "../../services/product-service/ProductService";
import * as customerService from "../../services/customer-service/CustomerService";
import * as contractService from "../../services/contract-service/ContractService";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CreateContract() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [customerList, setCustomerList] = useState([]);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formattedToday = format(today, "yyyy-MM-dd");
  const formattedTomorrow = format(tomorrow, "yyyy-MM-dd");

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
      <div className="row d-flex justify-content-center align-items-center h-100 m-4">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <h2 className="text-center fw-bold">Thêm mới hợp đồng</h2>
          <Formik
            initialValues={{
              code: "",
              customerId: "",
              roomId: "",
              dateStart: formattedToday,
              dateEnd: formattedTomorrow,
              deposit: "",
              totalMoney: "",
            }}
            validationSchema={Yup.object({
              code: Yup.string()
                .required("Mã hợp đồng không được để trống")
                .matches(
                  new RegExp("^CO-[0-9]{3}$"),
                  "Nhập đúng định dạng. Vd: CO-001"
                ),
              dateStart: Yup.date()
                .required("Ngày đặt phòng không được để trống")
                .min(new Date(), "Ngày đặt phòng phải lớn hơn ngày hiện tại"),
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
                .min(500, "Tiền đặt cọc tối thiểu 500$"),
            })}
            onSubmit={(values, { resetForm }) => {
              const createContract = async () => {
                await contractService.saveContract({
                  ...values,
                  customerId: +values.customerId,
                  roomId: +values.roomId,
                });
                resetForm();
                toast("Thêm mới thành công")
                navigate("/contract/list");
              };
              createContract();
            }}
          >
            <Form>
              <div className="form-outline mb-4">
                <label className="form-label">Mã hợp đồng</label>
                <span className="text-danger">*</span>
                <Field
                  className="form-control form-control-lg"
                  id="form3Example1cg"
                  type="text"
                  name="code"
                />
              </div>
              <ErrorMessage name="code" component="span" className="form-err" />
              <div>
                <label className="form-label">Mã khách hàng</label>
                <span className="text-danger">*</span>
                <Field
                  className="form-control form-control-lg"
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
                  name="roomId"
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
                <label className="form-label">Ngày đặt phòng</label>
                <span className="text-danger">*</span>
                <Field
                  className="form-control form-control-lg"
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
                <label className="form-label">Ngày trả phòng phòng</label>
                <span className="text-danger">*</span>
                <Field
                  className="form-control form-control-lg"
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
              <div className="form-outline mb-4">
              <label className="form-label">Tông số tiền thanh toán</label>
              <span className="text-danger">*</span>
              <Field
                className="form-control form-control-lg"
                id="form3Example1cg"
                type="number"
                name="totalMoney"
              />
            </div>

              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-success btn-block btn-sm gradient-custom-4 text-body"
                  type="submit"
                >
                  Thêm mới
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
