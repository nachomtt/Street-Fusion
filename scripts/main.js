const { log } = console;
const listaProductos = document.querySelector(".products-container");
const offMenuBtn = document.querySelector(".menu-btn");
const offMenuDiv = document.querySelector(".menu-container");
const offMenuClose = document.querySelector(".close-menu-btn");
const categories = document.querySelector(".categories-container");
const categoryBtn = document.querySelectorAll(".category-btn");
const seeMore = document.querySelector("#see-more");
const sellers = document.querySelector(".best-prods-container");
const prodInfo = document.querySelector(".product-info-container");
const closeInfo = document.querySelector(".close-window");
const homeSection = document.querySelector(".home");
const cartDiv = document.querySelector(".cart-container");
const closeCart = document.querySelector(".cart-close-btn");
const infoAdd = document.getElementById("add-cart-btn");
const infoMinus = document.getElementById("info-minus");
const infoPlus = document.getElementById("info-plus");
const infoDisplay = document.getElementById("info-display");
const cartList = document.querySelector(".cart-product-list");
const itemsQty = document.getElementById("cart-total-qty");
const subtotal = document.getElementById("subtotal");
const header = document.querySelector("header");
const accountDiv = document.querySelector(".account-container");
const accountClose = document.querySelector(".close-account-btn");
const clearCartBtn = document.querySelector(".clear-cart-btn");
const categoryTitle = document.querySelector(".category-title");
const menuCounter = document.getElementById("menu-bag-counter");
const cartBtnCounter = document.querySelector(".cart-btn-counter")


/*Filter Status was created because of "allProds.next" bugging when pressing "View More",
 changing category and going back to "All" Category */
let filterStatus = false;

const renderCard = (product) => {
  //Function that returns a rendered card.

  const { id, title, price, image } = product;

  return `
    <div class="product">
    <img class="product-image" src="${
      image ? image : "https://voax.co/img/noitem.png"
    }" alt="" data-id="${id}">
    <div>
        <p class="product-title">${title}</p>
        <p class="product-price">$${price}</p>
    </div>
    </div>
    `;
};

const renderCards = (category, index) => {
  //Main products rendering. Not including "Best Sellers".

  if (category === "all") {
    listaProductos.innerHTML += allProds.prodList[index]
      .map(renderCard)
      .join("");
  }
  const filterProds = products.filter((p) => p.type === category);
  listaProductos.innerHTML += filterProds.map(renderCard).join("");
};

const filterState = (e) => {
  //Active status on category buttons.

  const selectedCategory = e.target.dataset.category;
  const filters = [...categoryBtn];
  filters.forEach((filter) => {
    if (filter.dataset.category !== selectedCategory) {
      filter.classList.remove("active");
    } else {
      filter.classList.add("active");
    }
  });
  if (selectedCategory !== "all") {
    seeMore.classList.add("hidden");
  } else {
    seeMore.classList.remove("hidden");
  }
};

const filterProds = (e) => {
  //Filtering products by clicking each category button.

  if (!e.target.classList.contains("category-btn")) return;
  filterState(e);
  if (e.target.dataset.category.toLowerCase() === "all") {
    listaProductos.innerHTML = "";
    renderCards("all", 0);
    categoryTitle.textContent = "All Products";
  } else {
    listaProductos.innerHTML = "";
    renderCards(e.target.dataset.category);
    categoryTitle.textContent = 
    e.target.dataset.category.charAt(0).toUpperCase()
     + e.target.dataset.category.slice(1);;

    filterStatus = true;
  }
};

const bestSellers = () => {
  //Rendering "Best Sellers" products with specific ids.

  const ids = [8, 4, 3, 7, 9, 2];
  for (let i = 0; i < ids.length; i++) {
    sellers.innerHTML += renderCard(products.find((e) => e.id == ids[i]));
  }
};
const showMore = () => {
  //Loading more products when the limit is reached.

  if (filterStatus == true) {
    allProds.next = 1;
    filterStatus = false;
  }
  renderCards("all", allProds.next);
  allProds.next++;
  if (allProds.next === allProds.limit) {
    seeMore.classList.add("hidden");
  }
};
const slideOpening = (main, close) => {
  main.setAttribute("style", "animation-name: slide-right-in-cart;");
  homeSection.classList.add("blur");

  close.addEventListener("click", () => {
    main.setAttribute("style", "animation-name: slide-right-out-cart;");

    setTimeout(() => {
      return main.classList.add("hidden");
    }, 500);
    if (prodInfo.classList.contains("hidden"))
      homeSection.classList.remove("blur");
  });
  return main.classList.remove("hidden");
};

const infoOpening = () => {
  //Showing info about de product displaying with animations.
  infoDisplay.value = 1;

  prodInfo.setAttribute("style", "animation-name: modal-scale-in;");
  homeSection.classList.add("blur");
  closeInfo.addEventListener("click", () => {
    prodInfo.setAttribute("style", "animation-name: modal-scale-out;");
    setTimeout(() => {
      prodInfo.classList.add("hidden");
    }, 700);
    if(cartDiv.classList.contains("hidden") &&
     offMenuDiv.classList.contains("hidden")&&
     accountDiv.classList.contains("hidden"))
    homeSection.classList.remove("blur");
  });

  return prodInfo.classList.contains("hidden")
    ? prodInfo.classList.remove("hidden")
    : prodInfo.classList.add("hidden");
};
const productInfo = (e) => {
  //Printing product info in a modal window.

  if (!e.target.classList.contains("product-image")) return;
  const { id, title, price, image, type } = products.find(
    (el) => el.id == e.target.dataset.id
  );

  document.querySelector(".product-info-img").setAttribute("src", image);
  document.getElementById("product-info-title").textContent = title;
  document.getElementById("product-info-price").textContent = "$" + price;
  document.getElementById("product-info-type").textContent =
  type.charAt(0).toUpperCase()
  + type.slice(1);;
  document.getElementById("add-cart-btn").dataset.id = id;
  document.getElementById("info-minus").dataset.id = id;
  document.getElementById("info-plus").dataset.id = id;
  document.getElementById("info-display").dataset.id = id;

  infoOpening();
  infoDisplay.addEventListener("input", () => {
    if (isNaN(infoDisplay.value) == true || infoDisplay.value < 1) {
      infoDisplay.value = 1;
    }
  });
};
const infoQty = (type) => {
  if (type === "+") {
    infoDisplay.value++;
  } else infoDisplay.value > 1 ? infoDisplay.value-- : infoDisplay;
};
const setLocal = (value) => localStorage.setItem("bag", JSON.stringify(value));
const getLocal = () => JSON.parse(localStorage.getItem("bag"));

const cartCreate = (i) => {
  const { id, image, type, title, price } = products.find(
    (e) => e.id == getLocal()[i].id
  );
  return `
  <div class="cart-product">
  <div class="cart-product-info">
      <img class="cart-product-image" src="${image}" alt="Product Image">
      <div>
          <p class="cart-product-title">${title}</p>
          <div class="cart-quantity">
              <div class="cart-quantity-selector">
                  <button class="cart-quantity-minus" data-id="${id}">-</button>
                  <p class="cart-quantity-display" data-id="${id}">${
    getLocal()[i].quantity
  }</p>
                  <button class="cart-quantity-plus" data-id="${id}">+</button>
              </div>
              <button class="cart-product-remove" data-id="${id}">Remove</button>
          </div>
      </div>
  </div>
  <p class="cart-product-price">$${price}</p>
</div>
  `;
};
const updateCart = () => {
  let itmCount = 0;
  let subCount = 0;

  getLocal().map((e) => (itmCount += parseInt(e.quantity)));
  getLocal().map((e) => {
    subCount += parseInt(
      e.quantity * products.find((el) => el.id == e.id).price
    );
  });
  itemsQty.innerHTML = itmCount;
  if(itmCount !== 0) {
    cartBtnCounter.classList.remove("hidden");
    cartBtnCounter.innerHTML = itmCount;
    menuCounter.textContent = `(${itmCount})`;
  }else {
    cartBtnCounter.classList.add("hidden");
    cartBtnCounter.innerHTML = "";
    menuCounter.textContent = "";
  }

  subtotal.innerHTML = subCount;
  cartList.innerHTML = "";
  cartList.innerHTML += getLocal()
    .map((e, i) => cartCreate(i))
    .join("");
};
const cartAdd = (id, quantity) => {
  if (getLocal() == null || getLocal().length == 0) {
    setLocal([{ id: id, quantity: quantity }]);
    // cartList.innerHTML += cartCreate(0);
    updateCart();
    return;
  }
  let cart = getLocal();
  for (let i = 0; i < getLocal().length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity += quantity;
      setLocal(cart);
      updateCart();
      return;
    } else if (i === cart.length - 1) {
      cart.push({ id: id, quantity: quantity });
      setLocal(cart);
      updateCart();
      // cartList.innerHTML += cartCreate(cart.length - 1);
      return;
    }
  }
};

const cartQty = (e) => {
  const trg = e.target;
  let cart = getLocal();
  if (trg.classList.contains("cart-quantity-plus")) {
    cart.map((el) => {
      if (el.id == trg.dataset.id) {
        el.quantity++;
        setLocal(cart);
        updateCart();
        return;
      }
    });
  } else if (trg.classList.contains("cart-quantity-minus")) {
    cart.map((el) => {
      if (el.id == trg.dataset.id && el.quantity > 1) {
        el.quantity--;
        setLocal(cart);
        updateCart();
        return;
      }
    });
  }
  if (trg.classList.contains("cart-product-remove")) {
    cart.map((el, i) => {
      if (el.id == trg.dataset.id) {
        cart.splice(i, i + 1);
        setLocal(cart);
        updateCart();
        return;
      }
    });
  }
};
const clearCart = () => {
  setLocal([]);
  updateCart();
};
const headerBtns = (e) => {
  if (e.target.classList.contains("account-btn"))
    return slideOpening(accountDiv, accountClose);
  if (e.target.classList.contains("cart-btn"))
    return slideOpening(cartDiv, closeCart);
};

const search = () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  function doSearch() {
    let input = searchInput.value.toLowerCase().trim().split(" ");
//   [white, black]
    let results = [];
    products.map((e) => {
      let status = 0;
      e.tags.map((tag) => {
        for(let j = 0; j < input.length ; j++){
           if(tag.match(input[j])){
             status ++
           }
        }
      })
      // CHEQUEA SI SE ENCONTRARON TODAS LAS PALABRAS
      if (status == input.length){
        results.push(e)
      }
    })

    if(results.length != 0){
      listaProductos.innerHTML = "";
      seeMore.classList.add("hidden");
      categoryTitle.textContent = `Showing results of " ${searchInput.value.toUpperCase()} "`;
      if(document.querySelector(".active"))
      document.querySelector(".active").classList.remove("active");
      results.map((e) => {
        listaProductos.innerHTML += renderCard(e)
      })
      return document.getElementById("products").scrollIntoView();
    }else {
      seeMore.classList.add("hidden");
      categoryTitle.textContent = `Could not be found results that matches with your search.`;
      listaProductos.innerHTML = `
      <ul class="searchError">
      <li>Check the search word spelling.</li>
      <li>Try with more generic words or using less words.</li>
      </ul>
      `;
      if(document.querySelector(".active"))
      document.querySelector(".active").classList.remove("active");
      return document.getElementById("products").scrollIntoView();
    }
  }
    searchBtn.addEventListener("click", () => {
      if (searchInput.classList.contains("hidden")) {
        searchInput.style.animationName = "search-input-in";
        searchInput.classList.remove("hidden");
      } else if(!searchInput.value){
        searchInput.style.animationName = "search-input-out";
        setTimeout(() => searchInput.classList.add("hidden"), 500);
      } else doSearch();
    });
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && searchInput.value != 0) {
          doSearch();
      }
      return
  });
};

const cart = () => {
  infoAdd.addEventListener("click", () =>
    cartAdd(infoAdd.dataset.id, parseInt(infoDisplay.value))
  );
  infoPlus.addEventListener("click", () => infoQty("+"));
  infoMinus.addEventListener("click", () => infoQty());
  cartList.addEventListener("click", (e) => cartQty(e));
  updateCart();
  clearCartBtn.addEventListener("click", () => clearCart());
};

const render = () => {
  // Cargar contenido en el dom
  document.addEventListener("DOMContentLoaded", renderCards("all", 0));
  bestSellers();
  categories.addEventListener("click", (e) => filterProds(e));
  seeMore.addEventListener("click", showMore);
  sellers.addEventListener("click", (e) => productInfo(e));
  listaProductos.addEventListener("click", (e) => productInfo(e));
  offMenuBtn.addEventListener("click", () =>
    slideOpening(offMenuDiv, offMenuClose)
  );
  cart();
  header.addEventListener("click", (e) => headerBtns(e));
  search();
};

render();
