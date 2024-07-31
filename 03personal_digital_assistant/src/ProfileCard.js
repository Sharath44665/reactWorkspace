// function ProfileCard(props){
//     // const title = props.title;
//     // const xHandle= props.xHandle;

//     // above code can be written as 
//     const {title, xHandle} = props;
//     return (
//         <div>Title is {title}, twitter account is: {xHandle}</div>
//     );
// }

// above code can be written as follows

function ProfileCard({ title, xHandle, image, description }) {
    return (
        <div className="card" >
            <div className="card-image">
                <figure className="image is-1by1">
                    <img
                        src={image}
                        alt="pda logo"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{xHandle}</p>
                    </div>
                </div>

                <div className="content">
                    {description}
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>

    );
}

export default ProfileCard;