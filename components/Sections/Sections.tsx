import gsap from 'gsap';
import React, {Suspense, useCallback, useEffect, useRef, useState} from 'react'
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {header} from "@/pages";
import Mercury from "@/components/Planets/Mercury/Mercury";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Sun from "@/components/Planets/Sun/Sun";


// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import Venus from "@/components/Planets/Venus/Venus";
import Earth from "@/components/Planets/Earth/Earth";
import Mars from "@/components/Planets/Mars/Mars";
import Jupiter from "@/components/Planets/Jupiter/Jupiter";
import Saturn from '../Planets/Saturn/Saturn';
import Uranus from '../Planets/Uranus/Uranus';
import Neptune from '../Planets/Neptune/Neptune';
SwiperCore.use([Pagination]);

function Sections() {

    // SLIDER SETTINGS
    const sliderRef = useRef<SwiperCore>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);

    const [activeSlide, setActiveSlide] = useState(1);


    return (
        <div className='relative'>
            <div className="products__header-icons absolute top-[80%] flex justify-between text-white w-[100vw] z-20">
                <div className="icon absolute left-20">
                    <BsArrowLeftCircle onClick={handlePrev} className='text-2xl cursor-pointer transition duration-300 hover:text-red-500' />
                </div>

                <div className="icon absolute right-20">
                    <BsArrowRightCircle  onClick={handleNext} className='text-2xl cursor-pointer transition duration-300 hover:text-red-500' />
                </div>
            </div>

        <div className='h-[90vh] w-[90%] mx-auto flex justify-center items-center relative'>
            {/*@ts-ignore*/}
            <Swiper ref={sliderRef}
                    spaceBetween={50}
                    slidesPerView={1}
                    className='h-full w-full'
                    centeredSlides={true}
                    autoplay={{ delay: 2000 }}
                    navigation={false}
                    onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
                    breakpoints={{
                        500: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
            >

                <SwiperSlide>

                <div className="relative h-full w-full">
                    <div className='h-[60vh]'>
                        <Canvas>
                            <Suspense>
                                <Sun/>
                                <OrbitControls autoRotate={true} enableZoom={false}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    {activeSlide=== 0 && ''}
                    <div className="relative object-cover text-white">
                        <div className="text-center w-full h-full overlay">
                            <h1 style={header.style}
                                className='text-7xl'>
                                Sun
                            </h1>
                            <h3> Our Natural Home </h3>
                        </div>

                    </div>

                </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <div className='h-[60vh]'>
                            <Canvas>
                                <Suspense>
                                    <Mercury/>
                                    <OrbitControls/>
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="relative object-cover text-white">
                            <div className="text-center w-full h-full overlay">
                                <h1 style={header.style}
                                    className='text-7xl'>
                                    Mercury
                                </h1>
                                <h3>Our Natural Home</h3>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <div className='h-[60vh]'>
                            <Canvas>
                                <Suspense>
                                    <Venus/>
                                    <OrbitControls/>
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="relative object-cover text-white">
                            <div className="text-center w-full h-full overlay">
                                <h1 style={header.style}
                                    className='text-7xl'>
                                    Venus
                                </h1>
                                <h3>Our Natural Home</h3>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <div className='h-[60vh]'>
                            <Canvas>
                                <Suspense>
                                    <Earth/>
                                    <OrbitControls/>
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="relative object-cover text-white">
                            <div className="text-center w-full h-full overlay">
                                <h1 style={header.style}
                                    className='text-7xl'>
                                    Earth
                                </h1>
                                <h3>Our Natural Home</h3>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <div className='h-[60vh]'>
                            <Canvas>
                                <Suspense>
                                    <Mars/>
                                    <OrbitControls/>
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="relative object-cover text-white">
                            <div className="text-center w-full h-full overlay">
                                <h1 style={header.style}
                                    className='text-7xl'>
                                    Mars
                                </h1>
                                <h3>Our Natural Home</h3>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <div className='h-[60vh]'>
                            <Canvas>
                                <Suspense>
                                    <Jupiter/>
                                    <OrbitControls/>
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="relative object-cover text-white">
                            <div className="text-center w-full h-full overlay">
                                <h1 style={header.style}
                                    className='text-7xl'>
                                    Jupiter
                                </h1>
                                <h3>Our Natural Home</h3>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <div className='h-[60vh]'>
                            <Canvas>
                                <Suspense>
                                    <Saturn/>
                                    <OrbitControls/>
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="relative object-cover text-white">
                            <div className="text-center w-full h-full overlay">
                                <h1 style={header.style}
                                    className='text-7xl'>
                                    Saturn
                                </h1>
                                <h3>Our Natural Home</h3>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <div className='h-[60vh]'>
                            <Canvas>
                                <Suspense>
                                    <Uranus/>
                                    <OrbitControls/>
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="relative object-cover text-white">
                            <div className="text-center w-full h-full overlay">
                                <h1 style={header.style}
                                    className='text-7xl'>
                                    Uranus
                                </h1>
                                <h3>Our Natural Home</h3>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <div className='h-[60vh]'>
                            <Canvas>
                                <Suspense>
                                    <Neptune/>
                                    <OrbitControls/>
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="relative object-cover text-white">
                            <div className="text-center w-full h-full overlay">
                                <h1 style={header.style}
                                    className='text-7xl'>
                                    Neptune
                                </h1>
                                <h3>Our Natural Home</h3>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>


        </div>
        </div>

    );
}

export default Sections;