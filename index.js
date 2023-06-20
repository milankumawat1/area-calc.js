function calculateArea() {
  var length = parseFloat(prompt("Enter the length of the rectangle:"));
  var width = parseFloat(prompt("Enter the width of the rectangle:"));
  
  return length * width;
}


var rectangleArea = calculateArea();
console.log(rectangleArea);
