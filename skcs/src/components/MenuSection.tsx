import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const menuCategories = [
  { name: "Sweets", icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDAzZjhodW5namp6Z2U5ZmU1ZWtyZDdlZzU0MTAzYnJ1Y2I4d3VmYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41ilSd59So2yggSA5/giphy.gif" },
  { name: "Fry Items", icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTdvdjhpdWF2YTJpczJmcml4ZzQ1NXJqOGN6MDZhZzdhaXZxZWdpZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wc6egY89oHKtmXUiDu/giphy.gif" },
  { name: "Starters", icon: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW9mYjZoc2c5NzhrdjZkd2Zmd25xazg1MDRwM2s1eTlocDA1Y2I4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/51IakJHlFOCjyvzj1w/giphy.gif" },
  { name: "Curries", icon: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXZzYXR5MjZyZ2JiaTE3YXVmZXJvM2Jxb3pxeTFmanhyemtleHZsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT3i0TXPRLa4WQrqik/giphy.gif" },
  { name: "Hots", icon: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWc0eTBhZjFrM293bnA4OWgwNDgzeDR6N3doenQ1dWo4YTh6M2VxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r1uMR1y61AwDe2KsWD/giphy.gif" },
  { name: "Rotis", icon: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMng5dXJuNGYxbnJzNndicmVqM2ZlcGVzbWdpMXd2azdiMmlsaHg0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HGMnnZi2WHwuXzCFYR/giphy.gif" },
  { name: "Liquids", icon: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWxhbjdvZ3gwZnp2azR6NnFzbXB4Z251YmY1NzQ5ODI2YWUydDE2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/REKrUbamPVUciBJKqE/giphy.gif" },
  { name: "Rice Items", icon: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWo0bHRtMzV4djhlMG1ocG9zM3c0amN3Z2F6ODhzMjJ0bnVwc21lZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2xgx8l1mzocWzl1zqn/giphy.gif" },
  { name: "Pickles", icon: "https://t3.ftcdn.net/jpg/04/20/07/28/360_F_420072816_fF0EFAl8TZfoQjJMMj0QH9SL7Z9VcrP8.jpg" },
  { name: "Snacks", icon: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Rma3RiNjZvaHJkbXV4dnByaTd3cDRvZHhhdHV5emMzOTdmazcyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5T0kyezV83pqrZOMPf/giphy.gif" },
  { name: "Drinks", icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjc0Y2o0Ymkwc24xM3ZnNXZqcWE2Nmp0Z2prNWIwM3c3aTF5YTZ4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UVw8rU1nyGncTGFPR7/giphy.gif" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">
          Our Menu Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
            <Link key={index} to={`/category/${category.name}`} className="no-underline">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative h-48 w-full">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-orange-900 text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;