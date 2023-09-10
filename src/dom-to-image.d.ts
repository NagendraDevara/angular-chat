declare module 'dom-to-image' {
    export function toBlob(node: HTMLElement, options?: ToBlobOptions): Promise<Blob>;
    export function toDataURL(node: HTMLElement, options?: ToDataURLOptions): Promise<string>;
    export function toJpeg(node: HTMLElement, options?: ToDataURLOptions): Promise<string>;
  }

  interface ToBlobOptions {
    format?: 'jpeg' ;
    quality?: number;
  }

  interface ToDataURLOptions {
    format?:  'jpeg';
    quality?: number;
  }


