positiveAff = [
    "“ Nous savons douloureusement, par l'expérience, que la liberté n'est jamais donnée volontairement par l'oppresseur, elle doit exigée par les opprimés.” Extrait de : Lettre de la prison de Birmingham le 16 avril 1963, - De Martin Luther King",
    "“ Cela va nous coûter la vie peut être, mais nous sommes pour prendre les risques, nous sommes là pour oser et vous êtes là pour continuer la lutte coûte que coûte.” - DE Thomas Sankara",
    "“ Formez-vous, armez-vous de sciences jusqu’aux dents (…) et arrachez votre patrimoine culturel.” - DE CHEIKH ANTA DIOP",
    "“ Je n'ai peur de rien. Si vous craignez Dieu vous ne craindrez plus rien.” - Discours en 1972. de Muammar al- Kadhafi",
    "“ Le tam-tam ni la voix ne rythment plus les gestes des saisons.” - De Léopold Sédar Senghor ",
    "“ Quand un nègre prêche l'estime de soi, l'amour de ses semblables, l'impérialisme appelle cela de la haine, sans doute parce que notre peuple a été programmé par l'oligarchie à aimer tout le monde à l'exception de lui-même.” - De Kémi Séba",
    "“ Quand Dieu a déjà fabriqué un être et qu'il l'a envoyé dans notre monde à nous, c'est fini, il ne revient plus sur Sa décision sinon les gens ne vont plus le respecter. En plus, ça voudrait dire que Dieu est capable de Se tromper comme nous autres.” Extrait de Demain j’aurai vingt ans - De Alain Mabanckou",
    "“ Tu veux savoir ce que c'est qu'un vrai leader ? Moi, je vais te le dire : c'est quelqu'un qui sait reconstruire ce qui a été brisé, rassembler ceux qui ont été séparés. Mais il faut une vision pour y arriver et c'est ce qui nous manque le plus dans ce foutu pays !” Extrait de Loin de mon père, - De Véronique Tadjo ",
    "“ Aucune guerre ne se raconte. Là où il y a du sang, il n’y a pas de mots. L’écrivain est en train de demander aux morts de montrer leurs cicatrices.” Extrait de: La confession de la lionne, - De Mia Couto ",
    "“ Ne regrette rien, il faudra toujours continuer à apprendre et à te perfectionner, et ce n'est pas à l'école que tu pourras le faire. L'école donne des diplôme, mais c'est dans la vie qu'on se forme.” Extrait de: Amkoullel l'enfant Peul, - De Amadou Hampâté Bâ "
  ]
  
  function newQuote() {
    var randomNumber = Math.floor(Math.random() * (positiveAff.length));
    document.getElementById('affirmations').innerHTML = positiveAff[randomNumber];
  }