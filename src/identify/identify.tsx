import "./styles.css"

export default function Identify() {
    return <div style={{width: "100vw", display: "flex", placeItems: "center", height: "100vh"}}>
        <div className="login-form">
            <h3>Sign In</h3>
            <input className="input" placeholder="Username"></input>
            <input className="input" placeholder="Password"></input>
            <br></br>
            <button className="green">Submit</button>
        </div>
    </div>
}