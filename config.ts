const config = {
    // REQUIRED
    appName: 'Havamal',
    // REQUIRED: a short description of your app for SEO tags (can be overwritten)
    appDescription:
        'Mobiele app voor het ontdekken en delen van verhalen en artefacten van de noormannen in de lage landen. Hieraan is er een webplatform gekoppeld om het uploaden van verhalen te vergemakkelijken. ',
    // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
    domainName: 'localhost:3000',
    locales: ['nl', 'en'],
    aws: {
        // If you use AWS S3/Cloudfront, put values in here
        bucket: 'bucket-name',
        bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
        cdn: 'https://cdn-id.cloudfront.net/',
    },
    mail: {
        // REQUIRED — Email 'From' field to be used when sending magic login links
        fromNoReply: `Havamal <support@havamal.be>`,
        // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
        fromAdmin: `Robin at Havamal <support@havamal.be>`,
        // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
        supportEmail: 'support@havamal.be',
        // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
        forwardRepliesTo: 'support@havamal.be',
    },
    colors: {
        // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
        theme: 'light',
        // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
        // OR you can just do this to use a custom color: main: "#f37055". HEX only.
        //main: themes['light']['primary'],
        //purple: '#581c87',
    },
    auth: {
        // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
        loginUrl: '/signin',
        // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
        callbackUrl: '/dashboard',
    },
};

export { config };
