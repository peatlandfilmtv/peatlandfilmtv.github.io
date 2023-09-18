const displayPdf = () => {
  const isAndroid = navigator.userAgent.match(/Android/i)
  const pdfAndroid = document.getElementById("pdfAndroid");
  const pdf = document.getElementById("pdf");

  if (isAndroid?.length) {
    pdfAndroid.style.display = "block";
    pdf.style.display = "none";
  } else {
    pdf.style.display = "block";
  }
}

$(document).ready(function () {
  displayPdf()
});