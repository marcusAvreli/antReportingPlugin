import { Injectable, Inject } from '@angular/core';
//import { Http } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Task } from './task.model';
//import { ApiConfig } from '../../core/models/api-config';
import { ConfigService } from '../../core/services/config.service'
import { BaseService } from '../../core/services/base.service';
import { CommonUtil } from '../../core/utilities/common.util';
import { map,catchError  } from 'rxjs/operators';
@Injectable()
export class TaskService extends BaseService<TaskService> {
  constructor(public override  http: HttpClient, @Inject('CONFIG') private config: ConfigService) { super(http); }

  public getServiceUrl(): string {
    return CommonUtil.getApiUrl('TASK_URL', this.config);
  }
  /*
   public delete(data): Observable<any> {
   console.log("overwritten delete");
   const options = this.getOptionsWithToken("token");

    return this.http.post(this.getServiceUrl()+'/delete',data,options).pipe(catchError(this.handleError));
  }
  */
  
  
  
}