console.clear()
console.log('commn js')
// var linkGenDiv = document.getElementById('linkGenDiv')
// var GetLinkBtn = document.getElementById('GetLinkBtn')
var downloadBtn = document.getElementById('downloadBtn')
// var mobileNumber = document.getElementById('mobileNumber')
// var pattern = /^(0|[+91]{3})?[7-9][0-9]{9}$/;
// var getLinkBtn = document.getElementById('getLink')
// mobileNumber.addEventListener('click', function () {
//     linkGenDiv.classList.remove('linkErrorClass')
// })
// getLinkBtn.addEventListener('click', function () {
//     linkGenDiv.classList.remove('linkErrorClass')
//     if (!(mobileNumber.value).match(pattern)) {
//         linkGenDiv.classList.add('linkErrorClass')
//         mobileNumber.value = ''

//     }
//     else {
//         var linkData = {
//             link: 'https//www.freeskout.com/redirection.html',
//             mobileNumber: mobileNumber.value,
//         }
//         fetch("https://webserver.freeskout.com/client/sendLink", {
//             method: "POST", // or 'PUT'
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(linkData),
//         })
//             .then((data) => {
//                 console.log("Success:", linkData);
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//             });
//         linkGenDiv.classList.remove('linkErrorClass')
//         mobileNumber.value = 'Success'
//         linkGenDiv.style.pointerEvents = 'none'
//         getLinkBtn.innerHTML = '<img src="../img/doubleTick.png" class="doubleTickIcon" alt="">'
//     }
// })
downloadBtn.addEventListener('click', function () {
    // alert('hey')
    var OS = "Unknown";
    if (window.navigator.userAgent.indexOf("android") != -1) OS = 'android';
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OS = "Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OS = "Windows 8.1";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OS = "Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OS = "Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OS = "Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OS = "Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OS = "Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac") != -1) OS = "Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11") != -1) OS = "UNIX";
    if (window.navigator.userAgent.indexOf("Linux") != -1) OS = "Linux";
    // var downloadBtn = document.getElementById('downloadBtn')
    // downloadBtn.addEventListener('click', function(){
    if (OS === 'android') {
        window.open('https://play.google.com/store/apps/details?id=com.freeskout', '_blank')
    }
    else if (OS === "Mac/iOS") {
        window.open('https://apps.apple.com/in/app/freeskout-influencer-marketing/id1500174036', '_blank')
    }
    else {
        window.open('https://play.google.com/store/apps/details?id=com.freeskout', '_blank')
    }
    // })
})


