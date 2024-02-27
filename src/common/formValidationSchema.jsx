import * as yup from "yup";

export const formSchema = yup.object().shape({
  BusinessName: yup.string().required("Business name is a required field"),
  BusinessStructure: yup.string().required(),
  BusinessStructureDescription: yup.string().when(["BusinessStructure"], {
    is: "Other",
    then: (formSchema) =>
      formSchema
        .required("A description is required for business structure 'Other'")
        .max(100, "Maximum length allowed is 100 characters"),
  }),
  ABN: yup
    .string()
    .matches(/^[0-9]+$/, "ABN must be a number")
    .length(11, "ABN must be 11 digits in length")
    .required("ABN must be a number of 11 digits long"),
  FirstName: yup.string().required("First name is a required field"),
  Surname: yup.string().required(),
  Email: yup.string().email().required(),
  DOB: yup.date().required("DOB is a required field"),
  Password: yup
    .string()
    .min(4)
    .required("Password is required. Minimum length is 4 characters"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords don't match")
    .required(),
});
