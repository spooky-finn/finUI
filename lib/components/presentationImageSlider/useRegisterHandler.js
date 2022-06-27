import { useEffect } from "react";
import onScrollHandler from "./onScrollHandler";

export default function useRegisterHandler({highlightRef, viewPortRef}){

    const props = {
        highlightRef, 
        viewPortRef
    }

    useEffect(() => {
        // initial call
        onScrollHandler(props);

        window.addEventListener('scroll', () => onScrollHandler(props) );
      return () => {
        window.removeEventListener('scroll', () => onScrollHandler(props) );
      }
    }, [])
}