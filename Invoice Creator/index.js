
let servicesRequested = [['Car Wash', 10, false,'crwsh'],
                         ['Mow Lawn',20,false,'lwnmw'],
                         ['Pull Weeds',30,false,'wdpll']]
let totalCost = 0

const carWash = document.getElementById('car-el')
const lawnMow = document.getElementById('lawn-el')
const weedPull = document.getElementById('weed-el')

const invoiceList = document.getElementById('display-lst')
const absoluteTotal = document.getElementById('calc-amt')
const dateDrafted = document.getElementById('note')
const date = new Date()
const shipInvoice = document.getElementById('invoice-btn')
const table = document.getElementById('tbl')

function render(purchases){
  absoluteTotal.innerHTML = "$"+totalCost
  let listItems = ""

  for (let i=0; i<purchases.length;i++){
    if(purchases[i][2]===true){
      listItems+=`
      <tr id='${purchases[i][3]}'>
        <td> ${purchases[i][0]}</td>
        <td id='${purchases[i][3]}' class="remove-btn">Remove</td>
        <td> $${purchases[i][1]}</td>
      </tr>`
  table.innerHTML=listItems
  initializeDelete()
  insertDate()
  }}}

function insertDate(){
  dateDrafted.innerHTML= date.toDateString()
}



function initializeDelete(){
  if (document.getElementById(servicesRequested[0][3])){
    const rmCarWash = document.getElementById('crwsh')
    rmCarWash.addEventListener("click", function(){
      rmCarWash.remove()
      totalCost-=servicesRequested[0][1]
      servicesRequested[0][2] = false
      render(servicesRequested)
    })
  }
  if (document.getElementById(servicesRequested[1][3])){
    const rmLawnMow = document.getElementById('lwnmw')
    rmLawnMow.addEventListener("click", function(){
      rmLawnMow.remove()
      totalCost-=servicesRequested[1][1]
      servicesRequested[1][2] = false
      render(servicesRequested)
    })
  }
  if (document.getElementById(servicesRequested[2][3])){
    const rmWeedPull = document.getElementById('wdpll')
    rmWeedPull.addEventListener("click", function(){
      rmWeedPull.remove()
      totalCost-=servicesRequested[2][1]
      servicesRequested[2][2] = false
      render(servicesRequested)
    })
  }
}


carWash.addEventListener("click", function(){
  if (servicesRequested[0][2] === false){
    servicesRequested[0][2] = true
    totalCost +=servicesRequested[0][1]
    render(servicesRequested)
  }
})


lawnMow.addEventListener("click", function(){
  if (servicesRequested[1][2] === false){
    servicesRequested[1][2] = true
    totalCost +=servicesRequested[1][1]
    render(servicesRequested)
  }
})


weedPull.addEventListener("click", function(){
  if (servicesRequested[2][2] === false){
    servicesRequested[2][2] = true
    totalCost +=servicesRequested[2][1]
    render(servicesRequested)
  }
})


shipInvoice.addEventListener("click",function(){
  totalCost=0
  for (let i=0; i<servicesRequested.length; i++){
    servicesRequested[i][2]=false
  }
  table.innerHTML=''
  render(servicesRequested)
  dateDrafted.innerHTML=''
})
