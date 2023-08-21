const selectedItems = [];
let itemCount = 1;
let total = 0;

// To show serial like 1,2,3
function handleClick(target) {
      const containerItem = document.getElementById("selected-items");
      const itemName = target.querySelector(".card-title").innerText;
      const price = parseFloat(target.querySelector(".card-body p span").innerText);

      const p = document.createElement("p");
      p.innerText = `${itemCount}. ${itemName}`;
      containerItem.appendChild(p);
      itemCount++;
      //     Ends here To show serial like 1,2,3

      selectedItems.push({ name: itemName, price: price });
      total += price;
      document.getElementById("total-price").innerText = total.toFixed(2);

      updateButtonAndCouponStatus();
}

function updateButtonAndCouponStatus() {
      const makePurchaseButton = document.querySelector(".make-purchase-button");
      const couponInput = document.getElementById("hs-trailing-button-add-on");
      const couponApplyButton = document.querySelector(".coupon-apply-button");
      const totalAmount = document.getElementById("total-amount");

      if (total === 0) {
            makePurchaseButton.setAttribute("disabled", true);
      } else {
            makePurchaseButton.removeAttribute("disabled");
      }

      if (total >= 200) {
            couponInput.removeAttribute("disabled");
            couponApplyButton.removeAttribute("disabled");
      } else {
            couponInput.setAttribute("disabled", true);
            couponApplyButton.setAttribute("disabled", true);
      }

      totalAmount.innerText = total.toFixed(2);
}

function applyCoupon() {
      const couponInput = document.getElementById("hs-trailing-button-add-on");
      if (couponInput.value === "SELL200") {
            const discount = total * 0.2; // Apply 20% discount
            const discountTotal = total - discount;
            // total -= discount;
            // document.getElementById("total-price").innerText = total.toFixed(2);
            document.querySelector(".total-span-discount").innerText = discountTotal.toFixed(2);
            document.querySelector(".span-discount").innerText = discount.toFixed(2);
      }
      couponInput.value = "";
      updateButtonAndCouponStatus();
}

const couponApplyButton = document.querySelector(".coupon-apply-button");
couponApplyButton.addEventListener("click", applyCoupon);

const makePurchaseButton = document.querySelector(".make-purchase-button");
document.getElementById("my_modal_1").addEventListener("click", function () {


});


updateButtonAndCouponStatus();



// If Go Home button is clicked it will refreshPage

function refreshPage() {
      window.location.reload();
}



// another just like same form;
// const modal = document.getElementById('myModal');
// const modalButton = document.getElementById('modalButton');


// modalButton.addEventListener('click', function () {
//       modal.style.display = 'none';
//       window.location.href = 'http://127.0.0.1:5500/index.html';
// });


// window.addEventListener('click', function (event) {
//       if (event.target === modal) {
//             modal.style.display = 'none';
//       }
// });



// Modal Home Refresh One
// const modal = document.getElementById('myModal');
// const modalButton = document.getElementById('modalButton').addEventListener('click', function () {
//       modal.style.display = 'none';
//       window.location.href = 'http://127.0.0.1:5500/index.html';
// });


// window.addEventListener('click', function (event) {
//       if (event.target === modal) {
//             modal.style.display = 'none';
//       }
// });









// let total = 0;

// function handleClick(target) {
//       const containerItem = document.getElementById("selected-items");
//       const itemName = target.parentNode.childNodes[3].childNodes[5].childNodes[1].innerText;
//       const p = document.createElement("p");
//       p.innerText = itemName;
//       containerItem.appendChild(p);
//       const price = target.parentNode.childNodes[3].childNodes[5].childNodes[3].childNodes[0].innerText;
//       total = parseInt(total) + parseInt(price);
//       document.getElementById("total-price").innerText = total;



//       // console.log(itemName);

// }
// function handleClick(target) {
//       const containerItem = document.getElementById("selected-items");
//       const itemName = target.querySelector(".card-title").innerText; // Get the item name using class selector
//       const price = parseFloat(target.querySelector(".card-body p span").innerText); // Get the price using class selector

//       const p = document.createElement("p");
//       p.innerText = itemName;
//       containerItem.appendChild(p);

//       total += price; // Increment the total price
//       document.getElementById("total-price").innerText = total.toFixed(2); // Display total price with 2 decimal places
// }


// const selectedItems = [];
// let itemCount = 1;
// let total = 0;

// function handleClick(target) {
//       const containerItem = document.getElementById("selected-items");
//       const itemName = target.querySelector(".card-title").innerText;
//       const price = parseFloat(target.querySelector(".card-body p span").innerText);

//       const p = document.createElement("p");
//       p.innerText = `${itemCount}. ${itemName}`;
//       containerItem.appendChild(p);
//       itemCount++;


//       selectedItems.push({ name: itemName, price: price }); // Store selected item in the array
//       total += price;
//       document.getElementById("total-price").innerText = total.toFixed(2);
// }

// // Calculate total price of selected items
// function calculateTotal() {
//       total = selectedItems.reduce((accumulator, item) => accumulator + item.price, 0);
//       document.getElementById("total-price").innerText = total.toFixed(2);
// }

// // Add event listener to "Make Purchase" button to calculate total
// const makePurchaseButton = document.querySelector(".make-purchase-button");
// makePurchaseButton.addEventListener("click", calculateTotal);




// here retrying one




// let itemCount = 1;


// function handleClick(target) {
//       const containerItem = document.getElementById("selected-items");
//       const itemName = target.querySelector(".card-title").innerText;
//       const p = document.createElement("p");
//       p.innerText = `${itemCount}. ${itemName}`;
//       containerItem.appendChild(p);
//       itemCount++;

// }




// function handleClick(target) {
//       const containerItem = document.getElementById("selected-items");
//       const itemName = target.querySelector(".card-title").innerText;
//       const itemPrice = parseFloat(target.querySelector(".card-price").innerText);
//       const p = document.createElement("p");
//       p.innerText = `${itemCount}. ${itemName}`;
//       containerItem.appendChild(p);

//       // Calculate and update total price
//       const totalPriceElement = document.getElementById("total-price");
//       const currentTotalPrice = parseFloat(totalPriceElement.innerText);
//       const newTotalPrice = currentTotalPrice + itemPrice;
//       totalPriceElement.innerText = newTotalPrice.toFixed(2);
// }





// let itemCount = 1;



// function handleClick(target) {
//       const selectItemContainer = document.getElementById("selected-items");
//       const gettingValue = target.querySelector(".card-body h2").innerText;
//       const p = document.createElement("p");
//       p.innerText = `${itemCount}. ${gettingValue}`;
//       selectItemContainer.appendChild(p);
//       itemCount++;

// }
// let total = 0;
// document.getElementById("first-card-div").addEventListener("click", function () {
//       const firstMoneyAmount = document.getElementById("first-card-money").innerText;
//       const firstMoneyAmountInt = parseInt(firstMoneyAmount).toFixed(2);

//       total += firstMoneyAmount;
//       console.log(firstMoneyAmount);

// });

// let total = 0;

// // first card
// const firstCardDiv = document.getElementById("first-card-div");
// const firstCardMoney = document.getElementById("first-card-money");

// firstCardDiv.addEventListener("click", function () {
//       const firstMoneyAmount = parseFloat(firstCardMoney.innerText);
//       total += firstMoneyAmount;


//       console.log("Running Total:", total.toFixed(2));
// });
// // second card

// const secondCardDiv = document.getElementById("second-card-div");
// const secondCardMoney = document.getElementById("second-card-money");

// secondCardDiv.addEventListener("click", function () {
//       const firstAmount = parseFloat(secondCardMoney.innerText);
//       total += firstAmount;


//       console.log("Running Total:", total.toFixed(2));
// });


