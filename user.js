
$(".SearchBox").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".OrderTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


var tablebody = document.getElementById("table-body");
function generateTableData(list){
var tablerow = document.createElement("tr");
tablerow.className = "tablerow";
var data1 = document.createElement("td")
data1.innerText = list.id;
data1.className = "datatext2"
var data2 = document.createElement("td")
data2.className = "datatext1"
var img = document.createElement('img')
img.src = list.profilePic;
data2.appendChild(img);
var data3 = document.createElement("td")
data3.innerText = list.fullName;
data3.className = "datatext2"
var data4 = document.createElement("td")
data4.innerText = list.dob;
data4.className = "datatext1"
var data5 = document.createElement("td")
data5.innerText = list.gender;
data5.className = "datatext2"
var data6 = document.createElement("td")
data6.innerText = list.currentCity+","+list.currentCountry;
data6.className = "datatext2";
tablerow.appendChild(data1)
tablerow.appendChild(data2)
tablerow.appendChild(data3)
tablerow.appendChild(data4)
tablerow.appendChild(data5)
tablerow.appendChild(data6)

return tablerow
}




var url = new XMLHttpRequest();
url.open('GET',"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",true);
url.onreadystatechange = function() {
    if(this.readyState === 4){
        var UserArr = JSON.parse(this.responseText)
        console.log(UserArr);
        for(var i=0;i<UserArr.length;i++){
            var tableData =  generateTableData(UserArr[i],i);
            //console.log(tableData)
               tablebody.appendChild(tableData)
                
        }
 }
}

url.send();