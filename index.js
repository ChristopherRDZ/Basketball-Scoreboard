let points_guest = 0;
let points_home = 0;
let pointEl_home;
let pointEl_guest;
pointEl_home = document.getElementById('show-score-home');
pointEl_guest = document.getElementById('show-score-guest');

function addScore(user, points){
    if (user === 'home'){
        points_home += points;
        points_home = Math.min(999, points_home);
        pointEl_home.textContent = points_home;
    } else if (user === 'guest'){
        points_guest += points;
        points_guest = Math.min(999, points_guest);
        pointEl_guest.textContent = points_guest;
    }
}

function reset(){
    points_home = 0;
    points_guest = 0;
    pointEl_home.textContent = points_home;
    pointEl_guest.textContent = points_guest;
}
