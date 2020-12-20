export interface IMenuItems {
    parentId: number;
    menuName: string;
    iconClassName: string;
    route: string;
    menuItems: IMenuItems[]
}