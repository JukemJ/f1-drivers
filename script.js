
const req = new XMLHttpRequest()
req.addEventListener("load",function(){
    data = this.responseXML
    for(let race of data.getElementsByTagName('Driver')) console.log(race)
    //console.log(data.getElementsByTagName('Race'))
    //console.log(this.responseText)
    test()

})
req.open("GET", "http://ergast.com/api/f1/2008/drivers")
req.send()

function test(){
    document.getElementById('test').innerText = data
}