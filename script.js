let boxHard = document.querySelector(".left-hard-skills");
let boxHardIcon = document.querySelector(".left-hard-title-icon");
let boxHardText = document.querySelector(".left-hard-title-text");
document.querySelector(".left-hard-title").addEventListener("click", function (){
	if (boxHard.style.display === "flex"){
		boxHard.style.display = "none";
		boxHardIcon.src = "assests/Arrow1.svg";
		boxHardText.style.color = "#767676";
	} else {
		boxHard.style.display = "flex";
		boxHardIcon.src = "assests/Arrow2.svg";
		boxHardText.style.color = "#2B2B2B";
	}
});
 
let boxSoft = document.querySelector(".left-soft-skills");
let boxSoftIcon = document.querySelector(".left-soft-title-icon");
let boxSoftText = document.querySelector(".left-soft-title-text");
document.querySelector(".left-soft-title").addEventListener("click", function (){
	if (boxSoft.style.display === "flex"){
		boxSoft.style.display = "none";
		boxSoftIcon.src = "assests/Arrow1.svg";
		boxSoftText.style.color = "#767676";
	} else {
		boxSoft.style.display = "flex";
		boxSoftIcon.src = "assests/Arrow2.svg";
		boxSoftText.style.color = "#2B2B2B";
	}
});