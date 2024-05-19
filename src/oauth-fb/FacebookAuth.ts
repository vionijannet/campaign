export interface FaceBookResponse {
    email: string;
    name: string;
    picture: string;
    authResponse: any;
}

declare global {
    interface Window {
        fbAsyncInit: any;
        FB: any;
    }
}

// import * as Facebook from 'fb-sdk-wrapper';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as Facebook from "fb-sdk-wrapper";

export async function initFacebook(appId: string | undefined): Promise<void> {
    // if (!appId) return;
    // Facebook.load();
    // return await Facebook.init({
    //     app_id: appId,
    //     version: "v17.0",
    //     cookie: true,
    //     xfbml: true,
    // });

    return new Promise(resolve => {
        // wait for facebook sdk to initialize before starting the vue app
        window.fbAsyncInit = function () {
            const FB = window.FB;
            FB.init({
                appId: appId,
                clientId: appId,
                version: 'v19.0',
                scope: "email+public_profile",
                response_type: "code",
            });

            // auto authenticate with the api if already logged in with facebook
            FB.getLoginStatus((authResponse: any) => {
                resolve(authResponse);
            });
        };

        // load facebook sdk script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            (js as any).src = "https://connect.facebook.net/en_US/sdk.js";
            (fjs.parentNode as ParentNode).insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));    
    });
}

export async function login(): Promise<void> {
    return await new Promise(window.FB.login);
    // const response = await Facebook.login({
    //     scope: 'public_profile , email',
    //     return_scopes: true
    // });

    // console.log("1", response);

    // if (response.status !== 'connected') {
    //     return null;
    // }
    // const profile = await Facebook.api(
    //     `/${response.authResponse.userID}`,
    //     "post",
    //     {
    //         fields: ['email', 'name', 'picture']
    //     }
    // );
    // console.log("2", profile);
    // const facebookResponse: FaceBookResponse = {
    //     name: profile.name,
    //     email: profile.email,
    //     picture: profile.picture.data.url,
    //     authResponse: response.authResponse
    // };
    // return facebookResponse;
}

export async function logout(): Promise<void> {
    return await Facebook.logout();
}