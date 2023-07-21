export async function ChangeLanguage(context, payload) {
  context.commit("CHANGE_LANGUAGE", payload)
}
