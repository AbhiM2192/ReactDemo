import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(() =>{
        document.title = `Counted ${count} times`
    },[count])
    
}

export default useDocumentTitle
