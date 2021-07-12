function getCheckedValues() {
    var checkedArr = [];
    var ischeckd = document.querySelectorAll('input[type=checkbox]:checked')
    
    for (var i = 0; i < ischeckd.length; i++) {
        checkedArr.push(ischeckd[i].name)
      }
      
      return checkedArr
  }
  var checkdArr = getCheckedValues();
  console.log(checkdArr);


var tablebody = document.getElementById("table-body");
function generateTableData(list){
var tablerow = document.createElement("tr");
tablerow.className = "tablerow";
var data1 = document.createElement("td")
data1.innerText = list.id;
data1.className = "datatext2"
var data2 = document.createElement("td")
data2.innerText = list.medicineName;
data2.className = "datatext1"
var data3 = document.createElement("td")
data3.innerText = list.medicineBrand;
data3.className = "datatext2"
var data4 = document.createElement("td")
data4.innerText = list.expiryDate;
data4.className = "datatext1"
var data5 = document.createElement("td")
data5.innerText = list.unitPrice;
data5.className = "datatext2"
var data6 = document.createElement("td")
data6.innerText = list.stock;
data6.className = "datatext2";
tablerow.appendChild(data1)
tablerow.appendChild(data2)
tablerow.appendChild(data3)
tablerow.appendChild(data4)
tablerow.appendChild(data5)
tablerow.appendChild(data6)

return tablerow
}

function creatingTableData (filteredArr,data) {
    switch(checkdArr.length){
        case 2:
            tablebody.append(generateTableData(data))
            break;
        case 1:
            if(filteredArr.includes("Expired")){
                checkLowStock(data) && tablebody.append(generateTableData(data))
                break;
            }
        case 1:
            if(filteredArr.includes("Low Stock")){
                checkExpirydate(data) && tablebody.append(generateTableData(data))
                break;
            }
        default:
            if(checkExpirydate(data) && checkLowStock(data)){
                tablebody.append(generateTableData(data))
            }
    }

}

function checkExpirydate(data){
    if (new Date(data.expiryDate)< new Date()){
        return false
    }
    else{
        return true
    }

}
function checkLowStock(data){
    if(data.stock<100){
        return false
    }
    else{
        return true
    }
}

const displayCount =() => $('.totalcount').html($('.tablerow').length)

var url = new XMLHttpRequest();
url.open('GET',"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",true);
url.onreadystatechange = function() {
    if(this.readyState === 4){
        var productArr = JSON.parse(this.responseText)
        console.log(productArr);
        for(var i=0;i<productArr.length;i++){
            creatingTableData(checkdArr,productArr[i]);
        }
        $(".FilterCheckbox>input").change(function(){
            //alert("clicked")
            $(".tablerow").remove();
            checkdArr = [...getCheckedValues()];
            console.log(checkdArr)
            for(var i=0;i<productArr.length;i++){
                creatingTableData(checkdArr,productArr[i]);
                displayCount();
            }
        })
 }
}
url.send();