import { css } from "@emotion/react"
import { mq } from '../emotionconf'
import styled from '@emotion/styled'

import SideNav from '../components/SideNav'
import PresentationImageSlider from "../lib/components/presentationImageSlider"


const Child = ({ title, desc}) => (
    <div css={css`
        display: grid;
        width: 100%;
        grid-template-columns: repeat(10, minmax(0, 1fr));
        gap: 20px;
        padding: 72px 40px 20px;
        position: absolute;
        align-content: flex-end;
        align-items: end;
        top: 30px;

        left: 0;
        right: 0;
        bottom: 0;
        
        z-index: 1;
        transition: 0.3s ease-in-out;
        will-change: opacity,visibility;
        ${mq[3]}{
            align-content: space-between;
            align-items: start;
            padding: 40px 80px;
        }
    `}>
        <h3 css={css`
            color: #000;
            grid-column: 1/-1;
            grid-row: 1;
            font-size: 28px;
            line-height: 32px;
            letter-spacing: -0.01em;
            ${mq[3]}{
                grid-column: 1/6;
                font-size: 40px;
                line-height: 44px;
            }
        `}>{title}</h3>
        <p css={css`
            color: #000;
            grid-column: span 3;
            grid-row: 2;
            grid-column: 1/-1;
            font-size: 14px;
            ${mq[3]}{
                grid-column: 1/4;
            }
        `}>{desc}</p>
    </div>
)



export default function Home() {

    const slides = [ 
        {
            image: "/slider/1.jpg",
            shortName: 'Sustainable design',
            children: <Child 
                title="The most technologically advanced smartcard waterproof reader for access system" 
                desc="We are the first company to invent and master the technology for creating a True Augmented Reality experience for the automotive industry and beyond. The information displayed via WayRay’s Holographic AR Display is seamlessly integrated into the real world at variable depth; no eyewear or headgear needed. No existing head-up display can create such a vivid 3D image."
                /> 
        },
        {
            image: "/slider/2.jpg",
            shortName: '#1 in security',
            children: <Child 
                title="So secure. Our reader works on AES-128 encription standard. Accepts bank cards as token. API for third-party integrations"
                desc="To implement augmented reality in our displays, we use holographic optical elements (HOEs) capable of performing incredibly complex optical functions while remaining transparent, thin, and capable of conforming to curved surfaces such as windshields. As the only company to master the application of holography to head-up displays, we are a leader in non-wearable augmented reality solutions for transportation and beyond."
                />
        },
        {
            image: "/slider/3.jpg",
            shortName: 'Mobile access',
            children: <Child
                title="NFC and hand off access. You can forget forever that you need to attach a card"
                />
        },
        {
            image: "/slider/4.jpg",
            shortName: 'Portable reader',
            children: <Child
                title= "The laconic reader will provide cash reability in public places. "
                />
        },
        {
            image: "/slider/5.jpg",
            shortName: 'All tastes',
            children: <Child 
                title="We are providing tremedous choice of colors"
                />
        }
    ]

    const FirstScreenWrap = styled.div`
    position: fixed;
    z-index: 0;
    padding-top: 140px;
    padding-bottom: 40px;
    top: 0;
    `

    return (
    <div css={css`
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-flow: row;
        min-height: 100vh;
        ${mq[3]}{
            grid-template-columns: 14% 1fr;
        }
   `}>

     <SideNav/>
     <div css={css`
        background: #f8f8f9;
        display: grid;
        grid-column: 2;
        position: relative;
     `}>

        <div data-id='who-we-are'>
            <div css={css`
            position: relative;
            height: 644px;
            `}>
                <FirstScreenWrap>
                    <div css={css`
                    display: grid;
                    grid-template-columns: repeat(10, minmax(0, 1fr));
                    gap: 20px;
                    padding: 0 15px;
                    row-gap: 140px;
                    ${mq[3]}{
                        padding: 0 80px;
                        
                    }
                    `}>
                        <h1 css={css`
                        grid-column: 1/-1;
                        grid-row: 1;
                        font-size: 20px;
                        line-height: 20px;
                        font-weight: 400;
                        letter-spacing: -0.2px;
                        margin: 0;
                        ${mq[3]}{
                            font-size: 72px;
                            line-height: 72px;
                        }
                        `}>We are an industrial deep-tech company with a relentless culture that sets us apart</h1>

                        <p css={css`
                        grid-column: 1/-1;
                        ${mq[3]}{
                            grid-column: 7/9;
                        }
                        `}>Our proprietary technologies make us leaders in holography and TRUE AR™ pioneers.</p>
                        
                        <p css={css`
                        grid-column: 1/-1;
                        ${mq[3]}{
                            grid-column: 9/11;
                        }
                        `}>Thanks to years of continuous R&D and our brilliant team, we were able to create products that are unrivaled in the automotive and deep‑tech industries.</p>
                    </div>
                </FirstScreenWrap>
            </div>


            <PresentationImageSlider slides={slides} textColor='#000' accentColor='#ff0000' />


            <div css={css`
            height: 200px;
            padding: 20px;
            `}>Something else.</div>

        </div>



     </div>     
   </div>
  )
}
