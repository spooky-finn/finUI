
import Image from "next/image"
import { css } from "@emotion/react"
import { mq } from '../emotionconf'


export default function (props) {

    const Logo = ({children}) => <div css={css`
        width: 112px;
        height: auto;
        margin-bottom: 2.3em;
        svg {
            width: 100%;
        }
        `}>{children}</div>


    const Link = ({children}) => <div css={css`
    font-size: 14px;
    `}>{children}</div>

    return (
        <nav css={css`
        display: none;
       
        ${mq[2]}{
            display: flex;
            position: fixed;
            top: 0;
            width: 100%;
            flex-direction: column;
            padding: 40px 24px;
            row-gap: 1em;
            font-weight: 500;
            height: 100vh;
        }
        `}>
            <Logo>
                <Image width={40} height={40} src='/logo.svg'/>
            </Logo>

            <Link>Main</Link>
            <Link>Readrs</Link>
            <Link>Tokens</Link>
            <Link>Configurator®</Link>
            <Link>Technology</Link>
            <Link>Culture & Jobs</Link>

            

            <div css={css`
            height: 100%;
            `}></div>

            <Link>Press Area</Link>
            <Link>Contacts</Link>

        
        </nav>
    )
}