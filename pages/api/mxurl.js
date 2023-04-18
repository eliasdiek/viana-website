import { Configuration, MxPlatformApi } from 'mx-platform-node';

export default async (req, res) => {

  try {
    const configuration = new Configuration({
      // Configure with your Client ID/API Key from https://dashboard.mx.com
      username: process.env.NEXT_PUBLIC_MX_CLIENT_ID,
      password: process.env.NEXT_PUBLIC_MX_API_KEY,
    
      // Configure environment. https://int-api.mx.com for development, https://api.mx.com for production
      basePath: 'https://int-api.mx.com',
    
      baseOptions: {
        headers: {
          Accept: 'application/vnd.mx.api.v1+json'
        }
      }
    });
    
    const client = new MxPlatformApi(configuration);
    
    const userGuid = process.env.NEXT_PUBLIC_MX_USER_GUID;
    const requestBody = {
      widget_url: {  
        color_scheme: 'light',
        current_institution_code: 'chase',
        current_institution_guid: 'INS-f1a3285d-e855-b61f-6aa7-8ae575c0e0e9',
        current_member_guid: 'MBR-7c6f361b-e582-15b6-60c0-358f12466b4b',
        disable_institution_search: false,
        include_transactions: true,
        is_mobile_webview: true,
        mode: 'aggregation',
        ui_message_version: 4,
        ui_message_webview_url_scheme: 'mx',
        update_credentials: false,
        wait_for_full_aggregation: false,
        widget_type: 'connect_widget'
      }
    };
    const acceptLanguage = 'en-US';
    
    const response = await client.requestWidgetURL(userGuid, requestBody, acceptLanguage);
    
    console.log(response.data);
    res.status(200).json(response.data)
  }
  catch (err) {
    console.log('[err]', err)
  }
}