import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registerPageSchema = z.object({
  firstName: z.string().min(3, "Name too short. Cannot be less than 3 words.").max(15,"Name is too long. Cannot be more than 15 characters."),
  lastName: z.string().min(5).optional().or(z.literal('')),
  email: z.email("Give in email format"),
  gender: z.enum(["Male", "Female", "Others"], "Must Select"),
  course: z.array(z.string()).min(1, "Choose at least One"),
  phoneNumber: z.e164("Start with country code"),
  terms: z.literal(true, "Accept the terms and condition"),
  // .string()
  // .regex(/^\d+$/, "Phone number must contain only digits")
  // .length(10, "Phone number must be exactly 10 digits"),
  password: z.string().min(8, "Password must be more than 8 characters.")
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(registerPageSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-800">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white text-gray-700 px-20 py-10 rounded-xl shadow-lg shadow-black">
        <h1 className="text-slate-800 underline text-2xl">
          Registration Form:
        </h1>
        <div className="flex flex-col mb-2">
          <label htmlFor="firstname">First Name:</label>
          <input
            className="w-full border border-gray-700 rounded-md h-10 px-3"
            {...register("firstName")}
            placeholder="Enter Your Name"
          />
          <p className="text-red-500 mt-1">{errors.firstName?.message}</p>

          <label htmlFor="lastName">Last Name:</label>
          <input
            className="w-full border border-gray-700 rounded-md h-10 px-3"
            {...register("lastName")}
            placeholder="Enter Your Name"
          />
          <p className="text-red-500 mt-1">{errors.lastName?.message}</p>


          <label htmlFor="email">Email:</label>
          <input
            className="w-full border border-gray-700 rounded-md h-10 px-3"
            {...register("email")}
            placeholder="Email Address"
          />
          <p className="text-red-500 mt-1">{errors.email?.message}</p>

          <label htmlFor="gender">Gender:</label>
          <select
            {...register("gender")}
            id="gender"
            className="w-full border border-gray-700 rounded-md h-10 px-3 bg-white"
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <p className="text-red-500 mt-1">{errors.gender?.message}</p>

          <div className="flex flex-col">
          <label htmlFor="course">Courses :</label>
          <input {...register("course")} value="react" type="checkbox" />React
          <input {...register("course")} value="css"  type="checkbox" />CSS
          <input {...register("course")} value="tailwind"  type="checkbox" />Tailwind
          <input {...register("course")} value="js"  type="checkbox" />JS
          <input {...register("course")} value="html"  type="checkbox" />HTML
          <p className="text-red-500 mt-1">{errors.course?.message}</p>
          </div>

          <label htmlFor="tel">Phone No.:</label>
          <input
            className="w-full border border-gray-700 rounded-md h-10 px-3"
            type="tel"
            {...register("phoneNumber")}
            placeholder="Enter Phone Number"
          />
          <p className="text-red-500 mt-1">{errors.phoneNumber?.message}</p>

          <label htmlFor="password">Password:</label>
          <input
            className="w-full border border-gray-700 rounded-md h-10 px-3"
            type="password"
            {...register("password")}
            placeholder="Enter Your Password"
          />
          <p className="text-red-500 mt-1">{errors.password?.message}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <input className="mr-2 " type="checkbox"  {...register("terms")}/>
            <p className="text-red-500 mt-1">{errors.terms?.message}</p>
            <label htmlFor="condition">
              Terms and Condition. 
              <span className="text-blue-600 hover:text-blue-400 hover:cursor-pointer">
                Read More
              </span>
            </label>
          </div>
          <div>
            <button type="onSubmit" className="w-100 bg-slate-800 text-white h-10 rounded-md hover:bg-slate-600 hover:cursor-pointer mb-4 px-10">
              CREATE ACCOUNT
            </button>
          </div>
          <div>
            Already have an account?
            <Link to="/auth/login"><span className="text-blue-600 hover:text-blue-400 hover:cursor-pointer">
              Sign In
            </span></Link>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Register;


