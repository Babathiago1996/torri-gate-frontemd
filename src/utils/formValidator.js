import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number is not valid")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const propertySchema = Yup.object().shape({
  propertyName: Yup.string().required("Property name is required"),
  description: Yup.string().required("Description is required"),
  location: Yup.string().required("Location is required"),
  rooms: Yup.string().required("Number of rooms is required"),
  livingRooms: Yup.string().required("Number of living rooms is required"),
  toilets: Yup.string().required("Number of toilets is required"),
  kitchens: Yup.string().required("Number of kitchens is required"),
  price: Yup.string().required("Price is required"),
  paymentPeriod: Yup.string().required("Payment period is required"),
});
