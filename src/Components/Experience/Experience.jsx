import { PointsCard } from "../SkillsDetail/SkillsDetail"
import { motion } from "framer-motion"
import { useScrollScrub } from "../../AnimationFunction/animate"
import Styles from "./Experience.module.css"


let ExpArr = [
    {
        no:1,
        head:"Intenship",
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, saepe sed sunt commodi illo praesentium aliquid ratione dolorem? "
    },
    {
        no:2,
        head:"Intenship",
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, saepe sed sunt commodi illo praesentium aliquid ratione dolorem? "
    }
]

export default function Experience(){
    const left = useScrollScrub({ fromX: -180, toX: 0, outX: -180, enterCompleteAt: "30%", reverseStartAt: "55%" });
    const right = useScrollScrub({ fromX: 180, toX: 0, outX: 180, enterCompleteAt: "30%", reverseStartAt: "55%" });
    return(
        <>
            <div className={Styles.Experience_body}>
                <motion.div {...left} className={Styles.Left_Body }>
                    <div className={Styles.ImgBody}>
                        <img src="" alt="#" />
                    </div>
                </motion.div>
                <motion.div {...right} className={Styles.Right_Body}>
                    <h1>This is My work</h1>
                    <div className={Styles.List_container}>
                           {ExpArr.map((data, idx)=> (
                                <ExperienceItem
                                    key={"p02-" + data.no}
                                    idx={idx}
                                    head={data.head}
                                    body={data.body}
                                />
                           ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

function ExperienceItem({ idx, head, body }){
    const item = useScrollScrub({
        fromX: idx % 2 === 0 ? 100 : -100,
        toX: 0,
        outX: idx % 2 === 0 ? 100 : -100,
        fromOpacity: 0,
        toOpacity: 1,
        outOpacity: 0,
        enterCompleteAt: "28%",
        reverseStartAt: "58%",
    });
    return (
        <motion.div {...item}>
            <PointsCard 
                sno={ListMarker}
                sty={{alignItems:"start",justifyContent:"initial",gap:"1rem",width:"100%",margin:"2rem 0"}}
                head={head} body={body}/>
        </motion.div>
    );
}

let ListMarker = (
<div 
style={{
    margin:"10px",
    width:"2rem",
    height:'2rem',
    borderRadius:"50%",
    backgroundColor:"var(--color-text-03-)"
}}
></div>)