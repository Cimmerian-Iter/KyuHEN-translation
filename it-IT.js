export default {
	categories: {
		gameOne: {
			title: 'Game One',
			desc: 'Crea un gioco con un motore esistente di tua scelta, ad esempio GameMaker o Unity.',
		},
		gameTwo: {
			title: 'Game Two',
			desc: 'Crea un gioco da zero con il tuo motore e compilalo con vitaSDK o dolceSDK.',
		},
		utility: {
			title: 'Utility',
			desc: 'Crea un homebrew o un plugin.',
		},
		port: {
			title: 'Port',
			desc: 'Porta un applicazione o un gioco da un altro sistema o da un emulatore.',
		},
	},

	rules: {
		submissionsLimit:
			'Gli sviluppatori possono inviare tutte le proposte che desiderano, ma possono vincere solo un premio per categoria.',
		previouslySubmitted:
			'Per i giochi, se sono stati rilasciati in precedenza su un altra piattaforma come PS4 o Switch, anche se è tua, deve essere inserito nella categoria port. L utility di altre scene homebrew rimarrà nella categoria utility',
		releasedBefore:
			'Se il gioco che vuoi presentare era già stato rilasciato in precedenza su PSVita, doveva essere allo stato di prototipo ed essere migliorato per renderlo un gioco completo. Per utilità, le modifiche dovrebbero essere conseguenti agli homebrew / plugin che hanno richiesto molto lavoro.',
		noPiracy:
			'Nessuna pirateria sarà consentita. Non è accettato alcun utilizzo di risorse protette da copyright, i giochi devono essere la creazione originale dell'autore. Consentiamo l uso di risorse gratuite generiche che puoi trovare nell'archivio risorse di Unity, ad esempio, ma tieni presente che valuteremo più giochi che utilizzano risorse fatte a mano. Per quanto riguarda i port, non includere i file di gioco se non sono liberi di condividerli. I motori realizzati con RE sono consentiti, ma non sono consentiti motori realizzati da una fonte trapelata di un motore di gioco.',
		paypal: 'Devi avere un account PayPal per ricevere il denaro.',
		splashScreen:
			'Devi includere la schermata iniziale del concorso nel processo di avvio del tuo homebrew (puoi includerla come risorsa nel live area I plugin ovviamente non possono mostrare la schermata iniziale, invece ti chiederemo di inserire una menzione del concorso kyûHEN nel tuo file readme della tua repo.',
		publicRelease:
			'Puoi condividere una build pubblica al di fuori del nostro sito web solo quando l'abbiamo approvata e già mostrato il tuo progetto sul nostro sito web',
		openSource:
			'Se il tuo progetto è basato su un progetto open source, devi seguire la licenza del progetto open source',
		cheats: 'Se ti becchiamo a barare, verrai automaticamente escluso dal concorso.',
		categoriesPrizes:
			'I premi delle categorie potrebbero subire lievi modifiche a seconda degli invii e dell'importo raccolto.',
	},

	pages: {
		home: {
			title: 'Home',
			slogan: 'Who can brew the best',
			categories: {
				homebrew: 'homebrew',
				game: 'gioco',
				utility: 'utility',
				port: 'port',
			},
			donate: 'Donazione',
			submit: 'Invia',
			submittedProjects: 'Progetti presentati',
			aboutTitle: 'Informazioni',
			aboutContent1:
				"Da una conversazione innocente su Twitter alla realtà, stiamo facendo il terzo concorso Homebrew per PSVita. Questi ultimi giorni / mesi sono stati incredibili per PSVita. Da una scena silenziosa a un'esplosione di possibilità sbloccate come gli emulatori Dreamcast, I giochi GTA su PSVita e Sonic sono stati portati, Piglet (libreria GLES 2.0) trovato e VitaGL più completo che mai, c'è stato un improvviso cambiamento nella scena PSVita nonostante il fatto che la psvita sia vicina a mettere un altro piede nella sua tomba con le recenti voci sulla chiusura del PS Store per PSVita, il futuro non sembra così cupo per la psvita. (Ecco perché abbiamo deciso di chiamare il concorso KyûHEN che significa cambiamento improvviso)",
			aboutContent2:
				'Vogliamo aiutare la scena Vita a perseguire quel cambiamento aumentando l'interesse per la scena homebrew con questo concorso. Invitare le persone a creare nuovi contenuti per PSVita utilizzando strumenti come VitaGL, SDL, Unity, Piglet for games e vita/dolce SDK. Se vuoi far parte del viaggio e contribuire con il tuo progetto, allora benvenuto al concorso KyûHEN!',
			cimmerianDesc:
				'Sono uno dei moderatori di Custom Protocol (sito web di hacking francese nonché ex creatore di GekiHEN). Adoro usare le mie conoscenze per aiutare le persone a navigare nella scena dell'hacking Vita nel discord di henkaku e Vita Nuova e attraverso le mie guide alla risoluzione dei problemi di Vita. Contribuisco spesso a progetti homebrew con beta testing e traduzione. Puoi contattarmi tramite Discord e Twitter.',
			oldGamingDesc:
				'Il mio nome è Sandeep Rai, noto anche come "2 Old 4 Gaming" su Twitter e YouTube. Sono stato un giocatore per la maggior parte della mia vita. Ho bei ricordi di quando ero seduto davanti alla TV e giocavo al mio NES con mio fratello, ma da adulto ho scoperto che il gioco portatile si adattava meglio alla mia vita. La PlayStation Vita, con la sua variegata libreria di giochi e portabilità, è stato il mio dispositivo preferito quando si tratta di giochi. La mia passione per Vita e i suoi giochi mi ha ispirato non solo a scrivere una serie di libri sulla storia del sistema, ma anche ad avviare il mio canale YouTube. Puoi trovarmi sul mio Twitter e Youtube.',
			frangarcjDesc:
				'Uno dei manutentori di VITASDK e principale sviluppatore di Retroarch PS Vita. Sono anche coinvolto nello sviluppo dell'emulatore Vita3K. Sono stato attivo sulla scena sin dai tempi di Rejuvenate, ma la vita reale ha ridotto il mio tempo a disposizione per lo sviluppo. Oggigiorno i miei contributi principali sono aiutare e assistere altri sviluppatori in HENkaku e Vita Nuova Discords. Puoi trovarmi sul mio Twitter e su GitHub.',
		},
		details: {
			title: 'Dettagli',
			intro: {
				title: 'Intro',
				content1:
					'Il concorso durerà 2 mesi quindi fino al 27 maggio. Attraverso questo concorso vogliamo promuovere la creatività e l'originalità con Game One e Game Two. Abbiamo unito le forze con un professionista in quel campo che pubblica giochi per PSVita al fine di aiutare anche gli sviluppatori dilettanti a crescere e migliorare le loro capacità con i critici di un esperto in quel campo. In passato (per lo più nell'era PSP, insieme all'era PS3), la scena dell'hacking era al suo apice con una comunità attiva, forum e leggende della scena (DarK Alex, o geohot per citarne alcuni) ci hanno alimentato con la magia nelle nostre mani e ha suscitato un grande interesse nell'hacking dei loro dispositivi Sony. Col passare del tempo, con dispositivi come PS4 e PS5 e la sicurezza sempre più rigida, l'attività della comunità di hacker è diminuita con la perdita di siti Web importanti come qj.net o PSPGen.  ',
				content2:
					'Questo concorso, con il coinvolgimento di Wololo, PSX-Place e PlayStationHaX è l'occasione per accendere quel fuoco perduto nella nostra comunità e, si spera, aumentare l'interesse per l'hackeraggio di nuovo del loro dispositivo. Questo concorso nasce dalla volontà della comunità di averne uno dopo il recente miglioramento, e lo stiamo trasformando in una realtà. Ma perché abbia successo abbiamo bisogno di te! ',
			},
			process: {
				title: 'Il Processo',
				content: 'Il concorso procederà in 3 semplici passaggi:',
				step1:
					'Ogni partecipante presenterà i propri progetti nelle 4 categorie elencate di seguito. Il concorso durerà 2 mesi dal 27 marzo al 27 maggio',
				step2:
					'La giuria giudicherà i progetti e stabilirà la propria classifica per categoria, uniremo quelle classifiche per fare una valutazione della classifica generale.',
				step3:
					'Il montepremi verrà suddiviso in base alla tabella della quota dei premi che puoi trovare nella sezione regole e informazioni.',
			},
			categories: {
				title: 'Le quattro categorie',
			},
			voting: {
				title: 'Il voto',
				content1:
					'La giuria presenterà individualmente un post in cui spiegherà come hanno fatto la loro classifica che coprirà ciò che gli è piaciuto, ciò che non è piaciuto, qualsiasi idea di miglioramento e consigli per il suddetto progetto.',
				content2:
					'Verrà stilata una classifica generale con la classifica di tutti i giurati. Il risultato verrà visualizzato nel sito web del concorso.',
			},
			prizes: {
				title: 'I Premi',
				contentStart: 'Condivideremo il montepremi raccolto su',
				donationPlatform: 'our Ko-Fi',
				contentMiddle: ' (che inizia con ',
				amountCollected: '455 $',
				contentEnd: ' grazie ai nostri sponsor) tra le 4 categorie come mostrato di seguito.',
				conclusion:
					'Decideremo quindi quanto condividere in una categoria tra 1 °, 2 ° e 3 ° posto (o più) a seconda del numero di partecipanti in ciascuna categoria.',
			},
			rules: {
				title: 'Le regole',
				splashScreen:
					'Questa è la schermata iniziale che deve essere usata all'avvio del tuo gioco/homebrew/port:',
			},
			contact: {
				title: 'Contatti',
				intro: 'Hai domande sul concorso? Vuoi fare due chiacchiere con noi?',
				contentStart: 'Puoi inviare un'e-mail a ',
				contentMiddle: ' o un DM sul nostro Twitter ',
				contentEnd: '.',
			},
		},
		resources: {
			title: 'Risorse',
			pageTitle: 'Strumenti',
			vitaSDK: {
				title: 'VitaSDK',
				setupUnity: 'Come configurare Unity per PS Vita',
				deployProject: 'Come distribuire facilmente un progetto su PS Vita',
				gameMakerExportTool: 'Strumento di esportazione per PS Vita di GameMaker Studio',
			},
			helpingTools: 'Strumenti che ti semplificano la vita',
			debuggingTools: {
				title: 'Utili strumenti di debug',
				gdbVita: 'GDB per Vita (non conveniente)',
			},
			discordServers: {
				title: 'Server Discord utili',
				henkakuSpecialities: 'principalmente VitaSDK',
				nuovaSpecialities: 'principalmente VitaSDK',
				cbpsSpecialities: 'principalmente DolceSDK/Unity/GameMaker',
			},
		},
		submissions: {
			title: 'Invio del tuo progetto',
			temp: {
				contentStart: 'Poiché il sistema di invio non è ancora completamente finito, utilizza questo ',
				contentLink: 'Google Form',
				contentEnd: ' per ora.',
				outro: "Stiamo cercando di finirlo il prima possibile.",
				thanks: 'Grazie per la vostra comprensione.',
			},
		},
	},

	signs: {
		colon: ':',
	},

	others: {
		comingSoon: {
			top: 'prossimamente',
			bottom: 'presto...',
			detailsStart: 'La pagina di invio sarà aperta il giorno ',
			detailsDate: '8 Aprile',
			detailsEnd: '',
		},
	},
};
