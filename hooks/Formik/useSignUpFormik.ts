import * as yup from 'yup';
import { useFormik } from 'formik';

export type ISignUpFormikValues = {
  mobile_phone: string;
  password: string;
  email: string | null;
  username: string;
};

export const useSignUpForm = (
  submitHandler: (values: ISignUpFormikValues) => void,
) => {
  const validateSchema = yup.object({
    mobile_phone: yup.string().required('!شماره تماس را وارد کنید').default('').length(11,'شماره تلفن باید 11 رقم باشد'),
    password: yup.string().required('!رمز عبور را وارد کنید').default('').min(8,'رمز عبور باید حداقل 8 کارکتر داشته باشد'),
    email: yup
      .string()
      .email('ایمیل نامعتبر است!')
      .required('ایمیل را وارد کنید!')
      .nullable()
      .default(null),
    username: yup.string().required('!نام کاربری را وارد کنید').default('').min(4,'نام کاربری باید حداقل 4 کارکتر داشته باشد'),
  });

  return useFormik({
    initialValues: validateSchema.getDefault() as ISignUpFormikValues,
    validateOnChange: false,
    validationSchema: validateSchema,
    onSubmit: submitHandler,
  });
};
