var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin")

var setting = {
    "async" : true,
    "scrossDomian" : true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd","method":"GET","headers":{}
}
$.ajax(setting).done(function(res){
    btc.innerHTML = res.bitcoin.usd;
    eth.innerHTML = res.ethereum.usd;
    doge.innerHTML = res.dogecoin.usd;
})