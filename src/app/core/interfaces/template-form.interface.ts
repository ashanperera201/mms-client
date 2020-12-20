export interface ITemplateForm {
    templateId: number;
    formTitle: string;
    templateCode: string;
    formFields: IFormField[];
}

export interface IFormField {
    id: string;
    isRow?: boolean;
    label: string;
    required: boolean;
    fields: IFeild[];
    formFields?: IFormField[];
    cssClasses?: string;
}

export interface IFeild {
    id: string;
    type: string;
    placeholder?: string;
    name: string;
    value?: string;
    isMultiline?: boolean;
    cssClasses?: string;
    iconClass?: string;
    modalContent?: IDialogContent;
    options?: IDropDownOptions[];
    buttonField?: IButtonOptions;
}

export interface IDialogContent {
    id: string;
    modalHeader: string;
    modalContentCode: string;
    height: string;
    width: string;
}

export interface IDropDownOptions {
    key: string;
    label: string;
    disable?: boolean;
    selected?: boolean;
}

export interface IButtonOptions {
    id: string;
    buttonName: string;
    buttonType: string;
    iconClass?: string;
    buttonLabel?: string;
    formFields?: IFormField[];
}