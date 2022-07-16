(_ => {
    const body = document.body;
    const total = document.getElementById("total");
    let money = 0;

    const getRandomInt = (max) => Math.floor(Math.random() * max);

    function getFastCash() {
        money += 300;
        total.textContent = `$${money}`;
    }

    function displayFastCash() {
        let clientHeight = body.clientHeight;
        let clientWidth = body.clientWidth;

        let span = document.createElement("span");
        span.textContent = "+$300";
        span.style.top = `${getRandomInt(clientHeight)}px`;
        span.style.left = `${getRandomInt(clientWidth)}px`;
        body.insertAdjacentElement("afterbegin", span);

        setTimeout(() => {
            body.removeChild(span);
        }, 700);
    }

    body.addEventListener("click", () => {
        getFastCash();
        displayFastCash();
    });
})();
