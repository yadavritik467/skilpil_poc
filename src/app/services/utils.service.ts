import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
    constructor(@Inject(APP_BASE_HREF) private readonly appBaseHref: string) {}

    getUrl(filePath: string) {
        return this.appBaseHref + filePath;
    }
}
