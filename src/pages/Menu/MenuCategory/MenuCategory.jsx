import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return(
        <div className="py-12">
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className="grid grid-cols-2 gap-10 mt-16">
                {
                    items.map(item=> <MenuItem
                    item={item}
                    key={item._id}
                    ></MenuItem> )
                }               
            </div>
           <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button></Link>
        </div>
    )
   
};

export default MenuCategory;