// สร้างตัวแปร se6545 เพื่อเก็บรายชื่อนักเรียนเป็นรูปแบบ array
const se6545 = [
  "Boy",
  "Perth",
  "Eak",
  "",
  "San",
  "Tar",
  "<b style = 'color:blue'>Tin</b>",
  "",
  "Oat",
  "Guy",
  "Best",
  "K",
  "",
  "<b style = 'color:blue'>Ohm</b>",
  "Vick",
  "",
  "<b style = 'color:blue'>Four</b>",
  "<b style = 'color:blue'>P</b>",
  "<b style = 'color:red'>Aum</b>",
  "<b style = 'color:blue'>Earth</b>",
  "<b style = 'color:blue'>Oke</b>",
  "",
  "",
  "",
  "<b style = 'color:red'>Ter</b>",
  "<b style = 'color:blue'>Bonus</b>",
  "<b style = 'color:blue'>Pin</b>",
  "<b style = 'color:blue'>Min</b>",
  "",
  "<b style = 'color:red'>Jed</b>",
  "Mind",
  "<b style = 'color:red '>Bell</b>",
];

console.log(se6545);

const numberOfRows = 4; // เป็นกำหนดจำนวนแถวของตาราง
const numberOfCols = se6545.length / numberOfRows; // เป็นการคำนวณจำนวนคอลัมน์โดยการหาร  

// แปลงอาร์เรย์ 1 มิติเป็น 2 มิติ
// กำหนดตัวแปร tableArray เป็น array ว่าง เพื่อที่จะเก็บแถวของตาราง 2 มิติ
const tableArray = [];
// โดยจะวนลูปโดยใช้ for จะทำการวนซ้ำจำนวนครั้งตามค่าของ numberOfRows
for (let i = 0; i < numberOfRows; i++) {
  // ภายในลูป แถวใหม่จะสร้างขึ้นโดยใช้ method slice ของ array se6545 โดยจะรับพารามิเตอร์ 2 ตัวหรือ start, end
  // โดย start จะเป็น i * numberOfCols เป็นการคูณค่าแถวปัจจุบันคือ i กับจำนวนคอลัมน์ คือ numberOfCols
  // end จะเป็น (i + 1) * numberOfCols เป็นการคำนวณค่าสิ้นสุดของ slice 
  const row = se6545.slice(i * numberOfCols, (i + 1) * numberOfCols);
  // ในแต่ละรอบ แถวใหม่จะถูกเพิ่มไปยัง tableArray โดย method push ที่แบ่ง row ลงใน tableArray
  tableArray.push(row);
}

// แสดงผลอาร์เรย์ 2 มิติในรูปแบบตาราง
document.write("<table border='1'>");
// วนลูปแถว
for (let i = 0; i < numberOfRows; i++) {
  document.write("<tr>");
  // วนลูปคอลัมน์
  for (let j = 0; j < numberOfCols; j++) {
    document.write("<td>" + tableArray[i][j] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
