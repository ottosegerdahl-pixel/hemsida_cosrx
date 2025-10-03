// Sample products
const products = [
    {name: "Cleanser", price: "199 SEK", image: "images/product1.jpg"},
    {name: "Toner", price: "249 SEK", image: "images/product2.jpg"},
    {name: "Moisturizer", price: "299 SEK", image: "images/product3.jpg"},
    {name: "Serum", price: "349 SEK", image: "images/product4.jpg"},
    {name: "Sunscreen", price: "199 SEK", image: "images/product5.jpg"},
];

// Function to render products
function renderProducts(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    products.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">${p.price}</p>
            <a href="#" class="btn">Lägg till i kundvagn</a>
        `;
        container.appendChild(card);
    });
}

// Render on both pages
if(document.getElementById("featured-products")) renderProducts("featured-products");
if(document.getElementById("shop-products")) renderProducts("shop-products");
