const Card = (props: any) => (
    <div style={{
            border: "1px solid gray", 
            borderRadius: "5px",
            backgroundColor: "rgb(228, 228, 228)",
            opacity: "0.8",
            margin: "10px",
            padding: "10px"
        }} {...props}>
        {props.children}
    </div>
)

export default Card