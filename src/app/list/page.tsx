import { oauth2Client, userCredential } from "@/lib/oAuth";
import { google } from "googleapis";


const List = async () => {

    console.log(oauth2Client.credentials)

    const youtube = google.youtube("v3");
    const response = await youtube.videos.list({
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "myRating": "like",
        "pageToken": "CAUQAA",
        "auth": oauth2Client,

    })
    console.log(response);


    return <div>
        Youtube videos
    </div>
}

export default List;