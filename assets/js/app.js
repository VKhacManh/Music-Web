import { BASE_API_URL, user, setUser } from "./constant.js";

import {fetchUser} from "./api/auth.api.js"

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song"[0]);

/* pop_song_right.addEventListener('click', myFunction);
function myFunction() {
    pop_song.scrollLeft += 330;
} */
console.log(pop_song_right);
pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});



fetchUser()
