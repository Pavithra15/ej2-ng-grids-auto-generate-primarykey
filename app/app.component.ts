import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './data';
import { GridComponent, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'app-container',
    template: `<ej-grid #grid [dataSource]='data'  (actionComplete)= 'actioncomplete($event)' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='right' [visible]='true' [isPrimaryKey]='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'right' width=120 format= 'C2'></e-column>
                    <e-column field='EmployeeID' headerText='EmployeeID' width=150></e-column>
                </e-columns>
                </ej-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    @ViewChild('grid')
    public grid: GridComponent;
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
    }
    public uniqueValue: number = 10252;
    actioncomplete(args: any) {
        switch (args.requestType) {
            case 'save':
                if (args.action == 'add' && args.data) {
                    this.uniqueValue++;
                    args.data.OrderID = this.uniqueValue;
                }
                break;
        }
    }
}