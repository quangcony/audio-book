$(".slider-two").slick({
  infinite: true,
  autoplayspeed: 3000,
  slidesToShow: 3,
  variableWidth: true,
  autoplay: true,
  prevArrow: ".site-slider-two .slider-btn .prev",
  nextArrow: ".site-slider-two .slider-btn .next",
});
$(".slider-two-2").slick({
  infinite: true,
  autoplayspeed: 3000,
  slidesToShow: 3,
  variableWidth: true,
  autoplay: true,
  prevArrow: ".site-slider-two-2 .slider-btn .prev",
  nextArrow: ".site-slider-two-2 .slider-btn .next",
});
$(".slider-three").slick({
  prevArrow: ".site-slider-three .slider-btn .prev",
  nextArrow: ".site-slider-three .slider-btn .next",
});

$(".slider-four").slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 300,
  prevArrow: ".site-slider .slider-btn .prev",
  nextArrow: ".site-slider .slider-btn .next",
});
$(".slider-qc").slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 300,
  prevArrow: ".site-slider-qc .slider-btn .prev",
  nextArrow: ".site-slider-qc .slider-btn .next",
});
$(".slider-comic-box").slick({
  lazyLoad: "ondemand",
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: ".site-slider-comic .slider-btn .prev",
  nextArrow: ".site-slider-comic .slider-btn .next",
});

$(".slider-sale-book").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: ".site-slider-sale .slider-btn .prev",
  nextArrow: ".site-slider-sale .slider-btn .next",
});
$(".slider-comic").slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 300,
  prevArrow: ".site-slider-comic .slider-btn .prev",
  nextArrow: ".site-slider-comic .slider-btn .next",
});

/*Fillter Selection*/
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("list");
var btns = btnContainer.getElementsByClassName("list-inline-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    $("#list li ").removeClass("active");
    this.className += " active";
  });
}

/*playlist video */

function videoPlayer() {
  var currentVideo = 0;
  $("#videoPlayer")[0].src = $("#playlist li a")[0];
  $("#videoPlayer")[0].play();
  $("#playlist li a").click(function (e) {
    e.preventDefault();
    $("#videoPlayer")[0].src = this;
    $("#videoPlayer")[0].play();
    $("#playlist li ").removeClass("current-video");
    currentVideo = $(this).parent().index;
    $(this).parent().addClass("current-video");
  });
}

/*Form*/
formLogin();
function formLogin() {
  var modal = document.getElementById("id01");
  var modal2 = document.getElementById("id02");
  var modal3 = document.getElementById("id03");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  };
}

function submitLogin() {
  var username = document.forms["form01"]["uname"].value;
  var psw = document.forms["form01"]["psw-login"].value;
  if (username == "ADMIN" && psw == "admin") {
    alert("Đăng nhập thành công");
  } else {
    document.getElementById("demo").innerHTML =
      "*Tài khoản hoặc mật khẩu không đúng !";
    document.getElementById("demo").style.color = "red";
    return false;
  }
}

function forgetpsw() {
  alert("Username : ADMIN && Password: admin");
}
function showPsw() {
  var x = document.getElementById("myPsw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

/* validation password*/
function confirmPsw() {
  var a = document.getElementById("psw").value;
  var b = document.getElementById("psw-repeat").value;
  if (a == b) {
    alert("Đăng ký thành công !");
  } else {
    document.getElementById("message").innerHTML = "**Passwords are not same!";
    return false;
  }
}

$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#list-search *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  console.log(winScroll);
  console.log(height);
  console.log(scrolled);
  document.getElementById("myBar").style.width = scrolled + "%";
}

function click1(obj) {
  obj.style.color = "red";
  alert("Đã thêm vào mục yêu thích");
}
