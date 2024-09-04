(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptionsWiz = {};
    botOptionsWiz.logLevel = 'debug';
    botOptionsWiz.koreAPIUrl = "https://bots.kore.ai";

    botOptionsWiz.JWTUrl = "http://localhost:3000/api/users/sts";
    botOptionsWiz.userIdentity = 'vishal.chhadekar@aionos.ai';// Provide users email id here
    botOptionsWiz.botInfo = { name: "FindMeFlight", "_id": "st-04557a8f-068a-5cd2-8fcc-abed5905e7a1" }; // bot name is case sensitive
    botOptionsWiz.clientId = "cs-b52b989d-e2cd-5726-aa13-0ef276d35e4e";
    botOptionsWiz.clientSecret = "RRv4fuQOyo0IcG3bixYtWf1EGK2dtfFw/Y7Jl6Qpucg=";

    var widgetsConfig = {
        botOptions: botOptionsWiz
    };
    
    KoreSDK.widgetsConfig=widgetsConfig
})(window.KoreSDK);