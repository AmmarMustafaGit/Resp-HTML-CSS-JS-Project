function copyMenu() {
    // Copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    if (dptCategory && dptPlace) {
        dptPlace.innerHTML = dptCategory.innerHTML;
        console.log(".dpt-cat copied successfully!");
    } else {
        console.log(".dpt-cat or .departments not found.");
    }
    // Copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    if (mainNav && navPlace) {
        navPlace.innerHTML = mainNav.innerHTML;
        console.log("Navigation copied successfully!");
    } else {
        console.log("Navigation not found or target missing.");
    }
    // Copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    if (topNav && topPlace) {
        topPlace.innerHTML = topNav.innerHTML;
        console.log("Header-top copied successfully!");
    } else {
        console.log("Header-top or .thetop-nav not found.");
    }
}
// Run function after the DOM is loaded
document.addEventListener("DOMContentLoaded", copyMenu);
// //////////////////////////////////////////////////////////////////////////////////
// Open and close aside menu 
const menuButton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close'),
            addClass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addClass.classList.toggle('showmenu');
})            
closeButton.addEventListener('click', function(){
    addClass.classList.remove('showmenu');
})









// Show sub-menu on mobile
document.addEventListener("DOMContentLoaded", function () {
    const submenu = document.querySelectorAll('.has-child .icon-small');

    submenu.forEach(function(menu) {
        menu.addEventListener('click', function(e) {
            e.preventDefault(); 

            // Close all other sub-menus
            submenu.forEach((item) => {
                if (item !== this) {
                    item.closest('.has-child').classList.remove('expand');
                }
            });

            // Toggle the clicked menu
            this.closest('.has-child').classList.toggle('expand');
        });
    });
});
// -----------------Slider (Swiper)---------------------
// const swiper = new Swiper('.swiper', {
//     loop: true,
//     pagination: {
//     el: '.swiper-pagination',
//     },
// });


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        loop: true,  // Infinite looping
        autoplay: {
        delay: 3000,  //
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        speed: 800, // Transition speed in milliseconds
        effect: "slide", // Other options: "fade", "cube", "coverflow"
    });
    });



// -------------------Time-----------
window.onload = function () {
    if (window.location.href.includes("index.html") || window.location.href.includes("page-offer.html")) {
        
        function setNewEndTime(days, hours, minutes, seconds) {
            let now = new Date().getTime();
            let newEndTime = now + 
                (days * 24 * 60 * 60 * 1000) + 
                (hours * 60 * 60 * 1000) + 
                (minutes * 60 * 1000) + 
                (seconds * 1000);
            localStorage.setItem("countdownEndTime", newEndTime);
            return newEndTime;
        }

        function startCountdown(days, hours, minutes, seconds) {
            let endTime = localStorage.getItem("countdownEndTime");

            if (!endTime || new Date().getTime() > parseInt(endTime)) {
                endTime = setNewEndTime(days, hours, minutes, seconds);
            } else {
                endTime = parseInt(endTime);
            }

            function updateCountdown() {
                let now = new Date().getTime();
                let remainingTime = endTime - now;

                if (remainingTime <= 0) {
                    endTime = setNewEndTime(days, hours, minutes, seconds);
                    remainingTime = endTime - now;
                }

                let d = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                let h = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let m = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                let s = Math.floor((remainingTime % (1000 * 60)) / 1000);

                // Select all countdown elements
                document.querySelectorAll(".offer").forEach(offer => {
                    let daysElem = offer.querySelector("#days");
                    let hoursElem = offer.querySelector("#hours");
                    let minutesElem = offer.querySelector("#minutes");
                    let secondsElem = offer.querySelector("#seconds");

                    if (daysElem && hoursElem && minutesElem && secondsElem) {
                        daysElem.textContent = d;
                        hoursElem.textContent = String(h).padStart(2, '0');
                        minutesElem.textContent = String(m).padStart(2, '0');
                        secondsElem.textContent = String(s).padStart(2, '0');
                    }
                });
            }

            updateCountdown();
            setInterval(updateCountdown, 1000);
        }

        // Start the countdown
        startCountdown(1, 15, 28, 0);
    }
};


// Animation on scroll
    AOS.init();

// Show Search
const searchBtn = document.querySelector('.t-search'),
        tClose = document.querySelector('.search-close'),
            showClass = document.querySelector('.site');
searchBtn.addEventListener('click', function(){
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function(){
    showClass.classList.remove('showsearch')
})

// Hiding overlay on large screens
const overlay = document.querySelector('.overlay'); // Select the overlay
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        addClass.classList.remove('showmenu');
    }
});


// Show dpt menu
document.addEventListener('DOMContentLoaded', function() {
    const dptButton = document.querySelector('.dpt-cat .dpt-trigger');
    const dptClass = document.querySelector('.site');
    if (dptButton && dptClass) {
        dptButton.addEventListener('click', function() {
            dptClass.classList.toggle('showdpt');
        });
    } else {
        console.error('Elements not found in the DOM');
    }
});

// Product image slider
var productThumb = new Swiper('.small-image',{
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
})
var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }
})

// Loading page
document.addEventListener("DOMContentLoaded", () => {
    // Only run this if we are on index.html
    const isIndex = window.location.pathname.endsWith("/") || window.location.pathname.endsWith("/index.html");

    if (!isIndex) return; // Stop if not on index

    const loadingOverlay = document.getElementById("loadingOverlay");
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const nextPage = link.getAttribute("href");

            if (nextPage && nextPage !== "#") {
                // Show overlay and prevent scroll
                loadingOverlay.classList.add("show");

                // Disable scrolling
                document.body.classList.add("no-scroll");
                document.documentElement.classList.add("no-scroll"); // Also prevent html scroll

                setTimeout(() => {
                    window.location.href = nextPage;
                }, 3000);
            }
        });
    });
});

///////////////////////////////////////////////

//stock products bar with percentage
var stocks = document.querySelectorAll('.products .stock');

for (let x = 0; x < stocks.length; x++) {
    let stock = parseInt(stocks[x].dataset.stock), // Convert data-stock to a number
        available = parseInt(stocks[x].querySelector('.qty-available').innerHTML.replace(/,/g, '')), // Remove commas and convert to number
        sold = parseInt(stocks[x].querySelector('.qty-sold').innerHTML.replace(/,/g, '')), // Remove commas and convert to number
        percent = (sold * 100) / stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}





// The price range in the sidebar in page-category

// Get elements
// Check if the body contains the 'page-category' class
if (document.body.classList.contains('page-category')) {
    const priceRange = document.getElementById('priceRange');
    const priceFrom = document.getElementById('priceFrom');

    // Set initial values based on the range's value
    function updatePriceRange() {
        const value = priceRange.value;
        const minPrice = 50;  // The minimum price value
        const maxPrice = 500; // The maximum price value
        
        // Calculate price based on the range slider value
        const price = (maxPrice - minPrice) * (value / priceRange.max) + minPrice;
        
        // Update the displayed price values
        priceFrom.textContent = `$${Math.floor(price)}`;
    }

    // Initial update on page load
    updatePriceRange();

    // Listen for input changes on the range slider
    priceRange.addEventListener('input', updatePriceRange);
}


// //////////////////////////////////////////////////////////////




// Filter trigger in page Category
// Get elements
// Check if the current page is 'page-category'
if (window.location.pathname.includes('page-category')) {
    const filterTrigger = document.querySelector('.filter-trigger');
    const filterSidebar = document.querySelector('.filter');
    const body = document.querySelector('body');

    // When the filter trigger is clicked, show the filter sidebar
    filterTrigger.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent any default action (like following a link)
        filterSidebar.classList.add('active'); // Add class to show the sidebar
    });

    // When clicking outside of the filter sidebar, close it after a delay
    body.addEventListener('click', function(e) {
        if (!filterSidebar.contains(e.target) && !filterTrigger.contains(e.target)) {
            setTimeout(function() {
                filterSidebar.classList.remove('active'); // Remove class to hide the sidebar
            }, 250); // Delay closing by 250 milliseconds
        }
    });
}
// ///////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    // Get the elements for the mini-cart and cart trigger
    var divtoShow = '.mini-cart';
    var divPopup = document.querySelector(divtoShow);
    var divTrigger = document.querySelectorAll('.cart-trigger');
    
    // Check if the elements exist before running the code
    if (divPopup && divTrigger.length > 0) {
        
        // Function to toggle the sidebar only on small screens
        divTrigger.forEach(trigger => {
            trigger.addEventListener('click', function (e) {
                if (window.innerWidth < 992) { // Check if screen width is smaller than 992px
                    e.stopPropagation(); // Prevent immediate closing
                    
                    // Toggle the 'show' class instead of just adding it
                    if (divPopup.classList.contains('show')) {
                        divPopup.classList.remove('show'); // Close if already open
                    } else {
                        setTimeout(() => {
                            divPopup.classList.add('show'); // Open if closed
                        }, 250);
                    }
                }
            });
        });

        // Close when clicking outside the sidebar, but only on small screens
        document.addEventListener('click', function (e) {
            if (window.innerWidth < 992) { // Only apply this logic for small screens
                const isClickInsideTrigger = Array.from(divTrigger).some(trigger => trigger.contains(e.target));
                if (!divPopup.contains(e.target) && !isClickInsideTrigger) {
                    divPopup.classList.remove('show');
                }
            }
        });

        // Ensure the sidebar is hidden on larger screens when resizing
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 992) {
                divPopup.classList.remove('show');
            }
        });
    }
});
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// All About the cart

document.addEventListener("DOMContentLoaded", function () {
    const cartBody = document.querySelector('.cart-body .products.mini');
    const cartHeadNumber = document.querySelector('.cart-head .number');
    const cartNumberIndicator = document.querySelector('.cart-number .item-number');
    const cartTotal = document.querySelector('.cart-total');
    const subtotal = document.querySelector('.subtotal strong');
    const clearCartButton = document.getElementById('clear-cart');

    function getCartItems() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function updateCartUI() {
        let cartItems = getCartItems();
        if (cartBody) cartBody.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            if (typeof item.price !== 'number' || isNaN(item.price)) {
                item.price = 0;
            }

            totalPrice += item.quantity * item.price;

            if (cartBody) {
                const cartItem = document.createElement('li');
                cartItem.classList.add('item');
                cartItem.innerHTML = `
                    <div class="thumbnail object-cover">
                        <a href="#"><img src="${item.imgSrc}" alt=""></a>
                    </div>
                    <div class="item-content">
                        <p><a href="#">${item.productName}</a></p>
                        <span class="price">
                            <span>$${item.price.toFixed(2)}</span>
                            <span class="fly-item"><span class="cart-item-quantity">${item.quantity}x</span></span> 
                        </span>
                    </div>
                    <a href="#" class="item-remove" data-index="${index}"><i class="ri-close-line"></i></a>
                `;
                cartBody.appendChild(cartItem);
            }
        });

        const distinctItemsCount = cartItems.length;
        if (cartNumberIndicator) cartNumberIndicator.textContent = distinctItemsCount;
        if (cartHeadNumber) cartHeadNumber.textContent = distinctItemsCount;
        if (cartTotal) cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
        if (subtotal) subtotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    function saveCartAndUpdateUI(cartItems) {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartUI();
        localStorage.setItem('cartUpdated', Date.now());
    }

    // Function to handle adding item to cart
    function handleAddToCart(e) {
        e.preventDefault();
        const product = e.target.closest('.item');
        if (!product) return;

        const imgSrc = product.querySelector('img')?.src;
        const productName = product.querySelector('.main-links a')?.textContent;
        const productPrice = parseFloat(product.querySelector('.price .current')?.textContent.replace('$', '').trim());

        if (!imgSrc || !productName || isNaN(productPrice)) return;

        let cartItems = getCartItems();
        const existingItem = cartItems.find(item => item.productName === productName);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ imgSrc, productName, price: productPrice, quantity: 1 });
        }

        saveCartAndUpdateUI(cartItems);
    }

    // Add event listeners for all .ri-shopping-cart-line icons in both .products.mini and .products.big
    const allCartIcons = document.querySelectorAll('.products .ri-shopping-cart-line');
    allCartIcons.forEach(cartIcon => {
        cartIcon.addEventListener('click', handleAddToCart);
    });

    // Remove from cart
    if (cartBody) {
        cartBody.addEventListener('click', function (e) {
            if (e.target.closest('.item-remove')) {
                e.preventDefault();
                const index = e.target.closest('.item-remove').dataset.index;
                let cartItems = getCartItems();
                cartItems.splice(index, 1);
                saveCartAndUpdateUI(cartItems);
            }
        });
    }

    // Sync across tabs/pages
    window.addEventListener('storage', function (event) {
        if (event.key === 'cartUpdated') {
            updateCartUI();
        }
    });

    // Optional: Clear Cart Button
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function () {
            localStorage.removeItem('cart');
            updateCartUI();
        });
    }

    updateCartUI(); // Initial render
});



// //////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
    const cartTableBody = document.querySelector('.page-cart tbody'); // Where cart rows go
    const subtotalDisplay = document.querySelector('.subtotal strong'); // For total at bottom

    function getCartItems() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function setCartItems(cartItems) {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        localStorage.setItem('cartUpdated', Date.now());
    }

    // Function to truncate text if it has more than 8 words
    function truncateText(text, wordLimit) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    }

    function renderCartPage() {
        const cartItems = getCartItems();
        if (!cartTableBody) return;
        cartTableBody.innerHTML = '';

        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            const subtotal = item.quantity * item.price;
            totalPrice += subtotal;

            const row = document.createElement('tr');
            const truncatedProductName = truncateText(item.productName, 2); // Apply truncation if needed

            row.innerHTML = `
                <td class="flexitem">
                    <div class="thumbnail object-cover">
                        <a href="#"><img src="${item.imgSrc}" alt=""></a>
                    </div>
                    <div class="content">
                        <strong><a href="#">${truncatedProductName}</a></strong>
                        <p>Color: Gold</p>
                    </div>
                </td>
                <td class="p">$${item.price.toFixed(2)}</td>
                <td>
                    <div class="qty-control flexitem">
                        <button class="minus" data-index="${index}">-</button>
                        <input type="text" value="${item.quantity}" min="1" step="1" data-index="${index}">
                        <button class="plus" data-index="${index}">+</button>
                    </div>
                </td>
                <td class="tp">$${subtotal.toFixed(2)}</td>
                <td><a href="#" class="item-remove" data-index="${index}"><i class="ri-close-line"></i></a></td>
            `;
            cartTableBody.appendChild(row);
        });

        // Update total price
        if (subtotalDisplay) {
            subtotalDisplay.textContent = `$${totalPrice.toFixed(2)}`;
        }

        attachControls(); // Rebind buttons
    }

    function updateQuantity(index, newQty) {
        let cart = getCartItems();
        if (newQty < 1) return;
        cart[index].quantity = newQty;
        setCartItems(cart); // Update localStorage
        renderCartPage(); // Trigger immediate re-render
        updateMiniCart(); // Update the mini cart dynamically
    }

    function removeItem(index) {
        let cart = getCartItems();
        cart.splice(index, 1);
        setCartItems(cart); // Update localStorage
        renderCartPage(); // Trigger immediate re-render
        updateMiniCart(); // Update the mini cart dynamically
    }

    function attachControls() {
        // Plus buttons
        document.querySelectorAll('.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const index = btn.dataset.index;
                let cart = getCartItems();
                cart[index].quantity++;
                setCartItems(cart); // Update localStorage
                renderCartPage(); // Trigger immediate re-render
                updateMiniCart(); // Update the mini cart dynamically
            });
        });

        // Minus buttons
        document.querySelectorAll('.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const index = btn.dataset.index;
                let cart = getCartItems();
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                    setCartItems(cart); // Update localStorage
                    renderCartPage(); // Trigger immediate re-render
                    updateMiniCart(); // Update the mini cart dynamically
                }
            });
        });

        // Quantity manual input
        document.querySelectorAll('input[type="text"]').forEach(input => {
            input.addEventListener('change', (e) => {
                const index = input.dataset.index;
                let value = parseInt(input.value);
                if (isNaN(value) || value < 1) value = 1;
                updateQuantity(index, value); // Update and re-render
            });
        });

        // Remove buttons
        document.querySelectorAll('.item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const index = btn.dataset.index;
                removeItem(index); // Remove item and re-render
            });
        });
    }

    // Listen for updates from other tabs
    window.addEventListener('storage', function (event) {
        if (event.key === 'cartUpdated') {
            renderCartPage();
            updateMiniCart(); // Ensure the mini cart is updated
        }
    });

    // Function to update the mini cart (second code)
    function updateMiniCart() {
        const cartItems = getCartItems();
        const cartBody = document.querySelector('.cart-body .products.mini');
        const cartNumberIndicator = document.querySelector('.cart-number .item-number');
        const cartHeadNumber = document.querySelector('.cart-head .number');
        const cartTotal = document.querySelector('.cart-total');
        const subtotal = document.querySelector('.subtotal strong');

        if (!cartBody) return;

        cartBody.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            totalPrice += item.quantity * item.price;

            const cartItem = document.createElement('li');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                <div class="thumbnail object-cover">
                    <a href="#"><img src="${item.imgSrc}" alt=""></a>
                </div>
                <div class="item-content">
                    <p><a href="#">${item.productName}</a></p>
                    <span class="price">
                        <span>$${item.price.toFixed(2)}</span>
                        <span class="fly-item">
                            <span class="cart-item-quantity">${item.quantity}x</span>
                        </span> 
                    </span>
                </div>
                <a href="#" class="item-remove" data-index="${index}"><i class="ri-close-line"></i></a>
            `;
            cartBody.appendChild(cartItem);
        });

        const distinctItemsCount = cartItems.length;
        if (cartNumberIndicator) cartNumberIndicator.textContent = distinctItemsCount;
        if (cartHeadNumber) cartHeadNumber.textContent = distinctItemsCount;
        if (cartTotal) cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
        if (subtotal) subtotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    renderCartPage(); // Initial render
});

// ////////////////////////////////////////////////////////////////////////

// Show Modal On Load

document.addEventListener('DOMContentLoaded', function () {
    // Check if the page has the 'page-cart' class on the 'page' element
    if (document.querySelector('.page-cart')) {
        // Toggle the modal visibility on page load
        const siteElement = document.querySelector('.site');
        if (siteElement) {
            siteElement.classList.toggle('showmodal');
        }
    }

    // Ensure modalclose exists before adding the event listener
    const modalCloseButton = document.querySelector('.modalclose');
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', function () {
            // Check if the page has the 'page-cart' class
            if (document.querySelector('.page-cart')) {
                const siteElement = document.querySelector('.site');
                if (siteElement) {
                    siteElement.classList.remove('showmodal');
                }
            }
        });
    }
});
// ///////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.backtotop a');

    // Initially hide the button with opacity
    backToTopButton.style.opacity = '0';
    backToTopButton.style.transition = 'opacity 0.5s'; // Add transition for smooth fade-in and fade-out

    // Show the button when scrolling down 300px
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';  // Fade-in effect
        } else {
            backToTopButton.style.opacity = '0';  // Fade-out effect
        }
    });

    // Smooth scroll to the top when clicked
    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default anchor action
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Smooth scroll to the top
        });
    });
});