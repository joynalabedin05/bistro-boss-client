import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";


const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading='Whats new' heading='Add an Item'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name" {...register("name", {required: true, maxLength: 80})} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select  {...register("category", { required: true })} className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Pizza</option>
                        <option>Salad</option>
                        <option>Soup</option>
                        <option>Desserts</option>
                        <option>Drinks</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" placeholder="Type here"  {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea  {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image</span>                      
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />           
                </div>
                <input className="btn btn-small scroll-mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;