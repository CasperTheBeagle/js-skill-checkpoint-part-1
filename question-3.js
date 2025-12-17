// Question #3
let userPassword = "";

// เริ่มเขียนโค้ดตรงนี้
console.log(checkPasswordStrength(userPassword));

// Ex for ChecK Input Out Put
// userPassword = "ssswnalWadqQ"
// console.log(checkPasswordStrength(userPassword)); // "Strong"
// userPassword = "TechUp"
// console.log(checkPasswordStrength(userPassword)); // "Medium"
// userPassword = "abcde"
// console.log(checkPasswordStrength(userPassword)); // "Weak"

// - ให้เขียนฟังก์ชัน `checkPasswordStrength` ซึ่งรับ `userPassword` เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้
function checkPasswordStrength(password){
    let psw = password;
    let status="";
    if(psw.length<6){//น้อยกว่า 6	“Weak”
        status="Weak";
    }else if(psw.length>=6 && psw.length<=10){//ระหว่าง 6-10	“Medium” (มากกว่าเท่ากับ 6 ร้อนกว่าเท่ากับ 10)
        status="Medium";
    }else if (psw.length>10){//มากกว่า 10	“Strong”
        status="Strong";    
    }
    // else {
    //     status="Error : maybe value is not string"
    // }
    return status;
}
