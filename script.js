document.getElementById('year-select').addEventListener('change',drawDriverList)
const f1site = "https://ergast.com/api/f1/"


async function getXMLData(url){
    const response = await fetch(url)
    let parser = new DOMParser()
    const xml = parser.parseFromString(await response.text(),"application/xml")

    let driverData = []
    let table = xml.getElementsByTagName('DriverTable')[0]
    for(let driver of table.children){
        let obj = {}
        obj.driverId = driver.getAttribute('driverId')
        for(let info of driver.children){
            obj[info.tagName] = info.textContent
        }
        driverData.push(obj)
    }
    return driverData
}

async function drawDriverList(){
    let driverList = await getXMLData(`https://ergast.com/api/f1/${this.value}/Drivers`)
    const ul = document.getElementById('driver-list')
    ul.innerHTML = ''
    console.log(typeof ul)
    for(let driver of driverList){
        const item = document.createElement('li')
        item.textContent = driver.FamilyName
        item.classList.add('list-group-item')
        ul.appendChild(item)
    }
    
    console.log(driverList)
}