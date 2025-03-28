
export default function SignUp({setSignOption} : { setSignOption: (option: string) => void }) {

    const submitHandler = () => {
    }

    return <div className="card">
        <h2>Sign Up</h2>
        <input className="input" placeholder="Name"></input>
        <input className="input" placeholder="Email"></input>
        <input className="input" placeholder="Phone Number"></input>
        <input className="input" placeholder="Password"></input>
        <input className="input" placeholder="Confirm password"></input>
        <br></br>
        <button className="green" style={{height: "40px"}} onClick={submitHandler}>Submit</button>
        <br></br>
        <label className="clickable" onClick={() => setSignOption("sign-in")}>Sign In</label>
    </div>
}