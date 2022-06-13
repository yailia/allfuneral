import { ERoutes } from "./enums/routes"

const domain = "/"

export const appUrls = {
  home: domain + ERoutes.home,
  market: domain + ERoutes.market,
  search: domain + ERoutes.search,
  settings: domain + ERoutes.settings,
  support: domain + ERoutes.support,
  logout: domain + ERoutes.exit

}