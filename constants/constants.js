export const CURRENT_YEAR = new Date().getFullYear()

export const CURRENT_DATE = new Date().toLocaleString('ru',
	{ year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC' })