import { motion } from "framer-motion"
import Styles from "./Navbar.module.css"
import { AnimationDisplacement, AnimationOpacity,OnHoverAnimation } from "../../AnimationFunction/animate"
import { useState,useEffect } from "react"
import { useWidthContext } from "../../App"
import PortfolioLogo from "../../assets/logo.png"


export default function Navbar({D_transition,O_transition,animatecondtion}){

    let {widthLimitReach} = useWidthContext()
    let [navState,setState] = useState(false)

    useEffect(()=>{
        addEventListener("scroll",()=>{
            if (window.scrollY >= 80) setState(true)
            else setState(false)
        })
    },[])

    let navSty = navState ? {position:"fixed",top:"-25px",left:0,zIndex:4, background:"rgb(0,0,0,0.6)"} : {}

    return(
        <>
            <motion.nav   
            {...AnimationOpacity(O_transition,animatecondtion)}
            className={Styles.Navbar_container}
            style={widthLimitReach ? {boxSizing:"border-box",padding:"0 1rem"} :{navSty,...{}}}
            >
                <motion.h3
                style={widthLimitReach ? 
                    {
                        fontSize:"1rem",

                    }: {}}
                {...AnimationDisplacement(D_transition,-2,0,animatecondtion)}
                >Ayush semwal</motion.h3>
                <motion.div 
                className={Styles.Link_part} 
                {...AnimationDisplacement(D_transition,2,0,animatecondtion)}>
                    {widthLimitReach ? <img style={{height:"45%"}} src={PortfolioLogo}/> :<><a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="">Contact</a></>}
                </motion.div>
            </motion.nav>
        </>
    )
}

