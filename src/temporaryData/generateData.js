import {faker} from '@faker-js/faker';

export const generateData = () => {
	const data = {
		users: [],
		quests: [],
		partners: [],
	};


	//*partners ****************************
	let partners = [];
	for (let i = 0; i < 50; i++) {
		partners.push({
			id: faker.string.uuid(),
			login: faker.internet.userName(),
			name: faker.company.name(),
			shortDescription: faker.company.catchPhrase(),
			description: faker.lorem.paragraphs(4),
			logo: faker.image.urlPicsumPhotos(),
			imgBg: faker.image.urlPicsumPhotos(),
			followers: faker.number.int({min: 5000, max: 100000}),
			isTrusted: Math.random() < 0.5,
			socials: {
				instagram: faker.image.urlPlaceholder(),
				discord: faker.image.urlPlaceholder(),
				twitter: faker.image.urlPlaceholder(),
				telegram: faker.image.urlPlaceholder(),
			},
			createDate: faker.date.between({
				from: '2020-01-01T00:00:00.000Z',
				to: '2023-11-28T00:00:00.000Z',
			}),
			quests: [],
		});
	}
	//*push partners with quests
	data.partners = partners.map((item) => {
		let partnerQuests = [];
		for (let i = 0; i < 10; i++) {
			partnerQuests.push({
				id: faker.string.uuid(),
				idPartner: item.id,
				image: faker.image.urlPicsumPhotos(),
				title: faker.lorem.words(2),
				description: faker.lorem.paragraphs(3),
				dateStart: new Date(),
				dateEnd: new Date(),
				chainType: faker.number.int({min: 0, max: 1}),
				difficulty: faker.number.int({min: 0, max: 2}),
				status: faker.number.int({min: 0, max: 2}),
				// step: faker.number.int({min: 0, max: 2}), //for user
				awards: {
					nft: Math.random(),
					token: Math.random(),
					xp: 240,
				},
				website: faker.internet.avatar(),
				social:
					Math.random() < 0.4
						? {name: 'twitter', typeTask: faker.lorem.words(3)}
						: Math.random() < 0.7
						? {name: 'discord', typeTask: faker.lorem.words(3)}
						: {name: 'telegram', typeTask: faker.lorem.words(3)},
				purpose:
					Math.random() < 0.1
						? 1
						: Math.random() < 0.3
						? 2
						: Math.random() < 0.6
						? 3
						: 4,
			});
		}
		return {...item, quests: partnerQuests};
	});

	//*quests ******************************
	let quests = [];
	data.partners.forEach((item) => {
		quests.push(...item.quests);
	});
	data.quests = quests;

	//*users *******************************
	for (let i = 0; i < 9; i++) {
		data.users.push({
			id: faker.string.uuid(),
			username: faker.internet.userName(),
			email: faker.internet.email(),
			avatar: faker.internet.avatar(),
			xp: Math.floor(Math.random() * (14400 - 0 + 1)),
			isAdmin: false,
			socials: {
				twitter: Math.random() < 0.5,
				discord: Math.random() < 0.5,
				telegram: Math.random() < 0.5,
			},
			wallets: {
				metamask: Math.random() < 0.5,
				binance: Math.random() < 0.5,
				trust: Math.random() < 0.5,
				phantom: Math.random() < 0.5,
			},
			quests: data.quests.filter(() => Math.random() < 0.5).map((el) => {
				return {
					...el,
					step: faker.number.int({min: 0, max: 2}), //for user
					isDone: Math.random() < 0.5,
					isVerify: Math.random() < 0.5,
				};
			}),
			subscriptions: data.partners.filter(() => {
				return Math.random() < 0.5
			})
		});
	}
	//* push admin
	data.users.push({
		id: 1,
		username: faker.internet.userName(),
		email: faker.internet.email(),
		avatar: faker.internet.avatar(),
		isAdmin: true,
	});
	//* push user
	data.users.push({
		id: 2,
		username: faker.internet.userName(),
		email: faker.internet.email(),
		avatar: faker.internet.avatar(),
		xp: Math.floor(Math.random() * (14400 - 0 + 1)),
		isAdmin: false,
		socials: {
			twitter: Math.random() < 0.5,
			discord: Math.random() < 0.5,
			telegram: Math.random() < 0.5,
		},
		wallets: {
			metamask: Math.random() < 0.5,
			binance: Math.random() < 0.5,
			trust: Math.random() < 0.5,
			phantom: Math.random() < 0.5,
		},
		quests: data.quests.filter(() => Math.random() < 0.5).map((el) => {
			return {
				...el,
				step: faker.number.int({min: 0, max: 2}), //for user
				isDone: Math.random() < 0.5,
				isVerify: Math.random() < 0.5,
			};
		}),
	});
console.log(data.users)

// console.log(data)
	// for (let i = 0; i < 100; i++) {
	// 	data.quests.push({
	// 		id: faker.string.uuid(),
	// 		image: faker.image.urlPicsumPhotos(),
	// 		title: faker.lorem.words(2),
	// 		description: faker.lorem.paragraphs(3),
	// 		dateStart: new Date(),
	// 		dateEnd: new Date(),

	// 		chainType: faker.number.int({min: 0, max: 1}),
	// 		difficulty: faker.number.int({min: 0, max: 2}),
	// 		// needsLvl: faker.number.int({min: 1, max: 30}),
	// 		status: faker.number.int({min: 0, max: 2}),
	// 		step: faker.number.int({min: 0, max: 2}), //for user
	// 		awards: {
	// 			nft: Math.random(),
	// 			token: Math.random(),
	// 			xp: 240,
	// 		},

	// 		website: faker.internet.avatar(),
	// 		social:
	// 			Math.random() < 0.4
	// 				? {name: 'twitter', typeTask: faker.lorem.words(3)}
	// 				: Math.random() < 0.7
	// 				? {name: 'discord', typeTask: faker.lorem.words(3)}
	// 				: {name: 'telegram', typeTask: faker.lorem.words(3)},

	// 		companyName: faker.company.name(),
	// 		companyAvatar: faker.image.urlPicsumPhotos(),
	// 		companyFollowers: faker.number.int({min: 5000, max: 100000}),
	// 		purpose:
	// 			Math.random() < 0.2
	// 				? 1
	// 				: Math.random() < 0.4
	// 				? 2
	// 				: Math.random() < 0.6
	// 				? 3
	// 				: Math.random() < 0.8
	// 				? 4
	// 				: 'all',
	// 	});
	// }

	// //*users
	// for (let i = 0; i < 10; i++) {
	// 	data.users.push({
	// 		id: faker.string.uuid(),
	// 		username: faker.internet.userName(),
	// 		email: faker.internet.email(),
	// 		avatar: faker.internet.avatar(),
	// 		xp: Math.floor(Math.random() * (14400 - 0 + 1)),
	// 		isAdmin: false,
	// 		socials: {
	// 			twitter: Math.random() < 0.5,
	// 			discord: Math.random() < 0.5,
	// 			telegram: Math.random() < 0.5,
	// 		},
	// 		wallets: {
	// 			metamask: Math.random() < 0.5,
	// 			binance: Math.random() < 0.5,
	// 			trust: Math.random() < 0.5,
	// 			phantom: Math.random() < 0.5,
	// 		},
	// 		quests: data.quests.map((el) => {
	// 			return {
	// 				...el,
	// 				isDone: Math.random() < 0.5,
	// 				isVerify: Math.random() < 0.5,
	// 			};
	// 		}),
	// 	});
	// }

	console.log(JSON.stringify(data));
	// localStorage.setItem('generatedData', JSON.stringify(data));
};
