const users = [{ userid: "YWRtaW4=", password: "UGFzc3dvcmQ=" }];

function Background() {
  const Array = [
    "backgrounds/G-Wagon.jpg",
    "backgrounds/GT-AMG-BS.jpg",
    "backgrounds/McLaren-765lt-1.jpg",
    "backgrounds/McLaren-765lt-6.jpg",
    "backgrounds/R8-Blue.jpg",
    "backgrounds/wallpaperflare.com_wallpaper (4).jpg",
    "backgrounds/McLaren-765lt-8.jpg",
    "backgrounds/wallpaperflare.com_wallpaper (8).jpg",
    "backgrounds/BugattiBack.jpg",
    "backgrounds/McLaren-765lt-4.jpg",
    "backgrounds/McLaren-765lt-5.jpg",
  ];

  const Number = Array[Math.floor(Math.random() * Array.length)];

  document.body.style.background = `url('${Number}') no-repeat`;
  document.body.style.backgroundSize = `cover`;
  document.body.style.backgroundPosition = "center";
}

function Login() {
  const UsernameField = document.getElementById("username").value;
  const PasswordField = document.getElementById("password").value;

  const Username = Encode(UsernameField);
  const Password = Encode(PasswordField);

  const user = users.find(
    (x) => x.userid === Username && x.password === Password
  );

  const button = document.getElementById("submit-button");

  if (user) {
    console.log("Successfully Logged in.");
    var LoginPage = document.getElementById("wrapper");
    var MainPage = document.getElementById("main");

    LoginPage.classList.add("hide");
    MainPage.classList.remove("hide");
  } else {
    button.innerHTML = "Invaild User.";
    setTimeout(function () {
      button.innerHTML = "Login";
    }, 2000);
  }
}
