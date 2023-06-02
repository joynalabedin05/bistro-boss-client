
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item=>item.category==='popular')
    
    return (
        <section className="mb-12">
            <SectionTitle
                 subHeading='from our menu'
                 heading='popular items'
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    popular.map(item=> <MenuItem
                    item={item}
                    key={item._id}
                    ></MenuItem> )
                }               
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-5 text-center">Order now</button>
        </section>
    );
};

export default PopularMenu;