import Styles from "./Project.module.css"
import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, animate } from 'framer-motion';
import { useScrollScrub } from "../../AnimationFunction/animate"
import { useWidthContext } from "../../App"
import YtBg from "../../assets/yt_bg.jpg"
import TaskBg from "../../assets/TaskBg.jpg"
import S_attendanceBg from "../../assets/S_attendanceBg.jpg"

let ProjectArr = [ 
    {
        no:1,
        img:YtBg,
        body:"I created a YouTube Clone using React to practice component-based design and API integration. The project includes core features like video browsing, search functionality, and responsive layouts, helping me strengthen my skills in React hooks, state management, and dynamic rendering while focusing on clean, user-friendly design.",
        link:"",
        name:"Clone App"
    }
    ,
    {
        no:2,
        img:TaskBg,
        body:"I am building a Task Manager application that focuses on simplicity and speed. Unlike traditional apps with multiple tabs or routing, this project is designed to work entirely through text-based input — users can add, update, or complete tasks just by typing, making the workflow fast and distraction-free. The project is still in development, but it highlights my focus on minimalist design and functional interactivity.",
        link:"https://Ayush-z090.github.io/deepTask-AI",
        name:"DeepTask"
    },
    {
        no:3,
        img:S_attendanceBg,
        body:"I developed a Student Attendance System that streamlines the process of marking attendance by using barcode scanning. Instead of relying on manual entry, students can quickly scan their unique barcode to register attendance, making the system both accurate and efficient. This project demonstrates my ability to integrate real-world functionality with web applications, focusing on automation, reliability, and ease of use.",
        link:"",
        name:"Attendance System"
    }
]

export default function Project(){


    return(
        <>
            <div className={Styles.Project_container}>
                <h1>Projects</h1>
                <div className={Styles.Card_Container}>
                    {ProjectArr.map((data, idx)=> (
                        <ProjectCardWrap
                            key={data.no}
                            idx={idx}
                            image={data.img}
                            link={data.link}
                            bodyText={data.body}
                            name={data.name}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

function ProjectCardWrap({ idx, image, bodyText, link,name }){
    const card = useScrollScrub({
        fromY: 80,
        toY: 0,
        outY: -80,
        fromOpacity: 0,
        toOpacity: 1,
        outOpacity: 0,
        enterCompleteAt: "30%",
        reverseStartAt: "55%",
        styObj:{height:"100%"}
    });
    return (
        <motion.div
        
        {...card}>
            <ProjectCard image={image} link={link} bodyText={bodyText} name={name}/>
        </motion.div>
    );
}

function ProjectCard({ image, bodyText ,link,name}) {
    
    const [showBack, setShowBack] = useState(false);
    const rotateY = useMotionValue(0);
    const [hovered, setHovered] = useState(false);
    
    let {widthLimitReach} = useWidthContext()

    // Track the rotation value and update showBack state
    useEffect(() => {
        const unsubscribe = rotateY.on("change", (latest) => {
            // Normalize and decide which face to show
            const normalized = parseDegrees(latest);
            setShowBack(normalized > 90 && normalized < 270);
        });
        
        return () => unsubscribe();
    }, [rotateY]);

    // Animate rotation based on hover using MotionValue (prevents hover loss loop)
    useEffect(() => {
        const controls = animate(rotateY, hovered ? 180 : 0, {
            type: "spring",
            duration: 1,
            damping: 15,
            mass: 3
        });
        return () => controls.stop();
    }, [hovered, rotateY]);
    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <motion.div 
                onClick={(e)=>  console.log(e.target)}
                style={{ 
                    rotateY,
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center',
                    willChange: 'transform',
                    boxShadow: hovered ? "0px 0px 14px 0px" : undefined
                }}
                className={Styles.Project_Box}
            >
            {/* Front side */}
            <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                backfaceVisibility: 'hidden',
                opacity: showBack ? 0 : 1,
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.5rem"

            }}>
                <div className={Styles.ImgBody}>
                    <p href={link}>{name}</p>
                    <img src={image} alt="#" />
                </div>
                <p
                style={widthLimitReach ? {height:"35%"}:{}}
                >{bodyText}</p>
            </div>
            
            {/* Back side */}
            <div style={{ 
                transform: 'rotateY(180deg)',
                backfaceVisibility: showBack ?undefined :'hidden',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: showBack ? 1 : 0,
            }}>
                <div className={Styles.backConent_Container}>
                    {/* Your back content here */}
                    <motion.a
                    whileHover={{
                        backgroundColor:"var(--color-bg-)",
                        color:"var(--color-text-00-)",
                        textShadow:"0px 0px 10px ",
                        transition:{
                            duration:.4,
                            type:"spring",
                            damping:"1",
                            mass:"3"

                        },
                        
                    }}
                    href={link}>click</motion.a>
                </div>
            </div>
            </motion.div>
        </div>
    );
}

function parseDegrees(input) {
    if (typeof input === 'number' && !isNaN(input)) {
        return ((input % 360) + 360) % 360;
    }
    if (typeof input === 'string') {
        const match = input.match(/-?\d+(?:\.\d+)?/);
        if (match) {
            const value = parseFloat(match[0]);
            return ((value % 360) + 360) % 360;
        }
    }
    return 0;
}