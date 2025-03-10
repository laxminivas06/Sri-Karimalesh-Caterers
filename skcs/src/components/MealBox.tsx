import React, { useState } from "react";

const MealBox = () => {
  const [notification, setNotification] = useState(""); // State for notification message
  const [breakfastQuantities, setBreakfastQuantities] = useState({}); // Track quantities for breakfast items
  const [lunchQuantities, setLunchQuantities] = useState({}); // Track quantities for lunch items
  const [addedBreakfastItems, setAddedBreakfastItems] = useState({}); // Track added breakfast items
  const [addedLunchItems, setAddedLunchItems] = useState({}); // Track added lunch items

  const breakfastOptions = [
    { name: "Poha", img: "https://www.funfoodfrolic.com/wp-content/uploads/2024/04/Kanda-Poha-Blog.jpg", price: 5 },
    { name: "Idli", img: "https://www.ticklingpalates.com/wp-content/uploads/2020/06/Soft-Spongy-Idli-Recipe-500x500.jpg", price: 4 },
    { name: "Sabudana Khichdi", img: "https://www.sharmispassions.com/wp-content/uploads/2022/02/sabudana-khichdi4.jpg", price: 6 },
    { name: "Godhuma rava Upma", img: "https://www.sharmispassions.com/wp-content/uploads/2013/04/WheatRavaUpma4.jpg", price: 5 },
    { name: "Pasta", img: "https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp", price: 7 },
    { name: "Tomato Bath", img: "https://vismaifood.com/storage/app/uploads/public/2d7/f19/72f/thumb__1200_0_0_0_auto.jpg", price: 3 },
  ];

  const lunchOptions = [
    { name: "Mint Coriander Rice", img: "https://i0.wp.com/www.tomatoblues.com/wp-content/uploads/2012/02/DSC_0195.jpg?fit=1192%2C1800&ssl=1", price: 6 },
    { name: "Lemon Rice", img: "https://www.whiskaffair.com/wp-content/uploads/2019/03/Lemon-Rice-2-3.jpg", price: 5 },
    { name: "Pulihora (Tamarind)", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/puliyogare-recipe-500x500.jpg", price: 5 },
    { name: "Tomato Rice", img: "https://priyascurrynation.com/wp-content/uploads/2018/05/tomato_rice_recipe1.jpg", price: 5 },
    { name: "Pulao", img: "https://easyindiancookbook.com/wp-content/uploads/2022/03/coconut-milk-pulao-instant-pot-5.jpg", price: 7 },
    { name: "Paneer Rice", img: "https://www.indianveggiedelight.com/wp-content/uploads/2023/09/paneer-fried-rice-featured.jpg", price: 6 },
    { name: "Mushroom Rice", img: "https://eatsomethingvegan.com/wp-content/uploads/2022/01/Mushroom-Rice-1.jpg", price: 7 },
    { name: "Curd Rice", img: "https://palatesdesire.com/wp-content/uploads/2022/04/curd-rice-recipe-card@palates-desire.jpg", price: 4 },
  ];

  const addToCart = (itemName, type) => {
    const item = type === "breakfast" ? breakfastOptions.find(option => option.name === itemName) : lunchOptions.find(option => option.name === itemName);
    const quantity = type === "breakfast" ? breakfastQuantities[itemName] : lunchQuantities[itemName];

    if (item && quantity > 0) {
      const cartItem = {
        name: item.name,
        price: item.price,
        img: item.img,
        quantity: quantity, // Use the specific quantity for the item
        pack: type === "breakfast" ? "Single Plate" : "N/A",
        option: "N/A",
        source: type // Add source information
      };
      const currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
      currentCart.push(cartItem);
      localStorage.setItem("shoppingCart", JSON.stringify(currentCart));
      
      if (type === "breakfast") {
        setAddedBreakfastItems(prev => ({ ...prev, [itemName]: true })); // Track added breakfast items
        setBreakfastQuantities(prev => ({ ...prev, [itemName]: 0 })); // Reset quantity after adding to cart
        setNotification(`Added ${item.name} from Breakfast!`);
      } else {
        setAddedLunchItems(prev => ({ ...prev, [itemName]: true })); // Track added lunch items
        setLunchQuantities(prev => ({ ...prev, [itemName]: 0 })); // Reset quantity after adding to cart
        setNotification(`Added ${item.name} from Lunch!`);
      }

      // Clear notification after 2 seconds
      setTimeout(() => setNotification(""), 2000);
    } else {
      console.error("Item not found or quantity is zero:", itemName);
    }
  };

  const handleQuantityChange = (itemName, type, change) => {
    if (type === "breakfast") {
      setBreakfastQuantities(prev => {
        const newQuantity = (prev[itemName] || 0) + change;
        return { ...prev, [itemName]: Math.max(newQuantity, 0) }; // Prevent negative quantity
      });
    } else {
      setLunchQuantities(prev => {
        const newQuantity = (prev[itemName] || 0) + change;
        return { ...prev, [itemName]: Math.max(newQuantity, 0) }; // Prevent negative quantity
      });
    }
  };

  return (
    <section id="mealbox" className="py-20 px-4 bg-orange-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">Daily Box</h2>

        {/* Notification Message */}
        {notification && (
          <div className="fixed top-16 right-4 bg-green-500 text-white text-sm px-4 py-2 rounded shadow-lg animate-fade">
            {notification}
          </div>
        )}

        {/* Breakfast Section */}
        <div className="max-w-7xl mx-auto rounded-2xl shadow-xl overflow-hidden p-12 bg-yellow-100 mb-12">
          <h3 className="text-3xl font-semibold text-center mb-6">Breakfast Options</h3>
          <p className="mb-4 text-center">Available Breakfast Items:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakfastOptions.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-lg" /> {/* Adjusted image size */}
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-lg font-bold">${item.price}</span>
                {/* Quantity Adjustment for Breakfast */}
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={() => handleQuantityChange(item.name, "breakfast", -1)}
                    className="bg-red-500 text-white px-4 py-2 rounded-l-md hover:bg-red-600 transition duration-200"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    value={breakfastQuantities[item.name] || 0}
                    readOnly
                    className="border border-gray-300 rounded-md p-2 w-20 text-center mx-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(item.name, "breakfast", 1)}
                    className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToCart(item.name, "breakfast")}
                  className={`mt-2 px-4 py-2 rounded-md ${addedBreakfastItems[item.name] ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  {addedBreakfastItems[item.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Lunch Section */}
        <div className="max-w-7xl mx-auto rounded-2xl shadow-xl overflow-hidden p-12 bg-green-100">
          <h3 className="text-3xl font-semibold text-center mb-6">Lunch Options</h3>
          <p className="mb-4 text-center">Available Lunch Items:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lunchOptions.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-lg" /> {/* Adjusted image size */}
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-lg font-bold">${item.price}</span>
                {/* Quantity Adjustment for Lunch */}
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={() => handleQuantityChange(item.name, "lunch", -1)}
                    className="bg-red-500 text-white px-4 py-2 rounded-l-md hover:bg-red-600 transition duration-200"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    value={lunchQuantities[item.name] || 0}
                    readOnly
                    className="border border-gray-300 rounded-md p-2 w-20 text-center mx-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(item.name, "lunch", 1)}
                    className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToCart(item.name, "lunch")}
                  className={`mt-2 p-2 rounded ${addedLunchItems[item.name] ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  {addedLunchItems[item.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealBox;