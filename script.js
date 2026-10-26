
const questions = {
  linux: {
    easy: [
      {
        q: "Quelle commande affiche les fichiers d'un répertoire sous Linux ?",
        a: ["pwd", "ls", "cd", "mkdir"],
        correct: 1,
        explain: "ls (list) affiche le contenu d'un répertoire."
      },
      {
        q: "Quelle commande permet de changer de répertoire ?",
        a: ["mv", "cd", "cat", "touch"],
        correct: 1,
        explain: "cd signifie change directory et permet de naviguer dans les dossiers."
      },
      {
        q: "Quelle commande affiche le répertoire courant ?",
        a: ["whoami", "pwd", "find", "echo"],
        correct: 1,
        explain: "pwd signifie print working directory."
      }
    ],
    medium: [
      {
        q: "Que signifie la permission chmod 755 ?",
        a: ["Tout le monde peut écrire", "Propriétaire rwx, autres r-x", "Lecture seule pour tous", "Aucun accès"],
        correct: 1,
        explain: "7 = rwx, 5 = r-x. Le propriétaire peut tout faire, les autres lire et exécuter."
      },
      {
        q: "Quelle commande recherche une chaîne de caractères dans un fichier ?",
        a: ["grep", "chmod", "df", "ps"],
        correct: 0,
        explain: "grep recherche des motifs textuels dans les fichiers."
      },
      {
        q: "Quel fichier contient les informations de comptes utilisateurs locaux ?",
        a: ["/etc/hosts", "/etc/passwd", "/var/log/syslog", "/etc/fstab"],
        correct: 1,
        explain: "/etc/passwd contient notamment les noms d'utilisateurs et leurs identifiants."
      }
    ],
    hard: [
      {
        q: "Quel signal est envoyé par défaut par la commande kill ?",
        a: ["SIGKILL", "SIGSTOP", "SIGTERM", "SIGHUP"],
        correct: 2,
        explain: "kill envoie SIGTERM (15) par défaut, permettant au processus de s'arrêter proprement."
      },
      {
        q: "Quel outil Linux permet d'observer les appels système d'un processus ?",
        a: ["strace", "top", "lsblk", "free"],
        correct: 0,
        explain: "strace permet de suivre les appels système effectués par un programme."
      },
      {
        q: "À quoi sert principalement /proc sous Linux ?",
        a: ["Stocker les sauvegardes", "Exposer des informations du noyau et des processus", "Conserver les programmes installés", "Héberger les fichiers personnels"],
        correct: 1,
        explain: "/proc est un système de fichiers virtuel exposant des informations sur les processus et le noyau."
      }
    ]
  },
  network: {
    easy: [
      {
        q: "Que signifie IP dans une adresse IP ?",
        a: ["Internet Protocol", "Internal Program", "Internet Port", "Interface Process"],
        correct: 0,
        explain: "IP signifie Internet Protocol, le protocole d'adressage et de routage."
      },
      {
        q: "Quel appareil relie généralement plusieurs réseaux IP ?",
        a: ["Switch", "Routeur", "Hub", "Répéteur"],
        correct: 1,
        explain: "Un routeur achemine les paquets entre différents réseaux."
      },
      {
        q: "Quelle adresse IPv4 est une adresse de boucle locale ?",
        a: ["192.168.1.1", "8.8.8.8", "127.0.0.1", "10.0.0.1"],
        correct: 2,
        explain: "127.0.0.1 désigne l'hôte local (localhost)."
      }
    ],
    medium: [
      {
        q: "Combien d'adresses IPv4 contient un réseau /24 ?",
        a: ["128", "256", "254", "512"],
        correct: 1,
        explain: "Un /24 laisse 8 bits pour les adresses : 2 puissance 8 = 256 adresses au total."
      },
      {
        q: "Quelle couche OSI assure principalement le routage IP ?",
        a: ["Physique", "Liaison", "Réseau", "Application"],
        correct: 2,
        explain: "La couche 3, réseau, gère l'adressage logique et le routage."
      },
      {
        q: "À quoi sert ARP sur un réseau IPv4 Ethernet local ?",
        a: ["Résoudre une adresse IP en adresse MAC", "Chiffrer les paquets", "Attribuer un nom DNS", "Compresser les données"],
        correct: 0,
        explain: "ARP associe une adresse IPv4 à une adresse MAC sur le réseau local."
      }
    ],
    hard: [
      {
        q: "Quel est le nombre d'adresses IPv4 dans un sous-réseau /27 ?",
        a: ["16", "32", "64", "128"],
        correct: 1,
        explain: "32 - 27 = 5 bits disponibles. 2 puissance 5 = 32 adresses."
      },
      {
        q: "Quel protocole de routage utilise l'algorithme SPF de Dijkstra ?",
        a: ["RIP", "BGP", "OSPF", "STP"],
        correct: 2,
        explain: "OSPF utilise l'algorithme Shortest Path First pour calculer les routes."
      },
      {
        q: "Quel champ IPv4 diminue à chaque routeur traversé ?",
        a: ["TTL", "Port source", "Adresse MAC source", "Version"],
        correct: 0,
        explain: "Le TTL diminue à chaque saut pour éviter les boucles de routage infinies."
      }
    ]
  },
  protocol: {
    easy: [
      {
        q: "Quel protocole est utilisé pour accéder à un site web chiffré ?",
        a: ["FTP", "HTTP", "HTTPS", "SMTP"],
        correct: 2,
        explain: "HTTPS protège les communications web grâce à TLS."
      },
      {
        q: "Quel service traduit les noms de domaine en adresses IP ?",
        a: ["DNS", "SSH", "DHCP", "NTP"],
        correct: 0,
        explain: "DNS permet notamment de résoudre un nom de domaine en adresse IP."
      },
      {
        q: "Quel protocole permet d'administrer une machine à distance via un canal chiffré ?",
        a: ["Telnet", "SSH", "FTP", "HTTP"],
        correct: 1,
        explain: "SSH fournit une connexion distante authentifiée et chiffrée."
      }
    ],
    medium: [
      {
        q: "Quel est le port TCP standard de HTTPS ?",
        a: ["22", "53", "80", "443"],
        correct: 3,
        explain: "HTTPS utilise normalement le port TCP 443."
      },
      {
        q: "Quel protocole attribue automatiquement des paramètres IP aux clients ?",
        a: ["DHCP", "DNS", "ICMP", "SNMP"],
        correct: 0,
        explain: "DHCP fournit automatiquement une adresse IP et d'autres paramètres réseau."
      },
      {
        q: "Quel protocole est sans connexion et ne garantit pas la livraison ?",
        a: ["TCP", "UDP", "SSH", "TLS"],
        correct: 1,
        explain: "UDP est un protocole de transport sans connexion ni garantie de livraison."
      }
    ],
    hard: [
      {
        q: "Quel enregistrement DNS désigne un serveur de messagerie ?",
        a: ["AAAA", "CNAME", "MX", "PTR"],
        correct: 2,
        explain: "MX (Mail Exchange) indique les serveurs recevant le courrier d'un domaine."
      },
      {
        q: "Quel mécanisme TLS permet de négocier des clés de session éphémères ?",
        a: ["ECDHE", "CRC32", "Base64", "ARP"],
        correct: 0,
        explain: "ECDHE utilise un échange Diffie-Hellman éphémère pour établir un secret partagé."
      },
      {
        q: "Quel code HTTP indique qu'une ressource n'a pas été modifiée ?",
        a: ["200", "301", "304", "403"],
        correct: 2,
        explain: "HTTP 304 Not Modified permet de réutiliser une version en cache."
      }
    ]
  },
  password: {
    easy: [
      {
        q: "Quelle pratique renforce la sécurité d'un compte ?",
        a: ["Réutiliser un mot de passe", "Activer la double authentification", "Partager son mot de passe", "Utiliser sa date de naissance"],
        correct: 1,
        explain: "La double authentification ajoute une protection en plus du mot de passe."
      },
      {
        q: "À quoi sert un gestionnaire de mots de passe ?",
        a: ["Stocker des identifiants de manière sécurisée", "Désactiver les antivirus", "Partager automatiquement tous les comptes", "Supprimer le chiffrement"],
        correct: 0,
        explain: "Un gestionnaire aide à créer et stocker des mots de passe uniques et robustes."
      },
      {
        q: "Quelle méthode est recommandée pour plusieurs comptes ?",
        a: ["Le même mot de passe partout", "Un mot de passe unique par compte", "Un mot de passe envoyé par email", "Un code PIN identique partout"],
        correct: 1,
        explain: "Des mots de passe différents limitent les conséquences d'une fuite."
      }
    ],
    medium: [
      {
        q: "Qu'est-ce qu'une attaque par credential stuffing ?",
        a: ["Tester des identifiants issus de fuites sur d'autres services", "Chiffrer un disque", "Mettre à jour un serveur", "Créer des sauvegardes"],
        correct: 0,
        explain: "Cette attaque exploite la réutilisation d'identifiants compromis."
      },
      {
        q: "Pourquoi ajoute-t-on un sel aléatoire lors du hachage des mots de passe ?",
        a: ["Pour raccourcir le mot de passe", "Pour rendre les hachages uniques même pour des mots de passe identiques", "Pour transmettre le mot de passe en clair", "Pour remplacer toute authentification"],
        correct: 1,
        explain: "Un sel unique empêche notamment que deux mots de passe identiques produisent le même hachage stocké."
      },
      {
        q: "Quelle méthode d'authentification résiste mieux au phishing classique ?",
        a: ["Code SMS", "Mot de passe seul", "Clé de sécurité FIDO2", "Question secrète"],
        correct: 2,
        explain: "FIDO2 utilise une authentification liée au domaine du service, ce qui protège contre de nombreux scénarios de phishing."
      }
    ],
    hard: [
      {
        q: "Quel algorithme est spécialement conçu pour le hachage de mots de passe ?",
        a: ["SHA-1", "MD5", "Argon2id", "CRC32"],
        correct: 2,
        explain: "Argon2id est une fonction de dérivation de clés adaptée au stockage sécurisé des mots de passe."
      },
      {
        q: "Quel paramètre d'Argon2id contrôle principalement la mémoire utilisée ?",
        a: ["m", "p", "t", "salt"],
        correct: 0,
        explain: "Le paramètre m définit le coût mémoire. t contrôle les itérations et p le parallélisme."
      },
      {
        q: "Pourquoi les fonctions de hachage rapides sont-elles peu adaptées au stockage direct des mots de passe ?",
        a: ["Elles produisent toujours le même nombre", "Elles facilitent les essais massifs de candidats", "Elles nécessitent une connexion Internet", "Elles ne fonctionnent pas sur Linux"],
        correct: 1,
        explain: "Une fonction rapide permet de tester davantage de mots de passe candidats. On privilégie une fonction de dérivation coûteuse."
      }
    ]
  },
  security: {
    easy: [
      {
        q: "Qu'est-ce que le phishing ?",
        a: ["Une technique de sauvegarde", "Une tentative de tromperie pour obtenir des informations", "Un protocole réseau", "Un outil de compression"],
        correct: 1,
        explain: "Le phishing consiste à usurper une identité ou un contexte de confiance pour tromper une personne."
      },
      {
        q: "À quoi sert principalement un pare-feu ?",
        a: ["Filtrer le trafic réseau", "Augmenter la RAM", "Compresser les fichiers", "Réparer un écran"],
        correct: 0,
        explain: "Un pare-feu applique des règles pour autoriser ou bloquer des communications réseau."
      },
      {
        q: "Pourquoi installer les mises à jour de sécurité ?",
        a: ["Pour changer l'adresse IP", "Pour corriger des vulnérabilités", "Pour supprimer les sauvegardes", "Pour désactiver le chiffrement"],
        correct: 1,
        explain: "Les mises à jour corrigent notamment des failles pouvant être exploitées."
      }
    ],
    medium: [
      {
        q: "Que représente la triade CIA en cybersécurité ?",
        a: ["Confidentialité, Intégrité, Disponibilité", "Contrôle, Internet, Accès", "Chiffrement, Identité, Analyse", "Cloud, Infrastructure, Application"],
        correct: 0,
        explain: "La triade CIA représente Confidentiality, Integrity et Availability."
      },
      {
        q: "Quel est le principe du moindre privilège ?",
        a: ["Donner tous les droits aux utilisateurs", "Accorder uniquement les permissions nécessaires", "Désactiver les comptes", "Partager le compte administrateur"],
        correct: 1,
        explain: "Chaque compte doit disposer uniquement des accès nécessaires à ses tâches."
      },
      {
        q: "Quel outil centralise et analyse des événements de sécurité ?",
        a: ["SIEM", "DHCP", "BIOS", "NAT"],
        correct: 0,
        explain: "Un SIEM collecte et corrèle des événements pour aider à détecter des incidents."
      }
    ],
    hard: [
      {
        q: "Quelle technique réduit l'impact d'une compromission en séparant les réseaux ?",
        a: ["Segmentation réseau", "Désactivation des journaux", "Réutilisation des secrets", "Ouverture de tous les ports"],
        correct: 0,
        explain: "La segmentation limite les communications possibles entre différentes zones."
      },
      {
        q: "Quel mécanisme aide à vérifier l'intégrité et l'authenticité d'un message avec un secret partagé ?",
        a: ["Base64", "HMAC", "CRC32", "Compression ZIP"],
        correct: 1,
        explain: "HMAC combine une fonction de hachage et une clé secrète pour authentifier un message."
      },
      {
        q: "Dans une architecture Zero Trust, quelle approche est recommandée ?",
        a: ["Faire confiance à tout le réseau interne", "Vérifier explicitement les accès et limiter les privilèges", "Désactiver les contrôles après connexion VPN", "Utiliser un seul compte administrateur"],
        correct: 1,
        explain: "Zero Trust repose notamment sur la vérification explicite et le moindre privilège."
      }
    ]
  }
};

const categoryNames = {
  linux: "Linux",
  network: "Réseaux",
  protocol: "Protocoles",
  password: "Mots de passe",
  security: "Cybersécurité"
};

const levelNames = {
  easy: "Débutant",
  medium: "Intermédiaire",
  hard: "Expert"
};

let selectedCategory = "linux";
let selectedLevel = "easy";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let timeLeft = 20;
let timer = null;
let answered = false;

const $ = id => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });
  $(id).classList.remove("hidden");
  window.scrollTo(0, 0);
}

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
    selectedCategory = button.dataset.category;
  });
});

document.querySelectorAll(".difficulty").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".difficulty").forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
    selectedLevel = button.dataset.level;
  });
});

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function bestKey() {
  return `cyberquiz-best-${selectedCategory}-${selectedLevel}`;
}

function getBestScore() {
  try {
    return Number(localStorage.getItem(bestKey())) || 0;
  } catch {
    return 0;
  }
}

function saveBestScore(value) {
  try {
    localStorage.setItem(bestKey(), String(value));
  } catch {
    // Le quiz fonctionne même si le stockage est désactivé.
  }
}

function startQuiz() {
  clearInterval(timer);
  currentQuestions = shuffle(questions[selectedCategory][selectedLevel]);
  currentIndex = 0;
  score = 0;
  correctAnswers = 0;

  $("quiz-category-label").textContent =
    `${categoryNames[selectedCategory].toUpperCase()} / ${levelNames[selectedLevel].toUpperCase()}`;
  $("total-questions").textContent = String(currentQuestions.length).padStart(2, "0");
  $("best-score").textContent = getBestScore();

  showScreen("quiz-screen");
  showQuestion();
}

function updateStats() {
  $("current-score").textContent = score;
  $("correct-count").textContent = correctAnswers;
  $("best-score").textContent = Math.max(score, getBestScore());
}

function showQuestion() {
  answered = false;
  const question = currentQuestions[currentIndex];

  $("question-number").textContent = String(currentIndex + 1).padStart(2, "0");
  $("question-text").textContent = question.q;
  $("progress-fill").style.width =
    `${(currentIndex / currentQuestions.length) * 100}%`;

  $("answers").replaceChildren();
  $("explanation").classList.add("hidden");
  $("next-btn").classList.add("hidden");
  $("next-btn").textContent =
    currentIndex === currentQuestions.length - 1
      ? "Voir les résultats →"
      : "Question suivante →";

  const letters = ["A", "B", "C", "D"];
  const options = shuffle(question.a.map((text, index) => ({
    text,
    originalIndex: index
  })));

  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = letters[index];

    const label = document.createElement("span");
    label.textContent = option.text;

    button.append(letter, label);
    button.dataset.answer = option.originalIndex;
    button.addEventListener("click", () => selectAnswer(option.originalIndex));
    $("answers").appendChild(button);
  });

  updateStats();
  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 20;
  updateTimer();

  timer = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      selectAnswer(-1);
    }
  }, 1000);
}

function updateTimer() {
  $("time-left").textContent = timeLeft;
  $("timer").classList.toggle("urgent", timeLeft <= 5);
}

function selectAnswer(index) {
  if (answered) return;

  answered = true;
  clearInterval(timer);

  const question = currentQuestions[currentIndex];
  const isCorrect = index === question.correct;

  if (isCorrect) {
    correctAnswers++;
    score += 100 + timeLeft;
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
    const answerIndex = Number(button.dataset.answer);

    if (answerIndex === question.correct) {
      button.classList.add("correct");
    } else if (answerIndex === index) {
      button.classList.add("wrong");
    }
  });

  const explanation = $("explanation");
  explanation.classList.remove("hidden");
  explanation.textContent =
    (index === -1 ? "⏱ Temps écoulé ! " :
      isCorrect ? "✓ Bonne réponse ! " : "✕ Mauvaise réponse. ") +
    question.explain;

  $("next-btn").classList.remove("hidden");
  $("progress-fill").style.width =
    `${((currentIndex + 1) / currentQuestions.length) * 100}%`;

  updateStats();
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex >= currentQuestions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  clearInterval(timer);

  const total = currentQuestions.length;
  const percentage = Math.round(correctAnswers / total * 100);
  const best = Math.max(score, getBestScore());

  if (score > getBestScore()) {
    saveBestScore(score);
  }

  $("final-score").textContent = score;
  $("result-correct").textContent = `${correctAnswers}/${total}`;
  $("result-percent").textContent = `${percentage}%`;
  $("result-best").textContent = best;

  if (percentage === 100) {
    $("result-icon").textContent = "★";
    $("result-title").textContent = "Performance parfaite !";
    $("result-message").textContent =
      "Toutes les réponses sont correctes. Excellent travail !";
  } else if (percentage >= 60) {
    $("result-icon").textContent = "✦";
    $("result-title").textContent = "Bien joué !";
    $("result-message").textContent =
      "Tu maîtrises une bonne partie du sujet. Continue à progresser !";
  } else {
    $("result-icon").textContent = "⌘";
    $("result-title").textContent = "Continue ton entraînement !";
    $("result-message").textContent =
      "Chaque tentative permet d'apprendre. Recommence pour améliorer ton score.";
  }

  showScreen("result-screen");
}

$("start-btn").addEventListener("click", startQuiz);
$("next-btn").addEventListener("click", nextQuestion);
$("retry-btn").addEventListener("click", startQuiz);

$("home-btn").addEventListener("click", () => {
  clearInterval(timer);
  showScreen("home-screen");
});

$("quit-btn").addEventListener("click", () => {
  clearInterval(timer);
  showScreen("home-screen");
});
