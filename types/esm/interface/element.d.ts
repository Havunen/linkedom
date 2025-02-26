/**
 * @implements globalThis.Element
 */
export class Element extends ParentNode implements globalThis.Element {
    constructor(ownerDocument: any, localName: any);
    get namespaceURI(): string;
    before(...nodes: any[]): void;
    after(...nodes: any[]): void;
    replaceWith(...nodes: any[]): void;
    remove(): void;
    set id(arg: any);
    get id(): any;
    set className(arg: any);
    get className(): any;
    get tagName(): any;
    get classList(): any;
    get dataset(): any;
    getBoundingClientRect(): {
        x: number;
        y: number;
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
    };
    set nonce(arg: any);
    get nonce(): any;
    get style(): any;
    set tabIndex(arg: number);
    get tabIndex(): number;
    set slot(arg: any);
    get slot(): any;
    get innerText(): string;
    set innerHTML(arg: any);
    get innerHTML(): any;
    set outerHTML(arg: string);
    get outerHTML(): string;
    get attributes(): any;
    focus(): void;
    getAttribute(name: any): any;
    getAttributeNode(name: any): import("../mixin/parent-node.js").NodeStruct;
    getAttributeNames(): NodeList;
    hasAttribute(name: any): boolean;
    hasAttributes(): boolean;
    removeAttribute(name: any): void;
    removeAttributeNode(attribute: any): void;
    setAttribute(name: any, value: any): void;
    setAttributeNode(attribute: any): import("../mixin/parent-node.js").NodeStruct;
    toggleAttribute(name: any, force: any, ...args: any[]): boolean;
    get shadowRoot(): any;
    attachShadow(init: any): ShadowRoot;
    matches(selectors: any): any;
    closest(selectors: any): Element;
    insertAdjacentElement(position: any, element: any): any;
    insertAdjacentHTML(position: any, html: any): void;
    insertAdjacentText(position: any, text: any): void;
    toJSON(): any[];
    getAttributeNS(_: any, name: any): any;
    getElementsByTagNameNS(_: any, name: any): NodeList;
    hasAttributeNS(_: any, name: any): boolean;
    removeAttributeNS(_: any, name: any): void;
    setAttributeNS(_: any, name: any, value: any): void;
    setAttributeNodeNS(attr: any): import("../mixin/parent-node.js").NodeStruct;
    [CLASS_LIST]: any;
    [DATASET]: any;
    [STYLE]: any;
}
import { ParentNode } from "../mixin/parent-node.js";
import { NodeList } from "./node-list.js";
import { ShadowRoot } from "./shadow-root.js";
import { CLASS_LIST } from "../shared/symbols.js";
import { DATASET } from "../shared/symbols.js";
import { STYLE } from "../shared/symbols.js";
