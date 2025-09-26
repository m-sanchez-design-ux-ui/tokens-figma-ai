declare module 'flowbite-datepicker' {
  export class Datepicker {
    constructor(element: HTMLElement, options?: Record<string, any>);
    show(): void;
    hide(): void;
    toggle(): void;
    update(options: Record<string, any>): void;
  }
}
