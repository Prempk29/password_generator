function generatemama()
{
    
    var charmama = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
    rp = " "
    let i=0
    for ( i = 0; i < 12; i++) 
    {
        rp = rp + charmama.charAt(Math.floor(Math.random() * charmama.length))
    }
    document.getElementById("generate").value=rp;
}
function generatema() {
    var copyText = document.getElementById("generate");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}