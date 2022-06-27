

var stateCurrSlideIdx = -1;

export default function onScrollHandler({ viewPortRef, highlightRef}){
    const isMobile = window.screen.width < 1200 ? true : false
    const slidesCollection = viewPortRef.current.children?.namedItem('slideContaier').children
    const slidesNumber = slidesCollection.length
    // Высота единичного слайда, как правило, 100vh
    const slideHeight = viewPortRef.current.offsetHeight

    /* 
    Поскольку сам слайд носит position: sticky то он скользит вниз вместе с вьюпортоп в родительском контейнере
    posInSlider - расстояние от верхнего края слайдера(родителя), до верхней границы слайда (ребенка,
    хотя их несколько, но в каждый момент времени, только один слайд имеет свойство display: block)
    */
    const yetScrolled = viewPortRef.current.offsetTop / (slideHeight * slidesNumber)

    // Fuckink magic here ＼(☆o◎)／
    let currSlideIdx = Math.floor(yetScrolled * slidesNumber)


    if (currSlideIdx >= slidesNumber)
        currSlideIdx = slidesNumber - 1
    
    // the check to avoid unnecessary rerenders
    if (stateCurrSlideIdx !== currSlideIdx){
        
        addClassNameToSlide({ 
            slidesCollection, 
            titlesCollection: highlightRef.current.parentElement.getElementsByTagName('div'),
            id: currSlideIdx
        })

        stateCurrSlideIdx = currSlideIdx 
    }
          
    let scrollTrack = isMobile ? highlightRef.current.parentElement.clientHeight - 20 : 
    highlightRef.current.parentElement.clientWidth + 40;

    const passedPath = viewPortRef.current.offsetTop / (slideHeight * slidesNumber)
    const translate = (scrollTrack - highlightRef.current.clientWidth) * passedPath

    if (isMobile)
        highlightRef.current.style.transform = `translateY(${translate}px)`
    else 
        highlightRef.current.style.transform = `translateX(${translate}px)`


} 


function addClassNameToSlide({ slidesCollection, titlesCollection, id }){
    Array.from( slidesCollection ).forEach((each, index) => {
        titlesCollection[index].classList.remove('active')
        each.classList.remove('active')
    });
   
    slidesCollection[id]?.classList.add('active')

     // highlight currnts photo titile
    titlesCollection[id]?.classList.add('active')
}
