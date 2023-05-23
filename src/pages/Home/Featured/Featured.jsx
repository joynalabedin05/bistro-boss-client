import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import './Featured.css'

import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-items text-white pt-7 my-20">
            <SectionTitle
                 subHeading='Check it out'
                 heading='Featured items'
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-36 pt-10 pb-32">
                <div>
                    <img src={featuredImg} alt="" />

                </div>
                <div className="ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase"> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quod incidunt molestiae quos consectetur fugiat vitae. Inventore voluptas sapiente, molestiae commodi error fuga aliquam autem nostrum quos, dolorum tempore temporibus doloremque quidem odio sint veritatis excepturi aut consectetur natus! Id?</p>
                    <button className="btn btn-outline">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;