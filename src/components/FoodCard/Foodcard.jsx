
const Foodcard = ({item}) => {
    const {name, image, recipe, price} = item;
    const handleAddToCart = (item)=>{
        console.log(item)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute right-0 px-2 rounded mr-4 mt-4 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200 border-orange-400">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;