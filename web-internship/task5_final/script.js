// Product data using your local images
const products = [
  { name: "Headphones", price: 120, img: "images/headphone.jpg" },
  { name: "Smartphone", price: 550, img: "images/smartphone.jpg" },
  { name: "Camera", price: 400, img: "images/camera.jpg" }
];

const container = document.getElementById("productContainer");

// Function to display products dynamically
function display(list) {
  container.innerHTML = list.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
    </div>
  `).join("");
}

// Display all products initially
display(products);

// Search functionality
document.getElementById("search").addEventListener("input", e => {
  const key = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(key));
  display(filtered);
});
