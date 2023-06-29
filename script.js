function addCards(data){

    const bgColorMapping = {
        "APPROVED" : "blue",
        "PENDING" : "yellow",
        "COMPLETED" : "green",
        "CANCELLED" : "red"
    }
    const textColorMapping = {
        "APPROVED" : "white",
        "PENDING" : "black",
        "COMPLETED" : "white",
        "CANCELLED" : "white"

    }
    data.forEach((item) => {
       const container = document.createElement("div")
        container.className = "container";
        container.innerHTML = `<div class="upper">
        <div class="upper-left">
          <div class="status" style = "background-color : ${bgColorMapping[item.status]}; color : ${textColorMapping[item.status]}"; >${item.status}</div>
          <div class="caseNum">${item.caseNumber}</div>
        </div>
        <div class="upper-right">${item.date}</div>
      </div>
      <div class="separator" style = "background-color: ${bgColorMapping[item.status]}"></div>
      <div class="lower">
        <div class="from-location">${item.fromLocation}</div>
        <div class="to-location">
        ${item.toLocation}
        </div>
        <div class="fare">${item.fare}</div>
      </div>`
      document.body.appendChild(container);
    })
    
}


async function fetchDetails(){
    try{
    const response = await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");
    const result = await response.json();
    addCards(result);
    }
    catch(error){
        console.log(error.message);
    }
    
}
fetchDetails();