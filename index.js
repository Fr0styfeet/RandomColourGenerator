function change()
{
    color= Math.floor(Math.random()* 16777215 ).toString(16)
    color= "#"+color
    document.body.style.backgroundColor= color
    document.getElementById("generator").innerText= color
}