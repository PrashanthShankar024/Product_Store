


// ================== PRODUCTS DATA ==================
let products = [
  { id: 1, name: "Signature Silk Shirt", category: "Shirts", price: 1099, image: "images/shirt1.avif", likes: 999, rating: 4.9, isNew: true },
  { id: 2, name: "FormalShirt", category: "Shirts", price: 2099, image: "images/shirt2.avif", likes: 300, rating: 4.8, isNew: true },
  { id: 3, name: "Casual Shirt", category: "Shirts", price: 999, image: "images/shirt3.avif", likes: 212, rating: 4.9, isNew: true },
  { id: 4, name: "Denim Shirt", category: "Shirts", price: 799, image: "images/shirt4.avif", likes: 112, rating: 4.9, isNew: true },
  { id: 5, name: "Flannel Shirt", category: "Shirts", price: 1099, image: "images/shirt5.avif", likes: 172, rating: 4.2, isNew: true },
  { id: 6, name: "Linen Shirt", category: "Shirts", price: 1399, image: "images/shirt6.jpg", likes: 3232, rating: 4.6, isNew: true },
  { id: 7, name: "Oversized Shirt", category: "Shirts", price: 1299, image: "images/shirt7.jpg", likes: 3112, rating: 4.1, isNew: true },
  { id: 8, name: "Printed Shirt", category: "Shirts", price: 3099, image: "images/shirt8.jpg", likes: 3112, rating: 4.0, isNew: true },
  { id: 9, name: "Hawaiin Shirt", category: "Shirts", price: 599, image: "images/shirt9.jpg", likes: 1312, rating: 3.9, isNew: true },
  { id: 10, name: "Polo Shirt", category: "Shirts", price: 1499, image: "images/shirt10.jpg", likes: 3212, rating: 2.9, isNew: true },
  { id: 11, name: "Skinny Jeans", category: "Pants", price: 1599, image: "images/pant2.avif", likes: 7245, rating: 5.0 },
  { id: 12, name: "Slim fit Jeans", category: "Pants", price: 2099, image: "images/pant3.avif", likes: 2345, rating: 5.0 },
  { id: 13, name: "Straight cut Jeans", category: "Pants", price: 799, image: "images/pant4.avif", likes: 2545, rating: 4.0 },
  { id: 14, name: "Bootcut Jeans", category: "Pants", price: 699, image: "images/pant5.avif", likes: 6245, rating: 4.4 },
  { id: 15, name: "Flared Jeans", category: "Pants", price: 1299, image: "images/pant7.jpg", likes: 7245, rating: 4.2 },
  { id: 16, name: "Wide Leg Jeans", category: "Pants", price: 1399, image: "images/pant9.avif", likes: 8245, rating: 5.0 },
  { id: 17, name: "Mom Jeans", category: "Jeans", price: 2599, image: "images/pant8.avif", likes: 9245, rating: 3.9 },
  { id: 18, name: "Boyfriend Jeans", category: "Jeans", price: 9999, image: "images/pant10.avif", likes: 2495, rating: 4.0 },
  { id: 19, name: "Ripped Jeans", category: "Jeans", price: 7999, image: "images/pant1.avif", likes: 2465, rating: 4.9 },
  { id: 20, name: "High Waist Jeans", category: "Jeans", price: 89999, image: "images/pant6.avif", likes: 2145, rating: 5.0 },
  { id: 21, name: "Pullhover Hoodie", category: "Hoodies", price: 6999, image: "images/hoodie1.avif", likes: 8421, rating: 4.8, isNew: true },
  { id: 22, name: "Oversized Graphic Hoodie", category: "Hoodies", price: 6399, image: "images/hoodie2.avif", likes: 99421, rating: 4.8, isNew: true },
  { id: 23, name: "Zip Up Hoodie", category: "Hoodies", price: 3599, image: "images/hoodie3.avif", likes: 66421, rating: 4.8, isNew: true },
  { id: 24, name: "Graphic Hoodie", category: "Hoodies", price: 1899, image: "images/hoodie4.avif", likes: 22421, rating: 4.8, isNew: true },
  { id: 15, name: "Cropped Hoodie", category: "Hoodies", price: 1299, image: "images/hoodie5.avif", likes: 42166, rating: 4.8, isNew: true },
  { id: 26, name: "Sleeveless Hoodie", category: "Hoodies", price: 3599, image: "images/hoodie6.avif", likes: 42188, rating: 4.8, isNew: true },
  { id: 27, name: "Luxury Linen Kurti", category: "Kurtas", price: 3299, image: "images/kurtha1.avif", likes: 99187, rating: 4.9 },
  { id: 28, name: "Luxury Linen Kurti", category: "Kurtas", price: 2049, image: "images/kurtha2.avif", likes: 29900, rating: 4.9 },
  { id: 29, name: "A Line Kurti", category: "Kurtas", price: 26999, image: "images/kurtha3.avif", likes: 15580, rating: 4.9 },
  { id: 30, name: "Denim Jacket", category: "Jackets", price: 4599, image: "images/jocket1.webp", likes: 28867, rating: 4.9 },
  { id: 31, name: "Leather Biker Jacket", category: "Jackets", price: 4199, image: "images/jocket2.webp", likes: 26887, rating: 4.9 },
  { id: 32, name: "Bomber Jacket", category: "Jackets", price: 6399, image: "images/jocket3.jpg", likes: 26557, rating: 4.9 },
  { id: 33, name: "Leather Biker Jacket", category: "Jackets", price: 6599, image: "images/jocket4.jpg", likes: 24167, rating: 4.9 },
  { id: 34, name: "Puffer Jacket", category: "Jackets", price: 1269, image: "images/jocket5.jpg", likes: 2627, rating: 4.9 },
  { id: 35, name: "Blazzer Jacket", category: "Jackets", price: 3299, image: "images/jocket6.jpg", likes: 2967, rating: 4.9 },
  { id: 36, name: "Banarasi Saree", category: "Sarees", price: 9999, image: "images/saree1.avif", likes: 2019, rating: 5.0 },
  { id: 37, name: "Kanjeevaram Saree", category: "Sarees", price: 7999, image: "images/saree2.avif", likes: 9201, rating: 5.0 },
  { id: 38, name: "Chiffon Saree", category: "Sarees", price: 8999, image: "images/saree3.avif", likes: 2018, rating: 5.0 },
  { id: 39, name: "Silk Saree", category: "Sarees", price: 5999, image: "images/saree4.avif", likes: 8201, rating: 5.0 },
  { id: 40, name: "Georgette Saree", category: "Sarees", price: 3299, image: "images/saree5.avif", likes: 2701, rating: 5.0 },
  { id: 41, name: "Cotton Saree", category: "Sarees", price: 4499, image: "images/saree6.avif", likes: 2061, rating: 5.0 },
  { id: 42, name: "Net Saree", category: "Sarees", price: 6999, image: "images/saree7.avif", likes: 6201, rating: 5.0 },
];

let cart = [];
let currentView = 'all'; // 'all' or 'liked'

// Load data from LocalStorage
function loadData() {
  const savedLikes = localStorage.getItem('productLikes');
  if (savedLikes) {
    const data = JSON.parse(savedLikes);
    products.forEach(p => { 
      if (data[p.id]) {
        p.liked = data[p.id].liked || false;
        p.likes = data[p.id].likes || p.likes;
      }
    });
  }
  const savedCart = localStorage.getItem('cart');
  if (savedCart) cart = JSON.parse(savedCart);
}

// Save data to LocalStorage
function saveData() {
  const likesData = {};
  products.forEach(p => {
    likesData[p.id] = { liked: p.liked, likes: p.likes };
  });
  localStorage.setItem('productLikes', JSON.stringify(likesData));
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Render Products
function renderProducts(filtered) {
  const container = document.getElementById('productContainer');
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-5"><h4 class="text-muted">No products found 😕</h4></div>`;
    return;
  }

  filtered.forEach(product => {
    const newBadge = product.isNew ? `<div class="badge-new">NEW</div>` : '';
    const cardHTML = `
      <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="product-card h-100" onclick="showQuickView(${product.id})">
          ${newBadge}
          <img src="${product.image}" class="product-img w-100" alt="${product.name}">
          <div class="p-4">
            <h5 class="mb-1">${product.name}</h5>
            <p class="text-muted small">${product.category}</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <h5 class="mb-0">₹${product.price}</h5>
              <div onclick="event.stopImmediatePropagation(); toggleLike(${product.id});" class="d-flex align-items-center gap-2">
                <i class="fas fa-heart like-btn ${product.liked ? 'liked' : ''}" id="heart-${product.id}"></i>
                <span id="likeCount-${product.id}">${product.likes}</span>
              </div>
            </div>
          </div>
        
        </div>
      </div>`;
    container.innerHTML += cardHTML;
  });
}

// Toggle Like
window.toggleLike = function(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  
  product.liked = !product.liked;
  product.likes += product.liked ? 1 : -1;

  const countEl = document.getElementById(`likeCount-${id}`);
  const heartEl = document.getElementById(`heart-${id}`);
  
  if (countEl) countEl.textContent = product.likes;
  if (heartEl) heartEl.classList.toggle('liked', product.liked);

  saveData();
  updateLikedCount();

  if (currentView === 'liked' && !product.liked) {
    showLikedProducts();
  }
};

// Show All Products
window.showAllProducts = function() {
  currentView = 'all';
  document.getElementById('allTab').classList.add('active');
  document.getElementById('likedTab').classList.remove('active');
  document.getElementById('sectionTitle').textContent = 'All Products';
  filterProducts();
};

// Show Liked Products
window.showLikedProducts = function() {
  currentView = 'liked';
  document.getElementById('likedTab').classList.add('active');
  document.getElementById('allTab').classList.remove('active');
  document.getElementById('sectionTitle').textContent = 'Liked Items';
  filterProducts();
};

// Update Liked Count
function updateLikedCount() {
  const count = products.filter(p => p.liked).length;
  document.getElementById('likedCount').textContent = count;
}

// Filter Products
window.filterProducts = function() {
  const term = document.getElementById('navSearch').value.toLowerCase().trim();
  const activeCatBtn = document.querySelector('#categoryFilters .active');
  const activeCat = activeCatBtn ? activeCatBtn.getAttribute('data-category') : "All";
  
  let filtered = products.filter(p => p.name.toLowerCase().includes(term));
  
  if (activeCat !== "All") {
    filtered = filtered.filter(p => p.category === activeCat);
  }

  if (currentView === 'liked') {
    filtered = filtered.filter(p => p.liked);
  }

  const sort = document.getElementById('sortSelect').value;
  if (sort === "price-low") filtered.sort((a,b) => a.price - b.price);
  else if (sort === "price-high") filtered.sort((a,b) => b.price - a.price);
  else if (sort === "popularity") filtered.sort((a,b) => b.likes - a.likes);
  
  renderProducts(filtered);
};

// Category Filter
window.filterByCategory = function(btn) {
  document.querySelectorAll('#categoryFilters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProducts();
};

// Quick View Modal
window.showQuickView = function(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modalHTML = `
    <div class="row g-0">
      <div class="col-lg-6 p-4">
        <img src="${product.image}" class="img-fluid rounded-4" alt="${product.name}">
      </div>
      <div class="col-lg-6 p-5">
        <h2>${product.name}</h2>
        <p class="text-muted">${product.category}</p>
        <h3 class="text-dark">₹${product.price}</h3>
        <button onclick="addToCart(${product.id});" class="btn btn-primary w-100 py-4 rounded-5 mt-4 fw-bold">
          <i class="fas fa-cart-plus"></i> ADD TO CART
        </button>
      </div>
    </div>`;
  
  document.getElementById('modalBody').innerHTML = modalHTML;
  new bootstrap.Modal(document.getElementById('quickViewModal')).show();
};

// Cart Functions (unchanged)
window.addToCart = function(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity++;
  else cart.push({...product, quantity: 1});
  saveData();
  updateCartBadge();
  showToast(`${product.name} added to cart!`);
};

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartBadge').textContent = count;
}

window.showCart = function() {
  let html = '';
  if (cart.length === 0) {
    html = `<div class="text-center py-5"><h5>Your cart is empty</h5></div>`;
  } else {
    html = `<div class="list-group">`;
    cart.forEach((item, i) => {
      html += `
        <div class="d-flex gap-3 p-3 border-bottom">
          <img src="${item.image}" width="70" class="rounded">
          <div class="flex-grow-1">
            <h6>${item.name}</h6>
            <p>₹${item.price} × ${item.quantity}</p>
          </div>
          <div>
            <button onclick="changeQuantity(${i}, -1)" class="btn btn-sm">-</button>
            <span class="mx-2">${item.quantity}</span>
            <button onclick="changeQuantity(${i}, 1)" class="btn btn-sm">+</button>
            <button onclick="removeFromCart(${i})" class="btn btn-sm text-danger mt-2 d-block"><i class="fas fa-trash"></i></button>
          </div>
        </div>`;
    });
    html += `</div>`;
  }
  document.getElementById('cartBody').innerHTML = html;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById('cartTotal').textContent = `₹${total}`;
  new bootstrap.Offcanvas(document.getElementById('cartOffcanvas')).show();
};

window.changeQuantity = function(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity < 1) cart.splice(index, 1);
  saveData();
  showCart();
  updateCartBadge();
};

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  saveData();
  showCart();
  updateCartBadge();
};

window.checkout = function() {
  alert("🎉 Thank you for shopping at STYLE MANDIR! Your order is placed.");
  cart = [];
  saveData();
  updateCartBadge();
  bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas')).hide();
};

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast align-items-center text-white bg-success position-fixed bottom-0 end-0 m-4';
  toast.innerHTML = `<div class="d-flex"><div class="toast-body">${msg}</div><button class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
  document.body.appendChild(toast);
  new bootstrap.Toast(toast).show();
  setTimeout(() => toast.remove(), 3000);
}

// Initialize
function init() {
  loadData();
  updateLikedCount();
  showAllProducts();   // Start with All Products view
}

window.onload = init;














//   <div class="quick-view-overlay"><span class="btn btn-light rounded-5 px-5 py-2">Quick View</span></div> //