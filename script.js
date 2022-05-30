
var p = document.querySelector("p");
var countLikes =3;

function addlike ()
{
    countLikes++;
    p.innerText = countLikes + " like(s)"
}