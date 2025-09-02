import { useRef } from "react";
import { useScroll, useTransform, useSpring, transform, animate } from "framer-motion";

function AnimationDisplacement(trnsObj,initial_Val,Final_val =0,condition=true){
    
    return {
        initial:{transform:`translateX(${initial_Val}rem)`},
        animate: condition ? {transform:`translateX(${Final_val}rem)`}: {},
        transition:trnsObj,
    }
}

function AnimationDisplacmentPart2(trnsObj,initial_Val,Final_val=0,condition=true){

    if (Object.keys(initial_Val).includes("left")) 
        {
            return{
                initial:
                {transform:`translateX(${initial_Val.trans}%)`,
                left:`${initial_Val.left}%`},
                animate:condition ? {transform:`translateX(${Final_val.trans}%)`,left:`${Final_val.left}%`} :{},
                transition:trnsObj
             }
        }
    else{
        return{
            initial:
            {transform:`translateX(${initial_Val.trans}%)`,
            right:`${initial_Val.right}%`},
            animate:condition ? {transform:`translateX(${Final_val.trans}%)`,right:`${Final_val.right}%`} :{},
            transition:trnsObj
         }
        
    }
}

function AnimationOpacity(transObj,condition=true){
    return {
        initial:{opacity:0},
        animate:condition ? {opacity:1}:{},
        transition:transObj
    } 
}

function OnHoverAnimation(){
    return{
        whileHover:{
                scale:1.04,
                position:"relative",
                zIndex:1,
                transition:{duration:".1"}
            },
        onHoverStart:()=>{
            document.getElementById("root").style.filter = "blur(2px)";
            document.getElementById("root").style.position = "relative"
            
        },
        onHoverEnd:()=>{
            document.getElementById("root").style.filter = "blur(0)";
            document.getElementById("root").style.zIndex = "1";
        }

    }
}

// Scroll Animation Functions
function ScrollAnimation(type = "fadeIn", delay = 0, duration = 0.8, threshold = 0) {
    const variants = {
        fadeIn: {
            hidden: { opacity: 0, y: 50 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        },
        slideInLeft: {
            hidden: { opacity: 0, x: -100 },
            visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        },
        slideInRight: {
            hidden: { opacity: 0, x: 100 },
            visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        },
        slideInUp: {
            hidden: { opacity: 0, y: 100 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        },
        slideInDown: {
            hidden: { opacity: 0, y: -100 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        },
        rotateIn: {
            hidden: { opacity: 0, rotate: -180, scale: 0.8 },
            visible: { 
                opacity: 1, 
                rotate: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        },
        blurIn: {
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { 
                opacity: 1, 
                filter: "blur(0px)",
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        }
    };

    return {
        initial: "hidden",
        whileInView: "visible",
        viewport: { 
            once: false, 
            amount: threshold,
            margin: "-100px"
        },
        variants: variants[type] || variants.fadeIn
    };
}

// Staggered scroll animation for multiple children
function StaggeredScrollAnimation(type = "fadeIn", staggerDelay = 0.1, duration = 0.8, threshold = 0.1) {
    const baseVariants = {
        fadeIn: {
            hidden: { opacity: 0, y: 50 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                    duration: duration,
                    ease: "easeOut"
                }
            }
        },
        slideInLeft: {
            hidden: { opacity: 0, x: -100 },
            visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                    duration: duration,
                    ease: "easeOut"
                }
            }
        },
        slideInRight: {
            hidden: { opacity: 0, x: 100 },
            visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                    duration: duration,
                    ease: "easeOut"
                }
            }
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                    duration: duration,
                    ease: "easeOut"
                }
            }
        }
    };

    return {
        initial: "hidden",
        whileInView: "visible",
        viewport: { 
            once: false, 
            amount: threshold,
            margin: "-100px"
        },
        variants: {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: staggerDelay
                }
            }
        },
        children: {
            variants: baseVariants[type] || baseVariants.fadeIn
        }
    };
}

// Parallax scroll effect
function ParallaxScroll(speed = 0.5, direction = "up") {
    return {
        style: {
            transform: `translateY(${speed * 100}px)`,
            willChange: "transform"
        }
    };
}

// Combined scroll animation with parallax
function ScrollAnimationWithParallax(animationType = "fadeIn", parallaxSpeed = 0.3, delay = 0, duration = 0.8, threshold = 0.1) {
    const scrollProps = ScrollAnimation(animationType, delay, duration, threshold);
    
    return {
        ...scrollProps,
        style: {
            ...scrollProps.style,
            transform: `translateY(${parallaxSpeed * 100}px)`,
            willChange: "transform"
        }
    };
}

// Multiple effects function
function MultiEffectScroll(effects = []) {
    // effects should be an array of objects with type and options
    // Example: [{type: "fadeIn", delay: 0}, {type: "slideInLeft", delay: 0.2}]
    
    let combinedProps = {
        initial: "hidden",
        whileInView: "visible",
        viewport: { 
            once: true, 
            amount: 0.1,
            margin: "-100px"
        },
        variants: {}
    };

    effects.forEach((effect, index) => {
        const effectProps = ScrollAnimation(effect.type, effect.delay || 0, effect.duration || 0.8, effect.threshold || 0.1);
        
        if (index === 0) {
            // Use the first effect's variants as base
            combinedProps.variants = effectProps.variants;
        } else {
            // Merge additional effects into the variants
            Object.keys(effectProps.variants).forEach(key => {
                if (combinedProps.variants[key]) {
                    combinedProps.variants[key] = {
                        ...combinedProps.variants[key],
                        ...effectProps.variants[key]
                    };
                }
            });
        }
    });

    return combinedProps;
}

export {
    AnimationDisplacement,
    AnimationOpacity,
    OnHoverAnimation,
    ScrollAnimation,
    StaggeredScrollAnimation,
    ParallaxScroll,
    ScrollAnimationWithParallax,
    MultiEffectScroll
}
import { useWidthContext } from "../App"
// Scroll-scrubbed animation hook
// Maps section scroll progress to x/opacity: enter -> center completes -> exit reverses
function useScrollScrub({
    fromX = -150,
    toX = 0,
    outX = 150,
    fromY,
    toY,
    outY,
    fromOpacity = 0,
    toOpacity = 1,
    outOpacity = 0,
    styObj = {},
    // Viewport offsets: when to start/finish the section progress
    // You can pass strings like "start 85%" / "end 15%"
    offsetStart = "start 85%",
    offsetEnd = "end 15%",
    // Control where the enter animation completes and reverse begins/ends
    // Accepts 0–1 or percentage strings like "35%"
    enterCompleteAt = 0.35,
    reverseStartAt = 0.63,
    exitCompleteAt = 0.98,
    // Spring smoothing (higher stiffness/damping = snappier, lower = smoother)
    spring = { stiffness: 90, damping: 22, mass: 1.1 }
} = {}){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: [offsetStart, offsetEnd] });

    const normalizeStop = (val, min, max) => {
        let n = val;
        if (typeof n === "string" && n.endsWith("%")) {
            const p = parseFloat(n);
            if (!Number.isNaN(p)) n = p / 100;
        }
        if (typeof n !== "number" || Number.isNaN(n)) n = min;
        return Math.min(Math.max(n, min), max);
    };

    const clampedComplete = normalizeStop(enterCompleteAt, 0.01, 0.49);
    const clampedReverseStart = normalizeStop(reverseStartAt, clampedComplete + 0.01, 0.95);
    const clampedExit = normalizeStop(exitCompleteAt, clampedReverseStart + 0.01, 1);

    const domain = [0, clampedComplete, clampedReverseStart, clampedExit];
    const xRaw = useTransform(scrollYProgress, domain, [fromX, toX, toX, outX]);
    const opacityRaw = useTransform(scrollYProgress, domain, [fromOpacity, toOpacity, toOpacity, outOpacity]);
    const yRaw = (typeof fromY === "number" && typeof toY === "number" && typeof outY === "number")
        ? useTransform(scrollYProgress, domain, [fromY, toY, toY, outY])
        : null;

    const x = useSpring(xRaw, spring);
    const opacity = useSpring(opacityRaw, spring);
    const y = yRaw ? useSpring(yRaw, spring) : null;

    let {widthLimitReach} = useWidthContext()

    return {
        ref,
        style: {
            x,
            y: y ?? undefined,
            willChange:"transform",
            opacity,
            ...styObj
        }
    };
}

export { useScrollScrub ,AnimationDisplacmentPart2 };