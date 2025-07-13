export const contactContentLoad = function() {
	const contactInfoContainer =  document.createElement("div");
	contactInfoContainer.className = "home-info-container"
	
  const headLine = document.createElement("div");
	headLine.className = "home-head-line";
	headLine.textContent = "Our current phone line is broken, sorry for this inconvinience"; 
	contactInfoContainer.appendChild(headLine);

	const	mainContent = document.querySelector("#content");
	mainContent.innerHTML = '';
	mainContent.append(contactInfoContainer);
}

