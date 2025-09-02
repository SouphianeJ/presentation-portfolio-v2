import type { SequenceStep } from "./types";

export const SEQUENCES: SequenceStep[][] = 
// Profil: Enseignant (enseignement supérieur)

[
  // 1) Analyse des besoins en compétences
  [
    { word: "Analyser", distractors: ["Comprendre", "Connaître", "Découvrir"] },
    {
      word: "les besoins en compétences des publics ciblés",
      distractors: ["les contenus du cours", "la plateforme LMS", "les envies de l’enseignant"]
    },
    {
      word: "à partir d'entretiens semi-directifs et d'une revue documentaire structurée",
      distractors: ["au feeling", "avec un sondage Instagram", "en lisant un blog au hasard"]
    },
    {
      word: "pour un public adulte en reconversion, sous 10 jours",
      distractors: ["rapidement", "quand on aura le temps", "sans contrainte"]
    },
    {
      word: "selon des critères d'importance et d'écart (prioriser 5–7 compétences)",
      distractors: ["sans critères", "selon le budget", "si c’est intéressant"]
    },
    {
      word: "et formaliser un rapport d'analyse priorisé",
      distractors: ["et faire un cours", "et une belle présentation", "et des stickers"]
    }
  ],

  // 2) Analyse comparative de certifications / référentiels
  [
    { word: "Comparer", distractors: ["Connaître", "Lister", "Regarder"] },
    {
      word: "3 certifications/référentiels du domaine visé",
      distractors: ["les classements d’universités", "les brochures marketing", "les outils numériques"]
    },
    {
      word: "en exploitant les référentiels officiels et le RNCP",
      distractors: ["avec Google Images", "sur des forums non sourcés", "à partir d’une rumeur"]
    },
    {
      word: "dans le but de positionner les objectifs du parcours",
      distractors: ["pour copier la concurrence", "pour moderniser le visuel", "pour faire comme d’habitude"]
    },
    {
      word: "en mettant en évidence au moins 10 écarts significatifs",
      distractors: ["sans chiffrer", "au ressenti", "si quelqu’un se plaint"]
    },
    {
      word: "et produire un tableau de correspondance des compétences",
      distractors: ["et un poster sympa", "et un fil Slack", "et une story"]
    }
  ],

  // 3) Rédaction d’objectifs d’apprentissage observables
  [
    { word: "Formuler", distractors: ["Savoir", "Comprendre", "Découvrir"] },
    {
      word: "des objectifs d’apprentissage observables pour l’UE",
      distractors: ["des intentions pédagogiques vagues", "un plan de séance", "des mots-clés tendance"]
    },
    {
      word: "en mobilisant la taxonomie de Bloom révisée et l’alignement constructif",
      distractors: ["avec des verbes génériques", "au hasard", "en copiant l’année dernière"]
    },
    {
      word: "pour un semestre de licence L2, groupe de 30 étudiants",
      distractors: ["pour tout public", "rapidement", "en distanciel ou présentiel on verra"]
    },
    {
      word: "avec structure: verbe + objet + condition + critère de réussite",
      distractors: ["sans structure", "selon l’inspiration", "avec jargon technique"]
    },
    {
      word: "et livrer une liste d’objectifs SMART validée par le responsable d’UE",
      distractors: ["et une affiche", "et une playlist", "et une démo PowerPoint"]
    }
  ],

  // 4) Conception d’une évaluation critériée fiable
  [
    { word: "Concevoir", distractors: ["Utiliser", "Improviser", "Tester vite"] },
    {
      word: "une grille d’évaluation critériée alignée sur les objectifs",
      distractors: ["un barème global", "une note sur 20 au ressenti", "un quiz sympa"]
    },
    {
      word: "à partir d’exemples d’ancrage et d’indicateurs observables",
      distractors: ["avec des critères flous", "en copiant un modèle trouvé", "au pif"]
    },
    {
      word: "pour 2 productions authentiques en binôme",
      distractors: ["pour un QCM surprise", "pour une présentation libre", "pour un oral sans consigne"]
    },
    {
      word: "en visant validité et fidélité (accord inter-correcteurs ≥ 0,8)",
      distractors: ["si c’est rapide", "si tout le monde est d’accord", "si ça a l’air juste"]
    },
    {
      word: "et publier la grille aux étudiants avant l’évaluation",
      distractors: ["et la garder secrète", "et l’envoyer après", "et la résumer en 2 emoticônes"]
    }
  ],

  // 5) Scénario d’apprentissage actif (alignement constructif)
  [
    { word: "Structurer", distractors: ["Animer", "Raconter", "Montrer"] },
    {
      word: "un scénario d’apprentissage actif aligné sur les objectifs",
      distractors: ["un déroulé centré magistral", "un atelier ludique sans but", "un plan de slides"]
    },
    {
      word: "en combinant étude de cas et classe inversée",
      distractors: ["avec un long exposé", "avec du visionnage passif", "avec un brainstorming libre"]
    },
    {
      word: "pour 6 séances hybrides de 2 heures",
      distractors: ["une séance unique", "quand on peut", "sans format défini"]
    },
    {
      word: "en garantissant charge de travail 4–6 h/ECTS et activités évaluables",
      distractors: ["autant d’heures que possible", "si les étudiants veulent", "sans évaluation"]
    },
    {
      word: "et livrer un storyboard détaillé par séance",
      distractors: ["et une belle infographie", "et un mémo oral", "et un fond d’écran"]
    }
  ],

  // 6) Sélection et adaptation de ressources numériques (OER)
  [
    { word: "Sélectionner", distractors: ["Télécharger", "Chercher vite", "Collecter tout"] },
    {
      word: "des ressources numériques pertinentes (dont OER) pour l’UE",
      distractors: ["des vidéos virales", "des supports marketing", "des documents quelconques"]
    },
    {
      word: "en respectant licences Creative Commons et citation des sources",
      distractors: ["sans vérifier les droits", "en mettant “source: internet”", "avec un logo © au hasard"]
    },
    {
      word: "accessibles selon RGAA et principes UDL",
      distractors: ["lisibles sur mon écran", "jolies", "optimisées pour PowerPoint"]
    },
    {
      word: "en garantissant pertinence, actualité et niveau scientifique",
      distractors: ["si c’est populaire", "si c’est court", "si c’est gratuit"]
    },
    {
      word: "et constituer un dossier de ressources annoté",
      distractors: ["et une liste de liens bruts", "et un PDF sans titres", "et un dossier zip sans noms"]
    }
  ],

  // 7) Conduite de séance interactive (evidence-based)
  [
    { word: "Animer", distractors: ["Parler", "Expliquer", "Diffuser"] },
    {
      word: "une séance interactive avec questions conceptuelles",
      distractors: ["une conférence magistrale", "un exposé continu", "une vidéo sans pause"]
    },
    {
      word: "en utilisant le peer instruction et un outil de vote",
      distractors: ["avec des questions rhétoriques", "avec un tableau rempli", "avec un sondage papier libre"]
    },
    {
      word: "en amphi de 80 étudiants pendant 90 minutes",
      distractors: ["en petit comité indéfini", "à distance un jour", "durée libre"]
    },
    {
      word: "en visant ≥ 70 % de participation et 3 cycles question-révision",
      distractors: ["tant que certains répondent", "jusqu’à ce que ça marche", "si c’est dynamique"]
    },
    {
      word: "et archiver les résultats pour analyse post-séance",
      distractors: ["et passer à autre chose", "et supprimer les réponses", "et garder une impression générale"]
    }
  ],

  // 8) Feedback actionnable et remédiation
  [
    { word: "Fournir", distractors: ["Donner", "Dire", "Partager"] },
    {
      word: "un feedback spécifique et orienté tâche",
      distractors: ["un compliment général", "un score brut", "un smiley"]
    },
    {
      word: "à l’aide d’une grille et d’exemples d’amélioration (feedforward)",
      distractors: ["au tableau", "en aparté", "avec un message générique"]
    },
    {
      word: "sous 72 heures après la remise",
      distractors: ["rapidement", "à la fin du semestre", "quand j’ai le temps"]
    },
    {
      word: "en couvrant points forts, écarts et prochaines étapes",
      distractors: ["en disant de relire", "en renvoyant au cours", "en notant juste la faute"]
    },
    {
      word: "et publier un échantillon anonymisé d’exemples annotés",
      distractors: ["et garder privé", "et montrer les meilleures copies", "et lire des noms en classe"]
    }
  ],

  // 9) Encadrement d’un mémoire/projet (intégrité académique)
  [
    { word: "Accompagner", distractors: ["Superviser vaguement", "Surveiller", "Conseiller au besoin"] },
    {
      word: "la réalisation d’un mémoire de master",
      distractors: ["un exposé oral", "un petit rapport de TP", "un poster libre"]
    },
    {
      word: "avec un plan d’accompagnement, jalons et bibliographie guidée",
      distractors: ["avec un sujet libre", "sans calendrier", "en renvoyant à Google"]
    },
    {
      word: "en respectant intégrité scientifique et anti-plagiat",
      distractors: ["en faisant confiance", "en tolérant un peu", "en vérifiant une fois"]
    },
    {
      word: "en fixant 3 rendez-vous de suivi et 2 livrables intermédiaires",
      distractors: ["au fil de l’eau", "si nécessaire", "à la dernière minute"]
    },
    {
      word: "et consigner les traces de suivi dans un journal de bord",
      distractors: ["et garder des mails épars", "et se fier à la mémoire", "et tout centraliser oralement"]
    }
  ],

  // 10) Amélioration continue à partir de données
  [
    { word: "Analyser", distractors: ["Consulter", "Parcourir", "Regarder"] },
    {
      word: "les données d’évaluation des enseignements et de réussite",
      distractors: ["les commentaires positifs", "les notes finales seulement", "les avis sur les réseaux"]
    },
    {
      word: "en triangulant questionnaires, résultats et retours qualitatifs",
      distractors: ["avec un sondage unique", "au ressenti", "sur un échantillon aléatoire flou"]
    },
    {
      word: "après chaque session de l’UE",
      distractors: ["en fin d’année seulement", "quand ça va mal", "si on a du temps"]
    },
    {
      word: "pour dégager 3 actions d’amélioration priorisées",
      distractors: ["pour changer tout", "pour rien changer", "pour rendre ça plus fun"]
    },
    {
      word: "et mettre à jour le plan d’amélioration documenté",
      distractors: ["et envoyer un mail", "et faire une réunion", "et noter sur un post-it"]
    }
  ],

  // 11) Accessibilité et inclusion (UDL / RGAA)
  [
    { word: "Adapter", distractors: ["Simplifier", "Moderniser", "Uniformiser"] },
    {
      word: "les supports et activités selon UDL et RGAA",
      distractors: ["le design graphique", "la charte PowerPoint", "la police d’écriture préférée"]
    },
    {
      word: "en proposant alternatives textuelles, sous-titrage et formats éditables",
      distractors: ["en envoyant des PDF figés", "en mettant des images HD", "en parlant plus fort"]
    },
    {
      word: "avant le début du semestre et sur demande d’aménagement",
      distractors: ["à mi-parcours", "si on y pense", "après l’examen"]
    },
    {
      word: "en couvrant au moins 2 formats par ressource clé",
      distractors: ["si possible", "pour les chapitres faciles", "uniquement pour les vidéos"]
    },
    {
      word: "et publier une check-list d’accessibilité complétée",
      distractors: ["et garder ça privé", "et cocher mentalement", "et demander aux étudiants de vérifier"]
    }
  ],

  // 12) Intégration du numérique responsable et RGPD
  [
    { word: "Mettre en conformité", distractors: ["Informer", "Sensibiliser seulement", "Notifier"] },
    {
      word: "les activités pédagogiques traitant des données étudiantes",
      distractors: ["les habitudes des enseignants", "les résultats de recherche", "les profils LinkedIn"]
    },
    {
      word: "en cartographiant traitements, durées et bases légales avec le DPD",
      distractors: ["en ajoutant un bandeau cookies", "en anonymisant au hasard", "en interdisant tout outil"]
    },
    {
      word: "pour un dispositif d’évaluation continue en ligne",
      distractors: ["pour tout ce qui existe", "pour un TP papier", "pour des affiches"]
    },
    {
      word: "avec registre tenu, consentements et information claire",
      distractors: ["sans registre", "avec un mail unique", "avec une FAQ non lue"]
    },
    {
      word: "et publier la notice d’information aux étudiants",
      distractors: ["et garder interne", "et renvoyer vers le site de l’université", "et l’ajouter en annexe invisible"]
    }
  ]
];

