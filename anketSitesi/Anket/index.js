
var loginPanel = document.getElementById("loginPanel");
var singUpPanel=document.getElementById("singUpPanel");
function openLoginPanel() {
    
    loginPanel.style.display = "flex";
   singUpPanel.style.display="none";

   }
 
function openSingUpPanel(){
    
    singUpPanel.style.display="flex";
    loginPanel.style.display="none";
    

}

function closeLogin(){
    loginPanel.style.display=("none");
}
function closeSingUp(){
    singUpPanel.style.display="none";
}
