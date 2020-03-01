var create_btn = document.getElementById("create-button");
var message, to_input, from_input, colour_input, img_src, e_btn;

var colour_input_default = document.getElementById("colour").defaultValue;

var ecard_container = document.getElementById("generated-card-container");
var ecard_arr = [];

document.getElementById("image-grid").onclick = function(event) {

    img_src = event.target.getAttribute("src");
}

$(document).ready(function() {

    $("#show-images").on("click", function() {
        $("#image-grid").toggle({effect: "scale", direction: "vertical"});
    });

    $("#image-grid img").on("click", function() {
        $("#image-grid").toggle({effect: "scale", direction: "vertical"});
    });
});

create_btn.onclick = function(event) {

    message = document.getElementById("message-box").value;
    to_input = document.getElementById("to-input").value;
    from_input = document.getElementById("from-input").value;
    colour_input = document.getElementById("colour").value;

    var e_message = document.createElement("h1");
    var e_to = document.createElement("h3");
    var e_from = document.createElement("h3");
    var e_img = document.createElement("img");

    e_btn = document.createElement("button");
    e_btn.id = "generatePDF";
    e_btn.innerHTML = "Download me!";
    e_btn.addEventListener("mousedown", generatePDF, false);

    ecard_container.style.backgroundColor = colour_input;
    ecard_container.appendChild(e_to);
    ecard_container.appendChild(e_from);
    ecard_container.appendChild(e_message);
    ecard_container.appendChild(e_img);
    ecard_container.appendChild(e_btn);

    e_message.innerHTML = message;
    e_to.innerHTML = "To: " + to_input;
    e_from.innerHTML = "From: " + from_input;
    e_img.src = img_src;

    ecard_arr.push(e_message, e_to, e_from, e_img, e_btn);

    document.getElementById("message-box").value = " ";
    document.getElementById("to-input").value = " ";
    document.getElementById("from-input").value = " ";
    document.getElementById("colour").value = colour_input_default;

    $("#ecard-page-1").delay(100).fadeOut(500);
    $("#generated-card-container").delay(200).fadeIn(500);

    if (colour_input == "#000000" || colour_input == "#000") {
        
        e_btn.style.border = "5px solid #fff";
        e_btn.style.color = "#000";

        for (var i = 0; i < ecard_arr.length; i++) {

            ecard_arr[i].style.color = "#fff";
        }
    }
}

function generatePDF() {

    var contents = $("#generated-card-container").html();
    var print_window = window.open("10", "10", "height = 400, width = 500");

    print_window.document.write("<html><head><title> ECARD </title>");
    print_window.document.write("<link href='https://fonts.googleapis.com/css?family=Simonetta&display=swap' rel='stylesheet'>");
    print_window.document.write("<style type = 'text/css'> body {text-align: center; font-family: 'Simonetta';} </style>");
    print_window.document.write("</head><body>");
    print_window.document.write(contents);
    print_window.document.write("<script src = '/scripts/main.js'></script>");
    print_window.document.write("</body></html>");
    print_window.document.close();
    print_window.print();
}