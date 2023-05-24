import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return(
        <div className="pt-12">
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
        </div>
    )
   
};

export default MenuCategory;