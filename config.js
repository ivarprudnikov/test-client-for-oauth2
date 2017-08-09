const cfg = {
    port: 9090,
    get baseUrl() {
        return 'http://localhost:' + this.port
    },
    get client(){
        return {
            clientId: 'grails-client',
            clientSecret: 'secret',
            accessTokenUri: 'http://127.0.0.1:8080/oauth/token',
            authorizationUri: 'http://127.0.0.1:9000/#/oauth',
            redirectUri: this.baseUrl + this.paths.authFlowCallback,
            scopes: ['profile snapshot']
        }
    },
    paths: {
        authFlowStart: '/oauth-client/auth',
        authFlowCallback: '/oauth-client/auth/callback'
    }
};

module.exports = cfg;