import { useState } from "react"
import SignIn from "./sign-in"
import SignUp from "./sign-up"

export default function Identify() {
    const [signOption, setSignOption] = useState("sign-in")

    return <div style={{width: "100vw", display: "flex", placeItems: "center", height: "calc(100vh - 100px)"}}>
        {signOption === "sign-in" 
            ? <SignIn setSignOption={setSignOption}></SignIn> 
            : <SignUp setSignOption={setSignOption}></SignUp>}
    </div>
}