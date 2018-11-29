import { NgModule } from '@angular/core';

import { PrestamosMiguelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PrestamosMiguelSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PrestamosMiguelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PrestamosMiguelSharedCommonModule {}
