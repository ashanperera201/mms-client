
export const requestTemplateForms = [
    {
        templateId: 1,
        formTitle: 'EE Job Request',
        templateCode: 'EE-JOBREQUEST',
        formFields: [
            {
                id: 'qr-code',
                label: 'Select Machine',
                required: true,
                isRow: true,
                cssClasses: 'request-btn-gap',
                fields: [
                    {
                        id: 'xxxx',
                        type: 'text',
                        fieldType: '',
                        name: 'xxxx',
                        value: 'XXX',
                        cssClasses: 'form-control minw',
                    },
                    {
                        id: 'xxxx',
                        type: 'text',
                        fieldType: '',
                        name: 'xxxx',
                        value: 'XXX',
                        cssClasses: 'form-control minw',
                    },
                    {
                        id: 'xxxx',
                        type: 'text',
                        fieldType: '',
                        name: 'xxxx',
                        value: 'XXXX',
                        cssClasses: 'form-control minw',
                    },
                    {
                        id: 'qr-code-field',
                        type: 'button',
                        name: 'qqr-code-field',
                        cssClasses: 'request-btn request-btn--select-machine request-btn--select-machine-max',
                        modalContent: {
                            id: "modal-qr-code",
                            modalHeader: "Scan your QR Code",
                            modalContentCode: "qr-code-content",
                            height: '48rem',
                            width: '53rem'
                        },
                        buttonField: {
                            id: 'btn-qrcode',
                            buttonName: 'qrCode',
                            buttonType: 'button',
                            iconClass: 'icon-qr-code',
                            buttonLabel: 'Scan QR code',
                        }
                    },
                    {
                        id: 'manual-field',
                        type: 'button',
                        name: 'manual-field',
                        cssClasses: 'request-btn request-btn--select-machine request-btn--select-machine-max',
                        modalContent: {
                            id: "modal-machine-details",
                            modalHeader: "Machine Details",
                            modalContentCode: "machine-details",
                            height: 'auto',
                            width: '53rem'
                        },
                        buttonField: {
                            id: 'btn-manually',
                            buttonName: 'manually',
                            buttonType: 'button',
                            iconClass: 'icon-keyboard',
                            buttonLabel: 'Enter Manually'
                        }
                    }
                ]
            },
            {
                id: 'problem',
                label: 'Problem',
                required: true,
                isRow: false,
                cssClasses: 'w-100',
                fields: [
                    {
                        id: 'problem-field',
                        type: 'text',
                        name: 'problem',
                        placeholder: '',
                        value: '',
                        cssClasses: 'form-control maxw',
                        isMultiline: false
                    }
                ]
            },
            {
                id: 'faultType',
                label: 'Fault Type',
                isRow: false,
                required: true,
                cssClasses: 'w-100',
                fields: [
                    {
                        id: 'faultType-field',
                        type: 'dropdown',
                        name: 'faultType',
                        value: '',
                        cssClasses: 'form-control maxw',
                        options: [
                            { key: null, label: 'Fault Type', disable: true, selected: true }
                        ],
                    }
                ]
            },
            {
                id: 'description',
                required: false,
                isRow: false,
                label: 'Description',
                cssClasses: 'w-100',
                fields: [
                    {
                        id: 'description-field',
                        type: 'text',
                        name: 'description',
                        placeholder: '',
                        isMultiline: true,
                        value: '',
                        cssClasses: 'form-control maxw avoid-resize',
                    }
                ]
            },
            {
                id: 'priority',
                required: true,
                isRow: false,
                label: 'Priority',
                cssClasses: 'w-100',
                fields: [
                    {
                        id: 'priority-field',
                        type: 'dropdown',
                        fieldType: '',
                        name: 'priority',
                        value: '',
                        cssClasses: 'form-control minw',
                        options: [
                            { key: '1', label: 'High', disable: false, selected: true }
                        ]
                    }
                ]
            }
        ]
    }
]

