export default {
	categories: {
		gameOne: {
			title: 'Juego (motor ya existente)',
			desc: 'Crea un juego con un motor ya existente a tu elección, como GameMaker o Unity.',
		},
		gameTwo: {
			title: 'Juego (original)',
			desc: 'Crea un juego desde cero, sin la ayuda de un motor existente.',
		},
		utility: {
			title: 'Herramienta',
			desc: 'Crea una herramienta homebrew o un plugin.',
		},
		port: {
			title: 'Conversión',
			desc: 'Convierte una aplicación o juego de otro sistema.',
		},
	},

	rules: {
		submissionsLimit:
			'Cada desarrollador puede presentar todos los proyectos que quiera, pero solo podrá ganar un único premio por categoría como máximo.',
		previouslySubmitted:
			'Un juego que ya esté publicado en otra plataforma (como PS4 o Switch) debe ser presentado en la categoría de conversiones, sin importar quién sea el autor original.',
		releasedBefore:
			'Si el juego que quieres enviar ya había sido publicado anteriormente, sus cambios deben ser lo bastante considerables o será rechazado.',
		noPiracy:
			'No se admitirá ningún tipo de piratería. No se aceptará el uso de materiales con copyright. Se aceptará el uso de materiales gratuitos, como los de la tienda de assets de Unity, pero daremos una mejor valoración a aquellos juegos que utilicen materiales originales. Los proyectos presentados en la categoría de conversiones no deben contener los archivos del juego a menos que exista una autorización para su distribución abierta. Se rechazarán aquellos motores hechos a partir de códigos fuentes filtrados.',
		paypal: 'Es necesario tener una cuenta de PayPal para poder recibir el dinero.',
		splashScreen:
			'Tu aplicación debe incluir la pantalla de presentación del concurso en su proceso de arranque. Para facilitar este proceso, es posible incluirla dentro del VPK final como el archivo pic0.png. De esta forma, PSVita la mostrará automáticamente al ejecutar el icono del LiveArea. Si vas a presentar un plugin, pedimos que menciones el concurso kyûHEN dentro del archivo léeme/readme de tu proyecto.',
		publicRelease:
			'No podrás compartir una compilación pública de tu proyecto hasta que lo hayamos aprobado y mostrado en nuestra página web.',
		openSource:
			'Si tu proyecto se basa en otro de código abierto, debes respetar la licencia del proyecto original.',
		cheats: 'Si descubrimos que haces cualquier trampa, se te expulsará automáticamente del concurso.',
		categoriesPrizes:
			'La parte asignada al premio de cada categoría puede estar sujeta a cambios menores en función del número de proyectos presentados y del dinero recaudado mediante donativos.',
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
			submit: 'Presentar proyecto',
			submittedProjects: 'Proyectos presentados',
			aboutTitle: 'Saber más',
			aboutContent1:
				"El tercer concurso de homebrew para PSVita pasó de ser una conversación inocente de Twitter a una realidad. Los últimos meses han sido increíbles para PSVita: ha pasado de tener una escena bastante callada a un estallido de posibilidades abiertas, como emuladores para Dreamcast, los juegos de la saga GTA en PSVita, juegos de Sonic convertidos, el uso de Piglet (la biblioteca GLES 2.0) y un vitaGL más completo que nunca. La escena de PSVita ha vivido un cambio muy rápido: a pesar de que está más cerca de la tumba por los recientes rumores sobre el cercano cierre de la PS Store para varias consolas, gracias a los desarrolladores de la escena aficionada, el futuro de PSVita no es tan funesto (por eso decidimos llamar al concurso KyûHEN, que significa cambio repentino).",
			aboutContent2:
				'Queremos ayudar a la comunidad de Vita a buscar ese cambio utilizando este concurso para generar interés sobre la escena homebrew y hacer una llamada general para crear contenidos nuevos para PSVita con herramientas como vitaGL, SDL, Unity, Piglet, etcétera. Si quieres formar parte de esta aventura y contribuir al proyecto, ¡te damos la bienvenida al concurso KyûHEN!',
			cimmerianDesc:
				'Soy uno de los moderadores de Custom Protocol (una web de hacking francesa, y también soy un antiguo creador de GekiHEN). Me encanta usar mis conocimientos para ayudar a la gente a ubicarse en la escena del hacking de Vita, en los servidores de Discord de HENkaku y Vita Nuova, con mis guías de solución de problemas para Vita. Suelo contribuir a proyectos homebrew testeándolos y traduciéndolos. Puedes contactarme a través de mi Discord y mi Twitter.',
			oldGamingDesc:
				'Me llamo Sandeep Rai, también conocido como “2 Old 4 Gaming” en Twitter y YouTube. He sido gamer casi toda mi vida. Tengo buenos recuerdos de estar sentado frente a la televisión, jugando con mi NES con mi hermano, pero ya como adulto he descubierto que los juegos portátiles se adaptan mejor a mi vida. PlayStation Vita, con su diverso catálogo de juegos y su portabilidad, ha sido mi dispositivo favorito para jugar. Mi pasión por Vita y por sus juegos me ha inspirado no solo ha escribir una serie de libros sobre la historia del sistema, sino también a abrir un canal de YouTube. Podéis encontrarme en mi Twitter y en mi Youtube.',
			frangarcjDesc:
				'Soy uno de los mantenedores de VitaSDK y el desarrollador principal de Retroarch para PSVita. También participo en el desarrollo del emulador Vita3K. He estado activo en la escena desde la época de Rejuvenate, pero la vida real ha limitado mi tiempo para desarrollar. Hoy en día contribuyo principalmente a ayudar a otros desarrolladores en los Discord de HENkaku y Vita Nuova. Podéis encontrarme en mi Twitter y en GitHub.',
		},
		details: {
			title: 'Más información',
			intro: {
				title: 'Introducción',
				content1:
					'El concurso tendrá lugar a lo largo de aproximadamente dos meses, es decir, hasta el 27 de mayo. Con este concurso queremos fomentar la creatividad y la originalidad con las dos categorías de juegos. También nos hemos aliado con un profesional de la industria del videojuego para ayudar también a que los desarrolladores aficionados maduren y mejoren su habilidad gracias a las sugerencias que puede dar un experto en la materia',
				content2:
					'En los últimos años hemos visto una inevitable bajada del interés por las escenas homebrew debido a la popularidad de los smartphones y por el aumento de las medidas de seguridad con cada generación. Este concurso, con la participación de Wololo, PSX-Place y PlayStationHaX, es una ocasión para recuperar esa pasión perdida en nuestra comunidad y, con suerte, volver a generar interés sobre todo el mundo del homebrew. KyûHEN nace del deseo de la comunidad de celebrar un concurso de homebrew tras los últimos avances en la escena y estamos comprometidos a hacerlo realidad. ¡Pero te necesitamos para que tenga éxito!',
			},
			process: {
				title: 'El proceso',
				content: 'El concurso se llevará a cabo mediante tres pasos sencillos:',
				step1:
					'Cada participante enviará sus proyectos en las cuatro categorías mencionadas más abajo. El concurso durará dos meses, del 27 de marzo al 27 de mayo.',
				step2:
					'El jurado valorará los proyectos y redactará una clasificación de todos los proyectos presentados.',
				step3:
					'El dinero del premio se repartirá según la tabla que podrás encontrar más abajo y se contactará con los ganadores para entregarles su dinero.',
			},
			categories: {
				title: 'Las cuatro categorías',
			},
			voting: {
				title: 'La votación',
				content1:
					'El jurado redactará una valoración individualizada explicando cómo han elegido su clasificación particular, mencionando los puntos a favor, en contra y cualquier posible sugerencia para mejorar cada proyecto presentado.',
				content2:
					'Se hará una valoración global a partir de las valoraciones personales de cada miembro del jurado. El resultado se mostrará en la web del concurso.',
			},
			prizes: {
				title: 'Los premios',
				contentStart: 'Repartiremos el fondo de premios recaudado en',
				donationPlatform: 'nuestro Ko-Fi',
				contentMiddle: ' (inicialmente ',
				amountCollected: '455 $',
				contentEnd: ' gracias a nuestros patrocinadores) entre las cuatro categorías tal y como se muestra más abajo:',
				conclusion:
					'Premiaremos a tres proyectos por categoría, y el reparto de los premios se hará en función del número de proyectos de cada categoría.',
			},
			rules: {
				title: 'Las reglas',
				splashScreen:
					'Esta es la pantalla de bienvenida que debe aparecer en el proceso de arranqque de tu proyecto:',
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
				setupUnity: 'Cómo configurar Unity para desarrollar para PSVita',
				deployProject: 'Cómo generar un proyecto para PSVita',
				gameMakerExportTool: 'Herramienta de exportado de GameMaker Studio para PSVita',
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
			title: 'Proyectos',
			temp: {
				contentStart: 'El sistema de proyectos no está acabado del todo, así que pedimos que utilices este ',
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
			detailsStart: 'La página de proyectos estará disponible a partir del ',
			detailsDate: '8 de abril',
			detailsEnd: '.',
		},
	},
};
