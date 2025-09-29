import { useForm } from "react-hook-form";
import "./styles/signup.css";

type FormValues = {
  name: string;
  surname: string;
};

export default function Signup() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section id="form">
      <form onSubmit={handleSubmit(onSubmit)} className="Signup">
        <div>
          <label htmlFor="name">Nom :</label>
          <input {...register("name")} type="text" name="name" id="name" required />
          <label htmlFor="surname">Prénom :</label>
          <input {...register("surname")} type="text" name="surname" id="surname" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
