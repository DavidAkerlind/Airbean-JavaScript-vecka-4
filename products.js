const menu = [
    {
        id: 1,
        title: "Bryggkaffe",
        desc: "En klassisk och pålitlig kopp kaffe, bryggd på månadens utvalda bönor.",
        longer_desc:
            "Bryggkaffe är en av de mest populära kaffedryckerna runt om i världen. Med sin enkla tillredningsmetod och välbalanserade smak är det det perfekta valet för kaffedrickare som vill njuta av en ren kaffesmak utan krångel.",
        price: 29,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        quantity: 1,
    },
    {
        id: 2,
        title: "Caffè Doppio",
        desc: "En dubbel espresso för de dagar då en enkel kopp inte riktigt räcker till.",
        longer_desc:
            "Caffè Doppio är en kraftfull och koncentrerad kaffedryck som är perfekt för de dagar då du behöver en extra boost av energi. Den dubbla dosen espresso ger dig en intensiv smakupplevelse som kommer att väcka dina sinnen.",
        price: 59,
        rating: 3.9,
        image: "https://images.unsplash.com/photo-1621884946220-6dd5e2ad51a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvcHBpb3xlbnwwfHwwfHx8MA%3D%3D",
        quantity: 1,
    },
    {
        id: 3,
        title: "Cappuccino",
        desc: "En balanserad blandning av espresso, ångad mjölk och krämigt skum.",
        longer_desc:
            "Cappuccino är en klassisk italiensk kaffedryck som består av lika delar espresso, ångad mjölk och mjölkskum. Den är känd för sin perfekta balans mellan styrka och sötma samt sitt krämiga skum på toppen.",
        price: 49,
        rating: 4.3,
        image: "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwcHVjaGlub3xlbnwwfHwwfHx8MA%3D%3D",
        quantity: 1,
    },
    {
        id: 4,
        title: "Latte Macchiato",
        desc: "Ett konstnärligt lager av mjölk och espresso, med en skvätt av kärlek.",
        longer_desc:
            "Latte Macchiato är en elegant kaffedryck som består av varmt skummad mjölk som hälls över en espresso. Den mjuka smaken av mjölken balanseras perfekt av den kraftfulla smaken av espresso, vilket ger en harmonisk och njutbar upplevelse.",
        price: 49,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjY2hpYXRvfGVufDB8fDB8fHww",
        quantity: 1,
    },
    {
        id: 5,
        title: "Kaffe Latte",
        desc: "En harmonisk förening av kaffe och mjölk, för en len och krämig smakupplevelse.",
        longer_desc:
            "Kaffe Latte är en mjuk och len kaffedryck som består av en perfekt balans mellan espresso och ångad mjölk. Den är känd för sin lena och krämiga konsistens samt sin milda och behagliga smak.",
        price: 59,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1604313803931-169516ec5498?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 1,
    },
    {
        id: 6,
        title: "Cortado",
        desc: "En kort men kraftfull espresso med en liten mängd ångad mjölk för att mjuka upp smaken.",
        longer_desc:
            "Cortado är en spansk kaffedryck som består av en enkel espresso som är skuren med en liten mängd ångad mjölk. Den har en stark och intensiv smak som balanseras perfekt av mjölkens krämighet, vilket ger en kraftfull men ändå len smakupplevelse.",
        price: 55,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ydGFkb3xlbnwwfHwwfHx8MA%3D%3D",
        quantity: 1,
    },
    {
        id: 7,
        title: "Santos Special",
        desc: "Som en omfamning från din favoritfilt, fast i dryckesform.",
        longer_desc:
            "Santos Special är en exklusiv kaffedryck som är perfekt för kaffedrickare som vill unna sig något extra. Med sin rika och komplexa smakprofil är det som att få en varm kram från din favoritfilt varje gång du tar en klunk.",
        price: 69,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjY2hpYXRvfGVufDB8fDB8fHww",
        quantity: 1,
    },
];

// Funktion som skapar kort för varje kaffedryck och lägger till dem i menyn
function addCoffeeSort(menu) {
    console.log("addCoffeeSort()");

    // Referens till container där korten ska visas
    let menuContainerRef = document.querySelector(".menu-container");

    // Loopar igenom menyn och skapar element för varje kaffedryck
    for (let i = 0; i < menu.length; i++) {
        let articleCardRef = document.createElement("article"); // Kortets huvudcontainer
        let cardFigRef = document.createElement("figure"); // Container för bilden
        let cardImgRef = document.createElement("img"); // Bild på kaffedrycken
        let divCardContentRef = document.createElement("div"); // Container för textinnehåll
        let cardTitleRef = document.createElement("h2"); // Titel för kaffet
        let cardDescRef = document.createElement("p"); // Kort beskrivning
        let cardLongerDescRef = document.createElement("p"); // Längre beskrivning
        let divPriceRef = document.createElement("div"); // Priscontainer
        let ratingRef = document.createElement("div"); // Betyg för kaffet
        let addBtnRef = document.createElement("button"); // Knapp för att lägga till i varukorgen

        // Fyller elementen med data från menyn
        cardTitleRef.textContent = menu[i].title;
        cardImgRef.src = menu[i].image;
        cardDescRef.textContent = menu[i].desc;
        cardLongerDescRef.textContent = menu[i].longer_desc;
        divPriceRef.textContent = menu[i].price + "kr";
        ratingRef.textContent = menu[i].rating + " ★★★★";
        addBtnRef.textContent = "Add to cart";
        addBtnRef.id = menu[i].id;

        // Lägger till klasser för styling
        articleCardRef.classList.add("card");
        cardFigRef.classList.add("card-imgcontainer");
        cardImgRef.classList.add("card-img");
        divCardContentRef.classList.add("card-content");
        cardTitleRef.classList.add("card-title");
        cardDescRef.classList.add("card-desc");
        cardLongerDescRef.classList.add("card-longerdesc");
        divPriceRef.classList.add("price");
        ratingRef.classList.add("rating");
        addBtnRef.classList.add("add-btn");

        // Bygger upp strukturen för kortet
        cardFigRef.appendChild(cardImgRef);
        articleCardRef.appendChild(cardFigRef);
        articleCardRef.appendChild(divCardContentRef);
        divCardContentRef.appendChild(cardTitleRef);
        divCardContentRef.appendChild(cardDescRef);
        articleCardRef.appendChild(divPriceRef);
        articleCardRef.appendChild(ratingRef);
        articleCardRef.appendChild(addBtnRef);

        // Lägger till kortet i menyn
        menuContainerRef.appendChild(articleCardRef);
    }
}

// Kallar på funktionen för att generera kort
addCoffeeSort(menu);

// Skapar en tom lista för varukorgen
let shoppingBag = [];

// Funktion för att lägga till produkter i varukorgen
function addToShoppingBag(button) {
    console.log("addToShoppingBag()");

    // Hämtar produktens ID från knappens attribut
    const productId = parseInt(button.id, 10);

    // Kontrollera om produkten redan finns i varukorgen
    const existingProduct = shoppingBag.find((item) => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity++; // Öka kvantiteten om den redan finns
    } else {
        shoppingBag.push(menu[button.id - 1]); // Lägg till produkten i varukorgen
    }

    // Uppdaterar UI för varukorgen
    let divShoppingBagAmountRef = document.querySelector(
        "#divShoppingBagAmount"
    );
    divShoppingBagAmountRef.classList.remove("d-none");
    updateBagItemAmount();
}

// Funktion för att uppdatera antalet varor i varukorgen
function updateBagItemAmount() {
    console.log("updateBagItemAmount()");

    let bagAmount = 0;
    shoppingBag.forEach((item) => {
        bagAmount += parseInt(item.quantity);
    });

    if (bagAmount > 0) {
        document.querySelector("#divShoppingBagAmount").textContent = bagAmount;
    } else {
        document.querySelector("#divShoppingBagAmount").classList.add("d-none");
    }
}

function showMenuPage() {
    document.querySelector(".menu-header1").classList.remove("d-none");
    document.querySelector(".menu-container").classList.remove("d-none");
    document.querySelector(".menu-header1").classList.remove("d-none");
    document.querySelector(".menu-header2").classList.add("d-none");
    document.querySelector(".shopping-bag-page").classList.add("d-none");
}

function showShoppingPage() {
    console.log("showShoppingPage()");

    document.querySelector(".menu-header1").classList.add("d-none");
    document.querySelector(".menu-container").classList.add("d-none");
    document.querySelector(".menu-header1").classList.add("d-none");
    document.querySelector(".menu-header2").classList.remove("d-none");
    document.querySelector(".shopping-bag-page").classList.remove("d-none");
    document.querySelector("#bagDropdown").classList.toggle("d-none");

    const shoppingBagPageRef = document.querySelector(".shopping-bag-page");
    shoppingBagPageRef.innerHTML = ""; // Tar bort tidigare renderade produkter

    let bagAmount2 = 0;
    shoppingBag.forEach((item) => {
        bagAmount2 += parseInt(item.quantity);
    });

    if (bagAmount2 === 0) {
        document.querySelector(".menu-sub-header").classList.remove("d-none");
        document.querySelector(".menu-sub-header").textContent =
            "Din varukorg är tom";
    } else {
        addItemTOShoppingBagPage();
    }
}
function addItemTOShoppingBagPage() {
    let shoppingBagPageRef = document.querySelector("#shoppingBagPage");
    shoppingBag.forEach((item) => {
        console.log(item);
        let itemArticleRef = document.createElement("article");
        let itemImgRef = document.createElement("img");
        let itemDetailsRef = document.createElement("div");
        let itemTitleRef = document.createElement("h3");
        let itemDescRef = document.createElement("p");
        let itemPriceRef = document.createElement("p");

        let itemActionsRef = document.createElement("div");
        let itemQuontityRef = document.createElement("select");

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Ta bort";
        removeBtn.classList.add("remove-item");
        removeBtn.dataset.id = `${item.id}`;
        itemArticleRef.dataset.id = `${item.id}`;

        for (let i = 1; i <= 10; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            if (i === item.quantity) {
                option.selected = true;
            }
            itemQuontityRef.appendChild(option);
        }

        itemQuontityRef.addEventListener("change", (event) => {
            const newQuantity = parseInt(event.target.value, 10);
            updateBagItemQuantity(item.id, newQuantity);
        });

        removeBtn.addEventListener("click", () => {
            const itemId = parseInt(removeBtn.dataset.id);
            removeItemFromCart(itemId);

            itemArticleRef.remove();
        });

        itemArticleRef.classList.add("shopping-bag-item");

        itemImgRef.classList.add("item-image");
        itemDetailsRef.classList.add("item-details");
        itemTitleRef.classList.add("item-title");
        itemDescRef.classList.add("item-desc");
        itemPriceRef.classList.add("item-price");

        itemImgRef.src = item.image;
        itemTitleRef.textContent = item.title;
        itemDescRef.textContent = item.desc;

        itemPriceRef.textContent = `${item.price * item.quantity}kr`;

        itemArticleRef.appendChild(itemImgRef);
        itemArticleRef.appendChild(itemDetailsRef);
        itemArticleRef.appendChild(itemActionsRef);

        itemDetailsRef.appendChild(itemTitleRef);
        itemDetailsRef.appendChild(itemDescRef);
        itemDetailsRef.appendChild(itemPriceRef);

        itemActionsRef.appendChild(itemQuontityRef);
        itemActionsRef.appendChild(removeBtn);

        shoppingBagPageRef.appendChild(itemArticleRef);
    });
}

function updateBagDropdown() {
    console.log("updateBagDropdown()");
    bagItemsList.innerHTML = "";
    if (shoppingBag.length === 0) {
        let emptyMsg = document.createElement("li");
        emptyMsg.textContent = "Varukorgen är tom";
        bagItemsList.appendChild(emptyMsg);
        return;
    }

    shoppingBag.forEach((item) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        const span = document.createElement("span");
        const button = document.createElement("button");

        img.src = item.image;
        p.classList.add("p-dropdown");
        fig.classList.add("fig-dropdown");
        img.classList.add("img-dropdown");
        span.classList.add("span-dropdown");
        button.classList.add("remove-btn-dropdown");
        button.dataset.id = `${item.id}`;

        p.textContent = `${item.quantity} st`;
        button.textContent = "Ta bort";
        span.textContent = `${item.title} ${
            parseInt(item.quantity) * parseInt(item.price)
        }kr`;

        button.addEventListener("click", () => {
            const itemId = parseInt(button.dataset.id);
            removeItemFromCart(itemId);
        });

        li.appendChild(p);
        li.appendChild(fig);
        fig.appendChild(img);
        li.appendChild(span);
        li.appendChild(button);

        bagItemsList.appendChild(li);
        if (item.quantity > 1) {
            return;
        }
    });
}

function removeItemFromCart(itemId) {
    console.log("removeItemFromCart()");

    let existingProduct = shoppingBag.find((item) => item.id === itemId);

    if (existingProduct) {
        existingProduct.quantity = 1;
    }

    shoppingBag = shoppingBag.filter((item) => item.id !== itemId);
    console.log(shoppingBag);
    updateBagItemAmount();

    updateBagDropdown();
}

function updateBagItemQuantity(itemId, newQuantity) {
    console.log("updateBagItemQuantity()");
    const item = shoppingBag.find((product) => product.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        // Uppdatera pris-texten för det aktuella objektet
        const itemArticleRef = document.querySelector(
            `.shopping-bag-item[data-id='${itemId}']`
        );
        if (itemArticleRef) {
            const itemPriceRef = itemArticleRef.querySelector(".item-price");
            itemPriceRef.textContent = `${item.price * item.quantity}kr`;
        }

        // Uppdatera totalmängden och dropdown
        updateBagItemAmount();
        updateBagDropdown();
        console.log(`Updated item ${item.title} to quantity: ${newQuantity}`);
    }
}

//==============================Not functions ================================
let shoppingBagBtn = document.querySelector(".shopping-bag");

shoppingBagBtn.addEventListener("mouseenter", () => {
    shoppingBagBtn.classList.add("shopping-bag-hover");
    updateBagDropdown();
    document.querySelector(".dropdown").classList.remove("d-none");
});

shoppingBagBtn.addEventListener("mouseleave", () => {
    shoppingBagBtn.classList.remove("shopping-bag-hover");
});

shoppingBagBtn.addEventListener("click", showShoppingPage);
document.querySelector("#checkout").addEventListener("click", showShoppingPage);

document.querySelector("#navMenu").addEventListener("click", showMenuPage);

document.querySelector("#bagDropdown").addEventListener("mouseleave", () => {
    document.querySelector("#bagDropdown").classList.add("d-none");
});

let allAddButtons = document.querySelectorAll(".add-btn");
allAddButtons.forEach((button) => {
    button.addEventListener("mouseenter", () =>
        button.classList.toggle("add-btn-hover")
    );

    button.addEventListener("mouseleave", () =>
        button.classList.remove("add-btn-hover")
    );

    button.addEventListener("click", () => {
        addToShoppingBag(button);
    });
});

let bagDropdownRef = document.querySelector("#bagDropdown");
let bagItemsList = document.querySelector("#bagItems");

//==============================^^^^^ Not functions ^^^^ ================================
