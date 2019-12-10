import { TemplateRef } from '@angular/core';

export class TooltipModel {
    constructor(
        public popover: string | TemplateRef<any>, // content
        public popoverTitle: string, // title
        public placement: 'top' | 'bottom' | 'left' | 'right' | 'auto' = 'auto',
        public outsideClick = true,
        public triggers = 'click',
        public container?: 'body',
        public containerClass?: string,
        public onShown?: () => {},
        public onHidden?: () => {},
    ) { }
}


