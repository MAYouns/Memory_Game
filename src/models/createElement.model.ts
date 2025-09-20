interface ObjStr {
  [name: string]: string;
}
export default function createElement(tagName: string, attrs: ObjStr, value?:string): HTMLElement {
  let ele = document.createElement(tagName);
  for (const key in attrs) ele.setAttribute(key, `${attrs[key]}`);
  if(value) ele.innerHTML = value;
  return ele;
}