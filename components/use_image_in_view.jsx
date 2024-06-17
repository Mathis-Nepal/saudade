// import { useRef, useEffect, useState } from "react";
// import { useInView } from "framer-motion";

// const useImageRefs = (numImages) => {
//     const refs = useRef([]);
//     const [inViewStates, setInViewStates] = useState(Array(numImages).fill(false));

//     useEffect(() => {
//         refs.current = refs.current.slice(0, numImages);
//         refs.current.forEach((ref, index) => {
//             const isInView = useInView(ref, { amount: 0.6, once: true });
//             setInViewStates((prevStates) => {
//                 const newStates = [...prevStates];
//                 newStates[index] = isInView;
//                 return newStates;
//             });
//         });
//     }, [numImages]);

//     return { refs: refs.current, inViewStates };
// };

// export default useImageRefs;
