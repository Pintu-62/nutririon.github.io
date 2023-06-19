const urlParams = new URLSearchParams(window.location.search);
const SKU = urlParams.get('SKU');

const SHEET_ID = '1oKZkAlaECmEaYfXpqZ7Vo0EpxqQ-hfJ2GdqNLHE5vVI';
const API_KEY = 'AIzaSyCa_LiyI9rO2fdH93USdYjmIMk9k8vqQJs';
const sheet_name = 'Products';
const range = 'A3:BD';
var username= 'nothing';

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheet_name}!${range}?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.values);

        for (let i = 0; data.values[i][4] != SKU; i++) {
                const productImage = document.querySelector('.product-details img');
                productImage.src = data.values[i+1][25];

                const productName = document.querySelector('.product-details h1');
                productName.textContent = data.values[i+1][10];

                const productPrice = document.querySelector('.product-details .price');
                productPrice.textContent = `Rs. ${data.values[i+1][17]}`;

                const productMrp = document.querySelector('.product-details .mrp');
                productMrp.textContent = `Rs. ${data.values[i+1][15]}`;

                const productdis = document.querySelector('.product-details .dis');
                productdis.textContent = data.values[i+1][16] + '%';

                const productdes = document.querySelector('.product-details .des');
                productdes.textContent = data.values[i+1][33];
            
        }

});

//Pop Up form Data


//Pop Up form Data
//FUNCTION TO WRITE START//
function write(){
    if (username == "nothing"){
        const popup = document.getElementById('Pop-up');
        popup.classList.remove('Pop_up_OFF');
        popup.classList.add('Pop_up_ON');
    }
    else {
    const QuanSelect = document.querySelector('#quan');
    const Quan = QuanSelect.options[QuanSelect.selectedIndex].value;

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify([["CName", "Cmobileno", SKU, Quan, `=vlookup("${SKU}",Products!E:BE,6,false)`, `=vlookup("${SKU}",Products!E:BE,7,false)`, `=vlookup("${SKU}",Products!E:BE,22,false)`, `=vlookup("${SKU}",Products!E:BE,9,false)`, `=vlookup("${SKU}",Products!E:BE,8,false)`, `=vlookup("${SKU}",Products!E:BE,12,false)`, `=vlookup("${SKU}",Products!E:BE,13,false)`, `=vlookup("${SKU}",Products!E:BE,14,false)`,SKU*Quan ]])
}};

fetch("https://v1.nocodeapi.com/kumarpintu9555/google_sheets/OAJVjKyAUvWCdxrY?tabId=Cart", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function user_creation (response) {
    const mobile_no = document.getElementById("mobile_no").value;
    const full_name = document.getElementById("full_name").value;
    username = mobile_no;

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify([[full_name,mobile_no]])
};

fetch("https://v1.nocodeapi.com/kumarpintu9555/google_sheets/OAJVjKyAUvWCdxrY?tabId=Users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    write();

    const popup = document.getElementById('Pop-up');
    popup.classList.remove('Pop_up_ON');
    popup.classList.add('Pop_up_OFF');

}
//FUNCTION TO WRITE END//

//Get the button element by ID
const addButton = document.getElementById('add-to-cart');
//Add a click event listener to the button
addButton.addEventListener('click', write);

//Get the button element by ID
const user_creation_Button = document.getElementById('user_creation');
//Add a click event listener to the button
user_creation_Button.addEventListener('click', user_creation)