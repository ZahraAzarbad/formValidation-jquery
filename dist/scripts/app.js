// if ( $('form')[0].checkValidity() ) {
//     // the form is valid
//     console.log("hi");
//     }

$("#creat-user").on("submit", function (event) {
  event.preventDefault();
  const phoneNum = $("#phone-num").val();
  const emailAddress = $("#email").val();
  const lastName = $("#last-name").val();
  const firstName = $("#first-name").val();
  console.log(isRTL(firstName));
  if (!isRTL(firstName)) {
    $("#first-name + small").text("لطفا نام خود را به فارسی وارد کنید").show();
    $("#first-name").css({
      border: "1px solid red",
    });
  } else {
    $("#first-name + small").hide();
    $("#first-name").css({
      border: "1px solid green",
    });
  }

  if (!isRTL(lastName)) {
    $("#last-name + small")
      .text("لطفا نام خانوادگی خود را به فارسی وارد کنید")
      .show();
    $("#last-name").css({
      border: "1px solid red",
    });
  } else {
    $("#last-name + small").hide();
    $("#last-name").css({
      border: "1px solid green",
    });
  }

//   if (!emailAddress.includes('@')) {
//     $("#email + small")
//       .text("ایمیل نادرست است")
//       .show();
//     $("#email").css({
//       border: "1px solid red",
//     });
//   } else{
//     $("#email + small").hide();
//     $("#email").css({
//       border: "1px solid green",
//     });
//   }
});





function isRTL(s) {
  var ltrChars =
      "A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF" +
      "\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF",
    rtlChars = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
    rtlDirCheck = new RegExp("^[^" + ltrChars + "]*[" + rtlChars + "]");

  return rtlDirCheck.test(s);
}
