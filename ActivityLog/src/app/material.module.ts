import { NgModule } from '@angular/core';
// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
    ]
})
export class MaterialModule {}
