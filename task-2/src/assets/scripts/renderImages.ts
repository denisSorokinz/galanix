import ImagesService from "./ImagesService";
import setSpanContents from "./setSpanContents";
import initImageModal from "./initImageModal";

const imagesPath = "/src/assets/images";

const renderImages = (parentNode: Element, activeImages: string[]) => {
    removeAllChildNodes(parentNode);
    activeImages.forEach((imageFileName) => {
        // creating DOM Nodes
        const listItem: HTMLLIElement = document.createElement("li");
        const img: HTMLImageElement = document.createElement("img");
        const btnDelete: HTMLButtonElement = document.createElement("button");

        // init Image
        img.src = `${imagesPath}/${imageFileName}`;
        img.classList.add("item__image");

        // init Button Delete
        btnDelete.textContent = "+";
        btnDelete.classList.add("button--close");
        btnDelete.addEventListener("click", () =>
            btnDeleteHandler(imageFileName, parentNode)
        );

        // init List Item
        listItem.classList.add("list__item");
        listItem.appendChild(img);
        listItem.appendChild(btnDelete);
        parentNode.appendChild(listItem);
    });

    setSpanContents();
    initImageModal();
};

const btnDeleteHandler = (imageFileName: string, parentNode: Element) => {
    const IS = new ImagesService();
    IS.removeImage(imageFileName);
    renderImages(parentNode, IS.syncActiveImages());
};

const removeAllChildNodes = (parentNode: Element) => {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
};

export default renderImages;
