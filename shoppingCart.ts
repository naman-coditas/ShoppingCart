class shoppingCart {
  itemsInCart = [
    { id: 1, name: "item1", price: 1000 },
    { id: 2, name: "item2", price: 2000 },
  ];
  totalPriceInCart = 0;

  addItemsToCart(items) {
    this.itemsInCart.push(items);
  }

  removeItemsFromCart(itemIdToRemove) {
    const indexToRemove = this.itemsInCart.findIndex(
      (item) => item.id === itemIdToRemove
    );
    if (indexToRemove !== -1) {
      this.itemsInCart.splice(indexToRemove, 1);
    } else {
      console.log("Value not found in the array. No changes made.");
    }
  }

  calculateTotalPriceInCart() {
    for (const item of this.itemsInCart) {
      this.totalPriceInCart += item.price;
    }
  }
  displayItemsInCart() {
    this.itemsInCart.forEach((item) => {
      //logic for displaying the item. As this functionality would be handled by html files directly if this were an angular project. writing a dummy function
    });
  }
}
