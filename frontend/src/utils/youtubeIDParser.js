export default function youtubeIDParser(url) {
  const regex =
    /(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&]|$)/;

  const match = url.match(regex);
  return match ? match[1] : null;
}
