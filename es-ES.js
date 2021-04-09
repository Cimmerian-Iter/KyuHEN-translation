export default {
	categories: {
		gameOne: {
			title: 'Primer juego',
			desc: 'Crea un juego con una motor existente a tu elección, por ejemplo: GameMaker o Unity.',
		},
		gameTwo: {
			title: 'Segundo juego',
			desc: 'Crea un juego desde 0 con tu motor y compliado con vitaSDK o dolceSDK.',
		},
		utility: {
			title: 'Herramienta',
			desc: 'Crea un homebrew o plugin.',
		},
		port: {
			title: 'Port',
			desc: 'Porta una aplicación, juego o emulador de otro sistema.',
		},
	},

	rules: {
		submissionsLimit:
			'Los desarrolladores pueden presentar todo lo que quieran pero soo podrán ganar un premio por categoría.',
		previouslySubmitted:
			'Para los juegos, si anteriormente habían salido en otra plataforma, por ejemplo en PS4 o Switch, aunque sea tu juego, deben ser enviados a la categoría de ports. Las herramientas de homebrew de otras escenas deben ser enviadas a la categoría herramientas',
		releasedBefore:
			'Si el juego que quieres enviar ya había salido en PS Vita, debe quedar en estado de prototipo y tener mejoras respecto al anterior para que sea un juego completo. Para las herramientas, los cambios deben ser consecuentes ya que los homebrew/plugins requieren mucho trabajo.',
		noPiracy:
			'No se permite la piratería. No se acepta el uso de bienes con copyright, los juegos deben ser creaciones originales. Permitimos el uso de bienes genéricos gratuitos, por ejemplo, los puedes encontrar en la tienda de Unity per se valorará más los bienes hechos a mano. Para los ports, no incluyas los datos del juego si no se pueden compartir. Motores hechos con RE están permitidos, pero motores hechos con con código fuente filtrado de un motor de juego no está permitido.',
		paypal: 'Debes de tener una cuenta de paypal para recibir el premio.',
		splashScreen:
			'Tienes que incluir la pantalla del concurso en el proceso de arranque de tu homebrew (puedes incluirlo en el asset del live area. Los plugins obviamente no pueden mostrar la pantalla, así que te pedimo que menciones el concurso kyûHEN dentro del léeme de tu repositorio.',
		publicRelease:
			'Puedes publicar versiones públicas fuera de nuestra web cuando hayamos comprobado que ya has mostrado tu proyecto en nuestra web',
		openSource:
			'Si tu proyecto está basado en un proyecto de código abierto, debes seguir usando la licencia del proyecto de código abierto',
		cheats: 'Si comprobamos que haces trampas, serás expulsado del concurso de inmediato.',
		categoriesPrizes:
			'Los premios de las categorías pueden estar sujetos a pequeños cambios dependiendo de los proyectos y de la cantidad monetaria recolectada.',
	},

	pages: {
		home: {
			title: 'Inicio',
			slogan: 'El que pueda crear lo mejor',
			categories: {
				homebrew: 'homebrew',
				game: 'juego',
				utility: 'herramienta',
				port: 'port',
			},
			donate: 'Donar',
			submit: 'Enviar',
			submittedProjects: 'Proyectos enviados',
			aboutTitle: 'Conócenos',
			aboutContent1:
				"De una inocente conversación en Twitter a la realidad, estamos haciendo el 3er concurso de homebrew para la PS Vita. Los últimos días/meses han sido increíbles para la PS Vita. De una escena silenciosa  a las abrumadoras posibilidades como emuladores de Dreamcast, juegos de GTA en PS Vita y juegos de Sonic siendo portados, Piglet (librería GLES 2.0) con un VitaGL más completo que nunca, ha habido un cambio repentino en la escena de PS Vita sin importar que la vita está cerca de poner otro clavo en su ataúd con las últimas noticias de que PS Store cierra en PS Vita, el futuro no parece muy brillante para la vita. (Por eso decidimos llamar al concurso KyûHEN, que significa, cambio repentino)",
			aboutContent2:
				'Queremos ayudar a la escena de PS Vita para llegar a ese cambio aumentando el interes por la escena de homebrew en este concurso. Un llamado para que la gente cree contenido para la PS Vita usando herramientas como VitaGL, SDL, Unity, Piglet para los juegos, y los SDK vita/dolce. Si quieres ser parte de la aventura y contribuir con tu proyecto, entonces, ¡bienvenido al concurso KyûHEN!',
			cimmerianDesc:
				'Soy uno de los moderadores de Custom Protocol (web de hacking Francesa y anteriormente uno de los creadores de GekiHEN). Me gusta usar mi conocimiento para ayudar a la gente a navegar en la escena de hackeo de la PS Vita en los servidores de Discord de henkaku y en el de Vita Nuova y con mis guías de problemas de la PS Vita. Suelo contribuir en proyectos de homebrew projects con el testeo y traduciendo. puedes contactarme por Discord y Twitter.',
			oldGamingDesc:
				'Mi nombre es Sandeep Rai, también conocido como “2 Old 4 Gaming” en Twitter y YouTube. He sido un jugador casi toda mi vida. Tengo buenos recuerdos sentando frente a la TV y jugar a la NES con mi hermano, pero como adulto he encontrado que las consolas portátiles me han mejorado la vida. La PlayStation Vita, con su gran librería de juegos y portabilidad, ha sido mi dispositivo favorito para jugar. Mi pasión por la PS Vita y sus juegos me inspiró no solo a escribir una serie de libros sobre el sistema, también a crear mi canal de YouTube. Puedes encontrarme en mi Twitter, y Youtube.',
			frangarcjDesc:
				'Uno de los principales mantenedores de VITASDK y principal desarrollador de Retroarch para PS Vita. También estoy involucrado en el desarrollo del emulador Vita3K. He estado activo en la escena desde los tiempos de Rejuvenate pero la vida real ha reducido el tiempo que tengo para el desarrollo. Mis principales contribuciones son ayudar y asistir a otros desarrolladores en los servidores de Discord de HENkaku y en el de Vita Nuova. Puedes encontrarme en mi Twitter, y mi GitHub.',
		},
		details: {
			title: 'Detailles',
			intro: {
				title: 'Introducción',
				content1:
					'El concurso durará 2 meses así que acaba el 27 de mayo. Con este concurso queremos promover la creatividad y originalidad con las categorías "Primer juego" y "Segundo juego". Unimos fuerzas con un profesional en ese campo que publica juegos para PS Vita para ayudar a los nuevos desarrolladores a que crezcan y mejoran sus habilidades con críticas de un experto en ese campo. En el pasado (la mayoría en la era de la PSP, y la era de la PS3), la escena del hackeo estaba en su máximo esplendor con una comunidad activa, foros y leyendas de la escena (DarK Alex, o geohot por nombrar unos cuantos) nos ayudaron con sus mágicas manos y nos surgió un gran interés en hackear nuestros dispositivos Sony. En los siguientes tiempos, con dispositivos como PS4 y PS5 y la seguridad siendo cada vez más fuerte, la actividad de comunidad de hacking disminuyó con la pérdida de grandes webs como qj.net o PSPGen. ',
				content2:
					'Este concurso, con la involucración de Wololo, PSX-Place y PlayStationHaX es la ocasión de avivar ese fuego en nuestra comunidad y esperemos que aumente el interés en que la gente hackee su dispositivo. Este concurso nade de la voluntad de la comunidad de tener un lugar tras las últimas mejoras, y estamos haciéndolo realidad. Pero, ¡para conseguirlo te necesitaoms!',
			},
			process: {
				title: 'El proceso',
				content: 'El concurso procederá en 3 simples pasos:',
				step1:
					'Cada participante enviará sus proyectos en las siguientes 4 categorías. El concurso durará 2 meses desde el 27 de marzo al 27 de  mayo.',
				step2:
					'El jurado juzgará los proyectos y harán su clasificación por categoría, uniremos esas clasificaciones para hacer una media entre todas las clasificaciones.',
				step3:
					'El premio se dividirá acorde a la tabla de premios que puedes encontrar en las secciones "Los premios" y "Las reglas".',
			},
			categories: {
				title: 'Las cuatro categorías',
			},
			voting: {
				title: 'El voto',
				content1:
					'El jurado enviará individualmente un correo explicando cómo han hecho su clasificación en la que cubrirá lo que les ha gustado, lo que no y cualquier idea de mejora o consejos para dicho proyecto.',
				content2:
					'Una clasificación general se realizará con la clasificación de todos los jurados. Los resoltados aparecerán en la web del concurso.',
			},
			prizes: {
				title: 'Los premios',
				contentStart: 'Compartiremos lo recaudado',
				donationPlatform: 'nuestro Ko-Fi',
				contentMiddle: ' (que empieza con ',
				amountCollected: '455 $',
				contentEnd: ' gracias a nuestros patrocinadores) justo a las 4 categorías de abajo.',
				conclusion:
					'Decidiremos cuánto daremos en cada categoría al 1ª posición, 2ª posición, 3ª posición (o más) dependiendo del número de proyectos de cada categoría.',
			},
			rules: {
				title: 'Las reglas',
				splashScreen:
					'Esta es la imagen que debe ser usada en el inicio de tu juego/homebrew/port:',
			},
			contact: {
				title: 'Contacto',
				intro: '¿Tienes preguntas sobre el concurso ¿Quieres hablar con nosotros?',
				contentStart: 'Puedes enviar un e-mail a ',
				contentMiddle: ' o un MD a nuestro Twitter ',
				contentEnd: '.',
			},
		},
		resources: {
			title: 'Recursos',
			pageTitle: 'Herramientas',
			vitaSDK: {
				title: 'VitaSDK',
				setupUnity: 'Cómo preparar Unity para la PS Vita',
				deployProject: 'Cómo implementar fácilmente un proyecto en PS Vita',
				gameMakerExportTool: 'Herramienta de exportación de GameMaker Studio para PS Vita',
			},
			helpingTools: 'Herramientas que te harán la vida más fácil',
			debuggingTools: {
				title: 'Herramientas útiles de depuración',
				gdbVita: 'GDB para Vita (no es conveniente)',
			},
			discordServers: {
				title: 'Servidores de Discord útiles',
				henkakuSpecialities: 'principalmente VitaSDK',
				nuovaSpecialities: 'principalmente VitaSDK',
				cbpsSpecialities: 'principalmente DolceSDK/Unity/GameMaker',
			},
		},
		submissions: {
			title: 'Envío',
			temp: {
				contentStart: 'Hasta que el sistema de envíos no esté completo, por favor usa esto ',
				contentLink: 'Formulario de Google',
				contentEnd: ' por el momento.',
				outro: "Estamos intentando implementarlo lo antes posible.",
				thanks: 'Gracias por tu paciencia.',
			},
		},
	},

	signs: {
		colon: ':',
	},

	others: {
		comingSoon: {
			top: 'Dentro e',
			bottom: 'poco...',
			detailsStart: 'La página de envío estará disponible el ',
			detailsDate: '8 de abril',
			detailsEnd: '',
		},
	},
};
