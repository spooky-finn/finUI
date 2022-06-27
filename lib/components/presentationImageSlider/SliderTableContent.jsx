/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { mq } from '../../../emotionconf'

export default function SliderTableContent({ data, highlightRef, onChangeCurrentSlide, ...any }){
    
    const SliderContent = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    color: #fff;
    z-index: 1;

    ${mq[3]}{
        left: 0;
        right: auto;
        padding: 40px 80px;
    }
    `
    
    const InlineContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 12px;
    padding: 20px 20px;

    ${mq[3]}{
        font-size: 14px;
        padding: 0;
        gap: 40px;
        flex-direction: row;
    }
    `

    const Unit = styled.div`
    font-weight: 500;
    transition: 0.2s linear;
    transition-property: color,opacity;
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;

    color: ${any.textColor};
    will-change: color;

    &:hover{
        opacity: .7;
    }

    &.active {
        color: ${any.accentColor};;
    }

    ${mq[3]}{
        height: 40px;
        flex-grow: 1;
        flex-basis: 0;
    }

    `

    const Marker = styled.span`
        position: absolute;
        background: ${any.accentColor};
        top: 20px;
        right: 10px;
        width: 2px;
        height: 20px;
        will-change: transform;
        transition: transform 0.1s;
        
        ${mq[3]}{
            top: auto;
            left: 0;
            width: 40px;
            height: 2px;
            bottom: 0;
        }
    `

    return (

        <SliderContent>
            <InlineContainer>
                        { data.map( (shortName, index) => (
                            <Unit onClick={()=> onChangeCurrentSlide(index)} key={index}>{shortName}</Unit>
                        ))}

                        <Marker ref={highlightRef}/>
            </InlineContainer>
        </SliderContent>
    )
}