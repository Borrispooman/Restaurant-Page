import restaurantImgUrl from "../assets/images/modern-restaurant-interior-with-rustic-accents-6142509.jpg"

export const homeContentLoad = function() {
	const body = document.querySelector("body");
	body.style.backgroundImage = `url(${restaurantImgUrl})`;

	const homeInfoContainer =  document.createElement("div");
	homeInfoContainer.className = "info-container"

};

