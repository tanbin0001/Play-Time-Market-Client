import { useEffect } from "react";



const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Play Time Market`;
    }, [title])
};

export default useTitle;