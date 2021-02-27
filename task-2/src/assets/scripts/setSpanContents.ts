const setSpanContents = () => {
    const images = document.querySelectorAll(".images__list img");
    const imgAmountSpan = document.querySelector("#imgAmount");
    const dateSpan = document.querySelector("#date");
    const dateString = formatDate();

    if (imgAmountSpan)
        imgAmountSpan.textContent = `Amount of Images: ${images.length}`;
    if (dateSpan) dateSpan.textContent = `Current Date: ${dateString}`;
};

const formatDate = (date: Date = new Date()) => {
    const day = date.getDate().toString();
    let month = date.getMonth().toString();
    month += month.length < 2 ? "0" : "";
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export default setSpanContents;
