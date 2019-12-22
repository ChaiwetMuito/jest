function sum(a, b) {
    return a + b;
  }
function divide(a, b){
    return a / b;
    
}
function multi(a, b) {
  var valueA = a
  var valueB = b
  if (isNaN(valueA) || isNaN(valueB)) {
      if (isNaN(valueA) && isNaN(valueB)) {
          var message = {
              "ERROR": "A และ B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A และ B"
          }
          console.log(message)
          return message.ERROR
      } else if (isNaN(valueA)) {
          var message = {
              "ERROR": "A ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A"
          }
          console.log(message)
          return message.ERROR
      } else if (isNaN(valueB)) {
          var message = {
              "ERROR": "B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ B"
          }
          console.log(message)
          return message.ERROR
      }


  } else if (valueA == null || valueB == null) {
      if (valueA == null && valueB == null) {
          var message = {
              "ERROR": "โปรดใส่ตัวเลขของ A และ B"
          }
          console.log(message)
          return message.ERROR
      } else if (valueA == null) {
          var message = {
              "ERROR": "โปรดใส่ตัวเลขของ A"
          }
          console.log(message)
          return message.ERROR
      } else if (valueB == null) {
          var message = {
              "ERROR": "โปรดใส่ตัวเลขของ B"
          }
          console.log(message)
          return message.ERROR
      }

  } else {
      var result = parseFloat(valueA * valueB).toFixed(2)
      var message = {
          "Math": parseFloat(valueA).toFixed(2) + " * " + parseFloat(valueB).toFixed(2),
          "result": result
      }
      console.log(message)
      return message.result

  }

}

  module.exports = {
    sum : sum ,
    divide : divide ,
    multi : multi
  }