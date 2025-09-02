import Styles from "./HomeAbout.module.css"
import { motion } from "framer-motion"
import { useScrollScrub } from "../../AnimationFunction/animate"
import { useWidthContext } from "../../App"






let p_1 = (<>
<p>Hi, I’m Ayush 👋 —I am a passionate developer with a strong foundation in JavaScript, Python, and know C, and C#, and over a year of hands-on experience in web programming. My primary focus is on front-end development, where I enjoy creating interactive, user-friendly, and visually appealing interfaces. I believe that a great front-end is not just about design but also about crafting smooth experiences that keep users engaged.
                </p>
                <p>
                    Beyond front-end work, I have explored Python development for backend and continue to expand my skills in web functionality. I enjoy building features that enhance usability and make applications more dynamic. My curiosity drives me to continuously learn and experiment with new tools and techniques to ensure I can deliver modern, efficient solutions.
                </p>
                <p>
                    Currently, I am diving into Machine Learning (ML) and its integration with web applications. My goal is to bridge the gap between websites, apps, and artificial intelligence, enabling smarter, more adaptive platforms. With this knowledge, I aim to create solutions that are not only interactive but also intelligent, paving the way for innovative projects that merge programming with AI-driven insights.
                </p>
</>)



export default function HomeAbout(){

    let {widthLimitReach} = useWidthContext()

    let p_0= <p
style={widthLimitReach ?
    {fontSize:".78rem",
        margin:"1rem 0",
        lineHeight:"1.2"}:{}}
> a passionate developer with a strong foundation in JavaScript, Python, C, and C#. I focus on creating interactive, user-friendly front-end interfaces and also explore backend development with Python. I'm currently diving into Machine Learning to build intelligent, adaptive web applications that bridge AI with modern solutions.
</p>

    const left = useScrollScrub(
        { fromX: -100, toX: 0, outX: -240, offsetStart: "start 95%", offsetEnd: "end 2%",enterCompleteAt: widthLimitReach ? .1 : undefined, spring: { stiffness: 80, damping: 24 } ,
        
            styObj: {
                height: widthLimitReach ? "fit-content" : undefined,
                display: widthLimitReach ? "block" : undefined
            }
        }
        
    );




    const right = useScrollScrub(
        { fromX: 200, toX: 0, outX: 200, offsetStart: "start 95%", offsetEnd: "end 2%",enterCompleteAt: widthLimitReach ?.1 : undefined, spring: { stiffness: 80, damping: 24 } ,

            styObj: {
                height: widthLimitReach ? "12rem" : undefined,
                width: widthLimitReach ? "10rem" : undefined,
                display: widthLimitReach ? "block" : undefined,
            }
        }
    );
    return(<>
        <div 
        style={widthLimitReach ?
        {
            height:"fit-content",
            padding:"3rem 0 3rem 0"
        }:{}}
        className={Styles.About_container} id="About">
            <motion.div
            style={widthLimitReach ?{color:"red"}:{}}
            {...left}
            className={Styles.Left_Container}>
                <h1 
                style={widthLimitReach ?{fontSize:"2rem"}:{}}>hello I'am</h1>
                {widthLimitReach ? p_0 : p_1}
            </motion.div>
            <motion.div
            {...right}
            className={Styles.Right_Container}>
                <div
                style={widthLimitReach ?{borderRadius:"50%"}:{}}
                className={Styles.ImgContainer}>
                    <img src="" alt="#" />
                </div>
            </motion.div>
        </div>
    </>)
}

