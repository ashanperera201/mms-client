import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceNames } from '../enums/service-names.enum';
import { ICustomConfigs } from '../interfaces/index';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule
    ],
    exports: []
})

export class ServicesGatewayModule {
    public static foorRoot(hostName: string, customConfigs?: ICustomConfigs): ModuleWithProviders<ServicesGatewayModule> {
        return {
            ngModule: ServicesGatewayModule,
            providers: [
                {
                    provide: 'EndpointConfiguration', useValue: {
                        mock_user_endpoint: `${hostName}/${ServiceNames.json_placeholder_endpoints}`,
                        // ....
                        // TODO: use this custom configs later : customConfigs
                    }
                }
            ]
        }
    }
}
