window.onload = () => {
  const isAndroid = navigator.userAgent.match(/Android/i)
  console.log(navigator.userAgent)
  console.log(isAndroid)

  if (isAndroid?.length) {
    const pdfAndroid = document.getElementById("pdfAndroid");
    const pdf = document.getElementById("pdf");
    pdfAndroid.style.display = "block";
    pdf.style.display = "none";
  }
}