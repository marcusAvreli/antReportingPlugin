import { IHttpConfig } from "./app/core/models/http-config.interface";
import { environment } from "./environments/environment";

export const CONFIG = <IHttpConfig> {
  interceptUrls: {
      'api://': {
          root: environment.root_api_url,
          isAuth: true,
          headers: {},
      },
      'userapi://': {
        root: environment.user_api_url,
        isAuth: true,
        headers: {}
      },
      'authapi://': {
        root: environment.authority,
        isAuth: false,
        headers: {}
      }
  },
  authConfig: {
    authority: environment.authority,
    signin_url: environment.authority + '/generateToken',
    signout_url: environment.authority + 'logout',
    auth_check: environment.authority + 'check'
  },
  apiUrls: [
		{ id: 'HEROES_SERVICE_URL', url: `${environment.root_api_url}/oauth2/reportDefinition` },
		{ id: 'DB_OBJECT_SERVICE_URL', url: `${environment.root_api_url}/oauth2/dbObject` },
		{ id: 'DB_FIELD_SERVICE_URL', url: `${environment.root_api_url}/oauth2/dbField` },
		{ id: 'DATA_SOURCE_SERVICE_URL', url: `${environment.root_api_url}/oauth2/dataSource` },
		{ id: 'RPRT_COLUMN_SERVICE_URL', url: `${environment.root_api_url}/oauth2/rprtColumn` },
		{ id: 'UV_SERVICE_URL', url: `${environment.root_api_url}/oauth2/rprtUV` },
		{ id: 'UVC_SERVICE_URL', url: `${environment.root_api_url}/oauth2/rprtUVC` },
		{ id: 'RPRT_SINGLE_URL', url: `${environment.root_api_url}/oauth2/rprtBuilder` },
		{ id: 'TASK_URL', url: `${environment.root_api_url}/rest/taskResults` },
		{ id: 'PROVISIONING_TRANSACTION_URL', url: `${environment.root_api_url}/rest/provisioningTransactions`},
		{ id: 'PROVISIONING_TRANSACTION_URL2', url: `${environment.root_api_url}/plugin/rest/scaffolding/provisioningTransactions`},
		{ id: 'VILLAINS_SERVICE_URL', url: 'app/villains' },
		{ id: 'OAUTH_SERVICE_URL', url: 'http://localhost:3000/api/oauth/token' }
    ],
  propertiesFile: ''
};