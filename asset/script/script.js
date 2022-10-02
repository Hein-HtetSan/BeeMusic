// JavaScript File ===>>>
// Identification

const e_c_Btn = document.querySelector(".e_n_c_btn")
const sideBar = document.querySelector(".side_bar")
const logo = document.querySelector(".logo-icon")
const sub_cont = document.querySelectorAll(".sub_cont")
const sub_header = document.querySelectorAll("#sub_h_none")
const middle_Set = document.querySelector(".middle_section")
const chevrons_left = document.querySelector(".fa-chevrons-left")
const profile_Img = document.querySelector(".pf-img")
const lens_Box = document.querySelector(".lens-box")
const label_srch = document.querySelector(".label-srch")
const volume_Range_Box = document.querySelector(".vol-rang-box");
const volume_Bar = document.getElementById("volume");
const volume_Value = document.querySelector(".percent");
const vol_Low = document.querySelector(".fa-volume-xmark");
const vol_Enough = document.querySelector(".fa-volume-low");
const container = document.querySelector(".msc-info")
const audio_Tag = document.querySelectorAll(".audio-tag")
const progressBar = document.querySelector('#progress')
const play_Button = document.querySelector(".fa-circle-play");
const pause_Button = document.querySelector(".fa-circle-pause")
const next_Button = document.querySelector(".nxt-icon")
const prev_Button = document.querySelector(".prev-icon")
const strDuration = document.querySelector(".st-dur");
const endDuration = document.querySelector(".end-dur")
const shuffleBtn = document.querySelector(".fa-shuffle")
const autoPlayBtn = document.querySelector(".fa-repeat");
const hobbiesContainer = document.querySelector(".shrt-icons");
const hobbiesDialog = document.querySelector('.shrt-items');
const hobbiesAddBtn = document.querySelector(".shr-add-btn")
const hobbiesClsBtn = document.querySelector(".cls-btn");
const hobbiesSvChgBtn = document.querySelector(".sv-chage-btn")
const userHobbiesContainer= document.querySelector(".user-shrt")
const edithobbBtn = document.querySelector(".edit-btn");
const git = document.querySelector(".vinyl");
const songName = document.querySelector(".name-of-song");
const gearIcon = document.querySelector(".fa-gear");
const themeBtn = document.querySelector(".theme")
const mobileNotAvaliable = document.querySelector(".mobile-not-avab");
const colorBos = document.querySelectorAll(".color");
const themeDiaBox = document.querySelector(".theme-dialog-box")

// Message for mobile is not avaliable
window.addEventListener("resize", () => {
    let clientWidth = document.body.clientWidth;
    console.log(clientWidth);
    if(clientWidth < 1160) {
        mobileNotAvaliable.classList.add("active");
    } else {

        mobileNotAvaliable.classList.remove("active");
    }
})

// theme
themeBtn.addEventListener("click", () => {
    console.log('active')
    themeDiaBox.classList.toggle("active");
})

// Expand width of the dispaly

const expand_Fun = () => {
    sideBar.classList.remove("col-3");
    sideBar.classList.add("col-1");
    logo.classList.add("d-none");
    logo.classList.remove("d-block");
    middle_Set.classList.remove("col-9");
    middle_Set.classList.add("col-11");
    sub_cont.forEach(ele => {
        ele.classList.add("d-none");
    })
    sub_header.forEach(title => {
        title.classList.add("d-none");
    })
    chevrons_left.classList.add("d-none");
    chevrons_left.classList.remove("d-block");
    e_c_Btn.classList.remove("d-none");
    e_c_Btn.classList.add("d-block");
}


// Collact the width of the display
const coll_Fun = () => {
    sideBar.classList.add("col-3");
    sideBar.classList.remove("col-1");
    logo.classList.remove("d-none");
    logo.classList.add("d-block");
    middle_Set.classList.add("col-9");
    middle_Set.classList.remove("col-11");
    sub_cont.forEach(ele => {
        ele.classList.remove("d-none");
    })
    sub_header.forEach(title => {
        title.classList.remove("d-none");
    })
    chevrons_left.classList.remove("d-none");
    chevrons_left.classList.add("d-block");
    e_c_Btn.classList.add("d-none");
    e_c_Btn.classList.remove("d-block");
}


// cursor on or hover on the search box
lens_Box.addEventListener('mouseover', () => {
    setTimeout(() => {
        label_srch.classList.add('show');
        setTimeout(() => {
            label_srch.classList.remove('show');
        }, 2000);
    }, 3000);
})
lens_Box.addEventListener("mouseout", () =>{
    label_srch.classList.toggle('show');
})

// collact and expand button function

chevrons_left.addEventListener("click", () => {
    expand_Fun();
    is_expand = true;
    profile_Img.classList.toggle("lg"); 
})

// collact and expand button function

e_c_Btn.addEventListener("click", () => {
    coll_Fun();
    is_expand = false;
    profile_Img.classList.toggle("lg");
})

// Music Action

let music_Items = [
    /* 1. */
    {track_No: "01", name: "8 Letters", path: "/sup/sound/8_Letters_-_Why_Don't_We_[Official_Music_Video](128k).mp3", artist: "Why don't We", albums: "American Pop", duration: "03:11"},
    /* 1. */
    {track_No: "02", name: "On My Way", path: "/sup/sound/Alan_Walker,_Sabrina_Carpenter_&_Farruko__-_On_My_Way(128k).mp3", artist: "Alan Walker", albums: "", duration: "03:36"},
    /* 1. */
    {track_No: "03", name: "Let Me Down Slowly", path: "/sup/sound/Alec_Benjamin_-_Let_Me_Down_Slowly_(Lyrics)(128k).mp3", artist: "Alec Benjamin", albums: "", duration: "02:49"},
    /* 1. */
    {track_No: "04", name: "Angel Baby", path: "/sup/sound/Angel Baby.mp3", artist: "", albums: "", duration: "03:41"},
    /* 1. */
    {track_No: "05", name: "Into Your Arm", path: "/sup/sound/Ava_max_,into_your_arms_(slowed_)(128k).mp3", artist: "", albums: "", duration: "03:11"},
    /* 1. */
    {track_No: "06", name: "On & On", path: "/sup/sound/Cartoon_-_On_&_On_(Lyrics)_feat._Daniel_Levi(128k).mp3", artist: "Daniel Levi", albums: "", duration: "03:27"},
    /* 1. */
    {track_No: "07", name: "Hold On", path: "/sup/sound/Chord_Overstreet_-_Hold_On_(Lyrics)(128k).mp3", artist: "Chord Overstreet", albums: "", duration: "03:15"},
    /* 1. */
    {track_No: "08", name: "Rockabye", path: "/sup/sound/Clean_Bandit_-_Rockabye_(feat._Sean_Paul_&_Anne-Marie)_[Official_Video](128k).mp3", artist: "Clean Bandit", albums: "", duration: "04:13"},
    /* 1. */
    {track_No: "09", name: "Be Alright", path: "/sup/sound/Dean_Lewis_-_Be_Alright_(Official_Video)(128k).mp3", artist: "Dean Lewis", albums: "", duration: "03:19"},
    /* 1. */
    {track_No: "10", name: "Let Me Love You", path: "/sup/sound/DJ_Snake_-_Let_Me_Love_You_ft._Justin_Bieber_(Official_Video)(128k).mp3", artist: "DJ Snake", albums: "", duration: "03:25"},
    /* 1. */
    {track_No: "11", name: "Perfect", path: "/sup/sound/Ed_Sheeran_-_Perfect_(Lyrics)(128k).mp3", artist: "Ed Sheeran", albums: "", duration: "04:23"},
    /* 1. */
    {track_No: "12", name: "Work From Home", path: "/sup/sound/Fifth_Harmony_-_Work_from_Home_(Official_Video)_ft._Ty_Dolla_$ign(128k).mp3", artist: "Fifth Harmony", albums: "", duration: "03:39"},
    /* 1. */
    {track_No: "13", name: "Without Me", path: "/sup/sound/Halsey_-_Without_Me_(Lyrics)(128k).mp3", artist: "Halsey", albums: "", duration: "03:23"},
    /* 1. */
    {track_No: "14", name: "Heart Of a Hero", path: "/sup/sound/Heart_of_a_Hero_-_Club_Danger_(LYRICS)(128k).mp3", artist: "Club Danger", albums: "", duration: "03:19"},
    /* 1. */
    {track_No: "15", name: "I Want You to Know", path: "/sup/sound/I want you to know.mp3", artist: "", albums: "", duration: "04:27"},
    /* 1. */
    {track_No: "16", name: "Till You Drop", path: "/sup/sound/ItaloBrothers_-_Till_You_Drop_(Official_Video_HD)(128k).mp3", artist: "ItaloBrothers", albums: "", duration: "03:59"},
    /* 1. */
    {track_No: "17", name: "Replay", path: "/sup/sound/Iyaz_-_Replay_(reverb_&_slowed)(128k).mp3", artist: "Iyaz", albums: "", duration: "03:16"},
    /* 1. */
    {track_No: "18", name: "So Big", path: "/sup/sound/Iyaz_-_So_Big_(Lyrics)(128k).mp3", artist: "Iyaz", albums: "", duration: "03:21"},
    /* 1. */
    {track_No: "19", name: "Just Give me a Reason", path: "/sup/sound/Just_Give_Me_a_Reason__P%21nk_ft._Nate_Ruess__-_Sam_Tsui%2C_Kylee%2C___Kurt_Schneider_Cover___Sam_Tsui(128k).mp3", artist: "Nate Ruess", albums: "", duration: "04:02"},
    /* 1. */
    {track_No: "20", name: "Love Yourself", path: "/sup/sound/Justin_Bieber_-_Love_Yourself_(Lyrics)(128k).mp3", artist: "Justin Bieber", albums: "", duration: "03:51"},
    /* 1. */
    {track_No: "21", name: "Monsters", path: "/sup/sound/Katie_Sky_-_Monsters_(Lyrics)(128k).mp3", artist: "Katie Sky", albums: "", duration: "04:11"},
    /* 1. */
    {track_No: "22", name: "Let Her Go", path: "/sup/sound/Let_Her_Go_-_Passenger___Mm___Eng___Sub___Lyrics(128k).mp3", artist: "Passenger", albums: "", duration: "04:14"},
    /* 1. */
    {track_No: "23", name: "Light Switch", path: "/sup/sound/Light_Switch_-_Charlie_Puth_(xooos_cover)(128k).mp3", artist: "Charlie Puth", albums: "", duration: "02:28"},
    /* 1. */
    {track_No: "24", name: "Pretty Girl", path: "/sup/sound/Maggie_Lindemann_-_Pretty_Girl_(Cheat_Codes_x_CADE_Remix)_[Official_Video](128k).mp3", artist: "Maggie Lindemann", albums: "", duration: "03:19"},
    /* 1. */
    {track_No: "25", name: "PayPhone", path: "/sup/sound/Maroon_5_Ft._Wiz_Khalifa_-_Payphone_(Lyrics)(128k).mp3", artist: "Maroon 5", albums: "", duration: "03:56"},
    /* 1. */
    {track_No: "26", name: "Friend", path: "/sup/sound/Marshmello___Anne-Marie_-_FRIENDS__Music_Video___OFFICIAL_FRIENDZONE_ANTHEM_(128k).mp3", artist: "Marshmello Anne-Marie", albums: "", duration: "03:51"},
    /* 1. */
    {track_No: "27", name: "Spectre", path: "/sup/sound/MobCup spectre alan walker.mp3", artist: "MobCup alan walker", albums: "", duration: "02:40"},
    /* 1. */
    {track_No: "28", name: "Sunroof", path: "/sup/sound/Nicky_Youre,_dazy_-_Sunroof_(Lyrics)(128k).mp3", artist: "Nicky Youre", albums: "", duration: "02:40"},
    /* 1. */
    {track_No: "29", name: "Night Changes", path: "/sup/sound/Night_Changes_-_One_Direction(mmsub)(128k).mp3", artist: "One Direction", albums: "", duration: "04:26"},
    /* 1. */
    {track_No: "30", name: "I Lived", path: "/sup/sound/One_Republic_-_I_Lived_-_Lyrics_Video_(Native_Album)_[HD][HQ](128k).mp3", artist: "One Republic", albums: "", duration: "03:54"},
    /* 1. */
    {track_No: "31", name: "Pa Ka Ti Tan Boe", path: "/sup/sound/Pa_Ka_Ti_Tan_Boe_-__Min_Thant_Official_Lyric_Video(128k).mp3", artist: "Min Thant", albums: "", duration: "03:48"},
    /* 1. */
    {track_No: "32", name: "Fight Song", path: "/sup/sound/Rachel_Platten_-_Fight_Song_(Lyrics)(128k).mp3", artist: "Rachel Platten", albums: "", duration: "03:23"},
    /* 1. */
    {track_No: "33", name: "The Shade", path: "/sup/sound/Rex_Orange_County_-_THE_SHADE_(Lyrics)(128k).mp3", artist: "Rex Orange County", albums: "", duration: "03:17"},
    /* 1. */
    {track_No: "34", name: "Dandelions", path: "/sup/sound/Ruth_B._-_Dandelions_(Lyrics)(128k).mp3", artist: "Ruth B", albums: "", duration: "03:53"},
    /* 1. */
    {track_No: "35", name: "Eenie Meenie", path: "/sup/sound/Sean_Kingston,_Justin_Bieber_-_Eenie_Meenie_(Video_Version)(128k).mp3", artist: "Justin Bieber", albums: "", duration: "03:24"},
    /* 1. */
    {track_No: "36", name: "Beautiful Girl", path: "/sup/sound/Sean_Kingston_-_Beautiful_Girls_(Official_HD_Video)(128k).mp3", artist: "Sean Kingston", albums: "", duration: "04:21"},
    /* 1. */
    {track_No: "37", name: "Way Back Home", path: "/sup/sound/SHAUN_feat._Conor_Maynard_-_Way_Back_Home_(Lyrics)_Sam_Feldt_Edit(128k).mp3", artist: "Conor Maynard Justin Bieber", albums: "", duration: "03:12"},
    /* 1. */
    {track_No: "38", name: "Tada Koe Hitotsu", path: "/sup/sound/Tada ko hitotsu.mp3", artist: "", albums: "", duration: "02:41"},
    /* 1. */
    {track_No: "39", name: "Vacation", path: "/sup/sound/vacation.mp3", artist: "Damon_Empero", albums: "", duration: "03:40"},
    /* 1. */
    {track_No: "40", name: "Closer", path: "/sup/sound/The_Chainsmokers_-_Closer_(Lyric)_ft._Halsey(128k).mp3", artist: "Halsey", albums: "", duration: "04:21"},
    /* 1. */
    {track_No: "41", name: "Takeaway", path: "/sup/sound/The_Chainsmokers_-_Takeaway_ft._Lennon_Stella__Live_from_World_War_Joy_Tour____Vevo(128k).mp3", artist: "Lennon Stella", albums: "", duration: "03:37"},
    /* 1. */
    {track_No: "42", name: "Stay", path: "/sup/sound/The_Kid_LAROI,_Justin_Bieber_-_Stay_(Lyrics)(128k).mp3", artist: "Justin Bieber", albums: "", duration: "02:19"},
    /* 1. */
    {track_No: "43", name: "Unstoppable", path: "/sup/sound/Unstoppable_Lyrics_Music_Video(With_MMSub)(128k).mp3", artist: "", albums: "", duration: "03:35"},
    /* 1. */
    {track_No: "44", name: "Oxygen", path: "/sup/sound/ယွန်းမြတ်သူ၊မင်းသန့်_(Yoon_Myat_Thu,Min_Thant)_-_Oxygen(128k).mp3", artist: "ယွန်းမြတ်သူ၊မင်းသန့်", albums: "", duration: "03:55"},
    /* 1. */
    {track_No: "45", name: "ခရီးများအဆုံးထိ", path: "/sup/sound/လေးဖြူ_-_ခရီးများအဆုံးထိ_(Htet_Thiri_Cover)(128k).mp3", artist: "Htet_Thiri", albums: "", duration: "03:21"},
    /* 1. */
    {track_No: "46", name: "【感情を込めて】ハレハレヤ_歌ってみた_", path: "/sup/sound/【感情を込めて】ハレハレヤ_歌ってみた_ver.Sou(128k).mp3", artist: "Sou", albums: "", duration: "03:28"},
    
]


let user_hobbies = [];

// Displaying The Hobbies

// Music action's identifiers

let currentIndex = 0;
let is_playing = false;
let is_clicked = false;
let is_expand = false;
let timer;
let shuffling = 0;
let autoPlay = 0;
let repeat = 0;
let is_Filtered = 0;
let filteredMUSIC = [];
let isAddedHob = 0;
const audioTag = document.createElement("audio");

// UI interfaces
const displayUiInterface = (Items) => {
    const displayAudio = Items.map(ele => {
        let Char, Artist, Album;
        if(ele.name.length > 13 && middle_Set.classList.contains("col-9")){
            Char = ele.name.slice(0, 15) + "...";
        } else {
            Char = ele.name;
        }
        if(ele.artist.length > 13 && middle_Set.classList.contains("col=9")){
            Artist = ele.artist.slice(0, 15) + "...";
        } else {
            Artist = ele.artist;
        }
        if(ele.albums.length > 13 && middle_Set.classList.contains("col=9")){
            Album = ele.artist.slice(0, 15) + "...";
        } else {
            Album = ele.albums;
        }
        return`
        <div class="audio-tag row row-cols-5 px-3 py-3">
            <div class="col-1 trackId d-block">${ele.track_No}<i class="fa-light fa-waveform d-none"></i></div>
            <div class="col-4 title">${Char}</div>
            <div class="col-3 artist">${Artist}</div>
            <div class="col-1 dur">${ele.duration}</div>
            <div class="col-3 album">${Album}</div>
        </div>`
    })
    .join(" ");
    container.innerHTML = displayAudio;
}
displayUiInterface(music_Items)


// Filter with user input
lens_Box.addEventListener("keyup", (e) => {
    is_Filtered = 1;
    const srchStr = e.target.value.toLowerCase();
    const filteredMsc = music_Items.filter( items => {
        return (items.name.toLowerCase().includes(srchStr) || items.artist.toLowerCase().includes(srchStr))
    })
    displayUiInterface(filteredMsc);
    filteredMUSIC = [...filteredMsc];
    click_Fun(filteredMUSIC)
    if(srchStr === " ") is_Filtered = 0;
    console.log(is_Filtered)
});


// User Click and Play
const click_Fun = (childEle) => {
    childEle = container.querySelectorAll(".audio-tag");
    childEle.forEach(eles => {
        eles.addEventListener("click", ()=>{
            
            let index = eles.querySelector(".trackId").textContent;
            audioTag.src = music_Items[index - 1].path;
            is_playing = true;
            is_clicked = true;
            if(is_clicked) currentIndex = index - 1;
            if(is_playing) {
                play_Button.classList.add("d-none");
                pause_Button.classList.add("d-block");
                pause_Button.classList.remove("d-none");
            }
            audioTag.play();
            songName.textContent = music_Items[index - 1].name.toString();
            timer = setInterval(range_slider, 1000)
        })
    })
}

// 
if(is_Filtered === 0){
    click_Fun(music_Items);
}



// Function of PlaySOng
function playSong() {
    audioTag.src = music_Items[currentIndex].path;
    is_playing = true;
    play_Button.classList.add("d-none");
    pause_Button.classList.add("d-block");
    pause_Button.classList.remove("d-none");
    audioTag.play();
    songName.textContent = music_Items[currentIndex].name.toString();
}


// Function of PauseSong
function pauseSong() {
    is_playing = false;
    play_Button.classList.remove("d-none");
    pause_Button.classList.remove("d-block");
    pause_Button.classList.add("d-none");
    audioTag.pause();
}

// Function of Play Button
play_Button.addEventListener("click", () => {
    if (is_playing === false){
        let currentTime = Math.floor(audioTag.currentTime)
        if (currentTime === 0){
            playSong();
            timer = setInterval(range_slider, 1000)
        } else {
            playCurrentSong();
            timer = setInterval(range_slider, 1000)
        }
    }
})



// Function of pause Button
pause_Button.addEventListener("click", () => {
    pauseSong();
})


// Play Current Song Funciton
function playCurrentSong() {
    play_Button.classList.add('d-none')
    pause_Button.classList.add('d-block')
    pause_Button.classList.remove('d-none')
    is_playing = true;
    audioTag.play();
}


// Audio Volume Fun

volume_Bar.addEventListener('click', () => {
    volume_Range_Box.classList.add('active');
    setTimeout(() => {
    volume_Range_Box.classList.remove('active');
    }, 2000)
})

function changeVolume(){
    valPercent = (volume_Bar.value / volume_Bar.max)*100;
    console.log(valPercent);
    volume_Bar.style.background = `linear-gradient(to right, #2e2e2e ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    volume_Value.textContent = volume_Bar.value + "%";
    if(!parseInt(volume_Bar.value)){
        vol_Low.classList.remove("d-none");
        vol_Enough.classList.add("d-none");
    }else{
        vol_Enough.classList.remove("d-none");
        vol_Low.classList.add("d-none");
    }
    audioTag.volume = volume_Bar.value / 100;
}
changeVolume();


// Progress Bar
function changeDuration() {
    let sliderPosition = audioTag.duration * (progressBar.value / 100);
    audioTag.currentTime = sliderPosition;
}

// Total Time Duration
audioTag.addEventListener("loadeddata", () => {
    let minTxt = Math.floor(audioTag.duration / 60 );
    let secondTxt = Math.floor(audioTag.duration % 60);
    let minFt = minTxt < 10 ? "0" + minTxt.toString() : minTxt;
    let secondFt = secondTxt < 10 ? "0" + secondTxt.toString() : secondTxt;
    let totalTime = minFt + ":" + secondFt;
    endDuration.textContent = totalTime;
})

// Time updating
audioTag.addEventListener('timeupdate', () => {
    
    let minTxt = Math.floor(audioTag.currentTime / 60);
    let secondTxt = Math.floor(audioTag.currentTime % 60);
    let minFt = minTxt < 10 ? "0" + minTxt.toString() : minTxt;
    let secondFt = secondTxt < 10 ? "0" + secondTxt.toString() : secondTxt;
    if(audioTag.ended){
        minFt = "00";
        secondFt = "00";
    }
    let totalCurrentTime = minFt + ":" + secondFt;
    strDuration.textContent = totalCurrentTime;
})

// shuffle Btn function
shuffleBtn.addEventListener("click", () => {
    if (shuffling == 1){
        shuffling = 0;
        shuffleBtn.classList.remove('active');
        console.log("shuffle off")
    } else {
        console.log("shuffle on")
        shuffling = 1;
        autoPlay = 0;
        repeat = 0;
        shuffleBtn.classList.add('active')
        if (autoPlay == 0) {
            autoPlayBtn.classList.remove('active')
            console.log("autoplay off")
        }
    }
})

// auto play function
autoPlayBtn.addEventListener("click", () => {
    if (autoPlay == 1) {
        autoPlay = 0;
        autoPlayBtn.classList.remove('active')
        console.log("Auto play off")
    } else {
        autoPlay = 1;
        shuffling = 0;
        repeat = 0;
        autoPlayBtn.classList.add('active');
        console.log("auto play on")
        if (shuffling == 0) {
            shuffleBtn.classList.remove('active');
            console.log("shuffle off")
        }
    }
})

// Progress Bar Moving
function range_slider() {
    let currentSongPlaying = document.querySelector(".current-song");
    let playing = window.getComputedStyle(currentSongPlaying, "::after");
    let position = 0;
    if(!isNaN(audioTag.duration))
    {
        position = audioTag.currentTime * (100 / audioTag.duration);
        progressBar.style.background = `linear-gradient(to right, #2e2e2e ${position}%, #d5d5d5 ${position}%)`;
        progressBar.value = position;
        currentSongPlaying.style.setProperty("--after", `${position}%`)
    }
    if(audioTag.ended)
    {
        if(autoPlay === 1){
            if(currentIndex < music_Items.length - 1){
                currentIndex++;
                playSong();
            } else {
                currentIndex = 0;
                playSong();
            }
        } else if(shuffling === 1) {
            currentIndex = Math.floor(Math.random() * music_Items.length);
            playSong();
        } else if(repeat === 1) {
            playSong();
        } else {
            position = 0;
            progressBar.value = position;
            progressBar.style.background = `#d5d5d5`;
            if(position === 0){
                document.querySelector(".current-playing-song").classList.remove("active");
                currentSongPlaying.style.setProperty("--after", `${position}%`)
            }
            pauseSong();
        }
    }
    if(audioTag.paused && is_playing == true){
        document.querySelector('.current-playing-song').classList.add("active");
    } else if(audioTag.played){
        document.querySelector('.current-playing-song').classList.add("active");
    }
}


// Next Button Function
next_Button.addEventListener("click", () => {
    if(currentIndex < music_Items.length - 1){
        currentIndex++;
        playSong();
    }
    else{
        currentIndex = 0;
        playSong();
    }
})

// Previous Button Function
prev_Button.addEventListener("click", () => {
    if(currentIndex < 0){
        currentIndex = music_Items.length - 1;
        playSong();
    } else {
        currentIndex--;
        playSong();
    }
})

let hob_categ = ["Jazz Dance", "Cello", "cha-cha-cha", "circus", "DJing", 
        "Competitive Dance", "Corridos", "EDM production", "Flamenco", "Flute","Folk Dance", 
        "Foxtrot", "Freestyle rap", "Harp", "Hip Hop Dance", "Memes", "Napping", "Popping"
]


// Display Hobbies
let displayHobbies = (hobbies) => {
    const hobby = hobbies.map(ele => {
        return `
        <div class="mt-2">
        <div class="hobbs px-4 py-2">${ele}</div>
        </div>
        `
    }).join(" ");
    hobbiesContainer.innerHTML= hobby;
}
displayHobbies(hob_categ);

// Display user fav hobbies
let displayUserHobbies = (hobbies) => {
    const hobby = hobbies.map(ele => {
        let ele2;
        if(ele.length > 8){
            ele2 = ele.slice(0, 7)+"...";
        }else{
            ele2 = ele;
        }
        return `
        <div class="mt-2">
        <div class="user-hobbs text-center">${ele2}</div>
        </div>
        `
    }).join(" ");
    userHobbiesContainer.innerHTML= hobby;
}

let isTrue = false;
// displaying user hobbies
let hobbies = hobbiesContainer.querySelectorAll(".hobbs");
for(let i =0; i<hob_categ.length;i++){
    hobbies[i].addEventListener("click", () => {
        let hobbi = hobbies[i];
        user_hobbies.push(hobbi.textContent);
        hobbi.classList.add("active");
    })
}

// Hobbies Button function
hobbiesAddBtn.addEventListener("click", () => {
    hobbiesDialog.classList.add("active");
})

hobbiesClsBtn.addEventListener("click", () => {
    hobbiesDialog.classList.remove("active");
})

// ှSave change Function
hobbiesSvChgBtn.addEventListener("click", () => {
    hobbiesDialog.classList.remove("active");
    let uniqueHobb = [];
    user_hobbies.forEach(c => {
        if(!uniqueHobb.includes(c)){
            uniqueHobb.push(c);
        }
    })
    for(let i=0; i<user_hobbies.length; i++){
        if(user_hobbies[i] === " "){
            edithobbBtn.classList.add("d-none");
        } else{
            edithobbBtn.classList.remove("d-none");
        }
    }
    displayUserHobbies(uniqueHobb);
})

themeBtn.addEventListener("mouseover", () => {
    gearIcon.classList.add("active")
})
themeBtn.addEventListener("mouseout", () => {
    gearIcon.classList.remove("active");
})

colorBos.forEach(ele => {
    ele.addEventListener("click", () => {
        console.log(ele.classList);
        themeDiaBox.classList.remove("active");
        if(ele.classList.contains("pink")){
            document.documentElement.style.setProperty("--light-violent", "#ffccff");
            document.documentElement.style.setProperty("--violent", "#ff1aff");
        } else if (ele.classList.contains("yellow")){
            document.documentElement.style.setProperty("--light-violent", "#ffffb3");
            document.documentElement.style.setProperty("--violent", "#ffff1a");
        } else if (ele.classList.contains("red")){
            document.documentElement.style.setProperty("--light-violent", "#ffb3b3");
            document.documentElement.style.setProperty("--violent", "#ff1a1a");
        } else if (ele.classList.contains("green")){
            document.documentElement.style.setProperty("--light-violent", "#ccffcc");
            document.documentElement.style.setProperty("--violent", "#1aff1a");
        }
    })
})

