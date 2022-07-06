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
  }
}
