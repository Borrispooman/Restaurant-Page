export const menuContentLoad =  function () {
	const mainContent =  document.querySelector("#content");
	mainContent.innerHTML = ''

	const menuInfoContainer =  document.createElement("div");
	menuInfoContainer.className = "menu-info-container"

	const menuItem1 = document.createElement("div");
	menuItem1.className = "menu-item"
	const item1Head =  document.createElement("div");
	item1Head.textContent = "Ravioli"
	const item1SubHead = document.createElement("div");
	item1SubHead.textContent = "$40"
	menuItem1.append(item1Head, item1SubHead);

	
	const menuItem2 = document.createElement("div");
	menuItem2.className = "menu-item"
	const item2Head =  document.createElement("div");
	item2Head.textContent = "Lamb"
	const item2SubHead = document.createElement("div");
	item2SubHead.textContent = "$40"
	menuItem2.append(item2Head, item2SubHead);

	const menuItem3 = document.createElement("div");
	menuItem3.className = "menu-item"

	const item3Head =  document.createElement("div");
	item3Head.textContent = "Chicken"
	const item3SubHead = document.createElement("div");
	item3SubHead.textContent = "$40"
	menuItem3.append(item3Head, item3SubHead);
	
	const menuItem4 = document.createElement("div");
	menuItem4.className = "menu-item"

	const item4Head =  document.createElement("div");
	item4Head.textContent = "Pasta"
	const item4SubHead = document.createElement("div");
	item4SubHead.textContent = "$40"
	menuItem4.append(item4Head, item4SubHead);

	
	const menuItem5 = document.createElement("div");
	menuItem5.className = "menu-item"

	const item5Head =  document.createElement("div");
	item5Head.textContent = "Steak"
	const item5SubHead = document.createElement("div");
	item5SubHead.textContent = "$40"
	menuItem5.append(item5Head, item5SubHead);

	
	const menuItem6 = document.createElement("div");
	menuItem6.className = "menu-item"

	const item6Head =  document.createElement("div");
	item6Head.textContent = "Pizza"
	const item6SubHead = document.createElement("div");
	item6SubHead.textContent = "$40"
	menuItem6.append(item6Head, item6SubHead);

	
	menuInfoContainer.append(menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6);

  mainContent.appendChild(menuInfoContainer);	
}
