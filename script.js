
//const data
async function getXMLData(){
    const response = await fetch("http://ergast.com/api/f1/2008/drivers")
    let parser = new DOMParser()
    const xml = parser.parseFromString(await response.text(),"application/xml")
    console.log(xml)
}
getXMLData()