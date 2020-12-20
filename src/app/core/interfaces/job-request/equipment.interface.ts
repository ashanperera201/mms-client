export interface IEquipmentType {
    id: string;
    equipmentType: string;
    equipments: IEquipment[];
}

export interface IEquipment {
    id: string;
    name: string;
}