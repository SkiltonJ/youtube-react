import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(6).max(20).required(),
    confirmPassword: yup.oneOf([yup.ref("password"), null]).required()
  })

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Full Name" {...register("fullName")}></input>
        <input placeholder="Email" {...register("email")}></input>
        <input placeholder="Age" {...register("age")}></input>
        <input type="password" placeholder="Password" {...register("password")}></input>
        <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}></input>
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}
