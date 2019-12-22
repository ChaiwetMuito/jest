# JEST 

### วิธี run test จากตัวอย่าง 
1. npm install 
2. npm test 

### วิธีดูว่า test เรารันผ่านบรรทัดไหนบ้าง
1. เข้าที่ coverage
2. เข้าที่ lcov-report
3. copy path ที่ไฟล์ index.html
4. วาง path ใน browser

### วิธีตั้งค่าสำหรับเขียนtest 
1. ลง jest 
```
npm install --save-dev jest
```
2. เพิ่ม script ลงใน package.json ดังนี้
```

"scripts": {
"test": "jest --watchAll --coverage"
}

```
### วิธีเขียน test
1. สร้าง name.test.js ซึ่งไฟล์ test นั้นต้องตามด้วย .test.js
2. require ไฟล์ที่จะ test และเขียน test โดยใช้ 
```
const pat_oper = require('./operation');
test('adds 3 * 2 to equal 6', () => {
  expect(pat_oper.multi(3, 2)).toBe("6.00");
});
```
