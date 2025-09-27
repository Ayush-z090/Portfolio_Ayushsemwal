import { motion, useTransform, useScroll, transform } from "framer-motion"
import Navbar from "../../Components/Navbar/Navbar"
import Styles from "./Home.module.css"
import { useEffect, useRef, useState } from "react"
import { AnimationDisplacement, AnimationOpacity, AnimationDisplacmentPart2 } from "../../AnimationFunction/animate"
import HomeAbout from "../../Components/HomeAbout/HomeAbout"
import SkillsDetail from "../../Components/SkillsDetail/SkillsDetail"
import Experience from "../../Components/Experience/Experience"
import Project from "../../Components/Projects/Project"
import Footer from "../../Components/Footer/Footer"
import VidEffect from "../../assets/Video/vid2.mp4"
import { useWidthContext } from "../../App"
import "../../index.css"
import PortfolioLogo from "../../assets/logo.png"


    let DisPlaec_transition = {
        duration:"4",
        ease:["easeIn","easeOut"],
        type:"spring",
        stiffness:10,
        mass:8,
        damping:12,
    }

    let Opace_transition = {
        duration:1.5,
        ease:"easeInOut"
    }
 




export default function Home(){
let { scrollYProgress } = useScroll();
let VideoRef = useRef(null);
let [isWinLoad_timeStamp1, setLoad] = useState(false);
let [isWinLoad_timeStamp2, setLoad2] = useState(false);
let [isWinLoad_timeStamp0,setLoad3] = useState(false)
let {widthLimitReach} = useWidthContext()
// video time
const videoTime = useTransform(scrollYProgress, [0, 1], [0, 1]);

useEffect(() => {
  function runTimers() {
    console.log("enter2");
    const timer1 = setTimeout(() => setLoad2(true), 1800);
    const timer2 = setTimeout(() => setLoad(true), 3000);
    const timer0 = setTimeout(() => {
      setLoad3(true)

    }, 800);

    return () => {
      clearTimeout(timer0)
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }

  if (document.readyState === "complete") {
    // Page is already fully loaded
    return runTimers();
  } else {
    window.addEventListener("load", runTimers);
    return () => {
      window.removeEventListener("load", runTimers);
    };
  }
}, []);


useEffect(() => {
  const video = VideoRef.current;

  // pause video
  video.pause();

  // Remove window.onload and use useEffect instead

  

  let current = 0;
  let target = 0;
  let rafId;

  const unsubscribe = videoTime.on("change", (latest) => {
    if (video.duration) {
      target = latest * video.duration; // update target frame only
    }
  });

  const tick = () => {
    if (video.duration) {
      // Smooth interpolation toward target
      current += (target - current) * 0.1; // adjust 0.1 → smaller = smoother/slower
      video.currentTime = current;
    }
    rafId = requestAnimationFrame(tick);
  };

  tick(); // start loop

  return () => {
    unsubscribe();
    cancelAnimationFrame(rafId);
  };
}, [videoTime]);



    return(
        <>
        <Loader winload={isWinLoad_timeStamp0} winload2 ={isWinLoad_timeStamp1}/>
        <motion.div 
        initial={
          {"--beforeHeight":"50dvh",
            "--afterHeight":"50dvh",
            "--beforeBox_shadow":"0 0 0 0",
            "--afterBox_shadow" : "0 0 0 0",
            }}
        animate={isWinLoad_timeStamp2 ? 
          {"--beforeHeight":widthLimitReach ? "1dvh":"5dvh",
            "--afterHeight": widthLimitReach ? "1dvh" : "3dvh",
            "--beforeBox_shadow":"0px 10px 30px 5px",
            "--afterBox_shadow" : "0px -10px 30px 5px",
            transition:{duration:widthLimitReach ?3 :4}}
             : {}}
        
        className={Styles.background_effect_}>
            <motion.video 

            
            initial={{
              "--videoFilter" : "brightness(1) blur(0px)"
            }}
            animate={{
               "--videoFilter" : `brightness(${widthLimitReach ? ".34" : ".6"}) blur(${widthLimitReach ? "0px" : "0.3px"})`
            }}
            ref={VideoRef}
            src={VidEffect} autoPlay muted ></motion.video>
        </motion.div>
        <div 
        style={widthLimitReach ? 
          {
            height:"fit-content"
          } : {}}
        className={Styles.Body_container}
        id="Home"
        >
            
            <Navbar D_transition={DisPlaec_transition} O_transition={Opace_transition} animatecondtion = {isWinLoad_timeStamp1}/>

            {widthLimitReach ? "" : <motion.div 
            {...AnimationOpacity(Opace_transition,isWinLoad_timeStamp1)}
            {...AnimationOpacity(Opace_transition,isWinLoad_timeStamp1)}
            className={Styles.second_Heading}>

                <motion.p 
                {...AnimationDisplacement(DisPlaec_transition,-4,0,isWinLoad_timeStamp1)}
                className="p">TURNING CODE INTO BEAUTIFUL EXPERIENCES</motion.p>
                <motion.p 
                {...AnimationDisplacement(DisPlaec_transition,4,0,isWinLoad_timeStamp1)}
                className="p">INNOVATIVE WEB SOLUTIONS FOR THE FUTURE</motion.p>

            </motion.div>}

            <Main_body isWinLoad={isWinLoad_timeStamp1} width_Limit={widthLimitReach}/> 
            <motion.div
            {...AnimationOpacity(Opace_transition,isWinLoad_timeStamp1)}
            className={Styles.Click_detailsHeading}>
                <motion.p
                style={widthLimitReach ? 
                  {
                    color:"var(--color-text-01-)",
                    border:"none",
                    fontSize:".8rem",
                    paddingL:".3rem .5rem",
                    margin:0,
                    letterSpacing:".2px",
                    padding:".6rem",
                    textAlign:"left"

                  }: {}}
                {...AnimationDisplacmentPart2(
                  DisPlaec_transition,
                  widthLimitReach ? {trans:0,left:0} : {trans:0,left:0} ,
                  widthLimitReach ? {trans:0,left:0}  : {trans:-50,left:50} ,isWinLoad_timeStamp1)}

                className={Styles.EmptyBody}>A passionate developer crafting creative, and user-friendly experiences.
                </motion.p>


                {widthLimitReach ? "" : <motion.p
                
                {...AnimationDisplacmentPart2(
                  DisPlaec_transition,
                  {trans:0,right:0},
                  {trans:50,right:50},
                  isWinLoad_timeStamp1)}
                
                className={Styles.TextBody}>A passionate developer crafting creative, and user-friendly experiences.
                </motion.p>}
            </motion.div>
        </div>
        {
          isWinLoad_timeStamp2 ? 
          <>
            <HomeAbout/>
            <SkillsDetail/>
            {/* <Experience/> */}
            <Project/>
            <Footer/>
          </> : ""
        }
        </>
    )

}


function Main_body({isWinLoad,width_Limit}){
  return(
    <>
    <motion.main
            style={width_Limit ? {
              justifyContent:"center",
              gap:0
            }:{}}   
            {...AnimationOpacity(Opace_transition,isWinLoad)}
            className={Styles.main_container}>
                 <motion.h1

                    {...AnimationDisplacement(
                      DisPlaec_transition,
                      -4,
                      width_Limit ? 0 : 10,
                      isWinLoad)}
                 >
                    { width_Limit ? "Where design meets functionality - < Front-end Developer >" : "Design"}
                 </motion.h1>

                 {width_Limit? "" : <motion.h1
                 {...AnimationOpacity(Opace_transition,isWinLoad)}
                 initial={{transform:"translate3d(2, 0, 0)"}}
                 animate={isWinLoad ? {transform:"translate3d(-18vw, -1.8vw, 0px)"} : {}}
                 transition={DisPlaec_transition}
                 > Create</motion.h1>}
            </motion.main>

    </>
  )
}


                 
function Loader({winload,winload2}){
  return(
    <>
      <motion.div
      initial={
        {
          opacity:0,
          zIndex:1
        }
      }
      animate={winload ? {opacity:0} : {opacity:1}}
      transition={{duration: 1, ease:"easeInOut"}
      
    }
      style={{display:winload2 ? "none":undefined}}
      className={Styles.loader}>
        <img
        style={{height:"clamp(2rem, 11vw, 25rem)"}}
        src={PortfolioLogo} alt="#" />
        <h1>Portfolio</h1>
      </motion.div>
    </>
  )
}