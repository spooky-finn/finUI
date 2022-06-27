
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export default function({ image, children}){

    const SlideWrapper = styled.div`
        height: 0;

        img {
            display: none;
        }
        .slideChildrenContent {
            visibility: hidden;
            opacity: 0;
        }

        &.active {
            height: 100%;

            img {
                display: block;
            }

            .slideChildrenContent {
                visibility: visible;
                opacity: 1;
                transition: opacity 1s ease-in;
            }
        }   
    `

    const SlideImage = styled.img`
        width: 100%;
        object-fit: cover;
        height: 100%;
    `
    const SlideContentWrap = styled.div`
        position: absolute;
        font-size: 40px;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 0;
    `

    return (
        <SlideWrapper>
            <SlideImage src={image} alt="" />
            <SlideContentWrap className='slideChildrenContent'>{children}</SlideContentWrap>
        </SlideWrapper>
    )
}

