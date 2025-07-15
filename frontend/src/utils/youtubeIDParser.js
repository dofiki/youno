export default function youtubeIDParser(URL){
    const idPart = URL.split("v=");
    const id = idPart[1].split("&");
    return id[0];
}
