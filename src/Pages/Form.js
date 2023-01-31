import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// export const Form = () => {
//   const schema = yup.object().shape({
//     fullName: yup.string().required("Your full name is required"),
//     email: yup.string().email().required("This must be a correct email style"),
//     age: yup.number().positive().integer().min(18).required("Age must be 18 or over"),
//     password: yup.string().min(6).max(20).required("Password must be greater than 6 characters and less than 20"),
//     confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
//   })

//   const { register, handleSubmit, formState: {errors} } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   }
//   return (
//     <div>
//       <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleSubmit(onSubmit)}>
//         <input placeholder="Full Name" {...register("fullName")}></input>
//         <p className="error">{errors.fullName?.message}</p>
//         <input placeholder="Email" {...register("email")}></input>
//         <p className="error">{errors.email?.message}</p>
//         <input type="number" placeholder="Age" {...register("age")}></input>
//         <p className="error">{errors.age?.message}</p>
//         <input type="password" placeholder="Password" {...register("password")}></input>
//         <p className="error">{errors.password?.message}</p>
//         <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}></input>
//         <p className="error">{errors.confirmPassword?.message}</p>
//         <button type="Submit">Submit</button>
//       </form>
//     </div>
//   )
// }
