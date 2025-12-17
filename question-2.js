// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
let inv = inventory
// console.log(inv);

// 1) ให้แก้ไขจำนวนสินค้า “Apple” จาก `100` เป็น `200`
inv[0].quantity=200
// console.log(inv);

// 2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา `20` บาท และมีจำนวน `300` ชิ้นในสต็อก
inv.push({name:"Orange",price:20,quantity:300})
// console.log(inv);

// 3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
let sumPriceValue = 0;
for (let i = 0; i < inv.length; i++) {
  sumPriceValue +=inv[i].quantity*inv[i].price;
}
// console.log(sumPriceValue);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${sumPriceValue} บาท`)
