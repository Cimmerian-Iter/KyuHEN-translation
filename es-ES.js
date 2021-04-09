export default {
	categories: {
		gameOne: {
			title: 'Juego Tipo 1',
			desc: 'Crea un juego con un motor ya existente a tu elección, como GameMaker o Unity.',
		},
		gameTwo: {
			title: 'Juego Tipo 2',
			desc: 'Crea un juego desde cero con tu motor propio, compilado con vitaSDK o dolceSDK.',
		},
		utility: {
			title: 'Herramienta',
			desc: 'Crea una aplicación propia o un plugin.',
		},
		port: {
			title: 'Conversión',
			desc: 'Convierte una aplicación o juego de otro sistema o un emulador.',
		},
	},

	rules: {
		submissionsLimit:
			'Cada desarrollador puede presentar todas las propuestas que quiera, pero solo podrá ganar un premio por categoría.',
		previouslySubmitted:
			'En el caso de los juegos, si ya han sido publicados en otra plataforma, como PS4 o Switch, deben ser enviados a la categoría de conversiones aunque el juego sea tuyo. Las herramientas de otras escenas homebrew deberán ser enviadas a la categoría de Herramientas.',
		releasedBefore:
			'Si el juego que quieres enviar ya había sido publicado en PSVita, la versión previa al concurso debe de ser un prototipo, y la actual debe tener los suficientes cambios como para considerarse un juego completo. En el caso de las herramientas, los cambios deben ser consecuentes con las aplicaciones homebrew/plugins que han necesitado de mucho trabajo.',
		noPiracy:
			'No se admitirá ningún tipo de piratería. No se aceptará el uso de materiales con copyright, los juegos deben ser una creación completamente original del autor. Permitimos el uso de materiales genéricos gratuitos que se puedan obtener de la tienda de assets de Unity, por ejemplo, pero ten en cuenta que daremos una mayor importancia a los juegos que utilicen materiales hechos exclusivamente. En el caso de las conversiones, no incluyas los archivos del juego si no tienen permiso para ser compartidos. Se permiten los motores hechos mediante ingeniería inversa (RE); pero no los motores hechos a partir de códigos fuentes filtrados.',
		paypal: 'Es necesario tener una cuenta de PayPal para poder recibir el dinero.',
		splashScreen:
			'Debes incluir la pantalla de presentación del concurso en el proceso de arranque de tu aplicación (puedes incluirla dentro del LiveArea). Los plugins no tienen pantallas de presentación, en su caso pedimos que incluyas una mención al concurso kyûHEN dentro del archivo léeme/readme de tu repositorio.',
		publicRelease:
			'Podrás compartir una compilación pública fuera de nuestra página web solo cuando nosotros lo hayamos aprobado y ya hayamos presentado tu proyecto en nuestra página web.',
		openSource:
			'Si tu proyecto está basado en otro de código abierto, debes respetar la licencia de este proyecto.',
		cheats: 'Si descubrimos que haces cualquier trampa, se te expulsará automáticamente del concurso.',
		categoriesPrizes:
			'Los premios de cada categoría pueden estar sujetos a cambios menores en función de las propuestas y de la cantidad recaudada.',
	},

	pages: {
		home: {
			title: 'Inicio',
			slogan: '¿Quién sabe hacer',
			categories: {
				homebrew: 'homebrews?',
				game: 'juegos?',
				utility: 'herramientas?',
				port: 'conversiones?',
			},
			donate: 'Donar',
			submit: 'Enviar proyecto',
			submittedProjects: 'Proyectos enviados',
			aboutTitle: 'Saber más',
			aboutContent1:
				"El tercero concurso de homebrew para PSVita pasó de ser una conversación inocente de Twitter a una realidad. Los últimos días/meses han sido increíbles para PSVita. Ha pasado de tener una escena bastante callada a un estallido de posibilidades abiertas, como emuladores para Dreamcast, los juegos de la saga GTA en PSVita, juegos de Sonic convertidos, el descubrimiento de Piglet (la biblioteca GLES 2.0) y un VitaGL más completo que nunca: la escena de PSVita ha vivido un cambio muy rápido. A pesar de que está más cerca de la tumba por los recientes rumores sobre el cierre de la Store de PSVita, su futuro no es tan negro (por eso decidimos llamar al concurso KyûHEN, que significa cambio repentino).",
			aboutContent2:
				'Queremos ayudar a la escena de Vita a buscar ese cambio utilizando este concurso para genera interés sobre la escena homebrew. Llamamos a todo el mundo para crear contenidos nuevos para PSVita con herramientas como VitaGL, SDL, Unity, Piglet para juegos y vitaSDK/dolceSDK. Si quieres formar parte de esta aventura y contribuir al proyecto, ¡te damos la bienvenida al concurso KyûHEN!',
			cimmerianDesc:
				'Soy uno de los moderadores de Custom Protocol (una web de hacking francesa, y también soy un antiguo creador de GekiHEN). Me encanta usar mis conocimientos para ayudar a la gente a ubicarse en la escena del hacking de Vita, en los Discord de henkaku y Vita Nuova, con mis guías de solución de problemas para Vita. Suelo contribuir a proyectos homebrew testeándolos y traduciéndolos. Puedes contactarme a través de mi Discord y mi Twitter.',
			oldGamingDesc:
				'Me llamo Sandeep Rai, también conocido como “2 Old 4 Gaming” en Twitter y YouTube. He sido gamer casi toda mi vida. Tengo buenos recuerdos de estar sentado frente a la televisión, jugando con mi NES con mi hermano, pero ya como adulto he descubierto que los juegos portátiles se adaptan mejor a mi vida. PlayStation Vita, con su diverso catálogo de juegos y su portabilidad, ha sido mi dispositivo favorito para jugar. Mi pasión por Vita y por sus juegos me ha inspirado no solo ha escribir una serie de libros sobre la historia del sistema, sino también a abrir un canal de YouTube. Podéis encontrarme en mi Twitter y en mi Youtube.',
			frangarcjDesc:
				'Uno de los mantenedores de VITASDK y desarrollador principal de Retroarch para PS Vita. También participo en el desarrollo del emulador Vita3K. He estado activo en la escena desde la época de Rejuvenate, pero la vida real ha limitado mi tiempo para desarrollar. Hoy en día contribuyo principalmente a ayudar a otros desarrolladores en los Discord de HENkaku y Vita Nuova. Podéis encontrarme en mi Twitter y en GitHub.',
		},
		details: {
			title: 'Más información',
			intro: {
				title: 'Introducción',
				content1:
					'El concurso tendrá lugar a lo largo de aproximadamente dos meses, hasta el 27 de mayo. Con este concurso queremos fomentar la creatividad y la originalidad con las categorías Juego Tipo 1 y 2. Nos hemos aliado con un profesional en ese campo que publica juegos para PSVita para ayudar también a que los desarrolladores aficionados maduren y mejoren su habilidad con las críticas de un experto en la materia. En el pasado (sobre todo en la época de PSP, y también la de PS3), la escena de hacking tuvo su punto más álgido con una comunidad activa, los foros y leyendas de la escena (DarK Alex o geohot, por mencionar a unos pocos) que nos dieron magia en nuestra manos y despertaron un gran interés por hackear los dispositivos de Sony. Con el paso del tiempo y la mayor seguridad de dispositivos como PS4 y PS5, la actividad de la comunidad de hacking cayó con la pérdida de webs importantes, como qj.net o PSPGen.',
				content2:
					'Este concurso, con la participación de Wololo, PSX-Place y PlayStationHaX, es una ocasión para recuperar esa pasión perdida en nuestra comunidad y, con suerte, volver a generar interés sobre el hackeo de estos dispositivos. Este concurso nace del deseo de la comunidad de celebrarlo tras los últimos avances y estamos comprometidos a hacerlo realidad. ¡Pero te necesitamos para que tenga éxito!',
			},
			process: {
				title: 'El proceso',
				content: 'El concurso se llevará a cabo mediante tres pasos sencillos:',
				step1:
					'Cada participante enviará sus proyectos en las cuatro categorías mencionadas más abajo. El concurso durará dos meses, del 27 de marzo al 27 de mayo.',
				step2:
					'El jurado valorará los proyectos y los clasificará por categoría. Después reuniremos las valoraciones para hacer una valoración conjunta.',
				step3:
					'El dinero del premio se repartirá según la tabla que podrás encontrar en la sección de reglas e información.',
			},
			categories: {
				title: 'Las cuatro categorías',
			},
			voting: {
				title: 'La votación',
				content1:
					'El jurado redactará un mensaje individualizado explicando cómo han llegado a su valoración, mencionando lo que les ha gustado, lo que les ha dejado de gustar y cualquier posible mejora o consejo para dicho proyecto.',
				content2:
					'Una valoración general se hará a partir de las valoraciones de cada miembro del jurado. Los resultados se mostrarán en la web del concurso.',
			},
			prizes: {
				title: 'Los premios',
				contentStart: 'Repartiremos el fondo de premios recaudado en',
				donationPlatform: 'nuestro Ko-Fi',
				contentMiddle: ' (que empezará con ',
				amountCollected: '455 $',
				contentEnd: ' gracias a nuestros patrocinadores) entre las cuatro cateogrías tal y como se muestra aquí:',
				conclusion:
					'Después decidiremos cuánto repartiremos dentro de cada categoría entre el primer, segundo y tercer (o más) puesto(s) en función del número de propuestas de cada categoría.',
			},
			rules: {
				title: 'Las reglas',
				splashScreen:
					'Esta es la pantalla de bienvenida que debe aparecer al arrancar tu juego/aplicación homebrew/conversión:',
			},
			contact: {
				title: 'Contacto',
				intro: '¿Tienes preguntas sobre el concurso o quieres charlar con nosotros?',
				contentStart: 'Puedes enviar un email a ',
				contentMiddle: ' o un MD a nuestra cuenta de Twitter ',
				contentEnd: '.',
			},
		},
		resources: {
			title: 'Recursos',
			pageTitle: 'Herramientas',
			vitaSDK: {
				title: 'VitaSDK',
				setupUnity: 'Cómo configurar Unity para usarlo con PS Vita',
				deployProject: 'Cómo generar un proyecto para PS Vita',
				gameMakerExportTool: 'Herramienta de exportado de GameMaker Studio para PS Vita',
			},
			helpingTools: 'Herramientas que te harán la vida algo más fácil',
			debuggingTools: {
				title: 'Herramientas útiles de depuración',
				gdbVita: 'GDB for Vita (no es muy cómoda)',
			},
			discordServers: {
				title: 'Servidores de Discord útiles',
				henkakuSpecialities: 'centrado en VitaSDK',
				nuovaSpecialities: 'centrado en VitaSDK',
				cbpsSpecialities: 'centrado en DolceSDK/Unity/GameMaker',
			},
		},
		submissions: {
			title: 'Propuestas',
			temp: {
				contentStart: 'El sistema de propuestas no está acabado del todo, así que pedimos que utilices este ',
				contentLink: 'formulario de Google',
				contentEnd: ' por el momento.',
				outro: "Hacemos lo posible por tenerlo acabado cuanto antes.",
				thanks: 'Gracias por tu comprensión.',
			},
		},
	},

	signs: {
		colon: ':',
	},

	others: {
		comingSoon: {
			top: 'próximamente...',
			bottom: ' ',
			detailsStart: 'La página de propuestas estará disponible a partir del ',
			detailsDate: '8 de abril',
			detailsEnd: '.',
		},
	},
};
