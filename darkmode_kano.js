//缃戦〉鍔犺浇瀹屾瘯鍚庢墽琛�
$(document).ready(function() {
    let kano_btn = '<div id="dark_mode_btn" style="bottom: 180px;background: #848484;opacity: .7;border-radius: 10px;" onclick="darkModeChanger()"><span class="fa fa-sun-o"></span></div>' + '<script>if($("#dark_mode_css").attr("rel") == "none"){switchIcon_kano("#dark_mode_btn span", "fa fa-sun-o");}else{switchIcon_kano("#dark_mode_btn span", "fa fa-moon-o");}</script>';
    //鑳屾櫙杩囨浮澶勭悊
    let darkmode_css_transition = 'body, #kratos-blog-post';
    $(darkmode_css_transition).css('transition', ' all .6s ease');
    //鍒ゆ柇鏄惁宸插瓨鍦ㄦ寜閽�
    if ($('#dark_mode_btn').length <= 0)
        $('.cd-tool').append(kano_btn);
});
//鍒囨崲鎸夐挳鍥炬爣鍑芥暟
function switchIcon_kano(id, className) {
    $(id).removeClass();
    $(id).addClass(className);
}
//鍒濆鍖栨湰鍦扮姸鎬�
let kano_date = new Date;
if (localStorage.kano_darkMode_state == undefined) {
    //鍒ゆ柇鏄惁涓哄鏅�
    if (!(kano_date.getHours() < 18 && kano_date.getHours() > 6)) {
        localStorage.setItem("kano_darkMode_state", "1");
        $('#dark_mode_css').attr('rel', 'stylesheet');
        //鏇存敼鍥炬爣鏍峰紡
        switchIcon_kano('#dark_mode_btn span', 'fa fa-moon-o');
    } else {
        localStorage.setItem("kano_darkMode_state", "0");
        //鏇存敼鍥炬爣鏍峰紡
        switchIcon_kano('#dark_mode_btn span', 'fa fa-sun-o');
    }
}
//鍒ゆ柇鏈湴darkmode鐘舵€�
if (localStorage.kano_darkMode_state == '0') {
    // 绉婚櫎鏍峰紡琛�
    $('#dark_mode_css').attr('rel', 'none');
    //鏇存敼鍥炬爣鏍峰紡
    switchIcon_kano('#dark_mode_btn span', 'fa fa-sun-o');
} else {
    $('#dark_mode_css').attr('rel', 'stylesheet');
    //鏇存敼鍥炬爣鏍峰紡
    switchIcon_kano('#dark_mode_btn span', 'fa fa-moon-o');
}


function darkModeChanger() {
    //鍒ゆ柇鏍峰紡rel鏄惁涓虹┖
    if ($('#dark_mode_css').attr('rel') != 'none') {
        $('#dark_mode_css').attr('rel', 'none');
        //鏇存敼鍥炬爣鏍峰紡
        switchIcon_kano('#dark_mode_btn span', 'fa fa-sun-o');
        //瀛樺偍鏈湴鐘舵€�
        localStorage.setItem("kano_darkMode_state", "0");
    } else {
        $('#dark_mode_css').attr('rel', 'stylesheet');
        //鏇存敼鍥炬爣鏍峰紡
        $('#dark_mode_btn span').removeClass();
        switchIcon_kano('#dark_mode_btn span', 'fa fa-moon-o');
        //瀛樺偍鏈湴鐘舵€�
        localStorage.setItem("kano_darkMode_state", "1");

    }
}
