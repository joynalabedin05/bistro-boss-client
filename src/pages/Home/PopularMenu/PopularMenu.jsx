import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category==='popular')
            setMenu(popularItems)})
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
                 subHeading='from our menu'
                 heading='popular items'
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    menu.map(item=> <MenuItem
                    item={item}
                    key={item._id}
                    ></MenuItem> )
                }
            </div>
        </section>
    );
};

export default PopularMenu;