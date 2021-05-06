var re=0,gr=0,bl=0;
function rshow(rs)
{
    re=rs;
    alert(re+""+gr+""+bl);
    var bg="rgb("+re+","+gr+","+bl+")";
   document.getElementById("red").style.backgroundColor=bg;
}
function gshow(gs)
{
    gr=gs;
    alert(re+""+gr+""+bl);
    var bg="rgb("+re+","+gr+","+bl+")";
   document.getElementById("red").style.backgroundColor=bg;
}
function bshow(bs)
{
    bl=bs;
    alert(re+""+gr+""+bl);
    var bg="rgb("+re+","+gr+","+bl+")";
   document.getElementById("red").style.backgroundColor=bg;
}