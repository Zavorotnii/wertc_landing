function clickDown() {
    let offerDiv = document.getElementById("hide");
    let arrowDown = document.getElementById("arrow_down");
    let arrowUp = document.getElementById("arrow_up");
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline-block";
    offerDiv.style.display = "flex";
}


function clickUp() {
    let offerDiv = document.getElementById("hide");
    let arrowDown = document.getElementById("arrow_down");
    let arrowUp = document.getElementById("arrow_up");
    arrowDown.style.display = "inline-block";
    arrowUp.style.display = "none";
    offerDiv.style.display = "none";
}
//SEND MAIL====================================================
function sendMail() {
    let email = document.getElementById('email').value;
    let text = document.getElementById('subject').value;
    let emailObj = {
        "email": email,
        "project": "webrtc",
        "text": text
    }
    sendToServer(emailObj)
}

function sendToServer(emailObj) {
    console.log(emailObj)
    $.ajax({
        type: 'POST',
        url: "https://api.fastogt.com/api/landing",
        data: JSON.stringify(emailObj),
        contentType: "application/json",
        dataType: 'json',
        success: function () {
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            alert("Thank you for your message, we will back to you asap!");
        }
    })

}



//FOR OLD BROWSERS==================================================================================================================
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
//==================================================================================================================================
