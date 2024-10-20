const COPYRIGHT_YEAR_START = Number(import.meta.env.VITE_COPYRIGHT_YEAR_START);

export function getCopyright() {
	let year: string | number = new Date().getFullYear();

	if (year !== COPYRIGHT_YEAR_START) {
		year = [COPYRIGHT_YEAR_START, year].join("-");
	}

	return `Все права защищены © ИП Широбоков Н., ${year}`;
}
