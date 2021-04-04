
export const updateBlock = (block: string, component: Element) => {
    const headerElement = document.querySelector(`#${block}`);
    if (headerElement) {
        const parentHeaderElement = headerElement.parentNode;
        // @ts-ignore
        parentHeaderElement.insertBefore(component(), headerElement);
        headerElement.remove();
    }
}
