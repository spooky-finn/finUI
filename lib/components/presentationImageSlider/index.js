/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { mq } from '../../../emotionconf'
import styled from '@emotion/styled'
import { useRef } from "react"
import SliderTableContent from "./SliderTableContent";

import Slide from "./Slide";

import useRegisterHandler from "./useRegisterHandler";
import scrollToSlide from "./scrollToSlide";
import ZoomAnimaion from "../zoomAnimation";

export default function PresentationImageSlider({slides, textColor, accentColor}){
    const viewPortRef = useRef()
    const highlightRef = useRef()

    useRegisterHandler({viewPortRef, highlightRef});

    const ViewPort = styled.div`
        height: 100vh;
        width: 100%;
        position: sticky;
        top: 0;
    `

    const props = {
        accentColor,
        textColor,
        onChangeCurrentSlide: (id) => {
            scrollToSlide({ id, viewPortRef, highlightRef })
        }
    }

    return (
    <ZoomAnimaion elRef={viewPortRef}>
        

        <div 
       
        css={css`
        z-index: 2;
        position: relative;
        height: ${(slides.length+1) *100}vh;
        /* background: #000; */
        `}>

               
                <ViewPort ref={viewPortRef}>
                    <SliderTableContent {...props} highlightRef={highlightRef} data={ slides.map( each => each.shortName )}/>
                    <div id="slideContaier" css={css`
                        position: relative;
                        width: 100%;
                        height: 100%;
                    `}>
                        {slides.map(each => (
                            // on active slide will be added .active class
                            <Slide key={each.image} image={each.image}>
                                { each.children }
                            </Slide>
                        ))}
                    </div>
                </ViewPort>
               
        </div>
    </ZoomAnimaion>
    )
}