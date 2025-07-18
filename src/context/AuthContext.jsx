import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({children}){
    const [auth,setAuth] = useState(false)
    const [admin,setAdmin] = useState(false)
    return(<AuthContext.Provider value={{setAuth,setAdmin,auth,admin}}>
        {children}
    </AuthContext.Provider>)
}