export default function youtubeIDParser(URL){
    const splitedURL = URL.split("v=");
    const id = splitedURL[1]
    return id;
}
