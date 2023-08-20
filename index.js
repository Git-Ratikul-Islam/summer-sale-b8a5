let itemCount = 1; // Initialize the item count

function handleClick(target) {
      const selectItemContainer = document.getElementById("selected-items");
      const gettingValue = target.querySelector(".card-body h2").innerText;

      const p = document.createElement("p");
      p.innerText = `${itemCount}. ${gettingValue}`;
      selectItemContainer.appendChild(p);

      itemCount++; // Increment the item count
}




