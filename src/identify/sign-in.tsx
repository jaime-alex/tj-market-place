
export default function SignIn({setSignOption} : { setSignOption: (option: string) => void }) {

    const submitHandler = () => {
    }

    return <div className="card">
        <h2>Sign In</h2>
        <input className="input" placeholder="Username"></input>
        <input className="input" placeholder="Password"></input>
        <br></br>
        <button className="green" style={{height: "40px"}} onClick={submitHandler}>Submit</button>
        <br></br>
        <label className="clickable" onClick={() => setSignOption("sign-up")}>Create an account</label>
    </div>
}