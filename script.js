document.addEventListener("keydown", function (event) {
  /*
  if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    alert('Undo!')
  }
  */
  console.log("Pressed key: ", event);
  if (
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "0" ||
    event.key == "."
  ) {
    pressNumber(event.key);
  } else if (
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/"
  ) {
    pressOperation(event.key);
  } else if (event.key == "Enter") {
    pressOperation("=");
  } else if (event.key == "Backspace") {
    pressClear();
  }
});
/*

document.getElementById("body").addEventListener("keydown", keyPressed);

function keyPressed() {
  console.log("Pressed key:", )
  //document.getElementById("demo").style.backgroundColor = "red";
}
*/

function pressClear() {
  console.log("pressClear pressed");
  document.getElementById("display1").innerHTML = "0";
  document.getElementById("display2").innerHTML = "0";
  document.getElementById("operator").innerHTML = "";
  document.getElementById("display1Value").innerHTML = "";
}

function pressNumber(pressedNumber) {
  console.log("Pressed Number: ", pressedNumber);
  if (document.getElementById("display2").innerHTML != "0") {
    document.getElementById("display2").innerHTML =
      document.getElementById("display2").innerHTML + pressedNumber;
  } else {
    document.getElementById("display2").innerHTML = pressedNumber;
  }
}

function pressDot() {
  if (document.getElementById("display2").innerHTML.indexOf(".") == -1) {
    document.getElementById("display2").innerHTML =
      document.getElementById("display2").innerHTML + ".";
  }
}

function executeOperation() {
  switch (document.getElementById("operator").innerHTML) {
    case "+":
      console.log("operator +");
      document.getElementById("display1").innerHTML =
        Number(document.getElementById("display1Value").innerHTML) +
        Number(document.getElementById("display2").innerHTML);
      document.getElementById("display2").innerHTML = 0;
      document.getElementById("operator").innerHTML = "";
      break;
    case "-":
      console.log("operator -");
      document.getElementById("display1").innerHTML =
        Number(document.getElementById("display1Value").innerHTML) -
        Number(document.getElementById("display2").innerHTML);
      document.getElementById("display2").innerHTML = 0;
      document.getElementById("operator").innerHTML = "";
      break;
    case "*":
      console.log("operator *");
      document.getElementById("display1").innerHTML =
        Number(document.getElementById("display1Value").innerHTML) *
        Number(document.getElementById("display2").innerHTML);
      document.getElementById("display2").innerHTML = 0;
      document.getElementById("operator").innerHTML = "";
      break;
    case "/":
      console.log("operator /");
      if (Number(document.getElementById("display2").innerHTML) == "0") {
        document.getElementById("display1").innerHTML = "Error Divide by 0";
        document.getElementById("display2").innerHTML = 0;
        document.getElementById("operator").innerHTML = "";
      } else {
        document.getElementById("display1").innerHTML =
          Number(document.getElementById("display1Value").innerHTML) /
          Number(document.getElementById("display2").innerHTML);
        document.getElementById("display2").innerHTML = 0;
        document.getElementById("operator").innerHTML = "";
      }
      break;
  }
}

function pressOperation(operation) {
  if (
    operation == "+" ||
    operation == "-" ||
    operation == "*" ||
    operation == "/"
  ) {
    if (document.getElementById("operator").innerHTML == "") {
      document.getElementById("operator").innerHTML = operation;
      document.getElementById("display1Value").innerHTML =
        document.getElementById("display2").innerHTML;
      document.getElementById("display1").innerHTML =
        document.getElementById("display1Value").innerHTML +
        document.getElementById("operator").innerHTML;
    } else {
      document.getElementById("nextoperator").innerHTML =
        document.getElementById("operator").innerHTML;
      executeOperation();
      console.log("non empty operator");
      document.getElementById("operator").innerHTML =
        document.getElementById("nextoperator").innerHTML;
      document.getElementById("nextoperator").innerHTML = "";
      document.getElementById("display1Value").innerHTML =
        document.getElementById("display1").innerHTML;
    }
    /*
    else {
        document.getElementById("operator").innerHTML = operation;
        document.getElementById("display1Value").innerHTML =
        document.getElementById("display2").innerHTML;
        document.getElementById("display1").innerHTML =
        document.getElementById("display1Value").innerHTML +
        document.getElementById("operator").innerHTML;
    }
    */
    document.getElementById("display2").innerHTML = 0;
  } else if (operation == "=") {
    if (document.getElementById("operator").innerHTML != "") {
      executeOperation();
    }
  }
}
