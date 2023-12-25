import "./navbar.scss"
import { motion } from "framer-motion"


import React from 'react'
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">            

            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    Igor Dev</motion.span>


                <motion.div className="social"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>

                    <img src="/facebook.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <img src="/youtube.png" alt="" />
                </motion.div>
            </div>

        </div>
    )
}

export default Navbar