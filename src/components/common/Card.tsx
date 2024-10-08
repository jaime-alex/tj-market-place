const Card = (props: any) => (
    <div style={{
            border: "1px solid #d6d6d6", 
            borderRadius: "5px",
            backgroundColor: "rgb(255, 255, 255)",
            padding: "10px"
        }} {...props}>
        {props.children}
    </div>
)

export default Card