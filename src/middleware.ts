import { defineMiddleware } from "astro:middleware"

const i18nSessionManager = defineMiddleware(async (context, next) => {
  const { url, cookies } = context
  const locale = url.pathname.split("/").filter(Boolean)[0]

  if (locale === "es" || locale === "en") {
    cookies.set("astro-locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
    })
  }

  return next()
})

export const onRequest = i18nSessionManager
