import { useFormik } from 'formik';
import * as YUP from 'yup';

import Input from './Input';

function Contact() {
  const initialValues = {
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    date:'',
  };


  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,

    validateOnMount: true,
    validationSchema: YUP.object({
      fullname: YUP.string()
        .required('fullname is required.')
        .min(2, 'must be at least 2 characters'),
        subject: YUP.string()
        .required('subject is required.')
        .min(2, 'must be at least 2 characters'),
        date: YUP.string()
        .required('date is required.')
        .min(2, 'must be at least 2 characters'),
      phone: YUP.number().required('phone is required.'),
      email: YUP.string().email().required('Email is required.'),
    }),

    onSubmit: (action) => {
      action.resetForm();
    }
  });


  return (
    <div className="container mx-auto h-[100vh]  text-[24px] text-black">
      <div className="  flex h-full w-full items-center   ">
        <div className="  mx-auto  w-[70%] rounded-[15px] border-[5px] border-green-400 ">
          <div className=" my-[20px] ml-[10px] w-full px-[10px] ">
            <h2
              style={{ textShadow: '-1px 2px 2px #AE8848' }}
              className="   mb-[8px] flex w-full justify-start pr-[15px] "
            >
              Contact
            </h2>

            <p className=" mx-auto mb-[8px] w-[98%] pl-[10px] pr-[15px] text-[15px]">
              Contact With Us
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto my-[30px]   flex w-[96%]  flex-col gap-[15px]  xs:gap-[20px] "
            >
              <Input
                errors={errors.fullname}
                touched={touched.fullname}
                id="fullname"
                labelVal="Full Name"
                inputVal={values.fullname}
                inputPlacholder="Enter Full Name"
                paraVal={errors.fullname}
                inputFunction={handleChange}
                type="text"
              />

              <Input
                errors={errors.email}
                touched={touched.email}
                id="email"
                labelVal="Email"
                inputVal={values.email}
                inputPlacholder="Enter Your Email"
                paraVal={errors.email}
                inputFunction={handleChange}
                type="email"
              />

              <Input
                errors={errors.phone}
                touched={touched.phone}
                id="phone"
                labelVal="Phone"
                inputVal={values.phone}
                inputPlacholder="Enter Your Phone"
                paraVal={errors.phone}
                inputFunction={handleChange}
                type="number"
              />

              <Input
                errors={errors.subject}
                touched={touched.subject}
                id="subject"
                labelVal="Subject"
                inputVal={values.subject}
                inputPlacholder="Enter Your Subject"
                paraVal={errors.subject}
                inputFunction={handleChange}
                type="text"
              />

              <Input
                errors={errors.subject}
                touched={touched.subject}
                id="date"
                labelVal="Date"
                inputVal={values.date}
                inputPlacholder="Enter Date"
                paraVal={errors.date}
                inputFunction={handleChange}
                type="date"
              />

              <div className=" flex w-full justify-center">
                <button
                  style={{
                    textShadow: '-1px 2px 2px rgba(0, 0, 0, 0.25)',
                    background: ' #005c5b'
                  }}
                  type="submit"
                  className=" rounded-[20px] px-[30px] py-[5px] text-[20px] text-white "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
