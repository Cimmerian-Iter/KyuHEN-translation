export default {
	categories: {
		gameOne: {
			title: 'Game One',
			desc: 'Create a game with an existing engine of your choice, e.g. GameMaker or Unity.',
		},
		gameTwo: {
			title: 'Game Two',
			desc: 'Create a game from scratch with your engine and compiled with vitaSDK or dolceSDK.',
		},
		utility: {
			title: 'Utility',
			desc: 'Create a homebrew or a plugin.',
		},
		port: {
			title: 'Port',
			desc: 'Port an application or a game from another system, or an emulator.',
		},
	},

	rules: {
		submissionsLimit:
			'Developers can submit as many submissions as they want but can only win one prize per category.',
		previouslySubmitted:
			'For games, if they were previously released on another platform like PS4 or Switch, even if it is yours, it must be submitted in the port category. Utility from other homebrew scenes shall remain in the utility category though',
		releasedBefore:
			'If the game you want to submit was already released before on the PSVita, it must have been at the state of prototype and being improved to make it a complete game. For utility, the changes should be consequent to the homebrew/plugins which required lot of work.',
		noPiracy:
			'No piracy will be allowed. No use of copyrighted assets is accepted, games must be the author original creation. We do allow the use of generic free assets you can find in unity assets store for example but do note that we will value more games which use hand made assets. As for ports, do not include game files if they are not free to share. Engine made from RE are allowed, but engine made from leaked source of a game engine are not allowed.',
		paypal: 'You must have a paypal account to receive the money.',
		splashScreen:
			'You must include the contest splash screen in the booting process of your homebrew (you can include it as a live area asset Plugins obviously can’t show the splashcreen, instead we will ask you to put a mention of the kyûHEN contest inside your readme in your repo.',
		publicRelease:
			'You can share a public build outside of our website only when we have approved it and already showcased your project on our website',
		openSource:
			'If your project is based on an open source project, you must follow the license of the open source project',
		cheats: 'If we catch you cheating, you are automatically banned from the contest.',
		categoriesPrizes:
			'Categories prizes might be subject to slight changes depending on submissions and on the amount collected.',
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
				"From an innocent conversation on Twitter to a reality, we are making the 3rd Homebrew contest for the PSVita. These past few days/months have been incredible for the PSVita. From a silent scene to an outburst of unlocked possibilities like the Dreamcast emulators, GTA games on PSVita and Sonic games being ported, Piglet (GLES 2.0 library) found and VitaGL being more complete than ever, there has been a sudden change in the PSVita scene despite the fact that the vita is close to put another foot in its grave with the recent rumors about the PS Store closing for the PSVita, the future isn't looking that gloomy for the vita. (Which is why we decided to call the contest KyûHEN which means sudden change)",
			aboutContent2:
				'We want to help the Vita scene to pursue that change by growing the interest about the homebrew scene with this contest. Calling people to create new contents for the PSVita using tools like VitaGL, SDL, Unity, Piglet for games, and the vita/dolce SDK. If you want to be part of the journey and contribute with your project, then welcome to the KyûHEN contest!',
			cimmerianDesc:
				'I am one of the moderators of Custom Protocol (French hacking website as well as a former GekiHEN creator). I love using my knowledge to assist people navigating the Vita hacking scene in the henkaku and Vita Nuova discord’s and through my Vita troubleshooting guides. I frequently contribute to homebrew projects with beta testing and translation. You can contact me through my Discord and Twitter.',
			oldGamingDesc:
				'My name is Sandeep Rai, also known as “2 Old 4 Gaming” on Twitter and YouTube. I have been a gamer for most of my life. I have fond memories of sitting in front the TV and playing my NES with my brother, but as an adult I’ve found handheld gaming just suited my life better. The PlayStation Vita, with its varied library of games and portability, has been my device of choice when it comes to gaming. My passion for the Vita and its games inspired me to not only write a series of books about the history of the system but also start my YouTube channel. You can find me at my Twitter, and Youtube.',
			frangarcjDesc:
				'One of the maintainers of VITASDK and main Retroarch PS Vita developer. I am also involved in the Vita3K emulator development. I have been active in the scene since Rejuvenate times but real life has reduced my time available for development. Nowadays my main contributions are helping and assisting other developers in the HENkaku and Vita Nuova Discords. You can find me at my Twitter, and GitHub.',
		},
		details: {
			title: 'Details',
			intro: {
				title: 'Intro',
				content1:
					'The contest will last 2 months so until the 27 may. Through this contest we want to promote creativity and originality with Game One and Game Two. We joined forces with a professional in that field who publish games for PSVita in order to also help amateur developers to grow up and improve their skills with critics from an expert in that field. In the past (PSP era mostly, alongside PS3 era), the hacking scene was at its peak with an active community, forums and legends from the scene (DarK Alex, or geohot to name a few) fueled us with magic on our hands and raised a large interest into hacking their Sony devices. As time goes further, with devices like PS4 and PS5 and the security being tougher and tougher, the hacking community activity decreased with the loss of important websites like qj.net or PSPGen. ',
				content2:
					'This contest, with the involvement of Wololo, PSX-Place and PlayStationHaX is the occasion to light up that lost fire in our community and hopefully raise the interest about hacking their device again. This contest is born from the will of the community to have one after the recent improvement, and we are making it into a reality. But for it to be successful we need you!',
			},
			process: {
				title: 'The Process',
				content: 'The contest will proceed via 3 simple steps:',
				step1:
					'Each participant will submit their projects into the 4 categories listed below. The contest will last 2 months from March 27 to May 27.',
				step2:
					'The jury will judge the projects and make their own ranking per category, we will merge those rankings to make an overall ranking assessment.',
				step3:
					'The prize pool will be split according to the prize share chart that you can find in the rules and info section.',
			},
			categories: {
				title: 'The four Categories',
			},
			voting: {
				title: 'The Vote',
				content1:
					'The jury will individually submit a post explaining how they made their ranking which will cover what they liked, disliked, any idea of improvement and advices for the said project.',
				content2:
					'A general ranking will be made with all the jurors ranking. Result will be displayed in the contest website.',
			},
			prizes: {
				title: 'The Prizes',
				contentStart: 'We will share the prize pool collected on',
				donationPlatform: 'our Ko-Fi',
				contentMiddle: ' (which starts with ',
				amountCollected: '455 $',
				contentEnd: ' thanks to our sponsors) amongst the 4 categories as show below.',
				conclusion:
					'We will then decide how much we share amongst one category between 1st place, 2nd place, 3rd place (or more) depending on the number of submissions in each category.',
			},
			rules: {
				title: 'The Rules',
				splashScreen:
					'This is the splashscreen that must be used at the boot of your game/homebrew/port:',
			},
			contact: {
				title: 'Contact',
				intro: 'Have any questions about the contest? Want to have a chat with us?',
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
				setupUnity: 'How to setup Unity for the PS Vita',
				deployProject: 'How to easily deploy a project on the PS Vita',
				gameMakerExportTool: 'GameMaker Studio PS Vita export tool',
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
