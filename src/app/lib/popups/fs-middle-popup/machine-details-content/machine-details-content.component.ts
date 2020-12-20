import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { JobRequestService } from '../../../../core/services/index';
import { IDepartment, IBaseResponse, IEquipment, IEquipmentType } from '../../../../core/interfaces/index';

@Component({
  selector: 'machine-details-content',
  templateUrl: './machine-details-content.component.html',
  styleUrls: ['./machine-details-content.component.scss']
})
export class MachineDetailsContentComponent implements OnInit {

  @Output() afterSave: EventEmitter<any> = new EventEmitter<any>();
  machineDetailsFormGroup: FormGroup;
  loadingFormData: boolean;

  departments: IDepartment[];
  equipmentTypes: IEquipmentType[];
  equipments: IEquipment[];

  constructor(private jobRequestService: JobRequestService) { }

  ngOnInit(): void {
    this.initializeFormGroup();
    this.loadFormData();
  }

  initializeFormGroup = () => {
    this.machineDetailsFormGroup = new FormGroup({
      department: new FormControl("", Validators.required),
      equipmentType: new FormControl("", Validators.required),
      equipment: new FormControl("", Validators.required)
    });
  }

  loadFormData = () => {
    this.loadingFormData = true;
    this.jobRequestService.getDepartments().pipe(switchMap((departmentResponse: IBaseResponse<IDepartment[]>) => {
      if (departmentResponse && departmentResponse.data && departmentResponse.data.length > 0) {
        this.departments = departmentResponse.data;
      }
      return this.jobRequestService.getEquipmentMasterDetails();
    })).subscribe((equipmentResponse: IBaseResponse<IEquipmentType[]>) => {
      if (equipmentResponse && equipmentResponse.data && equipmentResponse.data.length > 0) {
        this.equipmentTypes = equipmentResponse.data;
      }
      this.loadingFormData = false;
    }, error => {
      console.log(error);
      this.loadingFormData = false;
    });
  }

  equipmentTypeOnChange = ($event) => {
    if ($event) {
      const selectedEquipmentTypeId: string = $event.target.value;
      const equipmentType: IEquipmentType = this.equipmentTypes.find(equipType => equipType.id === selectedEquipmentTypeId);
      this.equipments = equipmentType && equipmentType.equipments && equipmentType.equipments.length > 0 ? equipmentType.equipments : [];
    }
  }

  saveMachineDetails = () => {
    if (this.machineDetailsFormGroup.valid) {
      let emitResult = {};
      const department: IDepartment = this.departments && this.departments.length > 0 ? this.departments.find(d => d.id === this.machineDetailsFormGroup.get("department").value) : null;
      const equipmentType: IEquipmentType = this.equipmentTypes && this.equipmentTypes.length > 0 ? this.equipmentTypes.find(et => et.id === this.machineDetailsFormGroup.get("equipmentType").value) : null;
      const equipment: IEquipment = equipmentType && equipmentType.equipments && equipmentType.equipments.length > 0 ? equipmentType.equipments.find(e => e.id === this.machineDetailsFormGroup.get("equipment").value) : null;
      emitResult['department'] = department;
      emitResult['equipmentType'] = equipmentType;
      emitResult['equipment'] = equipment;
      this.afterSave.emit(emitResult);
    } else {
      // TODO : show toaster
    }
  }
}
