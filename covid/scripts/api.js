
let summary = fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then(response => response.json())
.then(data =>{
    console.log(data.data.summary.total)
    document.getElementById("total-cases").innerHTML  = data.data.summary.total;
    document.getElementById("active-cases").innerHTML = data.data.summary.total - (data.data.summary.discharged + data.data.summary.deaths)
    document.getElementById("recovered-cases").innerHTML  = data.data.summary.discharged;
    document.getElementById("Deaths").innerHTML  = data.data.summary.deaths;

    setTimeout(function(){
        document.getElementById("spinner").className = "dont-show"
        document.getElementById("header").style.display = "block"
        document.getElementById("section").style.display = "flex"
        document.getElementById("tc").style.display = "flex"

        var row ="";
        var table = document.getElementById("tbody1")
        var i =0;
        data.data.regional.forEach(element => {
            i++
            row += "<tr><th>" +i +"</th>"
            row +="<td >"+element.loc+"</td>"
            row +="<td>"+element.totalConfirmed+"</td>"
            var active = element.totalConfirmed - (element.discharged + element.deaths)
            row +="<td>"+active+"</td>"
            row +="<td>"+element.discharged+"</td>"
            row +="<td>"+element.deaths+"</td>"
            row +="</tr>"
        });
        table.innerHTML = row       
    }, 1000);
})