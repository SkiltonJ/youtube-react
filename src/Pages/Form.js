import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Form = () => {
  const { register, handleSubmit } = useForm();

  const schema =

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
