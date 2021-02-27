/*
in real world, I would use React here with completely different folder structure
(/constants, /services, /utils)
*/

class ImagesService {
    constructor() {}

    syncActiveImages(): string[] {
        const stringifiedImages = localStorage.getItem(STORAGE.ACTIVE_IMAGES);
        const activeImages = stringifiedImages
            ? JSON.parse(stringifiedImages)
            : initDefaultImages();

        return activeImages;
    }

    updateActiveImages(updatedImages: string[]) {
        const stringifiedImages = JSON.stringify(updatedImages);
        localStorage.setItem(STORAGE.ACTIVE_IMAGES, stringifiedImages);
    }

    removeImage(imageFileName: string) {
        const stringifiedImages = localStorage.getItem(STORAGE.ACTIVE_IMAGES);
        if (!stringifiedImages) return;
        const activeImages: string[] = JSON.parse(stringifiedImages);
        const updatedImages = activeImages.filter(
            (image) => image != imageFileName
        );
        this.updateActiveImages(updatedImages);
    }

    resetImages() {
        const activeImages = initDefaultImages();
        this.updateActiveImages(activeImages);
    }
}

enum STORAGE {
    ACTIVE_IMAGES = "activeImages",
}

const initDefaultImages = (): string[] => {
    const IS = new ImagesService();
    const defaultImages = Array.from(Array(12).keys()).map(
        (imageInd) => `${imageInd + 1}.jpg`
    );
    IS.updateActiveImages(defaultImages);

    return defaultImages;
};

export default ImagesService;
