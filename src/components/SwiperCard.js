import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import directorsData from '../data/director-data';
import managementData from '../data/management-data';
import TeamCard from './TeamCard';
import '../styles/SwiperCard.css'

import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cube'


export default ({board}) => {

    const boardType = () => {
        if (board == 'director') {
            return (
                <>
                    {directorsData.map((data) => {
                        return (
                            <SwiperSlide>
                                <TeamCard 
                                pic={data.pic}
                                name={data.name}
                                pos={data.pos} />
                            </SwiperSlide>
                        )
                    })}
                </>
            )
        }
        else {
            return (
                <>
                    {managementData.map((data) => {
                        return (
                            <SwiperSlide>
                                <TeamCard 
                                pic={data.pic}
                                name={data.name}
                                pos={data.pos} />
                            </SwiperSlide>
                        )
                    })}
                </>
            )
        }
    }

    console.log(board)

    return (
        <Swiper
            className='swiper-container'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={'auto'}
            centeredSlides={false}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                320: {
                    width: 640,
                    slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
            }}
        >
            {boardType()}
        </Swiper>
    );
};