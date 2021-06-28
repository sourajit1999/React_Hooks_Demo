import { useState, useEffect } from "react"

const useName = (defName) => {
    const [name, setName] = useState(defName)
    
    useEffect(()=> {
        alert("Name Changed")
        setName()
      }, [])

    return [name, setName]
}

export {useName};