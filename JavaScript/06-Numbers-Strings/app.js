function productDescription(strings, productName, productPrice){
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    return "This is a product!";
}

const prodName = "JS";
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is \$${prodPrice}`