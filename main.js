document.addEventListener("DOMContentLoaded", function () {
    let getlist = document.querySelector('#list-of-products'); 

    if (!getlist) {
        console.error("Element with ID 'list-of-products' not found!");
        return;
    }

    function renderProducts(getProducts) {
        getlist.innerHTML = getProducts.map(
            (singleProductItem) => `<p>${singleProductItem.title}</p>`
        ).join(" ");
    }

    async function fetchlistOFproducts() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/products', {
                method: 'GET'
            });
            const result = await apiResponse.json();
            console.log(result);

            if (result?.products?.length > 0) {
                renderProducts(result.products);
            }
        } catch (e) {
            console.log("Error fetching products:", e);
        }
    }

    fetchlistOFproducts();
});
