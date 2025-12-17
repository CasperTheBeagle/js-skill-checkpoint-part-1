// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

// const promotionCode = "";
// const promotionCode = "SALE20";
const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

let productsInCart = products;
let discountCode = promotionCode;

//ให้เขียนฟังก์ชันชื่อ calculateTotalPrice ที่รับ products และ promotionCode เป็น Argument  
function calculateTotalPrice(productsInCart, discountCode) {
  let sumProductPrice=0;
  for (let i = 0; i < products.length; i++) {
    sumProductPrice += products[i].price * products[i].quantity;
  }
  if (promotionCode === "SALE20") { // "SALE20"
    sumProductPrice = sumProductPrice * ((100-20)/100); // ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า

  } else if (promotionCode === "SALE50") { // "SALE50"
    sumProductPrice = sumProductPrice * ((100-50)/100); // ลด 50% จากมูลค่ารวมของสินค้าในตะกร้า
  }
  else {
    sumProductPrice = sumProductPrice; // ไม่ได้รับส่วนลด
  }
  return sumProductPrice;
}
console.log(calculateTotalPrice(products, promotionCode));
