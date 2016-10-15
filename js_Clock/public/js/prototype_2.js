/**
 * Created by jixiang on 16/10/15.
 */


function getCurrentTime(){

    setSecPointer();
    setMinPointer();
    setHourPointer();

}


function setSecPointer(){

    setInterval(function () {
        var seconds = new Date().getSeconds();
        var sec_degree = seconds * 6; // 6 = 360 / 60
        var sec_rotate_str = "rotate(" + sec_degree + "deg)";

        $("#sec").css({ "transform": sec_rotate_str });
    },1000);//1000ms == 1s, it will be invoked per second
}

function setMinPointer(){

    setInterval(function () {
        var minutes = new Date().getMinutes();
        var min_degree = minutes * 6 // 6 = 360 / 60
        var min_rotate_str = "rotate(" + min_degree + "deg)";

        $("#min").css({ "transform" : min_rotate_str });

    },1000)
}

function setHourPointer(){

    setInterval(function () {

        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var hours_degree = hours * 30 + (minutes / 60)* 30;
        var hour_rotate_str = "rotate(" + hours_degree + "deg)";

        $("#hour").css({ "transform": hour_rotate_str});
    },1000)
}