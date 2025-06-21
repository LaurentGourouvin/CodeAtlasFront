import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: "http://localhost:8081",
  realm: "codeatlas",
  clientId: "codeatlas-web"
})

export const initKeycloak = async () => {
  try {
    await keycloak.init({
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    })

    return keycloak
  } catch (e) {
    console.error('[Keycloak] Keycloak init failed', e)
    return null
  }
}
