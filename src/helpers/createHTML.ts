
const appendChild = (parent: any, child: any) => {
    // console.log('child', child)
    if (Array.isArray(child))
        child.forEach(nestedChild => appendChild(parent, nestedChild));
    else
        parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

export const createFragment = (props: any, ...children: any) => {
    return children;
};

export const JSX = {
    createElement(tag: any, props: object, ...children: any) {
        console.log('children', children)
        if (typeof tag === "function") return tag(props, ...children);
        const element = document.createElement(tag);

        Object.entries(props || {}).forEach(([name, value]) => {
            if (name.startsWith("on") && name.toLowerCase() in window)
                element.addEventListener(name.toLowerCase().substr(2), value);
            else if (name === 'className') {
                element.setAttribute('class', value.toString())
            }
            else element.setAttribute(name, value.toString());
        });

        children.forEach((child: any) => {
            appendChild(element, child);
        });

        return element;
    },
};

export default JSX;
