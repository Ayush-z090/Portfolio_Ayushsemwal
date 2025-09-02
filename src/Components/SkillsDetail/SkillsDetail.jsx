import Styles from './SkillDetail.module.css'
import { motion } from "framer-motion"
import { useScrollScrub } from "../../AnimationFunction/animate"
import { useWidthContext } from "../../App"


let detailsArr = [
  {
    no: 1,
    head: "Creative & Problem-Solving",
    body: "Able to think outside the box while solving design and development challenges strategically."
  },
  {
    no: 2,
    head: "Frontend Development",
    body: "Skilled in crafting responsive, user-friendly websites using HTML, CSS, JavaScript. ,React"
  },
  {
    no: 3,
    head: "Continuous Learning",
    body: "Always exploring new technologies and frameworks to improve development skills."
  },
  {
    no: 4,
    head: "Collaboration & Communication",
    body: "Strong ability to work in teams, share ideas effectively, and deliver results on time."
  }
];


export default function SkillsDetail(){

    const {widthLimitReach} = useWidthContext()
    
    const section = useScrollScrub({ fromOpacity: 0, toOpacity: 1, outOpacity: 0, fromX: 0, toX: 0, outX: 0, enterCompleteAt: "28%", reverseStartAt: "58%" ,styObj:{height:widthLimitReach ? "fit-content" : undefined} });
    return(
        <>
            <motion.div {...section} className={Styles.Skills_Info_Container}>
                <h1>Skills & tools</h1>
                <div
                style={widthLimitReach ? 
                    {
                        flexDirection:"column",
                        gap:0
                    }:{}}
                className={Styles.Points_container}>
                    {detailsArr.map((dataObj, idx) => (
                        <CardScrubWrap
                            key={"wrap-" + dataObj.no}
                            idx={idx}
                            sno={dataObj.no}
                            head={dataObj.head}
                            body={dataObj.body}
                        />
                    ))}
                </div>
            </motion.div>
        </>
    )
}

function CardScrubWrap({ idx, sno, head, body }){
    const cardMotion = useScrollScrub({
        fromX: idx % 2 === 0 ? -120 : 120,
        toX: 0,
        outX: idx % 2 === 0 ? -120 : 120,
        fromOpacity: 0,
        toOpacity: 1,
        outOpacity: 0,
        enterCompleteAt: "30%",
        reverseStartAt: "55%",
    });
    return (
        <motion.div {...cardMotion}>
            <PointsCard sno={sno} head={head} body={body}/>
        </motion.div>
    );
}

function PointsCard({sno,head,body,sty = {}}){


    const {widthLimitReach} = useWidthContext()
    return(
        <>
            <div
            style={widthLimitReach ? 
                {
                    width:"100%",
                    justifyContent:"initial",
                    alignItems:"initial",
                    gap:"1.2rem",
                    
                }:{}}
            className={Styles.Card} >
               { typeof sno === "number" ?  <h1 style={widthLimitReach ? {fontSize:"2.5rem"}: {}} > 0{sno} </h1>: sno}
                <div 
                style={widthLimitReach ?
                    {
                        width:"fit-content",
                        justifyContent:"initial",
                        gap:".5rem",
                        minHeight:"6rem"
                    }:{}
                }
                className={Styles.detailsBody}>
                    <h3
                    style={widthLimitReach ? 
                        {
                            fontSize:"1rem"
                        }
                        : {}} 
                    >{head}</h3>
                    <p
                    style={widthLimitReach ?
                        {
                            lineHeight:"1",
                            fontSize:"1.2rem",
                            
                        } : {}
                    }
                    >{body}</p>
                </div>
            </div>
        </>
    )
}

export {PointsCard}