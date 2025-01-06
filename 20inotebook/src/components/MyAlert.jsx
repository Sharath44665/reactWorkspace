
const MyAlert = (props) => {
    return (
        <>
            <div className="alert alert-info" role="alert">
                {props.message}
            </div>

        </>
    )
}

export default MyAlert;