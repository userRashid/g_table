
import { Pipe, PipeTransform } from '@angular/core';
import { TableConfig } from '../table.interface';

@Pipe({
    name: 'tableProperty'
})
export class TablePropertyPipe implements PipeTransform {
    transform(
        config: TableConfig[],
        objectKey: string,
        property: string
    ): any {
        let output = null;
        try {
            for (let i = 0; i < config.length; i++) {
                if (config[i].objectKey === objectKey) {
                    output = config[i][property];
                }
            }
        } catch (error) {
            console.log(
                'cannot read property: "' +
                property +
                '" on missing key: "' +
                objectKey +
                '" in config.',
                error
            );
        }
        return output;
    }
}