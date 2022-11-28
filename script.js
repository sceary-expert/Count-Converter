function myFunction() {
    let inputNumber = document.getElementById("inputValue").value;
    console.log(inputNumber);
    // whatever you want to do with it
    //location.href = "landing-page.html";
    let FromCount = document.getElementById("fromValue").value;
    let ToCount = document.getElementById("toValue").value;
  
    let fromCount = FromCount.toLowerCase();
    let toCount = ToCount.toLowerCase();
    console.log(fromCount);
    console.log(toCount);
    if(fromCount == "tex")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        <h3> ${inputNumber} Tex = ${output} Denier</h3>
        <h3>Proof : <h3>
        <h3>The weight of 1000m material is ${inputNumber} g</h3>
        <h3>The weight of 1m material is ${inputNumber} / 1000 g</h3>
        <h3>The weeight of 9000m material is 9000 * ${inputNumber} / 1000 g</h3>
        <h3>The weight of 9000m material is ${output} g</h3>
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }
// Tex
// Denier
// Grist
// English Cotton Count
// Worsted Count
// Metric Count
// Linen Count
// Wollen Count
    }
    else if(fromCount == "denier")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else if(fromCount == "grist")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else if(fromCount == "english cotton count")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else if(fromCount == "worsted count")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else if(fromCount  == "metric count")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else if(fromCount == "metric count")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else if(fromCount == "metric count")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else if(fromCount == "linen count")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else if(fromCount  == "woolen count")
    {
      if(toCount == "tex")
      {

      }
      else if(toCount == "denier")
      {
        let output = 9 * inputNumber;
        console.log(output);
        var code = `<div>
        
        </div>`;
        document.querySelector("body").innerHTML = code;
        
      }
      else if(toCount == "grist")
      {

      }
      else if(toCount  == "english cotton count")
      {

      }
      else if(toCount == "worsted count")
      {

      }
      else if(toCount == "metric count")
      {

      }
      else if(toCount == "linen count")
      {

      }
      else if(toCount == "woolen count")
      {

      }
      else{
        var code = `<div>
        <h3> ${toCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
      }

    }
    else{
      var code = `<div>
        <h3> ${fromCount} is not a valid count system</h3> 
        </div>`;
        document.querySelector("body").innerHTML = code;
    }
    return 
  }