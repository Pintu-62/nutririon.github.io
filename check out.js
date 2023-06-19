const urlParams = new URLSearchParams(window.location.search);
const total_order_value = urlParams.get('Total');

const order_value = document.getElementById('order_value');
order_value.textContent = total_order_value;



const test = document.getElementById('check-box');
var i = 0;
test.addEventListener('click',change);


const prepaid_payment = document.getElementById('prepaid');
prepaid_payment.addEventListener('click',change_payment_to_prepaid);

const COD_payment = document.getElementById('COD');
COD_payment.addEventListener('click',change_payment_to_cod);


const card_payment = document.getElementById('card');
card_payment.addEventListener('click',cardpayment);

const wallet_payment = document.getElementById('wallet');
wallet_payment.addEventListener('click',walletpayment);

const UPI_payment = document.getElementById('upi');
UPI_payment.addEventListener('click',upipayment);











function change() {
    if (test.checked) {
        var status = document.getElementById('form_con_billing');
        status.classList.add('collapse');
    } else {
        var status = document.getElementById('form_con_billing');
        status.classList.remove('collapse');
    }
}

function change_payment_to_prepaid() {
    var payment_prepaid = document.getElementById('prepaid-method');
    payment_prepaid.classList.remove('pre-colla');
    var payment_cod = document.getElementById('COD-method');
    payment_cod.classList.add('pre-colla');
}

function change_payment_to_cod() {
    var payment_cod = document.getElementById('COD-method');
    payment_cod.classList.remove('pre-colla');
    var payment_prepaid = document.getElementById('prepaid-method');
    payment_prepaid.classList.add('pre-colla');

    var instruction = document.getElementById('instruction_for_payment');
    instruction.textContent = total_order_value;
}

function cardpayment () {
    var status2 = document.getElementById('payment-details');
        status2.innerHTML = 
        ` <div id="Card-details-input">
        <label for="card-no">Enter 16-digit card number:</label><input type="number" maxlength="16" minlength="16" autocomplete="cc-number" required placeholder="Card Number"/>
        <div id="exp-cvv">
            <label for="expiry">Expiry:</label><input type="number" min="4" max="4" autocomplete="cc-exp" required placeholder="Expiry" />
            <label for="cvv" class="cvv">CVV:</label><input type="number" minlength="3" maxlength="3" autocomplete="cc-csc" required placeholder="CVV" />
        </div>
        <label for="name-on-card">Name on card:</label><input type="text" autocomplete="cc-name" placeholder="Please enter Name on Card" required />
        <button>Make Payment</button>
        </div>`
}

function walletpayment () {
    var status2 = document.getElementById('payment-details');
        status2.innerHTML = 
        `<div id="wallet_details_input">

        <div id="top-row-for-Wallet">

            <div id="icon_container">
                <div class="icon_img img1"></div>
                <h2 >Mobikwik</h2>
            </div>

            <div id="icon_container">
                <div class="icon_img img2"></div>
                <h2>Amazon Pay</h2>
            </div>

            <div id="icon_container">
                <div class="icon_img img3"></div>
                <h2>Phone Pe</h2>
            </div>

        </div>
        <div id="second-row-for-Wallet">

            <div id="icon_container">
                <div class="icon_img img4"></div>
                <h2>Google Pay</h2>
            </div>

            <div id="icon_container">
                <div class="icon_img img5"></div>
                <h2>Pay TM</h2>
            </div>
        </div>

    </div>`
}

function upipayment () {
    var status2 = document.getElementById('payment-details');
        status2.innerHTML = 
        `<div id="upi_payment_details">
        <label for="upi_input">Enter your UPI Id:</label>
        <input type="text" id="upi_input" placeholder="Your UPI ID..." >
        <button class="submit_button_effect">Submit</button>
    </div>`
}