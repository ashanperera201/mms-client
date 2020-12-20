import { Injectable } from '@angular/core';
import { IIconContainer, IJobRequest, IDepartment, IBaseResponse, IEquipmentType } from '../../interfaces/index';
import { HttpClientService } from '../../http/http-client/http-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobRequestService {

  private baseUrl: string = 'app/core/data/';

  constructor(private httpClientService: HttpClientService) { }

  getRequestContainers = (): Observable<IIconContainer[]> => {
    return this.httpClientService.get<IIconContainer[]>(`${this.baseUrl}job-request-main-screen.json`);
  }

  getJobRequestData = (): Observable<IJobRequest[]> => {
    return this.httpClientService.get<IJobRequest[]>(`${this.baseUrl}job-request.json`);
  }

  getDepartments = (): Observable<IBaseResponse<IDepartment[]>> => {
    return this.httpClientService.get<IBaseResponse<IDepartment[]>>(`${this.baseUrl}department.json`);
  }

  getEquipmentMasterDetails = (): Observable<IBaseResponse<IEquipmentType[]>> => {
    return this.httpClientService.get<IBaseResponse<IEquipmentType[]>>(`${this.baseUrl}equipment.json`);
  }
}
