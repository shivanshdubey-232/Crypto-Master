axios.get('https://api.coinlore.net/api/tickers/')
.then((complete) => {
        complete = complete.data
        for(let i = 0; i < 100; i++)
        {
            let currencies = document.querySelector("#currencies") 
            let currency = document.createElement("tr")
            let currRank = document.createElement("td")
            let currSymbol = document.createElement("td")
            let currName = document.createElement("td")
            let currPrice = document.createElement("td")
            let currHour = document.createElement("td")
            let currDay = document.createElement("td")
            let currWeek = document.createElement("td")
            currName.innerText = complete.data[i].name
            currPrice.innerText = complete.data[i].price_usd
            currRank.innerText = complete.data[i].rank
            currSymbol.innerText = complete.data[i].symbol
            currHour.innerText = complete.data[i].percent_change_1h
            currDay.innerText = complete.data[i].percent_change_24h
            currWeek.innerText = complete.data[i].percent_change_7d
            currency.append(currName, currPrice, currRank, currSymbol, currName, currPrice, currHour, currDay, currWeek)
            if(complete.data[i].percent_change_24h  > 0)
            {

                currency.classList.add("table-success")
            }
            else
            {
                currency.classList.add("table-danger")
            }
            currencies.append(currency)
        }     
})
.catch((err) => {
     let alertError = document.querySelector("#error")
     let errKey = document.createElement("strong")
     errKey.innerText="Error Occurred !!!  : "
     alertError.append(errKey)
     alertError.append(err)
     alertError.classList.add("alert",  "alert-danger")
     alertError.role = "alert"
})