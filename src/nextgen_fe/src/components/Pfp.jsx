import profilePicture from "../img/pfp.jpg";

export function Pfp(){
    return(
        <figure className="relative h-100 w-100 items-center  mx-auto max-w-screen-xl">            
            <img
                className="h-96 w-96 rounded-full object-cover object-center"
                src={profilePicture}
                alt="profile Picture"
            />
        </figure>
    );
}
