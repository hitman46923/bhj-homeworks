
 function sendGETRequest(url, callback) {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    callback(response);
                }
            };
            xhr.send();
        }

        function handleResponse(response) {
            let valute = response.response.Valute;
            let itemsContainer = document.getElementById("items");
            itemsContainer.innerHTML = "";

            for (let key in valute) {
                if (valute.hasOwnProperty(key)) {
                    let currency = valute[key];

                    let item = document.createElement("div");
                    item.className = "item";

                    let itemCode = document.createElement("div");
                    itemCode.className = "item__code";
                    itemCode.textContent = currency.CharCode;

                    let itemValue = document.createElement("div");
                    itemValue.className = "item__value";
                    itemValue.textContent = currency.Value;

                    let itemCurrency = document.createElement("div");
                    itemCurrency.className = "item__currency";
                    itemCurrency.textContent = "руб.";

                    item.appendChild(itemCode);
                    item.appendChild(itemValue);
                    item.appendChild(itemCurrency);
                    itemsContainer.appendChild(item);
                }
            }

            let loader = document.getElementById("loader");
            loader.classList.remove("loader_active");
        }

        sendGETRequest("https://students.netoservices.ru/nestjs-backend/slow-get-courses", handleResponse);




































/* let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');





xhr.onload = function(data) {

    const data = JSON.parse(xhr.response);
    console.log(data);



  
};




xhr.send();



function handleResponse (data) {










    
}  */