button = document.getElementById("btn");
button.addEventListener("click",randomNum)

function randomNum()
{
    document.getElementById("message").innerHTML = Math.random();
}