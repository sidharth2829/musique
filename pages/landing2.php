<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./landing2.css"/>
    <title>landing page</title>
</head>
<body>
    
    <div class="navbar">
       
        <div class="logo">
            <img src="../assets/musique.png"/>
        </div>

        <div class="nav-elements">
            <a href="" class="nav-element" onclick="document.getElementById('answers').style.display = 'block';">HOME</a>
            <a href="" class="nav-element">ABOUT US</a>
            <a href="" class="nav-element">CONTACT US</a>
            <a href="" class="nav-element"><?php session_start(); echo" ".$_SESSION["username"]."         "?></a>
            <a href="login.html" class="nav-element">SIGN OUT</a>
        </div>

    </div>

    <div class="intro"> musique <br>
        <p>elevate your melodies<br>empower your mind<br>where music meets learning</p><br>
    </div>

    <div class="circles">
        <div class="row  hover-1">
            <a href="#"><img src="../assets/Translation.png" class="features-img"  width=""/></a>
            <div class="image-text-1 image-text">Translation </div>
        </div>

      <div class="row-2 ">

        <div class="circle  hover-2"> <a href="#"><img src="../assets/Games.png" class="features-img" /></a>
            <div class="image-text-2 image-text"> Games</div>
        </div>

        <div class="circle  hover-3"> <a href="#"><img src="../assets/guitar.png" class="features-img" /></a>
            <div class="image-text-3 image-text">Chords </div>
        </div>
      </div>

      <div class="row  hover-4"> <a href="#"><img src="../assets/Player.png" class="features-img" /></a>
        <div class="image-text-4 image-text"> Player</div>
    </div>

    </div>
    <div id="answers" onclick="offClick()">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, ut!</div>


</body>
<script>
function offClick()
    {
        document.getElementById("answers").style.display = "none";
    }

    </script>

</html>