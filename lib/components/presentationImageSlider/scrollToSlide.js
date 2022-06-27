
export default function scrollToSlide({ id, viewPortRef, highlightRef }){

    const slideHeight = viewPortRef.current.offsetHeight
    const y = viewPortRef.current.parentElement.getBoundingClientRect().top + window.scrollY + (id * slideHeight) + 0.5*slideHeight
    window.scrollTo({top: y });
}