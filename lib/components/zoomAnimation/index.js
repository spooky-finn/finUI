import useRegisterOnScroll from '../../hook/useRegisterOnScroll'
import isElementInViewport from "../../../utils/isElementInViewport"

const ZoomAnimaion = (props) => {
    const { elRef } = props;
    useRegisterOnScroll(onScroll, elRef)

    function onScroll(elRef){
        if (!isElementInViewport(elRef.current)) return;

        let top = elRef.current.getBoundingClientRect().top

        if (top < 0){
            top = window.innerHeight - elRef.current.getBoundingClientRect().bottom
        }

        const dy = 300
        const ds = -0.04
        const k = dy / ds
        const b = 100 - k
        const scale = (top - b) / k

        if (scale < 1)
            elRef.current.style.transform = `scale(${scale}) `;
    }

    return (
    <>{props.children}</>
    )
}

export default ZoomAnimaion