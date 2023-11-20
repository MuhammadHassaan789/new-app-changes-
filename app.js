getData();

function getData() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
        const products = res.products;
        const container = document.getElementById('productContainer'); // Get the container element by ID

        for (let i = 0; i < products.length; i++) {
            const col = document.createElement('div');
            col.className = 'col-sm';
            col.onclick = function () {
                window.location.href = './Details/index.html?productId=' + products[i].id;
            };

            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = products[i].thumbnail;
            img.style.height = '300px';
            img.className = 'card-img-top';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.innerHTML = products[i].title;

            const price = document.createElement('p');
            price.innerHTML = products[i].price;

            col.append(card);
            card.append(img);
            card.append(cardBody);
            cardBody.append(title);
            cardBody.append(price);

            container.append(col);
        }
    });
}
