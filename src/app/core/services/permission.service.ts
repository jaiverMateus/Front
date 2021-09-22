import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { PermissionComponent } from '../interfaces/permissionComponent';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  itemToFind = ''
  itemFinded: any = []
  constructor(private _user: UserService, private HttpClient: HttpClient) { }

  validatePermissions(perms) {
    this.itemToFind = perms.menu;
    this.findMenuItem(this._user.user.menu);
    if (this.itemFinded) {
      for (const iterator in perms.permissions) {
         let finded = this.itemFinded.permissions.some(d => (d.name == iterator && d.Activo) )
         perms.permissions[iterator] = finded;
      }
    }
    return perms
  }


  public findMenuItem(menu: any) {
    try {
      for (let element of menu) {
        if (element.child) { this.findMenuItem(element.child) }
        if (element.name == this.itemToFind) {
          this.itemFinded = element;
        }
      }
    } catch (finded) {};
  }

  getPermissions(params = {}) {
    return this.HttpClient.get(`${environment.base_url}/get-menu`, { params })
  }

  save(params) {
    return this.HttpClient.post(`${environment.base_url}/save-menu`, params)
  }
}
