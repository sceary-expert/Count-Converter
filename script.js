function myFunction() {
    let inputNumber = document.getElementById("inputValue").value;
    console.log(inputNumber);
    // whatever you want to do with it
    //location.href = "landing-page.html";
    let fromCount = document.getElementById("fromValue").value;
    let toCount = document.getElementById("toValue").value;
    console.log(fromCount);
    console.log(toCount);
    if(fromCount == "tex")
    {
      if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div><h3>The weight of 1000m material is ${inputNumber} g</h3><h3>The weight of 1m material is ${inputNumber} / 1000 g</h3><h3>The weight of 9000m material is ${output} g</h3></div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "woolen count")
      {

      }
      else if(toCount  == "")
      {

      }
    }
    else if(fromCount == "")
    {

    }
    return 
  }