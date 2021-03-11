export const environment = {
    production: false,
    apiBaseUrl: "https://rrdseduukqbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d6219fd2-e180-4bc4-8ffe-6fb844166fcb",
        clientId: "12aed291-90c9-4018-91e7-9fedacced77a",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
