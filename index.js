




//grabbing all checkboxes 
const checkboxes = document.querySelectorAll("input[type='checkbox']");

//varaible for assigning last checked
let lastChecked;
//method for handling Checkbox
function handleCheckbox(e){

    let inBetween = false;
    
    //if shift key is pressed
    //and checkbox is checked ( since function is fired even when checkbox is unchecked)
    if(e.shiftKey && this.checked)
    {
        //loop through all elements
        checkboxes.forEach( checkbox =>{
            console.log(checkbox);

            if( checkbox === this || checkbox === lastChecked)
            {
                inBetween = !inBetween;
                console.log(" start checking them inbetween");

            }

            if(inBetween)
            {
                checkbox.checked = true;
            }
        });


    }



    lastChecked = this;                                    


    
}

//if checkbox clicked call method
checkboxes.forEach(function (checkbox){
    checkbox.addEventListener("click", handleCheckbox);
})