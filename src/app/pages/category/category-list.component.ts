import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {

    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
          },
          edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
          },
          delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
          },
        columns: {
          id: {
            title: 'ID',
          },
          name: {
            title: 'Full Name',
          },
          username: {
            title: 'User Name',
          },
          email: {
            title: 'Email',
          },
        },
      };
    
      data = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv"
        },
    
        // ... list of items
    
        {
          id: 11,
          name: "Nicholas DuBuque",
          username: "Nicholas.Stanton",
          email: "Rey.Padberg@rosamond.biz"
        }
      ];
    
      onDeleteConfirm(event) {
        console.log("Delete Event In Console")
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
      }
    
      onCreateConfirm(event) {
        console.log("Create Event In Console")
        console.log(event);
    
      }
    
      onSaveConfirm(event) {
        console.log("Edit Event In Console")
        console.log(event);
      }

}
