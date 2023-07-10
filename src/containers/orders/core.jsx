import { ConvertDateToMiladi } from "../../layouts/admin/utils/ConvertDate";
import { Alert } from "../../layouts/admin/utils/alert";
import { addNewOrderService } from "../../services/orders";
import * as Yup from "yup";

export const initialValues = {
  cart_id: "",
  discount_id: "",
  delivery_id: "",
  address: "",
  phone: "",
  email: "",
  pay_at: "",
  pay_card_number: "",
  pay_bank: "",
};

export const onSubmit = async (values, actions, navigate, handleGetOrders) => {
  values = {
    ...values,
    pay_at: values.pay_at ? ConvertDateToMiladi(values.pay_at) : null,
  };
  const res = await addNewOrderService(values);
  if (res.status === 201) {
    Alert("انجام شد", res.data.message, "success");
    navigate(-1);
    handleGetOrders();
  }
};

export const validationSchema = Yup.object().shape({
  cart_id: Yup.number()
    .typeError("فقط عدد وارد کنید")
    .required("لطفا این قسمت را پر کنید"),
  discount_id: Yup.number().typeError("فقط عدد وارد کنید"),
  delivery_id: Yup.number()
    .typeError("فقط عدد وارد کنید")
    .required("لطفا این قسمت را پر کنید"),
  address: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  phone: Yup.number()
    .typeError("فقط عدد وارد کنید")
    .required("لطفا این قسمت را پر کنید"),
  email: Yup.string().email("فرمت ایمیل را رعایت کنید"),
  pay_at: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[0-9/ \s-]+$/, "فقط ازاعداد و خط تیره استفاده شود"),
  pay_card_number: Yup.number().typeError("فقط عدد وارد کنید"),
  pay_bank: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
});
