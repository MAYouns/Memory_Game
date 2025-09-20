export default function createElement(tagName, attrs, value) {
    let ele = document.createElement(tagName);
    for (const key in attrs)
        ele.setAttribute(key, `${attrs[key]}`);
    if (value)
        ele.innerHTML = value;
    return ele;
}
