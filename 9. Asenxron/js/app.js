 let btn = document.getElementById('btn-request');

// btn.onclick = function() {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(this.readyState === 4 && this.status === 200) {
//             document.getElementById('list').innerHTML = this.responseText;
//         }
//         else if(this.status === 404) {
//             document.getElementById('list').innerHTML = '404 Not Found'
//         }
//     }
//     xhr.open('GET','pproduct.html',true);
//     xhr.send();
// }


// readyState
// 0 -> Sorgu hele baslamayib
// 1 -> Sorgu gonderilir
// 2 -> Sorgu qebul olundu
// 3 -> Sorgu emal olunur
// 4 -> sorguya response hazirdi ve sene gondercek



// btn.onclick = function() {
//     fetch('https://randomuser.me/api/?results=100')
//     .then(response => response.json())
//     .then(data => {

//         let div = '';

//         data.results.forEach(user => {

//             div += `
//             <div class="col-lg-3 col-6">
//             <div class="card">
//                 <img src=${user.picture.medium} class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
//                   <p class="card-text">${user.email}</p>
//                   <p class="card-text">${user.location.city} / ${user.location.country}</p>
//                   <a href="">${user.phone}</a>
//                 </div>
//               </div>
//             </div>
//             `
//         })

//         document.getElementById('list').innerHTML = div
//     })
//     .catch(error => console.log(error))
// }

// let btn2 = document.getElementById('btn-request2')

function GetCrypto() {
 fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
 .then(res => res.json())
 .then(data => {
    let div = '';

    let value = document.getElementById('input').value;

    let filteredCoins = data.filter(x => x.name.toLowerCase().includes(value.toLowerCase()))

    let input = document.getElementById('input');
    input.onkeyup = function(e) {
        let input_value;
        input_value = e.target.value;
        console.log(input_value);
    }
   
    // let count = 10;
    // function Load() {
    //     count +=10
    // }
    data.slice(0,count).forEach(coin => {
        div += `
                <tr>
                    <td>
                        <img src=${coin.image}>
                    </td>
                    <td>${coin.name}</td>
                    <td>$${coin.high_24h}</td>
                    <td>${coin.market_cap}</td>
                    ${coin.price_change_percentage_24h.toFixed(2) > 0 ? `<td style="color:green">${coin.price_change_percentage_24h.toFixed(2)}%</td>` : `<td style="color:red">${coin.price_change_percentage_24h.toFixed(2)}%</td>`}
                  </tr>
        `
    })
    document.getElementById('tbody').innerHTML = div
 })
 .catch(err => console.log(err))
}

GetCrypto();