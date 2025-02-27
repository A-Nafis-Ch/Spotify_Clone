// console.log('Lets write Js');

async function getSongs() {

    let a = await fetch('http://127.0.0.1:5500/songs/');
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    console.log(as);
    let songs = [];

    for (let i = 0; i < as.length; i++) {
        const element = as[i];

        if (element.href.endsWith(".mp3")) {

            songs.push(element.href);
        }
    }
    // console.log(songs);
    return songs;
}

getSongs();

async function Songs() {

    let songs = await getSongs();
    // console.log('Songs are as follows:');
    console.log(songs);

    //Play audio

    var audio = new Audio(songs[2]);
    // audio.play();

}

Songs();
