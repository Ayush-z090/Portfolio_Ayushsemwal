# Scroll Animation Functions

This document explains how to use the scroll animation functions to add beautiful animations to your React components when they come into view.

## Available Functions

### 1. `ScrollAnimation(type, delay, duration, threshold)`

The main function for creating scroll-triggered animations.

**Parameters:**
- `type` (string): Animation type - see available types below
- `delay` (number): Delay before animation starts (default: 0)
- `duration` (number): Animation duration in seconds (default: 0.8)
- `threshold` (number): How much of the element must be visible to trigger (default: 0.1)

**Available Animation Types:**
- `"fadeIn"` - Fade in from transparent to opaque
- `"slideInLeft"` - Slide in from the left
- `"slideInRight"` - Slide in from the right
- `"slideInUp"` - Slide in from bottom
- `"slideInDown"` - Slide in from top
- `"scaleIn"` - Scale in from smaller to normal size
- `"rotateIn"` - Rotate in with scale effect
- `"blurIn"` - Blur in from blurred to sharp

### 2. `StaggeredScrollAnimation(type, staggerDelay, duration, threshold)`

For animating multiple children with staggered timing.

**Parameters:**
- `type` (string): Animation type for children
- `staggerDelay` (number): Delay between each child animation (default: 0.1)
- `duration` (number): Animation duration (default: 0.8)
- `threshold` (number): Visibility threshold (default: 0.1)

### 3. `ParallaxScroll(speed, direction)`

For parallax scrolling effects.

**Parameters:**
- `speed` (number): Parallax speed multiplier (default: 0.5)
- `direction` (string): Direction of parallax (default: "up")

## Basic Usage

### Simple Fade In Animation

```jsx
import { motion } from "motion/react";
import { ScrollAnimation } from "./animate";

function MyComponent() {
    return (
        <motion.div
            {...ScrollAnimation("fadeIn", 0, 0.8, 0.1)}
            style={{ padding: "20px", background: "#f0f0f0" }}
        >
            <h2>This will fade in when scrolled into view</h2>
        </motion.div>
    );
}
```

### Slide In Animation with Delay

```jsx
<motion.div
    {...ScrollAnimation("slideInLeft", 0.5, 1, 0.2)}
    style={{ padding: "20px", background: "#e0e0e0" }}
>
    <h2>This slides in from left with 0.5s delay</h2>
</motion.div>
```

### Scale In Animation

```jsx
<motion.div
    {...ScrollAnimation("scaleIn", 0, 1.2, 0.1)}
    style={{ padding: "20px", background: "#d0d0d0" }}
>
    <h2>This scales in when visible</h2>
</motion.div>
```

## Advanced Usage

### Staggered Animations for Lists

```jsx
import { StaggeredScrollAnimation } from "./animate";

function ProjectList() {
    return (
        <motion.div
            {...StaggeredScrollAnimation("fadeIn", 0.1, 0.8, 0.1)}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
            <motion.div
                variants={StaggeredScrollAnimation("fadeIn", 0.1, 0.8, 0.1).children.variants}
                style={{ padding: "20px", background: "#f0f0f0" }}
            >
                <h3>Project 1</h3>
                <p>Description...</p>
            </motion.div>
            
            <motion.div
                variants={StaggeredScrollAnimation("fadeIn", 0.1, 0.8, 0.1).children.variants}
                style={{ padding: "20px", background: "#f0f0f0" }}
            >
                <h3>Project 2</h3>
                <p>Description...</p>
            </motion.div>
            
            <motion.div
                variants={StaggeredScrollAnimation("fadeIn", 0.1, 0.8, 0.1).children.variants}
                style={{ padding: "20px", background: "#f0f0f0" }}
            >
                <h3>Project 3</h3>
                <p>Description...</p>
            </motion.div>
        </motion.div>
    );
}
```

### Custom Animation Variants

```jsx
import { useScrollAnimation } from "./scrollAnimationExample";

function CustomAnimation() {
    const { createScrollAnimation } = useScrollAnimation();
    
    const customBounceAnimation = {
        hidden: { 
            opacity: 0, 
            y: 100,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div
            {...createScrollAnimation("custom", { customVariants: customBounceAnimation })}
            style={{ padding: "20px", background: "#f0f0f0" }}
        >
            <h2>Custom bounce animation</h2>
        </motion.div>
    );
}
```

## Integration with Your Existing Components

### Adding to HomeAbout Component

```jsx
import { ScrollAnimation } from "../../AnimationFunction/animate";

export default function HomeAbout() {
    return (
        <motion.section
            {...ScrollAnimation("fadeIn", 0, 1, 0.1)}
            className={styles.aboutSection}
        >
            <motion.h2
                {...ScrollAnimation("slideInLeft", 0.2, 0.8, 0.1)}
                className={styles.title}
            >
                About Me
            </motion.h2>
            
            <motion.p
                {...ScrollAnimation("slideInRight", 0.4, 0.8, 0.1)}
                className={styles.description}
            >
                Your description here...
            </motion.p>
        </motion.section>
    );
}
```

### Adding to SkillsDetail Component

```jsx
import { StaggeredScrollAnimation } from "../../AnimationFunction/animate";

export default function SkillsDetail() {
    return (
        <motion.div
            {...StaggeredScrollAnimation("scaleIn", 0.1, 0.8, 0.1)}
            className={styles.skillsContainer}
        >
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    variants={StaggeredScrollAnimation("scaleIn", 0.1, 0.8, 0.1).children.variants}
                    className={styles.skillCard}
                >
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}
```

## Best Practices

1. **Performance**: Use `once: true` (already included) to prevent re-animations
2. **Threshold**: Adjust threshold based on when you want animations to trigger
3. **Delay**: Use delays to create sequential animations
4. **Duration**: Keep durations reasonable (0.5-1.5 seconds) for good UX
5. **Easing**: The functions use "easeOut" for smooth animations

## Parameters Explained

- **Delay**: Time to wait before starting animation (useful for sequential effects)
- **Duration**: How long the animation takes to complete
- **Threshold**: Percentage of element that must be visible (0.1 = 10%, 0.5 = 50%, etc.)
- **Stagger Delay**: Time between each child animation in staggered animations

## Troubleshooting

- **Animation not triggering**: Check if threshold is too high or element is too small
- **Performance issues**: Reduce number of simultaneous animations
- **Animation too fast/slow**: Adjust duration parameter
- **Timing issues**: Use delay parameter for sequential animations

## Examples in Your Portfolio

You can now add these animations to your existing components:

1. **Home page sections**: Fade in main content areas
2. **Skills section**: Staggered scale animations for skill cards
3. **Projects section**: Slide in animations for project cards
4. **Experience section**: Sequential fade in for timeline items
5. **About section**: Custom animations for personal information

The functions are designed to work seamlessly with your existing motion/react setup and can be easily integrated into your current components.
