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
    return new Promise(() => {
        // if (!appId) return;
        // Facebook.load();
        // return await Facebook.init({
        //     appId: appId,
        //     version: "v19.0",
        //     cookie: true,
        //     xfbml: true,
        // });

        console.log("p");
        window.fbAsyncInit = function () {
            const FB = window.FB;
            FB.init({
                appId: appId,
                cookie: true,
                xfbml: true,
                version: 'v8.0'
            });
        };

        // // wait for facebook sdk to initialize before starting the vue app
        // Facebook.load().then(() => {
        //     Facebook.init({
        //         appId: appId,
        //         version: "v19.0",
        //         cookie: true,
        //         xfbml: true,
        //     });

            console.log("ini r berarti");

            // load facebook sdk script
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                (js as any).src = "https://connect.facebook.net/en_US/sdk.js";
                (fjs.parentNode as ParentNode).insertBefore(js, fjs);
            } (document, 'script', 'facebook-jssdk'));
            
        //     console.log("s");
        // })
        // console.log("q");
    })
}

export async function login(): Promise<FaceBookResponse | null> {
    const response = await Facebook.login({
        scope: 'public_profile , email',
        return_scopes: true
    });

    console.log("1", response);

    if (response.status !== 'connected') {
        return null;
    }
    const profile = await Facebook.api(
        `/${response.authResponse.userID}`,
        "post",
        {
            fields: ['email', 'name', 'picture']
        }
    );
    console.log("2", profile);
    const facebookResponse: FaceBookResponse = {
        name: profile.name,
        email: profile.email,
        picture: profile.picture.data.url,
        authResponse: response.authResponse
    };
    return facebookResponse;
}

export async function logout(): Promise<void> {
    return await Facebook.logout();
}