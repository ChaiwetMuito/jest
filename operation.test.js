const pat_oper = require('./operation');

test('adds 3 * 2 to equal 6', () => {
  expect(pat_oper.multi(3, 2)).toBe("6.00");
});
test('adds a * 2 to equal A ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A', () => {
  expect(pat_oper.multi("a", 2)).toBe("A ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A");
});
test('adds 3 * b to equal B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ B', () => {
  expect(pat_oper.multi(3, "b")).toBe("B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ B");
});
test('adds a * b to equal A และ B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A และ B', () => {
  expect(pat_oper.multi("a", "b")).toBe("A และ B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A และ B");
});
test('adds null * 2 to equal โปรดใส่ตัวเลขของ A', () => {
  expect(pat_oper.multi(null, 2)).toBe("โปรดใส่ตัวเลขของ A");
});
test('adds 3 * null to equal โปรดใส่ตัวเลขของ B', () => {
  expect(pat_oper.multi(3, null)).toBe("โปรดใส่ตัวเลขของ B");
});
test('adds null * null to equal โปรดใส่ตัวเลขของ A และ B', () => {
  expect(pat_oper.multi(null, null)).toBe("โปรดใส่ตัวเลขของ A และ B");
});
test('adds 6 / 2 to equal 3', () => {
  expect(pat_oper.divide(6, 2)).toBe(3);
});
test('adds 3 + 2 to equal 5', () => {
  expect(pat_oper.sum(3, 2)).toBe(5);
});