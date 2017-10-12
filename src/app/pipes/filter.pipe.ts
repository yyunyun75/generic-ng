import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: object): any {
      if(!items || !filter){
        return items;
      }
      return items.filter(item => this.applyFilter(item, filter));
    }

    applyFilter(item: Object, filter: Object): boolean {
        for (let field in filter) {

          if (filter[field]) {

            if (typeof filter[field] === 'string' && typeof item[field] === 'string') {
              if (item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                return false;
              }
            } else if (typeof filter[field] === 'number') {
              if (item[field] !== filter[field]) {
                return false;
              }
            }
          }
        }

        return true;
    }
}
