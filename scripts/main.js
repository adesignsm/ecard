var create_btn = document.getElementById("create-button");
var message, to_input, from_input;

create_btn.onclick = function(event) {

    message = document.getElementById("message-box").value;
    to_input = document.getElementById("to-input").value;
    from_input = document.getElementById("from-input").value;

    console.log(message + " " + to_input + " " + from_input);

    document.getElementById("message-box").value = " ";
    document.getElementById("to-input").value = " ";
    document.getElementById("from-input").value = " ";

}
