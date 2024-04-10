import { useEffect } from "react"
import { useState } from "react"

export function useLocal(key, value) {
    const [msg, setMsg] = useState(value)
    useEffect(() => {
        window.localStorage.setItem(key, msg)
    }, [msg])

    return [msg, setMsg]
}