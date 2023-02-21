function add()
{
  let numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("numOne").value);
  numTwo = parseInt(document.getElementById("numTwo").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}
