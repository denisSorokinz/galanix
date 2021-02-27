import debounce from "./debounce";

const initImageModal = () => {
    const modalNode: HTMLDivElement | null = document.querySelector("#modal");
    const modalImageWrapper = modalNode?.querySelector("#modalImageWrapper");
    const modalImage:
        | HTMLImageElement
        | null
        | undefined = modalImageWrapper?.querySelector("#modalImage");
    const closeModalButton = modalImageWrapper?.querySelector("#closeModalBtn");
    if (!(modalNode && modalImageWrapper && modalImage && closeModalButton))
        return;

    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(
        ".images__list img"
    );
    images.forEach((image) =>
        image.addEventListener(
            "click",
            debounce(() => {
                modalImage.src = image.src;
                showModal(modalNode);
            })
        )
    );
    modalNode.addEventListener("click", (ev) => {
        if (
            ev.currentTarget == closeModalButton ||
            ev.target != modalImageWrapper
        ) {
            // clicked closeModalBtn or outside modal
            hideModal(modalNode);
        }
    });
};

const showModal = (modalNode: HTMLDivElement) => {
    modalNode.style.opacity = "1";
    modalNode.classList.add("shown");
};

const hideModal = (modalNode: HTMLDivElement) => {
    modalNode.style.opacity = "0";
    setTimeout(() => {
        modalNode.classList.remove("shown");
    }, 500);
};

export default initImageModal;
