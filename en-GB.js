export default {
	categories: {
		gameOne: {
			title: 'Game (Pre-Existing Engine)',
			desc: 'Create a game with an existing engine of your choice, e.g. GameMaker or Unity.',
		},
		gameTwo: {
			title: 'Game (Original)',
			desc: 'Create a game from scratch, without the help of an existing engine.',
		},
		utility: {
			title: 'Utility',
			desc: 'Create an utility homebrew or a plugin.',
		},
		port: {
			title: 'Port',
			desc: 'Port an application or a game from another system.',
		},
	},

	rules: {
		submissionsLimit:
			'Developers can submit as many projects as they want but they can collect a single prize at best per category.',
		previouslySubmitted:
			'A game previously released on different platforms (e.g. PS4 or Switch) should be submitted in the Port category, regardless of its original author.',
		releasedBefore:
			'If the project you want to submit was already released in the past, the amount of changes should be consistent or else it will be rejected.',
		noPiracy:
			'Piracy is not allowed in any form. Copyrighted assets usage is not allowed. Free assets such as the ones available on the Unity Assets Store are accepted however original assets are better evaluated. Projects submited for the Port category must not include data files unless they're free to share and works derived from source code leaks will be rejected.',
		paypal: 'You must have a PayPal account to receive money.',
		splashScreen:
			'Your homebrew must show the contest splashscreen during its booting process. To easen this process, you can even include it as pic0.png in your final vpk. In this way, the PSVita will automatically show it when launching the bubble from the LiveArea. If you're submitting a plugin, you're requested to mention the the KyûHEN contest in the readme file of your project.',
		publicRelease:
			'You can't share a public build of your project until it gets approved and showcased on our website.',
		openSource:
			'If your project is based on an open source one, you must respect the license of its original work.',
		cheats: 'If we catch you cheating, you are automatically excluded from the contest.',
		categoriesPrizes:
			'Each category prize quota might be subject to slight changes depending on the number of submitted projects and on the total amount of money collected through donations.',
	},

	pages: {
		home: {
			title: 'Home',
			slogan: 'Who can brew the best',
			categories: {
				homebrew: 'homebrew',
				game: 'game',
				utility: 'utility',
				port: 'port',
			},
			donate: 'Donate',
			submit: 'Submit',
			submittedProjects: 'Submitted projects',
			aboutTitle: 'About',
			aboutContent1:
				"From an innocent conversation on Twitter to a reality, we are now organizing the 3rd Homebrew contest for the PSVita. The past few months have been incredible for the PSVita scene: from a relatively silent one to an outburst of unlocked possibilities like the Dreamcast emulator, GTA and Sonic games being ported, Piglet (GLES 2.0 library) usage enabled and vitaGL being more complete than ever. There has been a sudden change in the PSVita scene, despite the fact that it seems close to step another foot in its grave due the recent rumors about the PS Store being near to shutdown for several consoles, PSVita included, but thanks to the developers in the underground scene, the future isn't looking that gloomy for the vita. (Which is why we decided to call the contest KyûHEN, which means sudden change)",
			aboutContent2:
				'We want to help the Vita community to pursue that change by growing the interest towards the homebrew scene with this contest and by calling people to create new contents for the PSVita using tools like vitaGL, SDL, Unity, Piglet, and so on. If you want to be part of the journey and contribute with your project, then welcome to the KyûHEN contest!',
			cimmerianDesc:
				'I am one of the moderators of Custom Protocol (French hacking website as well as a former GekiHEN creator). I love using my knowledge to assist people navigating the Vita hacking scene in the HENkaku and Vita Nuova Discord servers and through my Vita troubleshooting guides. I frequently contribute to homebrew projects with beta testing and translation. You can contact me through my Discord and Twitter.',
			oldGamingDesc:
				'My name is Sandeep Rai, also known as “2 Old 4 Gaming” on Twitter and YouTube. I have been a gamer for most of my life. I have fond memories of sitting in front of the TV and playing my NES with my brother, but, as an adult, I’ve found handheld gaming just suited my life better. The PlayStation Vita, with its varied library of games and portability, has been my device of choice when it comes to gaming. My passion for the Vita and its games inspired me to not only write a series of books about the history of the system but also start my YouTube channel. You can find me at my Twitter, and Youtube.',
			frangarcjDesc:
				'I am one of the maintainers of VitaSDK and the main developer of RetroArch PSVita port. I am also involved in the Vita3K emulator development. I have been active in the scene since Rejuvenate times but real life has reduced my time available for development. Nowadays my main contributions are about helping and assisting other developers in the HENkaku and Vita Nuova Discords. You can find me at my Twitter, and GitHub.',
		},
		details: {
			title: 'Details',
			intro: {
				title: 'Intro',
				content1:
					'The contest wil last 2 months, so, until the 27th of May. Through this contest, we want to promote creativity and originality thanks to the two featured Game categories. We also joined forces with a professional in the gaming industry in order to help amateur developers grow up and improve their skills thanks to the suggestions an expert in the sector can give.',
				content2:
					'During the past years, we've seen an inevitable decrease in interest towards homebrew scenes due to the popularity of smartphones and due to security measures strengthening generation after generation. This contest, with the involvement of Wololo, PSX-Place and PlayStationHaX, is the occasion to light up that lost fire in our community and hopefully raise the interest towards homebrew again. KyûHEN is born from the will of the community to have an homebrew contest after the recent improvements in the scene, and we are turning it into reality. But for it to be successful, we need you!',
			},
			process: {
				title: 'The Process',
				content: 'The contest will proceed via 3 simple steps:',
				step1:
					'Each participant will submit his projects into the 4 categories listed below. The contest will last 2 months from the 27th of March to the 27th of May.',
				step2:
					'The jury will judge the projects and write down a ranking for all the submitted projects.',
				step3:
					'The prize pool will be split according to the prize share chart shown below and the winners will be contacted to receive their money.',
			},
			categories: {
				title: 'The four Categories',
			},
			voting: {
				title: 'The Vote',
				content1:
					'The jurors will individually submit a writeup explaining how they made their personal ranking, covering what they liked and disliked, and proposing suggestions and advices for every submitted project.',
				content2:
					'A complessive ranking will be made up using the personal jurors rankings as sources. The result will be displayed in the contest website.',
			},
			prizes: {
				title: 'The Prizes',
				contentStart: 'We will share the prize pool collected on',
				donationPlatform: 'our Ko-Fi',
				contentMiddle: ' (starting from ',
				amountCollected: '455 $',
				contentEnd: ' thanks to our sponsors). This will be divided amongst the 4 categories as shown below.',
				conclusion:
					'We'll award three chosen projects per category and the distribution for the prizes will be calculated depending on the amount of entries in each category.',
			},
			rules: {
				title: 'The Rules',
				splashScreen:
					'This is the splashscreen that must be used during the booting process of your project:',
			},
			contact: {
				title: 'Contacts',
				intro: 'Do you have any questions about the contest? Do you waant to have a chat with us?',
				contentStart: 'You can either send an e-mail to ',
				contentMiddle: ' or a DM to our Twitter ',
				contentEnd: '.',
			},
		},
		resources: {
			title: 'Resources',
			pageTitle: 'Tools',
			vitaSDK: {
				title: 'VitaSDK',
				setupUnity: 'How to setup Unity for PSVita development',
				deployProject: 'How to easily deploy a project on the PSVita',
				gameMakerExportTool: 'GameMaker Studio PSVita export tool',
			},
			helpingTools: 'Tools that make your life just a bit easier',
			debuggingTools: {
				title: 'Useful debugging tools',
				gdbVita: 'GDB for Vita (not convenient)',
			},
			discordServers: {
				title: 'Useful Discord servers',
				henkakuSpecialities: 'mainly VitaSDK',
				nuovaSpecialities: 'mainly VitaSDK',
				cbpsSpecialities: 'mainly DolceSDK/Unity/GameMaker',
			},
		},
		submissions: {
			title: 'Submissions',
			temp: {
				contentStart: 'As the submission system is not yet completely finished, please use this ',
				contentLink: 'Google Form',
				contentEnd: ' for now.',
				outro: "We're trying to finish it as soon as possible.",
				thanks: 'Thank you for your understanding.',
			},
		},
	},

	signs: {
		colon: ':',
	},

	others: {
		comingSoon: {
			top: 'coming',
			bottom: 'soon...',
			detailsStart: 'The submission page will be open on ',
			detailsDate: 'April 8',
			detailsEnd: '',
		},
	},
};
