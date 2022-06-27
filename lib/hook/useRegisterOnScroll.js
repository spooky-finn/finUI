import { useEffect } from "react"


export default function useRegisterOnScroll(cb, args){

    useEffect(() => {
        // initial call
        cb(args);
        window.addEventListener('scroll', () => cb(args) );
        
        return () => {
            window.removeEventListener('scroll', () => cb(args) );
        }
    }, [])

}