// Change bakery special text and style
document.getElementById("changeButton").addEventListener("click", function () {
  const description = document.getElementById("description");
  description.textContent = "Today's Special: Strawberry Cupcakes!";
  description.style.color = "darkred";
  description.style.fontSize = "22px";
});

// Add a new item to the bakery menu
document.getElementById("addButton").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Vanilla Cupcake";
  document.getElementById("menuList").appendChild(newItem);
});

// Remove the last item from the menu
document.getElementById("removeButton").addEventListener("click", function () {
  const menuList = document.getElementById("menuList");
  if (menuList.lastElementChild) {
    menuList.removeChild(menuList.lastElementChild);
  }
});
