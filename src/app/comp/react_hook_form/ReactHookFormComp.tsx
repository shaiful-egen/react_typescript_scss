import * as React from "react";
import {useForm} from "react-hook-form";

class FormData {
  id: string = '';
  name: string = '';
}

export default function ReactHookFormComp() {

  const {register, setValue, handleSubmit, formState: {errors}} = useForm<FormData>();

  const onSubmit = handleSubmit((data: FormData) => console.log(data));

  return (
    <form>
      <label>First Name</label>
      <input {...register("id")} />
      <label>Last Name</label>
      <input {...register("name")} />

      <button type="button" onClick={onSubmit}>SetValue</button>
    </form>
  );
}
