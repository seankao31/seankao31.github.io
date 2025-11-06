import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
	} catch (err) {
		error(500, err);
	}
};
