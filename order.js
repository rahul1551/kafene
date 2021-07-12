function getCheckedValues() {
    var checkedArr = [];
    var ischeckd = document.querySelectorAll('input[type=checkbox]:checked')
    
    for (var i = 0; i < ischeckd.length; i++) {
        checkedArr.push(ischeckd[i].name)
      }
      return checkedArr
  }

var checkedFilter = getCheckedValues();

console.log(getCheckedValues())

var tablebody = document.getElementById("table-body");
function generateTableData(list){
var tablerow = document.createElement("tr");
tablerow.className = "tablerow";
var data1 = document.createElement("td")
data1.innerText = list.id;
data1.className = "datatext2"
var data2 = document.createElement("td")
data2.innerText = list.customerName;
data2.className = "datatext1"
var data3 = document.createElement("td")
var para = document.createElement("p")
para.innerText = list.orderDate;
para.className = "datatext1"
var span = document.createElement("span")
span.innerText = list.orderTime;
span.className = "datatext2"
var data4 = document.createElement("td")
data4.innerText = list.amount;
data4.className = "datatext2"
var data5 = document.createElement("td")
data5.innerText = list.orderStatus;
data5.className = "datatext1";
data3.appendChild(para)
data3.appendChild(span)
tablerow.appendChild(data1)
tablerow.appendChild(data2)
tablerow.appendChild(data3)
tablerow.appendChild(data4)
tablerow.appendChild(data5)
//console.log(tablerow)

return tablerow
}
 //console.log(tablebody)

function handlecards(arr,data){
    
    if(arr.includes(data.orderStatus)){
        var tableData =  generateTableData(data);
        tablebody.appendChild(tableData)
    }

}



const displayCount =() => $('.totalcount').html($('.tablerow').length)


 var url = new XMLHttpRequest();
url.open('GET',"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",true);
url.onreadystatechange = function() {
    if(this.readyState === 4){
        var responseArr = JSON.parse(this.responseText)
        //console.log(responseArr);
        for(var i=0;i<responseArr.length;i++){
           handlecards(checkedFilter,responseArr[i])
            //console.log(tableData)
        }     
         $(".FilterCheckbox>input").change(function(){
            //alert("clicked")
            $(".tablerow").remove();
            checkedFilter = [...getCheckedValues()];
            for(var i=0;i<responseArr.length;i++){
                handlecards(checkedFilter,responseArr[i])
                displayCount();

            }
        
        }) 
 }
}
url.send();