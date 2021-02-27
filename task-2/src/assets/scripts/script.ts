import setSpanContents from "./setSpanContents";
import ImagesService from "./ImagesService";
import renderImages from "./renderImages";

document.addEventListener("DOMContentLoaded", function () {
    const IS = new ImagesService();
    setSpanContents();

    // BONUS
    // Dynamic Image Rendering
    const parentNode = document.querySelector("ul.images__list");
    if (!parentNode) return;
    renderImages(parentNode, IS.syncActiveImages());

    // Reset Images
    const resetImagesButton: HTMLButtonElement | null = document.querySelector(
        "#resetImages"
    );
    if (!resetImagesButton) return;
    resetImagesButton.addEventListener("click", () => {
        IS.resetImages();
        renderImages(parentNode, IS.syncActiveImages());
    });
});
