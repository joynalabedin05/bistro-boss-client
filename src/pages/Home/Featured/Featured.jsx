import SectionTitle from "../../../components/sectionTitle/SectionTitle";

import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div>
            <SectionTitle
                 subHeading='Check it out'
                 heading='Featured items'
            ></SectionTitle>
            <div>
                <div>
                    <img src={featuredImg} alt="" />

                </div>
                <div>
                    <p>Aug 20, 2023</p>
                    <p className=""></p>
                </div>
            </div>
        </div>
    );
};

export default Featured;