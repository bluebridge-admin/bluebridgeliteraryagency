import { useEffect, useRef, useState } from "react";

const Animate = ({
  children,
  animation = "slideUp", // fadeIn, slideUp, slideLeft, zoomIn, bounce
  delay = 0, // delay in ms
  duration = 600, // animation duration in ms
  threshold = 0.4, // intersection observer threshold (0-1)
  once = true, // animate only once
  triggerOnce = false, // alias for once
  rootMargin = "10px", // intersection observer root margin
  style = {},
  isIn = true,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const animateOnce = once || triggerOnce;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (animateOnce) {
            observer.unobserve(element);
          }
        } else if (!animateOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, animateOnce]);

  // Animation styles
  const getAnimationStyles = () => {
    const baseTransition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;

    const animations = {
      fadeIn: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: baseTransition,
      },
      slideUp: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transition: baseTransition,
      },
      slideLeft: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(60px)",
        transition: baseTransition,
      },
      slideRight: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-60px)",
        transition: baseTransition,
      },
      zoomIn: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        transition: baseTransition,
      },
      bounce: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: `${baseTransition}, transform ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}ms`,
      },
      flip: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "rotateY(0deg)" : "rotateY(90deg)",
        transformStyle: "preserve-3d",
        transition: baseTransition,
      },
      none: {
        opacity: 1,
        transform: "none",
      },
    };

    return animations[animation] || animations.fadeIn;
  };

  return (
    <div
      ref={ref}
      style={{
        ...getAnimationStyles(),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Animate;
