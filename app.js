document.addEventListener("DOMContentLoaded", () => {
	let time = 20;
	const spantext = document.getElementById("spantext");
	const waitingtext = document.getElementById("waitingtext");
	const downloadbtn = document.getElementById("downloadbtn");
	const downloaditem = document.getElementById("downloaditem");
	const downloadinterval = setInterval(() => {
		time -= 1;
		spantext.textContent = time;
		if (time === 0) {
			clearInterval(downloadinterval);
			waitingtext.style.display = "none";
			downloadbtn.style.display = "block";
			downloaditem.setAttribute("href", "./SpaceGameInstaller.exe");
		}
	}, 1000);
});
