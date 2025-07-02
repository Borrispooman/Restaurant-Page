import coastImgUrl from "../assets/images/coast-palm-beach-10.jpg"


export const homeContentLoad = function() {
const coastImg = document.createElement("img");
const contentContainer = document.querySelector("#content");

coastImg.src = coastImgUrl; 
coastImg.alt = "An image of the coast cafe outdoor seating."

contentContainer.append(coastImg);
};
