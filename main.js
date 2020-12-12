function Calculate() {
    var human_age = document.getElementById("human-age").value;
    var selectedValue = document.getElementById("mySelect").selectedIndex + 1;
    // console.log(selectedValue, human_age)
    selectedValue = selectedValue / 12;
    finalInputAge = parseInt(human_age) + selectedValue;
    console.log(finalInputAge);
    if (finalInputAge < 10.5) {
        var dogMonth = parseInt((finalInputAge * 12) / 11);
        document.getElementById("result").innerHTML = dogMonth + " month";
    } else if (finalInputAge >= 10.5 && finalInputAge <= 21) {
        document.getElementById("result").innerHTML = parseInt(finalInputAge / 10.5) + ' years ' + parseInt(finalInputAge % 10.5) + " months";
    } else {
        var temp = finalInputAge - 21;
        var temp1 = 2;
        var year = parseInt(temp / 4);

        var month = temp % 4;
        // console.log(month)
        var final_year = temp1 + year;
        document.getElementById("result").innerHTML = final_year + " year " + month + " month"
    }
}