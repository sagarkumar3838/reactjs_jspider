let id = 0;

function change() {
    ++id;
    let section = document.createElement("section"); // Create a section element
    section.className = "flex flex-col items-center p-4 border border-gray-300 bg-gray-300 rounded-lg shadow-lg mb-4"; // Add Tailwind classes to the section

    let title = document.createElement("h1");
    title.className = "text-lg font-bold mb-2"; // Add Tailwind classes for title styling

    let category = document.createElement("h1");
    category.className = "text-xl font-bold text-gray-600 mb-2"; 
    
    let brand = document.createElement("h1");
    brand.className = "text-xl font-bold text-gray-600 mb-2"; 
    
    let price = document.createElement("h1");
    price.className = "text-xl font-bold text-gray-600 mb-2"; // Add Tailwind classes for category styling

    let image = document.createElement("img");
    image.className = "w-full h-full object-cover "; // Add Tailwind classes for image styling
    image.alt = "Product Image"; // Add alt text for accessibility

    let demo = document.querySelector(".demo");
    console.log(title, category, demo, image);

    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => {
            return res.json(); // Return the promise from res.json()
        })
        .then((products) => {
            console.log(products);

            title.innerHTML = "<strong>Product Name:</strong> " + products.title;
            category.innerHTML = "<strong>Category:</strong> " + products.category;
            brand.innerHTML = "<strong>Brand:</strong> " + products.brand;
            price.innerHTML = "<strong>Price:</strong> $ " + products.price;
            image.src = products.images[0]; // Assuming products.images is an array

            // Append title, category, and image to the section
            section.appendChild(title);
            section.appendChild(category);
            section.appendChild(brand);
            section.appendChild(price);
            section.appendChild(image);
            // Optional: Add a horizontal rule

            // Append the section to the demo container
            demo.appendChild(section);
        })
        .catch((err) => {
            console.log(err);
        });
}