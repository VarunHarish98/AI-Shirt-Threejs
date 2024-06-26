import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import state from '../store'
import { CustomButton } from '../components'
const Home = () => {
    /*
    Custom Hook called as useSnapshot 
    snap is already subscribed and retrieves the changes 
    accordingly as it is already subscribed 
    */
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                //Animations attached to div and will slide from left
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src='./threejs.png'
                            alt='logo'
                            className='w-8 h-8 object-contain' />
                    </motion.header>
                    <motion.div className='home-content' {...
                        headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                LET'S <br className='xl:block hidden' /> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            {/* text-base - set to browser default base font size*/}
                            <p className='max-w-md font-normal text-gray-600 text-base'>Create your unique and exclusive shirt with our brand-new
                                3D customisation tool. <strong>Unleash our imagination</strong>
                                {" "} and define your own style.
                            </p>
                            <CustomButton 
                                type="filled"
                                title="Customize It"
                                handleClick = {() => state.intro = false}
                                customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>

            )}
        </AnimatePresence>
    )
}

export default Home
