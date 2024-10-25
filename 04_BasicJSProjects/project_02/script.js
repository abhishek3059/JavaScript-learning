const form = document.querySelector("form")
form.addEventListener("submit",(e) => {
   e.preventDefault()
   const height = parseFloat(document.querySelector("#height").value)
   const weight = parseFloat(document.querySelector("#weight").value)
   const result = document.querySelector('#results')
   
   if(height < 153 || height > 219 || height === '' || isNaN(height)){
    result.innerHTML = "please enter valid height between 153 - 218"
   }
   else if(weight < 1 || weight > 150 || weight === '' || isNaN(weight)){
    result.innerHTML = "please enter valid weight between 1 - 150 "
   }
   else{
    result.innerHTML = `Your BMI is ${((weight/((height *height) / 10000))).toFixed(2)}`
   }

})  