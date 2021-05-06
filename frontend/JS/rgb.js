var re=0,gr=0,bl=0;
function rshow(rs)
{
    re=rs;
    var bg="rgb("+re+","+gr+","+bl+")";
   document.getElementById("red").style.backgroundColor=bg;
   document.getElementById("reddis").innerHTML=rs;
}
function gshow(gs)
{
    gr=gs;
    var bg="rgb("+re+","+gr+","+bl+")";
   document.getElementById("red").style.backgroundColor=bg;
   document.getElementById("grdis").innerHTML=gs;
}
function bshow(bs)
{
    bl=bs;
    var bg="rgb("+re+","+gr+","+bl+")";
   document.getElementById("red").style.backgroundColor=bg;
   document.getElementById("bldis").innerHTML=bs;
}