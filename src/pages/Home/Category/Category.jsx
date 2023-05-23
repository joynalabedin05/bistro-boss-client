import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/sectionTitle/SectionTitle";


const Category = () => {
    return (
        <section>
            <SectionTitle 
                 subHeading={'from 11.00pm to 10.00 am'}
                 heading={'Order Online'}
            >              
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-14"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-3xl text-center uppercase -mt-14 text-white">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-3xl text-center uppercase -mt-14 text-white">pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-3xl text-center uppercase -mt-14 text-white">soop</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-3xl text-center uppercase -mt-14 text-white">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-3xl text-center uppercase -mt-14 text-white">Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;