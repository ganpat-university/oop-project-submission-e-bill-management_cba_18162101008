function myFunction()
{
    var txt;
    if (confirm("Press a ok to Submit!")) 
    {
      txt = "Confirm!";
    } 
    else 
    {
      txt = "Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}