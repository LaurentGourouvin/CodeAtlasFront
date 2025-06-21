import { getCurrentInstance } from 'vue'

export const useKeycloak = () => {
  const instance = getCurrentInstance()
  
  if (!instance) {
    throw new Error('useKeycloak() must be used inside setup()')
  }

  const keycloak = instance.appContext.config.globalProperties.$keycloak

  if (!keycloak) {
    console.warn('[useKeycloak] $keycloak is undefined')
  }

  return keycloak
}
