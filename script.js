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

            // Extract just the filename
            let songName = element.href.split('/').pop();
            songs.push(decodeURIComponent(songName)); // Decode special characters
        }
    }
    // console.log(songs);
    return songs;
}


getSongs();

async function Songs() {

    let songs = await getSongs();
    console.log('Songs are as follows:');
    console.log(songs);

    let songUL = document.querySelector('.songslist').getElementsByTagName('ul')[0];
    for (const song of songs) {     

        songUL.innerHTML = songUL.innerHTML + `<li> 
        <div class="listsongs">
                            <img class="invert" src="logos/playbar/queue_music.svg" alt="">

                            <div class="song"> ${songs} </div>
                            <div class="artist">Artist</div>

                            <img class="invert" src="logos/playbar/play_arrow.svg" alt="">
                        </div></li>`;
        
    };

    //Play audio

    var audio = new Audio(songs[2]);
    // audio.play();


}

Songs();
