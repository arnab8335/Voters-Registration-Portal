var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
        modal.style.display = "none";
    }
    //
    // alert(<div id="myModal" class="modal" style="width:84%;">
    //
    //     <div class="modal-content">
    //       <span class="close">&times;</span>
    //       <h4 class="head1">List of Acceptable Supporting Documents For Verification</h4>
    //
    //       <p><ol class="ol">
    //         <li>Recent passport size photographs</li>
    //         <li>Address proof (any one of the following)</li>
    //           <ul class="ul">
    //             <li>Copy of your Passport</li>
    //             <li>Gas bill</li>
    //             <li>Water bill</li>
    //             <li>Ration Card</li>
    //             <li>Bank Passbook</li>
    //             <li>Aadhaar Card</li>
    //           </ul>
    //         <li>Copy of proof of age</li>
    //           <ul class="ul">
    //               <li>10th Standard Certificate</li>
    //               <li>Birth Certificate</li>
    //               <li>Pan Card</li>
    //               <li>Aadhaar Card</li>
    //               <li>Driving Licence</li>
    //               <li>Copy of Passport</li>
    //               <li>Kisan Card</li>
    //           </ul class="ul">
    //         <li>Identity proof (any one of the following)</li>
    //           <ul class="ul">
    //               <li>Pan Card</li>
    //               <li>Driving Licence</li>
    //               <li>Ration Card</li>
    //               <li>Passport Copy</li>
    //               <li>Bank Passbook with Photograph</li>
    //               <li>SSLC Certificate</li>
    //               <li>Student ID Card</li>
    //               <li>Aadhaar Card</li>
    //           </ul>
    //
    //       </ol></p>
    //     </div>
    //
    //   </div>);
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "block";
    //   }
    // }
    //
    // function modal(){
    //     document.getElementById('myModal').style.display="none";
    // }
function _id(name) {
    return document.getElementById(name);
}

function _class(name) {
    return document.getElementsByClassName(name);
}
_class("toggle-password")[0].addEventListener("click", function() {
    _class("toggle-password")[0].classList.toggle("active");
    if (_id("password-field").getAttribute("type") == "password") {
        _id("password-field").setAttribute("type", "text");
    } else {
        _id("password-field").setAttribute("type", "password");
    }
});

_id("password-field").addEventListener("focus", function() {
    _class("password-policies")[0].classList.add("active");
});
_id("password-field").addEventListener("blur", function() {
    _class("password-policies")[0].classList.remove("active");
});

_id("password-field").addEventListener("keyup", function() {
    let password = _id("password-field").value;

    if (/[A-Z]/.test(password)) {
        _class("policy-uppercase")[0].classList.add("active");
    } else {
        _class("policy-uppercase")[0].classList.remove("active");
    }

    if (/[0-9]/.test(password)) {
        _class("policy-number")[0].classList.add("active");
    } else {
        _class("policy-number")[0].classList.remove("active");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        _class("policy-special")[0].classList.add("active");
    } else {
        _class("policy-special")[0].classList.remove("active");
    }

    if (password.length > 5) {
        _class("policy-length")[0].classList.add("active");
    } else {
        _class("policy-length")[0].classList.remove("active");
    }
});