async function getAdvice() {
  try {
    let random = Math.floor(Math.random() * 100 + 1);

    const apiUrl = `https://api.adviceslip.com/advice/${random}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    document.querySelector(".idQuote").innerText = data.slip.id;

    document.querySelector(".quoteText").innerText = data.slip.advice;

    document.getElementById("random").addEventListener("click", getAdvice);
  } catch (error) {
    console.log(error);
  }
}
getAdvice();
