import { createContext, useContext } from "react";
import { app } from "../lib/firebase-prod";
export const FirebaseContext=createContext(null)
export const useFirebaseContext=()=>{
    return useContext(FirebaseContext)
}
export default function FirebaseProvider({children})
{
    return <FirebaseContext.Provider value={{app}}>
            {children}
           </FirebaseContext.Provider>
          
}