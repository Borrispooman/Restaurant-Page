import restaurantImgUrl from "../assets/images/modern-restaurant-interior-with-rustic-accents-6142509.jpg"
import chefImgUrl from "../assets/images/pexels-cottonbro-4253320.jpg" 
export const homeContentLoad = function() {
	const body = document.querySelector("body");
	body.style.backgroundImage = `url(${restaurantImgUrl})`;

	const homeInfoContainer =  document.createElement("div");
	homeInfoContainer.className = "home-info-container"
	
  const headLine = document.createElement("div");
	headLine.className = "home-head-line"
	headLine.textContent = "An authentic French dining experience"
  homeInfoContainer.appendChild(headLine);

	const chefImgDiv = document.createElement("div");
	chefImgDiv.className = "chef-img-div";
	const chefImg = document.createElement("img");
	chefImg.className = "chef-image";
	chefImg.src = `${chefImgUrl}`;
	chefImgDiv.appendChild(chefImg);	
	homeInfoContainer.appendChild(chefImgDiv);

	const subHead = document.createElement("div");
	subHead.className = "home-sub-head"
	subHead.textContent = "Made with passion since the 1900's";
  homeInfoContainer.appendChild(subHead);

	const subHead2 = document.createElement("div");
	subHead2.className = "home-sub-head-2"
	subHead2.textContent = "Book today!"
	homeInfoContainer.appendChild(subHead2);
	
 	const mainContent =  document.querySelector("#content");
	mainContent.innerHTML = '';
	mainContent.appendChild(homeInfoContainer);

};

