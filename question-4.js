// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let inv = inventory;
// จากตัวอย่าง ตอนแรก Banana x50 ให้เปลี่ยนเป็น x200 จะได้ Orange มีจำนวนต่ำที่สุด คือ 60 แทน
inv[1].quantity = 200;
let minQuantity = inv[0].quantity;
let minName = inv[0].name;

// ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
// - ผลลัพธ์ของโปรแกรมควรจะแสดงผลดังนี้

//     ```jsx
//     สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น
//     ```





// loop เพื่อเทียบ หาค่า min ของจำนวนผลไม้
for (let i = 0; i < inv.length; i++) {
  if (minQuantity > inv[i].quantity) { // ถ้าค่าที่นำมาเทียบมีค่ามากกว่า
    minQuantity = inv[i].quantity; // ให้เก็บเป็น minQuantity (ค่าที่ตำที่สุดตัวใหม่)
    minName = inv[i].name;
  }
  
}
// แสดงผลตาม Format สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ .... ซึ่งมี ... ชิ้น
let textResult = `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึ่งมี ${minQuantity} ชิ้น`
  console.log(textResult);
