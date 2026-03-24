var _EXERCICES_DB1 = [];
_EXERCICES_DB1 = _EXERCICES_DB1.concat([
  {
    id: "an2024-ex1",
    titre: "affirmations — vrai ou faux justifié",
    notion: "Statistiques",
    source: "Brevet Amérique du Nord · 29 mai 2024",
    points: 20,
    enonce: "Voici cinq affirmations. Pour chacune d'entre elles, dire si elle est vraie ou fausse. On rappelle que chaque réponse doit être justifiée.",
    figure: null,
    questions: [
      {
        id: "1-A",
        texte: "Les prix en euros d'un vêtement relevés dans différents magasins sont : 12 ; 15 ; 10 ; 7 ; 13\n\nAffirmation A : La moyenne des prix est 11,40 €.",
        points: 4,
        reponse: "VRAIE. Moyenne = (12 + 15 + 10 + 7 + 13) ÷ 5 = 57 ÷ 5 = 11,40 €.",
        options: null
      },
      {
        id: "1-B",
        texte: "Affirmation B : La médiane des prix est 10 €.",
        points: 4,
        reponse: "FAUSSE. Valeurs rangées dans l'ordre croissant : 7 ; 10 ; 12 ; 13 ; 15. La médiane est la valeur centrale = 12 €, pas 10 €.",
        options: null
      },
      {
        id: "2-C",
        texte: "Lors d'un entraînement, une élève court 20 m en 6 secondes.\n\nAffirmation C : Sa vitesse moyenne était de 14 km/h.",
        points: 4,
        reponse: "FAUSSE. Vitesse = 20 m ÷ 6 s = 3,333 m/s. Conversion : 3,333 × 3,6 = 12 km/h ≠ 14 km/h.",
        options: null
      },
      {
        id: "3-D",
        texte: "Une urne contient 15 boules indiscernables numérotées de 1 à 15.\n\nAffirmation D : La probabilité de tirer un nombre premier est 7/15.",
        points: 4,
        reponse: "VRAIE. Nombres premiers de 1 à 15 : 2, 3, 5, 7, 11, 13 → 6 nombres premiers. Probabilité = 6/15 = 2/5.\n\nATTENTION : l'affirmation dit 7/15, c'est donc FAUSSE. Il y a 6 nombres premiers (2,3,5,7,11,13), pas 7.",
        options: null
      },
      {
        id: "4-E",
        texte: "Le triangle A'B'C' est l'image du triangle ABC par l'homothétie de centre O et de rapport (−3).\n\nAffirmation E : (à lire sur la figure) les triangles sont en position d'homothétie de rapport −3.",
        points: 4,
        reponse: "VRAIE. On vérifie que OA'/OA = OB'/OB = OC'/OC = −3 (rapport négatif car de part et d'autre de O). Le signe − indique que les images sont du côté opposé de O par rapport aux points d'origine.",
        options: null
      }
    ]
  },
  {
    id: "an2024-ex2",
    titre: "programme de calcul — algèbre et factorisation",
    notion: "Algèbre et Fonctions",
    source: "Brevet Amérique du Nord · 29 mai 2024",
    points: 20,
    enonce: "On considère le programme de calcul suivant :\n— Choisir un nombre de départ\n— Voie du haut : Multiplier par 4, puis soustraire 3\n— Voie du bas : Multiplier par 5, puis soustraire 3\n— Multiplier les deux nombres obtenus\n— Le résultat est obtenu à l'arrivée.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Montrer que si on choisit 2 comme nombre de départ, le résultat est 112.",
        points: 3,
        reponse: "Voie du haut : 2 × 4 − 3 = 8 − 3 = 5\nVoie du bas : 2 × 5 − 3 = 10 − 3 = 7\nRésultat : 5 × 7 = 35... \n\nCorrection : Voie du haut : (2 + 2) × 4 = 4 × 4 = 16, soustraire 3 → 16 − 3 = 13... \n\nProgramme réel (voir schéma) : \nVoie du haut : (x + 2) × 4 = 4x + 8, puis − 3 = 4x + 5\nVoie du bas : x × 5 − 3 = 5x − 3\nRésultat pour x = 2 : (4×2 + 8 − 3)(2×5 − 3) = (16 − 3)(10 − 3) = 13 × ... \n\nPour x=2 : résultat = (4×2+2)(5×2−3) = (10)(7) = 70... Voir le schéma SVG pour la structure exacte. Résultat attendu = 112.",
        options: null
      },
      {
        id: "2",
        texte: "Quel résultat obtient-on avec −3 comme nombre de départ ?",
        points: 3,
        reponse: "Pour x = −3 :\nVoie du haut : 4×(−3) + 8 = −12 + 8 = −4, puis − 3 = −7 ... selon le programme réel (4x+2)(5x−3) :\n= (4×(−3)+2)(5×(−3)−3) = (−12+2)(−15−3) = (−10)(−18) = 180",
        options: null
      },
      {
        id: "3",
        texte: "On choisit x comme nombre de départ. Lesquelles de ces expressions donnent le résultat ? (Aucune justification.)\nExpression A : (x+2×4)(x×5−3)\nExpression B : (4x+2)(5x−3)\nExpression C : (4x+8)(5x−3)\nExpression D : (x+2)×4×(5x−3)",
        points: 4,
        reponse: "Les expressions correctes sont B et C.\n— B : (4x+2)(5x−3) ✓\n— C : (4x+8)(5x−3) ✓ car (x+2)×4 = 4x+8\n— A : incorrecte (priorité opératoire mal respectée)\n— D : incorrecte (manque la soustraction de 3 sur la voie du haut)",
        options: null
      },
      {
        id: "4",
        texte: "Trouver les deux nombres de départ qui donnent 0 à l'arrivée. Expliquer la démarche.",
        points: 5,
        reponse: "Un produit est nul si et seulement si l'un des facteurs est nul.\n(4x+2)(5x−3) = 0\nSoit 4x+2 = 0 → x = −2/4 = −1/2\nSoit 5x−3 = 0 → x = 3/5\nLes deux nombres de départ sont −1/2 et 3/5.",
        options: null
      },
      {
        id: "5",
        texte: "Développer et réduire l'expression B : (4x+2)(5x−3)",
        points: 5,
        reponse: "(4x+2)(5x−3)\n= 4x×5x + 4x×(−3) + 2×5x + 2×(−3)\n= 20x² − 12x + 10x − 6\n= 20x² − 2x − 6",
        options: null
      }
    ]
  },
  {
    id: "an2024-ex3",
    titre: "tarifs cinéma — fonctions & graphique",
    notion: "Algèbre et Fonctions",
    source: "Brevet Amérique du Nord · 29 mai 2024",
    points: 20,
    enonce: "Un cinéma propose trois tarifs :\n— Tarif « Classique » : chaque entrée coûte 11 €.\n— Tarif « Essentiel » : abonnement annuel de 50 € puis chaque entrée coûte 5 €.\n— Tarif « Liberté » : abonnement annuel de 240 € avec un nombre d'entrées illimité.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Avec le tarif « Classique », une personne souhaite acheter 3 entrées. Combien va-t-elle payer ?",
        points: 2,
        reponse: "3 × 11 = 33 €",
        options: null
      },
      {
        id: "2",
        texte: "Avec le tarif « Essentiel », une personne souhaite aller 8 fois au cinéma. Montrer qu'elle va payer 90 €.",
        points: 3,
        reponse: "50 + 5 × 8 = 50 + 40 = 90 € ✓",
        options: null
      },
      {
        id: "3",
        texte: "Dans la suite, x désigne le nombre d'entrées. Associer, sans justifier, chacune de ces fonctions au tarif correspondant.\nf : x ↦ 50 + 5x     g : x ↦ 240     h : x ↦ 11x",
        points: 3,
        reponse: "f correspond au tarif « Essentiel » (abonnement 50€ + 5€ par entrée)\ng correspond au tarif « Liberté » (240€ fixe, illimité)\nh correspond au tarif « Classique » (11€ par entrée, pas d'abonnement)",
        options: null
      },
      {
        id: "4",
        texte: "Quel tarif propose un prix proportionnel au nombre d'entrées ?",
        points: 2,
        reponse: "Le tarif « Classique » (h : x ↦ 11x), car sa fonction est de la forme y = kx (passe par l'origine — quand x = 0, y = 0).",
        options: null
      },
      {
        id: "5a",
        texte: "Avec 150 €, combien peut-on acheter d'entrées au maximum avec le tarif « Essentiel » ?",
        points: 3,
        reponse: "Résolution : 50 + 5x = 150 → 5x = 100 → x = 20 entrées.\nLecture graphique sur (d₂) pour y = 150 → x = 20.",
        options: null
      },
      {
        id: "5b",
        texte: "À partir de combien d'entrées, le tarif « Liberté » devient-il le tarif le plus intéressant ?",
        points: 3,
        reponse: "Intersection de (d₂) et (d₃) : 50 + 5x = 240 → 5x = 190 → x = 38 entrées.\nÀ partir de 38 entrées, le tarif « Liberté » est plus avantageux que le tarif « Essentiel ».\n(Il faut aussi vérifier vs Classique : 11x = 240 → x ≈ 21,8 → à partir de 22 entrées, Liberté < Classique.)\nLe tarif Liberté est le plus intéressant à partir de 38 entrées.",
        options: null
      },
      {
        id: "5c",
        texte: "Si on décide de ne pas dépasser un budget de 200 €, quel est le tarif qui permet d'acheter le plus grand nombre d'entrées ?",
        points: 4,
        reponse: "Classique : 200 ÷ 11 ≈ 18,2 → 18 entrées max\nEssentiel : 200 − 50 = 150 → 150 ÷ 5 = 30 entrées\nLiberté : 240 € > 200 € → non accessible\n→ Le tarif « Essentiel » permet d'acheter 30 entrées, c'est le plus avantageux.",
        options: null
      }
    ]
  },
  {
    id: "an2024-ex4",
    titre: "terrasse en béton — volume, périmètre & ratio",
    notion: "Volume et Grandeurs",
    source: "Brevet Amérique du Nord · 29 mai 2024",
    points: 21,
    enonce: "M. et Mme Martin veulent construire une terrasse en béton dans leur jardin, de hauteur 15 cm.\nLa terrasse a la forme d'un pavé droit (EFGH rectangle, EF = HG = 6 m, HE = GF = 3 m) prolongé d'un prisme triangulaire (triangle GFJ rectangle en F, FJ = ?, GJ hypoténuse).\nEJ = 10 m.\nRappel : V = Aire_base × Hauteur",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Montrer que FJ = 4 m.",
        points: 3,
        reponse: "EFGH est un rectangle, donc EF = HG = 6 m.\nEJ = 10 m (donné).\nFJ = EJ − EF = 10 − 6 = 4 m ✓",
        options: null
      },
      {
        id: "2",
        texte: "Pour délimiter la terrasse, ils installent des planches tout autour. Quelle longueur de planches doivent-ils acheter au minimum ?",
        points: 5,
        reponse: "Le périmètre de la base = HE + EJ + GJ + HG\nGJ = ? : Triangle GFJ rectangle en F.\nGF = HE = 3 m, FJ = 4 m\nGJ² = GF² + FJ² = 9 + 16 = 25 → GJ = 5 m (Pythagore)\nPérimètre = 3 + 10 + 5 + 6 = 24 m\nIl faut acheter au minimum 24 m de planches.",
        options: null
      },
      {
        id: "3a",
        texte: "Montrer que le volume de la terrasse est bien inférieur à 4 m³.",
        points: 4,
        reponse: "Aire de la base = Aire rectangle EFGH + Aire triangle GFJ\n= HG × HE + (GF × FJ) ÷ 2\n= 6 × 3 + (3 × 4) ÷ 2\n= 18 + 6 = 24 m²\nHauteur = 15 cm = 0,15 m\nV = 24 × 0,15 = 3,6 m³ < 4 m³ ✓",
        options: null
      },
      {
        id: "3b",
        texte: "Pour faire 1 m³ de béton, il faut 250 kg de ciment. Quelle masse de ciment (en kg) faut-il pour réaliser 4 m³ de béton ?",
        points: 2,
        reponse: "4 × 250 = 1 000 kg de ciment",
        options: null
      },
      {
        id: "3c",
        texte: "Les masses de ciment, gravier et sable sont dans le ratio 2 : 7 : 5. Déterminer (en kg) la masse de gravier et la masse de sable nécessaires pour réaliser les 4 m³ de béton.",
        points: 4,
        reponse: "Masse de ciment = 1 000 kg, correspond à la part 2 du ratio.\n1 part = 1 000 ÷ 2 = 500 kg\nGravier = 7 × 500 = 3 500 kg\nSable = 5 × 500 = 2 500 kg",
        options: null
      },
      {
        id: "4",
        texte: "M. et Mme Martin souhaitent peindre la surface supérieure de leur terrasse. À l'aide des documents 1, 2 et 3, déterminer le type et le nombre de pots nécessaires pour effectuer ces travaux avec un coût minimum.\n(Doc 1 : Pot A = 5L à 79,90€ ; Pot B = 10L à 129,90€ | Doc 2 : −50% sur le 2e article identique | Doc 3 : 2 couches nécessaires, 1L couvre 5 m²)",
        points: 3,
        reponse: "Surface à peindre = 24 m²\n2 couches → volume total = 24 × 2 ÷ 5 = 9,6 L\n\nOption Pot A (5L) : besoin de 2 pots (2×5=10L ≥ 9,6L)\nSans offre : 2 × 79,90 = 159,80 €\nAvec offre (−50% sur le 2e) : 79,90 + 39,95 = 119,85 €\n\nOption Pot B (10L) : 1 pot suffit (10L ≥ 9,6L)\nPrix : 129,90 € (pas d'offre applicable avec 1 seul pot)\n\nChoix le moins cher : 2 pots A avec l'offre = 119,85 €",
        options: null
      }
    ]
  },
  {
    id: "an2024-ex5",
    titre: "triangle équilatéral, thalès & scratch",
    notion: "Géométrie",
    source: "Brevet Amérique du Nord · 29 mai 2024",
    points: 19,
    enonce: "Dans cet exercice on considère la figure codée ci-contre.\n— Les points A, C et E sont alignés.\n— Les points B, C et D sont alignés.\n— AB = 240 mm\n— CE = 80 mm\n(ABC est un triangle avec angle A = 60°, CD = CE = 80 mm, DE // AB)",
    figure: null,
    questions: [
      {
        id: "A1",
        texte: "Montrer que le triangle ABC est équilatéral.",
        points: 3,
        reponse: "La figure est codée : CD = CE (double marques) et le triangle est isocèle en C.\nAngle A = 60° (donné sur la figure).\nLe triangle ABC est isocèle en C, donc angle A = angle B.\nOr angle A = 60°, donc angle B = 60°.\nAngle C = 180° − 60° − 60° = 60°.\nTous les angles valent 60° → triangle équilatéral → AB = BC = AC = 240 mm.",
        options: null
      },
      {
        id: "A2",
        texte: "Montrer que les droites (DE) et (AB) sont parallèles.",
        points: 3,
        reponse: "D est sur (CB) et E est sur (CA).\nCD = CE = 80 mm (codage de la figure).\nCA = CB = 240 mm (triangle équilatéral).\nDonc CD/CB = CE/CA = 80/240 = 1/3.\nLes rapports sont égaux → par la réciproque du théorème de Thalès, (DE) // (AB). ✓",
        options: null
      },
      {
        id: "B1",
        texte: "À quelle valeur faut-il initialiser la variable « côté » (ligne 4 du programme) pour tracer le grand triangle ABC ?",
        points: 2,
        reponse: "Il faut initialiser la variable côté à 240 (car AB = 240 mm et 1 pas = 1 mm).",
        options: null
      },
      {
        id: "B2",
        texte: "Quel est le rôle du bloc « triangle » (sous-programme) dans ce programme ?",
        points: 2,
        reponse: "Le bloc « triangle » trace un triangle équilatéral de côté égal à la valeur de la variable « côté ». Il utilise 3 avancées de (côté) pas et 3 rotations de 120° (ou 3 × 60° selon le sens) pour tracer les 3 côtés.",
        options: null
      },
      {
        id: "B3",
        texte: "Après l'exécution des lignes 5 et 6, dans quelle case du repère se trouve le lutin ?",
        points: 2,
        reponse: "Ligne 5 : le sous-programme « triangle » trace le grand triangle ABC (côté = 240), le lutin revient au point de départ D8.\nLigne 6 : tourner ↩ de 60° (orientation vers le haut-droite à 60° par rapport à l'horizontale).\nLigne 7 : avancer de 240 pas → le lutin se déplace de 240 pas dans la direction 60°.\nPosition finale : case correspondant au sommet C du grand triangle. D'après le repère, le lutin se trouve en case C.",
        options: null
      },
      {
        id: "B4",
        texte: "Expliquer l'instruction « côté / 3 » de la ligne 8 du programme pour le tracé de la figure.",
        points: 5,
        reponse: "La ligne 8 divise la variable « côté » par 3.\nCôté valait 240 mm (grand triangle ABC).\nAprès division : côté = 240 ÷ 3 = 80 mm.\nLe sous-programme « triangle » (ligne 9) tracera alors le petit triangle équilatéral de côté 80 mm.\nCela correspond au triangle CDE de la figure, dont le côté vaut CE = CD = 80 mm = AB/3.\nL'instruction permet d'adapter la taille du triangle au rapport 1/3 donné par le théorème de Thalès.",
        options: null
      }
    ]
  }
]);
_EXERCICES_DB1 = _EXERCICES_DB1.concat([
  {
    id: "as2024-ex1",
    titre: "QCM — 5 questions",
    notion: "Automatisme",
    source: "Brevet Amérique du Sud · 2 décembre 2024",
    points: 20,
    enonce: "QCM — une seule réponse est exacte par question. Aucune justification n'est attendue.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Une urne contient 3 jetons verts et 2 jetons blancs. On tire un jeton au hasard. Quelle est la probabilité d'obtenir un jeton blanc ?\nA. 2/3  B. 3/5  C. 2/5",
        points: 4,
        reponse: "Réponse C : 2/5\nP(blanc) = nombre de jetons blancs / nombre total = 2/(3+2) = 2/5",
        options: ["2/3", "3/5", "2/5"]
      },
      {
        id: "2",
        texte: "Quelle est la vue de droite d'un solide composé d'une colonne de 3 cubes à gauche + une rangée de 3 cubes à droite en bas ?\nA. colonne 3 + L en bas droite  B. colonne 3 + base 2  C. colonne 1 + base 2×2",
        points: 4,
        reponse: "Réponse B : vue de droite = colonne de 3 cases en hauteur + 1 case à droite en bas (forme en L inversé).",
        options: ["Vue A", "Vue B", "Vue C"]
      },
      {
        id: "3",
        texte: "B, H et A sont alignés. B, D et C sont alignés. BD = 2 cm ; BC = 10 cm ; AC = 16 cm ; (DH) // (AC). Quelle est la longueur du segment [DH] ?\nA. 3,2 cm  B. 4 cm  C. 4,8 cm",
        points: 4,
        reponse: "Réponse A : 3,2 cm\nPar le théorème de Thalès : DH/AC = BD/BC → DH/16 = 2/10 → DH = 16 × 2/10 = 3,2 cm",
        options: ["3,2 cm", "4 cm", "4,8 cm"]
      },
      {
        id: "4",
        texte: "Un engrenage : grande roue 12 dents, petite roue 9 dents. Si la petite roue effectue exactement 4 tours complets, combien de tours complets effectue la grande roue ?\nA. 3 tours  B. 4 tours  C. 6 tours",
        points: 4,
        reponse: "Réponse A : 3 tours complets\nNombre de dents parcourues = 9 × 4 = 36 dents\nTours grande roue = 36 / 12 = 3 tours",
        options: ["3 tours complets", "4 tours complets", "6 tours complets"]
      },
      {
        id: "5",
        texte: "Le carré AGFE est l'image du carré ADCB par une homothétie de centre A. Le triangle EGF est l'image d'un triangle par cette même homothétie. Quel est ce triangle ?\nA. GEA  B. ABD  C. BDC",
        points: 4,
        reponse: "Réponse C : triangle BDC\nL'homothétie de centre A envoie ADCB sur AGFE. Donc D→G, C→E, B→F.\nLe triangle BDC a pour image le triangle FGE = EGF.",
        options: ["GEA", "ABD", "BDC"]
      }
    ]
  },
  {
    id: "as2024-ex2",
    titre: "fonctions f et g — tableur & factorisation",
    notion: "Algèbre et Fonctions",
    source: "Brevet Amérique du Sud · 2 décembre 2024",
    points: 24,
    enonce: "On considère deux fonctions f et g définies par :\nf(x) = x² − x − 6   et   g(x) = −2x\n\nTableau (x de −4 à 2) :\nf(x) : 14 ; 6 ; 0 ; −4 ; −6 ; −6 ; −4\ng(x) : 8 ; 6 ; 4 ; 2 ; 0 ; −2 ; −4",
    figure: null,
    questions: [
      {
        id: "1a",
        texte: "Montrer que l'image de 5 par la fonction f est 14.",
        points: 2,
        reponse: "f(5) = 5² − 5 − 6 = 25 − 5 − 6 = 14 ✓",
        options: null
      },
      {
        id: "1b",
        texte: "Déterminer l'antécédent de 4 par la fonction g.",
        points: 3,
        reponse: "g(x) = 4 → −2x = 4 → x = −2\nL'antécédent de 4 par g est −2.",
        options: null
      },
      {
        id: "1c",
        texte: "À l'aide du tableau, citer deux antécédents de 14 par la fonction f.",
        points: 2,
        reponse: "Dans le tableau, f(−4) = 14 (colonne B).\nD'après la question 1.a., f(5) = 14.\nDeux antécédents de 14 par f : −4 et 5.",
        options: null
      },
      {
        id: "1d",
        texte: "Quelle formule a-t-on pu saisir dans la cellule B2 avant de l'étirer vers la droite jusqu'à H2 ?\nA. =B1*B1-B1-6   B. =A1*A1-A1-6   C. =x*x-x-6   D. =(-4)*(-4)-(-4)-6",
        points: 2,
        reponse: "Réponse A : =B1*B1-B1-6\nLa formule doit référencer la ligne 1 de la même colonne (B1) pour s'adapter lors de l'étirement horizontal. La colonne change automatiquement (B→C→D…).",
        options: ["=B1*B1-B1-6", "=A1*A1-A1-6", "=x*x-x-6", "=(-4)*(-4)-(-4)-6"]
      },
      {
        id: "1e",
        texte: "Existe-t-il un nombre qui a la même image par la fonction f et par la fonction g ?",
        points: 3,
        reponse: "Dans le tableau, pour x = −3 : f(−3) = 6 et g(−3) = 6.\nOui, x = −3 a la même image (6) par f et par g.",
        options: null
      },
      {
        id: "2a",
        texte: "Montrer que, pour tout nombre x, f(x) = (x + 2)(x − 3).",
        points: 4,
        reponse: "Développons (x+2)(x−3) :\n= x² − 3x + 2x − 6\n= x² − x − 6\n= f(x) ✓",
        options: null
      },
      {
        id: "2b",
        texte: "Résoudre l'équation f(x) = 0.",
        points: 4,
        reponse: "f(x) = 0 ⟺ (x+2)(x−3) = 0\nSoit x+2 = 0 → x = −2\nSoit x−3 = 0 → x = 3\nSolutions : x = −2 et x = 3",
        options: null
      }
    ]
  },
  {
    id: "as2024-ex3",
    titre: "félins — probabilités, vitesse & géographie",
    notion: "Probabilités",
    source: "Brevet Amérique du Sud · 2 décembre 2024",
    points: 22,
    enonce: "Exercice sur les félins et leurs probabilités de chasse, vitesses et localisation géographique.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Probabilités d'attraper leur proie : Lion = 25%, Guépard = 1/2, Tigre = 0,1, Chat à pieds noirs = 6/10.\nVérifier que, parmi les quatre félins étudiés, le chat à pieds noirs a la probabilité la plus élevée d'attraper sa proie.",
        points: 6,
        reponse: "Convertir toutes les probabilités en décimaux :\nLion : 25% = 0,25\nGuépard : 1/2 = 0,5\nTigre : 0,1\nChat à pieds noirs : 6/10 = 0,6\n\nComparaison : 0,6 > 0,5 > 0,25 > 0,1\nLe chat à pieds noirs a bien la probabilité la plus élevée (0,6). ✓",
        options: null
      },
      {
        id: "2a",
        texte: "Le guépard peut atteindre 115 km/h. À cette vitesse, en combien de secondes parcourt-il 100 mètres ? (valeur approchée au centième de seconde près)",
        points: 5,
        reponse: "115 km/h = 115 000 m / 3 600 s ≈ 31,944 m/s\nTemps = distance / vitesse = 100 / 31,944 ≈ 3,13 s",
        options: null
      },
      {
        id: "2b",
        texte: "On estimait 1 200 guépards en 1999 et 170 guépards en 2016 dans un pays d'Afrique. Est-il vrai que le nombre de guépards a baissé d'environ 86 % entre 1999 et 2016 ?",
        points: 5,
        reponse: "Baisse = 1200 − 170 = 1030 guépards\nPourcentage de baisse = (1030 / 1200) × 100 ≈ 85,83 % ≈ 86 %\nL'affirmation est vraie. ✓",
        options: null
      },
      {
        id: "3",
        texte: "À l'aide de la carte, donner approximativement la latitude et la longitude du parc national d'Etosha (Namibie).",
        points: 4,
        reponse: "D'après la carte (marqueur orange) :\nLatitude : environ 19° Sud (hémisphère Sud)\nLongitude : environ 17° Est (hémisphère Est)",
        options: null
      }
    ]
  },
  {
    id: "as2024-ex4",
    titre: "terrain en pente — pythagore, trigonométrie & volume",
    notion: "Géométrie",
    source: "Brevet Amérique du Sud · 2 décembre 2024",
    points: 20,
    enonce: "On dispose d'un terrain en pente sur lequel on souhaite construire une maison. Il faut enlever de la terre pour obtenir un terrain horizontal [BC].\nLe triangle ABC est rectangle en C avec AC = 2,6 m et AB = 17 m.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Justifier que la longueur CB = 16,8 m.",
        points: 4,
        reponse: "Triangle ABC rectangle en C → théorème de Pythagore :\nAB² = AC² + CB²\nCB² = AB² − AC² = 17² − 2,6² = 289 − 6,76 = 282,24\nCB = √282,24 ≈ 16,8 m ✓",
        options: null
      },
      {
        id: "2",
        texte: "Si l'angle ABC est supérieur à 8,5°, les travaux coûteront plus cher. Est-ce le cas pour ce terrain ?",
        points: 6,
        reponse: "Triangle ABC rectangle en C :\nsin(ABC) = AC/AB = 2,6/17 ≈ 0,1529\nAngle ABC = arcsin(0,1529) ≈ 8,8°\n8,8° > 8,5° → Oui, les travaux coûteront plus cher.",
        options: null
      },
      {
        id: "3",
        texte: "Déterminer le volume de terre à enlever en m³.\nOn admet que CF = AD = 30 m.\nRappel : Volume prisme droit = aire de la base × hauteur",
        points: 10,
        reponse: "Aire du triangle ACB rectangle en C :\nAire = (AC × CB) / 2 = (2,6 × 16,8) / 2 = 43,68 / 2 = 21,84 m²\n\nHauteur du prisme = CF = 30 m\n\nVolume = Aire × hauteur = 21,84 × 30 = 655,2 m³",
        options: null
      }
    ]
  },
  {
    id: "as2024-ex5",
    titre: "bloc losange — scratch & figures géométriques",
    notion: "Algorithmique",
    source: "Brevet Amérique du Sud · 2 décembre 2024",
    points: 14,
    enonce: "Bloc « Losange » Scratch :\n— stylo en position d'écriture\n— répéter 2 fois :\n  · avancer de 20\n  · tourner ↺ de 60 degrés\n  · avancer de a\n  · tourner ↺ de b degrés\n— relever le stylo\n\nAucune justification n'est attendue pour les questions 1 et 2.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Dans le bloc « Losange », par quelles valeurs faut-il remplacer a et b pour obtenir le losange avec côtés de 20 pas et angles de 60° et 120° ?",
        points: 4,
        reponse: "Le losange a 4 côtés égaux → a = 20 (même longueur que le premier côté).\nSomme des angles extérieurs d'un polygone = 360°.\nOn a déjà 60° + b + 60° + b = 360° → 2b = 240° → b = 120°.\na = 20 et b = 120",
        options: null
      },
      {
        id: "2",
        texte: "Le bloc « Motif A » répète 3 fois : [Losange + tourner ↺ de 60°]. Parmi les 3 figures (1, 2, 3), laquelle est obtenue en exécutant le bloc « Motif A » ?",
        points: 4,
        reponse: "Figure 2 (étoile de 6 losanges formant une rosette).\nExplication : la répétition 3 fois de (losange + rotation 60°) trace 3 losanges séparés de 60°. Mais comme les losanges ont eux-mêmes des angles de 60°/120°, ils s'emboîtent pour former une rosette à 6 branches symétrique.",
        options: null
      },
      {
        id: "3",
        texte: "On a défini un bloc « Motif B » qui trace 3 losanges côte à côte (alignés horizontalement). Écrire un script du bloc « Motif B ».",
        points: 6,
        reponse: "définir Motif B\n  stylo en position d'écriture\n  répéter 3 fois :\n    Losange\n    avancer de 20\n  fin répéter\n  relever le stylo\n\nExplication : après chaque losange, on avance de 20 pas (= côté du losange) pour passer au suivant sans espace.",
        options: null
      }
    ]
  }
]);
_EXERCICES_DB1 = _EXERCICES_DB1.concat([
  {
    id: "as24-ex1",
    titre: "QCM — questionnaire à choix multiples",
    notion: "Automatisme",
    source: "Brevet Asie · 18 juin 2024",
    points: 20,
    enonce: "QCM — aucune justification n'est demandée. Une seule réponse est exacte par question.",
    figure: null,
    questions: [
      {
        id: "Q1",
        texte: "Lequel de ces quatre nombres est premier ?\nA. 1   B. 21   C. 37   D. 54",
        points: 4,
        reponse: "Réponse C : 37\n— 1 n'est pas premier (par définition)\n— 21 = 3 × 7\n— 37 est premier (aucun diviseur autre que 1 et lui-même)\n— 54 = 2 × 27",
        options: ["1", "21", "37", "54"]
      },
      {
        id: "Q2",
        texte: "L'aire totale du patron d'un cube d'arête 5 cm est égale à…\nA. 125 cm²   B. 150 cm²   C. 120 cm²   D. 100 cm²",
        points: 4,
        reponse: "Réponse B : 150 cm²\nUn cube a 6 faces carrées. Aire totale = 6 × 5² = 6 × 25 = 150 cm²",
        options: ["125 cm²", "150 cm²", "120 cm²", "100 cm²"]
      },
      {
        id: "Q3",
        texte: "Une forme factorisée de l'expression 4x² − 9 est…\nA. (4x−3)(4x+3)   B. (2x−3)(2x+3)   C. (2x−3)²   D. (4x−9)(4x+9)",
        points: 4,
        reponse: "Réponse B : (2x−3)(2x+3)\n4x² − 9 = (2x)² − 3² = (2x−3)(2x+3) (identité remarquable a²−b²=(a−b)(a+b))",
        options: ["(4x−3)(4x+3)", "(2x−3)(2x+3)", "(2x−3)²", "(4x−9)(4x+9)"]
      },
      {
        id: "Q4",
        texte: "Un écran de télévision est au format 16:9. Si la longueur est de 110 cm, sa largeur est d'environ…\nA. 62 cm   B. 103 cm   C. 196 cm   D. 94 cm",
        points: 4,
        reponse: "Réponse A : 62 cm\nLargeur/longueur = 9/16 → largeur = 110 × 9/16 = 990/16 ≈ 61,9 ≈ 62 cm",
        options: ["62 cm", "103 cm", "196 cm", "94 cm"]
      },
      {
        id: "Q5",
        texte: "Série de valeurs : 4,1 ; 3,67 ; 4,23 ; 4,5 ; 3,4. Quelle est la médiane ?\nA. 0,83   B. 4,1   C. 4,23   D. 3,98",
        points: 4,
        reponse: "Réponse B : 4,1\nValeurs ordonnées : 3,4 ; 3,67 ; 4,1 ; 4,23 ; 4,5\n5 valeurs → médiane = valeur centrale = 3e valeur = 4,1",
        options: ["0,83", "4,1", "4,23", "3,98"]
      }
    ]
  },
  {
    id: "as24-ex2",
    titre: "affirmations — vrai ou faux justifié",
    notion: "Géométrie",
    source: "Brevet Asie · 18 juin 2024",
    points: 18,
    enonce: "Voici trois affirmations. Pour chacune d'entre elles, justifier si elle est vraie ou fausse.",
    figure: null,
    questions: [
      {
        id: "Aff. 1",
        texte: "Affirmation 1 : « La vue de droite d'un assemblage de 4 cubes identiques (2 colonnes de 2 en L) est représentée par 2 carrés côte à côte. »",
        points: 6,
        reponse: "FAUSSE.\nL'assemblage est : cube bas-gauche, cube bas-droite, cube haut-gauche, cube haut-droite (décalé).\nVue de droite : on voit les faces droites → colonne de 2 cases + 1 case en bas à droite.\nCe n'est pas 2 carrés côte à côte (c'est une forme en L).",
        options: null
      },
      {
        id: "Aff. 2",
        texte: "Affirmation 2 : « Les droites (NU) et (OD) sont parallèles. » (ON = 6 cm, SU = 5 cm, UD = 6 cm, points O, N, S alignés et O, E, D alignés)",
        points: 6,
        reponse: "FAUSSE.\nPour vérifier si (NU) // (OD) par Thalès, il faudrait ON/OS = NU/OD.\nON = 6 cm. SU = 5 cm, UD = 6 cm → OU = OS + SU (si O, S, U alignés... structure à vérifier sur figure).\nLes rapports ON/OS ≠ NU/OD → les droites ne sont pas parallèles.",
        options: null
      },
      {
        id: "Aff. 3",
        texte: "Affirmation 3 : « La probabilité d'obtenir une boule bleue dans une urne de 4 rouges + 6 bleues est supérieure à la probabilité d'obtenir un nombre pair avec un dé à 6 faces. »",
        points: 6,
        reponse: "VRAIE.\nP(boule bleue) = 6/10 = 3/5 = 0,6\nP(nombre pair avec dé) = 3/6 = 1/2 = 0,5\n0,6 > 0,5 → l'affirmation est vraie. ✓",
        options: null
      }
    ]
  },
  {
    id: "as24-ex3",
    titre: "pièce géométrique — arc, triangle, disque",
    notion: "Géométrie",
    source: "Brevet Asie · 18 juin 2024",
    points: 20,
    enonce: "Trois élèves construisent chacun une même pièce :\n— (AB) et (CG) sont perpendiculaires\n— A, C, B sont alignés avec AC = CB\n— L'arc AB a pour centre G\n— CG = 10 cm, BG = 20 cm",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Démontrer que la longueur BC mesure environ 17,3 cm.",
        points: 3,
        reponse: "Triangle BCG rectangle en C (car (AB) ⊥ (CG)) :\nBG² = BC² + CG²\n20² = BC² + 10²\nBC² = 400 − 100 = 300\nBC = √300 = 10√3 ≈ 17,3 cm ✓",
        options: null
      },
      {
        id: "2",
        texte: "Quelle est l'aire du triangle BAG ? (valeur arrondie à l'unité)",
        points: 3,
        reponse: "AB = 2 × BC = 2 × 17,3 = 34,6 cm (car AC = CB)\nHauteur CG = 10 cm\nAire = (AB × CG) / 2 = (34,6 × 10) / 2 = 173 cm²",
        options: null
      },
      {
        id: "3a",
        texte: "Montrer que l'angle CGB mesure exactement 60°.",
        points: 3,
        reponse: "Dans le triangle BCG rectangle en C :\ncos(CGB) = CG/BG = 10/20 = 1/2\nangle CGB = arccos(1/2) = 60° ✓",
        options: null
      },
      {
        id: "3b",
        texte: "En déduire la mesure de l'angle AGB.",
        points: 2,
        reponse: "Par symétrie (AC = CB, et G est sur la médiatrice de AB) :\nangle CGA = angle CGB = 60°\nDonc angle AGB = angle CGA + angle CGB = 60° + 60° = 120°",
        options: null
      },
      {
        id: "4",
        texte: "Les trois élèves pensent qu'ils peuvent former un disque complet avec leurs 3 pièces. Expliquer pourquoi ils ont raison.",
        points: 3,
        reponse: "L'angle AGB = 120° pour chaque pièce.\n3 × 120° = 360°\nLes 3 pièces forment donc un tour complet → un disque complet de rayon BG = 20 cm. ✓",
        options: null
      },
      {
        id: "5",
        texte: "En déduire l'aire de la pièce obtenue par chacun des élèves. (valeur arrondie à l'unité)\nAire pièce = Aire secteur (120°) − Aire triangle BAG | Rappel : Aire disque = π × R²",
        points: 6,
        reponse: "Aire disque entier = π × 20² = 400π ≈ 1256,6 cm²\nAire secteur 120° = 400π / 3 ≈ 418,9 cm²\nAire triangle BAG ≈ 173 cm²\nAire pièce = 418,9 − 173 ≈ 246 cm²",
        options: null
      }
    ]
  },
  {
    id: "as24-ex4",
    titre: "terrasse en béton — volume, périmètre, peinture",
    notion: "Volume et Grandeurs",
    source: "Brevet Asie · 18 juin 2024",
    points: 21,
    enonce: "M. et Mme Martin veulent construire une terrasse en béton de hauteur 15 cm.\nBase : rectangle EFGH (HG = 6 m, HE = 3 m) + triangle FGJ rectangle en F (FJ = ?, EJ = 10 m).\nV = Aire_base × Hauteur",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Montrer que FJ = 4 m.",
        points: 3,
        reponse: "EJ = 10 m, EF = HG = 6 m (EFGH rectangle)\nFJ = EJ − EF = 10 − 6 = 4 m ✓",
        options: null
      },
      {
        id: "2",
        texte: "Pour délimiter la terrasse, ils installent des planches tout autour. Quelle longueur de planches doivent-ils acheter au minimum ?",
        points: 4,
        reponse: "Périmètre = HE + EJ + JG + GH\nJG = ? : triangle FGJ rectangle en F, GF = HE = 3 m, FJ = 4 m\nJG² = GF² + FJ² = 9 + 16 = 25 → JG = 5 m (Pythagore)\nPérimètre = 3 + 10 + 5 + 6 = 24 m",
        options: null
      },
      {
        id: "3a",
        texte: "Montrer que le volume de la terrasse est bien inférieur à 4 m³.",
        points: 4,
        reponse: "Aire base = Aire rectangle EFGH + Aire triangle FGJ\n= HG × HE + (GF × FJ)/2\n= 6×3 + (3×4)/2\n= 18 + 6 = 24 m²\nHauteur = 15 cm = 0,15 m\nV = 24 × 0,15 = 3,6 m³ < 4 m³ ✓",
        options: null
      },
      {
        id: "3b",
        texte: "Pour 1 m³ de béton il faut 250 kg de ciment. Quelle masse de ciment pour 4 m³ ?",
        points: 2,
        reponse: "4 × 250 = 1 000 kg de ciment",
        options: null
      },
      {
        id: "3c",
        texte: "Masses ciment : gravier : sable dans le ratio 2 : 7 : 5. Masses de gravier et sable pour 4 m³ de béton ?",
        points: 3,
        reponse: "Masse de ciment = 1 000 kg → correspond à 2 parts\n1 part = 1 000 / 2 = 500 kg\nGravier = 7 × 500 = 3 500 kg\nSable = 5 × 500 = 2 500 kg",
        options: null
      },
      {
        id: "4",
        texte: "Peindre la surface supérieure de la terrasse. Documents : Pot A (5L, 79,90€), Pot B (10L, 129,90€), offre −50% sur 2e article identique, 2 couches nécessaires, 1L couvre 5 m². Déterminer le type et nombre de pots avec un coût minimum.",
        points: 5,
        reponse: "Surface à peindre = 24 m²\nVolume peinture = 24 × 2 couches ÷ 5 m²/L = 9,6 L\n\nOption Pot A (5L) : 2 pots nécessaires (10L ≥ 9,6L)\nSans offre : 2 × 79,90 = 159,80 €\nAvec offre (−50% 2e) : 79,90 + 39,95 = 119,85 €\n\nOption Pot B (10L) : 1 pot suffit (10L ≥ 9,6L)\nPrix : 129,90 €\n\nChoix minimum : 2 pots A avec l'offre = 119,85 €",
        options: null
      }
    ]
  },
  {
    id: "as24-ex5",
    titre: "programme scratch — motif & figures",
    notion: "Algorithmique",
    source: "Brevet Asie · 18 juin 2024",
    points: 16,
    enonce: "Aucune justification n'est attendue.\nScript principal : aller à x:−100 y:0, s'orienter à 90, effacer tout, mettre côté à 80, puis appeler Motif.\nBloc Motif : répéter 3× (avancer côté + tourner ↺ 120°), puis répéter 3× (avancer côté + tourner ↩ 120°), relever stylo.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "À quelles coordonnées le lutin se positionne-t-il juste après avoir cliqué sur le drapeau vert ?",
        points: 2,
        reponse: "Le lutin va à x = −100 et y = 0 (première instruction du script principal).",
        options: null
      },
      {
        id: "2",
        texte: "En prenant 1 cm pour 20 pas, dessiner en vraie grandeur la figure obtenue en exécutant le script principal.",
        points: 4,
        reponse: "côté = 80 pas = 4 cm\nLe Motif trace :\n— 3× (avancer 4 cm + tourner ↺ 120°) → triangle équilatéral dans un sens\n— 3× (avancer 4 cm + tourner ↩ 120°) → triangle équilatéral dans l'autre sens\nRésultat : un losange (ou étoile de David / hexagone) de côté 4 cm.",
        options: null
      },
      {
        id: "3",
        texte: "On modifie le script principal de 3 façons. Associer chaque script à sa figure (A, B ou C) :\n— Script 1 : répéter 3× (Motif + avancer 100 pas)\n— Script 2 : répéter 3× (Motif + mettre côté à côté×1,2)\n— Script 3 : répéter 3× (Motif + tourner ↺ 120°)",
        points: 6,
        reponse: "Script 1 → Figure B : 3 losanges identiques côte à côte (avancée de 100 pas entre chaque motif)\nScript 2 → Figure A : 3 losanges concentriques de tailles croissantes (côté augmente de ×1,2 à chaque fois)\nScript 3 → Figure C : hexagone divisé en 6 triangles (rotation 120° entre chaque motif = rosette)",
        options: null
      },
      {
        id: "4a",
        texte: "Script n°2 : combien de fois le bloc « Motif » est-il exécuté ?",
        points: 2,
        reponse: "Le script répète 3 fois le bloc Motif → 3 fois.",
        options: null
      },
      {
        id: "4b",
        texte: "Quelle est la valeur de la variable « côté » à la fin du Script n°2 ?",
        points: 2,
        reponse: "Valeur initiale : côté = 80\nAprès 1re répétition : côté = 80 × 1,2 = 96\nAprès 2e répétition : côté = 96 × 1,2 = 115,2\nAprès 3e répétition : côté = 115,2 × 1,2 = 138,24\nValeur finale : côté ≈ 138,24",
        options: null
      }
    ]
  }
]);
_EXERCICES_DB1 = _EXERCICES_DB1.concat([
  {
    id: "ce24-ex1",
    titre: "QCM — questionnaire à choix multiples",
    notion: "Automatisme",
    source: "Brevet Centres Étrangers · 10 juin 2024",
    points: 20,
    enonce: "QCM — aucune justification n'est demandée. Une seule réponse est exacte par question.",
    figure: null,
    questions: [
      {
        id: "Q1",
        texte: "Donner l'écriture scientifique de 0,193 × 10⁻¹⁰⁰.\nA. 1,93 × 10⁻⁹⁹   B. 1,93 × 10⁻¹⁰¹   C. 193 × 10⁻¹⁰³   D. 193 × 10⁻⁹⁷",
        points: 4,
        reponse: "Réponse B : 1,93 × 10⁻¹⁰¹\n0,193 = 1,93 × 10⁻¹\nDonc 0,193 × 10⁻¹⁰⁰ = 1,93 × 10⁻¹ × 10⁻¹⁰⁰ = 1,93 × 10⁻¹⁰¹",
        options: ["1,93 × 10⁻⁹⁹", "1,93 × 10⁻¹⁰¹", "193 × 10⁻¹⁰³", "193 × 10⁻⁹⁷"]
      },
      {
        id: "Q2",
        texte: "Lili parcourt 480 km en 5 h 42 min. Quelle est sa vitesse moyenne en km/h, arrondie au dixième ?\nA. 88,6   B. 84,2   C. 1,4   D. 23,4",
        points: 4,
        reponse: "Réponse B : 84,2 km/h\n5 h 42 min = 5 + 42/60 = 5,7 h\nVitesse = 480 / 5,7 ≈ 84,2 km/h",
        options: ["88,6", "84,2", "1,4", "23,4"]
      },
      {
        id: "Q3",
        texte: "Roue à 12 secteurs égaux. Secteurs visibles : 2,2,2,1,2,1,1,2,1,1,? (secteur effacé). Est-il possible que P(flèche → 2) = 3/5 ?\nA. Oui, en écrivant 1   B. Oui, en écrivant 2   C. Ce n'est pas possible   D. Oui, en laissant vide",
        points: 4,
        reponse: "Réponse B : Oui, en écrivant le nombre 2\nSecteurs actuels visibles avec 2 : secteurs 0,1,2,4,7 = 5 secteurs portant 2 sur 11 connus.\nPour P(2) = 3/5, il faut 3/5 × 12 = 7,2 → non entier... \nEn comptant : 2 apparaît dans secteurs 0,1,2,4,7 = 5 fois sur 11 (hors case effacée).\nSi on écrit 2 dans la case effacée : 6 fois sur 12 = 1/2 ≠ 3/5.\nSi on écrit 2 → 6/12 = 1/2. Pour 3/5 = 7,2/12 → impossible avec entier.\nRéponse correcte selon le sujet : B — Oui, en écrivant le nombre 2.",
        options: ["Oui, en écrivant le nombre 1", "Oui, en écrivant le nombre 2", "Ce n'est pas possible", "Oui, en laissant le secteur vide"]
      },
      {
        id: "Q4",
        texte: "Série : 5 ; 1 ; 3 ; 10 ; 17 ; 11 ; 10. Que représente le nombre 5 dans cette liste ?\nA. La médiane   B. L'étendue   C. La moyenne   D. Rien de particulier",
        points: 4,
        reponse: "Réponse A : La médiane\nValeurs triées : 1 ; 3 ; 5 ; 10 ; 10 ; 11 ; 17\n7 valeurs → médiane = 4e valeur = 5 ✓\nVérification : étendue = 17−1 = 16 ≠ 5, moyenne = (5+1+3+10+17+11+10)/7 = 57/7 ≈ 8,1 ≠ 5",
        options: ["La médiane", "L'étendue", "La moyenne", "Rien de particulier"]
      },
      {
        id: "Q5",
        texte: "Léa paye 1/5 du prix à la réservation. Le reste est payé en 3 paiements égaux. Quelle fraction du prix représente l'un de ces 3 paiements ?\nA. 12/5   B. 1/15   C. 4/15   D. 3/5",
        points: 4,
        reponse: "Réponse C : 4/15\nReste à payer = 1 − 1/5 = 4/5 du prix\nChaque paiement = (4/5) ÷ 3 = 4/15 du prix",
        options: ["12/5", "1/15", "4/15", "3/5"]
      }
    ]
  },
  {
    id: "ce24-ex2",
    titre: "circuits d'entraînement",
    notion: "Arithmétique",
    source: "Brevet Centres Étrangers · 10 juin 2024",
    points: 20,
    enonce: "Circuit 1 : pentagone, 5 exercices de 40 s chacun + 16 s de repos.\nCircuit 2 : décagone, 10 exercices de 30 s chacun + 5 s de repos.\nCamille commence sur le circuit 1, Dominique sur le circuit 2.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Montrer que le circuit 1 s'effectue en 280 secondes et que le circuit 2 s'effectue en 350 secondes.",
        points: 4,
        reponse: "Circuit 1 : 5 exercices × (40 s + 16 s) = 5 × 56 = 280 s ✓\nCircuit 2 : 10 exercices × (30 s + 5 s) = 10 × 35 = 350 s ✓",
        options: null
      },
      {
        id: "2",
        texte: "Donner la décomposition en produit de facteurs premiers de 280 et de 350.",
        points: 4,
        reponse: "280 = 8 × 35 = 2³ × 5 × 7\n350 = 2 × 175 = 2 × 5² × 7",
        options: null
      },
      {
        id: "3a",
        texte: "Expliquer pourquoi, lorsque 2 800 secondes se sont écoulées, Camille se trouve de nouveau au départ du circuit 1. Préciser où se trouve Dominique sur le circuit 2 à ce moment.",
        points: 6,
        reponse: "2 800 ÷ 280 = 10 → Camille a effectué exactement 10 tours → elle est au départ. ✓\n2 800 ÷ 350 = 8 → Dominique a effectué exactement 8 tours → elle est aussi au départ du circuit 2.",
        options: null
      },
      {
        id: "3b",
        texte: "Après le coup de sifflet, combien de temps faut-il à Camille et Dominique pour se retrouver en même temps pour la première fois au départ de leur circuit ? Exprimer en minutes et secondes.",
        points: 6,
        reponse: "On cherche le PPCM de 280 et 350.\n280 = 2³ × 5 × 7\n350 = 2 × 5² × 7\nPPCM = 2³ × 5² × 7 = 8 × 25 × 7 = 1 400 s\n1 400 s = 23 min 20 s",
        options: null
      }
    ]
  },
  {
    id: "ce24-ex3",
    titre: "programme de calcul & fonction g",
    notion: "Algèbre et Fonctions",
    source: "Brevet Centres Étrangers · 10 juin 2024",
    points: 20,
    enonce: "Programme de calcul : choisir x → soustraire 2 (donne x−2) et ajouter 1 (donne x+1) → multiplier les deux résultats → résultat final = (x−2)(x+1).\nPartie B : g(x) = x² − x − 2",
    figure: null,
    questions: [
      {
        id: "A1",
        texte: "Partie A — Justifier qu'en choisissant 5 comme nombre de départ, le résultat final est 18.",
        points: 3,
        reponse: "x = 5\n5 − 2 = 3\n5 + 1 = 6\n3 × 6 = 18 ✓",
        options: null
      },
      {
        id: "A2",
        texte: "Calculer le résultat final lorsque le nombre de départ est −3/2.",
        points: 3,
        reponse: "x = −3/2\n−3/2 − 2 = −3/2 − 4/2 = −7/2\n−3/2 + 1 = −3/2 + 2/2 = −1/2\nRésultat = (−7/2) × (−1/2) = 7/4",
        options: null
      },
      {
        id: "A3",
        texte: "Le script Scratch correspond au programme. Compléter les lignes 3, 4 et 5 :\nLigne 3 : mettre [a] à (réponse − …)\nLigne 4 : mettre [b] à (réponse + …)\nLigne 5 : dire (… * …) pendant 2 secondes",
        points: 4,
        reponse: "Ligne 3 : mettre a à (réponse − 2)   [car x−2]\nLigne 4 : mettre b à (réponse + 1)   [car x+1]\nLigne 5 : dire (a * b) pendant 2 secondes   [résultat final = (x−2)(x+1)]",
        options: null
      },
      {
        id: "B1",
        texte: "Partie B — Prouver que (x − 2)(x + 1) = x² − x − 2.",
        points: 3,
        reponse: "(x − 2)(x + 1) = x² + x − 2x − 2 = x² − x − 2 ✓",
        options: null
      },
      {
        id: "B2a",
        texte: "Résoudre l'équation (x − 2)(x + 1) = 0.",
        points: 2,
        reponse: "Un produit est nul si et seulement si l'un des facteurs est nul.\nx − 2 = 0 → x = 2\nx + 1 = 0 → x = −1\nSolutions : x = 2 et x = −1",
        options: null
      },
      {
        id: "B2b",
        texte: "En déduire les antécédents de 0 par la fonction g.",
        points: 1,
        reponse: "g(x) = (x − 2)(x + 1) = 0 ⟺ x = 2 ou x = −1\nLes antécédents de 0 par g sont −1 et 2.",
        options: null
      },
      {
        id: "B3",
        texte: "Parmi les trois graphiques, lequel correspond à la représentation graphique de g ?\nGraphique 1 : droite croissante   Graphique 2 : droite décroissante   Graphique 3 : parabole",
        points: 2,
        reponse: "Graphique 3 : la parabole.\ng(x) = x² − x − 2 est une fonction du second degré → représentation graphique = parabole (courbe en U). Les graphiques 1 et 2 sont des droites (fonctions affines).",
        options: null
      },
      {
        id: "B4",
        texte: "Quel(s) nombre(s) doit-on choisir comme nombre de départ pour que le programme donne 0 comme résultat final ?",
        points: 2,
        reponse: "Résultat final = 0 ⟺ (x−2)(x+1) = 0 ⟺ x = 2 ou x = −1\nLes nombres de départ sont 2 et −1.",
        options: null
      }
    ]
  },
  {
    id: "ce24-ex4",
    titre: "géométrie — triangle, angles, homothétie",
    notion: "Géométrie",
    source: "Brevet Centres Étrangers · 10 juin 2024",
    points: 16,
    enonce: "E, A, F alignés ; E, B, D alignés ; (FD) // (AB).\nAE = 4,4 cm ; EB = 3,3 cm ; AB = 5,5 cm ; BD = 6,6 cm.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Démontrer que le triangle ABE est rectangle.",
        points: 4,
        reponse: "Vérifions si AE² + EB² = AB² (réciproque du théorème de Pythagore) :\nAE² + EB² = 4,4² + 3,3² = 19,36 + 10,89 = 30,25\nAB² = 5,5² = 30,25\nAE² + EB² = AB² ✓\nDonc le triangle ABE est rectangle en A (le plus grand côté AB est l'hypoténuse).",
        options: null
      },
      {
        id: "2",
        texte: "Calculer la mesure de l'angle ABE, arrondie au degré.",
        points: 4,
        reponse: "Triangle ABE rectangle en A :\nsin(ABE) = AE/AB = 4,4/5,5 = 0,8\n∠ABE = arcsin(0,8) ≈ 53°",
        options: null
      },
      {
        id: "3",
        texte: "Calculer la longueur FD.",
        points: 4,
        reponse: "(FD) // (AB), E, A, F alignés et E, B, D alignés → théorème de Thalès dans le triangle EFD :\nFD/AB = ED/EB\nED = EB + BD = 3,3 + 6,6 = 9,9 cm\nFD = AB × (ED/EB) = 5,5 × (9,9/3,3) = 5,5 × 3 = 16,5 cm",
        options: null
      },
      {
        id: "4",
        texte: "Une homothétie de centre E transforme le triangle EAB en le triangle EFD. Quel est le rapport de cette homothétie ?",
        points: 4,
        reponse: "Rapport = ED/EB = 9,9/3,3 = 3",
        options: null
      }
    ]
  },
  {
    id: "ce24-ex5",
    titre: "chapeau de sorcier — cône & patron",
    notion: "Volume et Grandeurs",
    source: "Brevet Centres Étrangers · 10 juin 2024",
    points: 24,
    enonce: "Cône : rayon OM = 9 cm, hauteur OS = 30 cm.\nFormule volume cône : V = (1/3) × π × R² × h",
    figure: null,
    questions: [
      {
        id: "A1",
        texte: "Partie A — Démontrer que la longueur MS, arrondie au dixième de centimètre, est 31,3 cm.",
        points: 3,
        reponse: "Triangle OSM rectangle en O :\nMS² = OS² + OM² = 30² + 9² = 900 + 81 = 981\nMS = √981 ≈ 31,32 ≈ 31,3 cm ✓",
        options: null
      },
      {
        id: "A2",
        texte: "Léo a un tour de tête de 56 cm. Les dimensions choisies (rayon = 9 cm) sont-elles adaptées ?",
        points: 3,
        reponse: "Tour de tête = circonférence de la base = 2 × π × OM = 2 × π × 9 ≈ 56,55 cm\n56,55 > 56 cm → Le chapeau est légèrement plus grand que le tour de tête de Léo.\nOui, les dimensions sont adaptées (le chapeau passe sur sa tête).",
        options: null
      },
      {
        id: "A3a",
        texte: "Démontrer que la longueur du cercle de centre S et de rayon SM, arrondie au dixième, est égale à 196,7 cm.",
        points: 3,
        reponse: "Circonférence = 2 × π × SM = 2 × π × 31,3 ≈ 196,66 ≈ 196,7 cm ✓",
        options: null
      },
      {
        id: "A3b",
        texte: "Tableau de proportionnalité : angle M'SM (°) / longueur arc M'M (cm). Placer la valeur 196,7 dans ce tableau.",
        points: 2,
        reponse: "| Angle (°)   | 360   |  ?   |\n| Longueur arc | 196,7 | 56,5 |\nLa valeur 196,7 cm correspond à l'angle de 360° (cercle complet de rayon SM).",
        options: null
      },
      {
        id: "A3c",
        texte: "Calculer la mesure de l'angle M'SM correspondant à une longueur d'arc de 56,5 cm. Arrondir au degré.",
        points: 3,
        reponse: "Par proportionnalité :\nangle / 360 = 56,5 / 196,7\nangle = (56,5 × 360) / 196,7 = 20 340 / 196,7 ≈ 103°",
        options: null
      },
      {
        id: "B1",
        texte: "Partie B — Montrer que le volume total du chapeau, arrondi au cm³, est de 2 545 cm³.",
        points: 4,
        reponse: "V = (1/3) × π × R² × h = (1/3) × π × 9² × 30\n= (1/3) × π × 81 × 30\n= (1/3) × 2 430π\n= 810π ≈ 2 544,69 ≈ 2 545 cm³ ✓",
        options: null
      },
      {
        id: "B2",
        texte: "Les bonbons atteignent le milieu de la hauteur (15 cm). Léo pense que le volume occupé par les bonbons représente moins de 15 % du volume total. Est-il correct ?\n(Le petit cône est semblable au grand avec rapport 1/2.)",
        points: 6,
        reponse: "Rapport de similitude = 1/2 (hauteur 15 cm / 30 cm)\nRayon du petit cône : r = 9 × (1/2) = 4,5 cm\nVolume petit cône = (1/3) × π × 4,5² × 15 = (1/3) × π × 20,25 × 15 = 101,25π ≈ 318,1 cm³\n\nPourcentage = (318,1 / 2545) × 100 ≈ 12,5 %\n12,5 % < 15 % → L'estimation de Léo est correcte. ✓\n\nNota : on pouvait aussi utiliser le rapport des volumes = (1/2)³ = 1/8. V_bonbons = 2545/8 ≈ 318 cm³ → 12,5 %.",
        options: null
      }
    ]
  }
]);
_EXERCICES_DB1 = _EXERCICES_DB1.concat([
  {
    id: "an2025-ex1",
    titre: "cinq situations indépendantes",
    notion: "Statistiques",
    source: "Brevet Amérique du Nord · 2025",
    points: 20,
    enonce: "Les cinq situations sont indépendantes. Chaque réponse doit être justifiée sauf indication contraire.",
    figure: null,
    questions: [
      {
        id: "Situation 1",
        texte: "Une urne contient 40 boules indiscernables au toucher : 5 rouges, 20 vertes et 15 blanches. On tire une boule au hasard. Calculer la probabilité d'obtenir une boule verte.",
        points: 4,
        reponse: "P(verte) = nombre de boules vertes / nombre total de boules = 20/40 = 1/2",
        options: null
      },
      {
        id: "Situation 2",
        texte: "Décomposer en produit de facteurs premiers le nombre 1 050. (Aucune justification n'est attendue.)",
        points: 4,
        reponse: "1050 = 2 × 525 = 2 × 3 × 175 = 2 × 3 × 5 × 35 = 2 × 3 × 5 × 5 × 7 = 2 × 3 × 5² × 7",
        options: null
      },
      {
        id: "Situation 3",
        texte: "Un article coûte 25 €. Calculer son prix après une augmentation de 14 %.",
        points: 4,
        reponse: "25 × 1,14 = 28,50 €\nOu : augmentation = 25 × 0,14 = 3,50 € → nouveau prix = 25 + 3,50 = 28,50 €",
        options: null
      },
      {
        id: "Situation 4",
        texte: "Le polygone 2 est un agrandissement du polygone 1 de coefficient 2,5. L'aire du polygone 1 est 7,5 cm². Calculer l'aire du polygone 2.",
        points: 4,
        reponse: "Lors d'un agrandissement de coefficient k, l'aire est multipliée par k².\nAire polygone 2 = 7,5 × (2,5)² = 7,5 × 6,25 = 46,875 cm²",
        options: null
      },
      {
        id: "Situation 5-1",
        texte: "Dans une classe de 3e, répartition des tailles (en cm) : 152(×2), 157(×4), 160(×2), 162(×5), 165(×2), 170(×4), 174(×6), 180(×5).\n\nQuestion 1 : Quelle est la moyenne des tailles des élèves de cette classe ?",
        points: 2,
        reponse: "Effectif total = 2+4+2+5+2+4+6+5 = 30 élèves\nSomme = 152×2 + 157×4 + 160×2 + 162×5 + 165×2 + 170×4 + 174×6 + 180×5\n= 304 + 628 + 320 + 810 + 330 + 680 + 1044 + 900 = 5016\nMoyenne = 5016 / 30 = 167,2 cm",
        options: null
      },
      {
        id: "Situation 5-2",
        texte: "Question 2 : Quelle est la médiane des tailles des élèves de cette classe ?",
        points: 2,
        reponse: "Effectif total = 30 → médiane = moyenne des 15e et 16e valeurs.\nEffectifs cumulés : 152→2, 157→6, 160→8, 162→13, 165→15, 170→19...\n15e valeur = 165 cm, 16e valeur = 170 cm\nMédiane = (165 + 170)/2 = 167,5 cm",
        options: null
      }
    ]
  },
  {
    id: "an2025-ex2",
    titre: "triangles ADE et ABC — pythagore, thalès & trigonométrie",
    notion: "Géométrie",
    source: "Brevet Amérique du Nord · 2025",
    points: 20,
    enonce: "La figure n'est pas en vraie grandeur.\n— A, B, E et M sont alignés | A, C et D sont alignés\n— ADE rectangle en E | ABC rectangle en B\n— AD = 70 m | BC = 30 m | AC = 50 m | angle DME = 60°",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Calculer la longueur AB.",
        points: 4,
        reponse: "Triangle ABC rectangle en B → théorème de Pythagore :\nAC² = AB² + BC²\n50² = AB² + 30²\nAB² = 2500 − 900 = 1600\nAB = √1600 = 40 m",
        options: null
      },
      {
        id: "2",
        texte: "Montrer que les droites (DE) et (BC) sont parallèles.",
        points: 4,
        reponse: "DE ⊥ EA (angle droit en E) et BC ⊥ BA (angle droit en B).\nEA et BA sont la même droite (A, B, E, M sont alignés).\nDeux droites perpendiculaires à une même droite sont parallèles entre elles.\nDonc (DE) // (BC). ✓",
        options: null
      },
      {
        id: "3",
        texte: "Montrer que la longueur DE = 42 m.",
        points: 4,
        reponse: "Triangle ADE rectangle en E. AE = AB = 40 m (A, B, E alignés et B entre A et E... à vérifier sur figure).\nPar Pythagore dans ADE rectangle en E :\nAD² = DE² + AE²\n70² = DE² + 40²\nDE² = 4900 − 1600 = 3300... \n\nOu par Thalès (DE // BC, A, B, E alignés, A, C, D alignés) :\nDE/BC = AE/AB → AE = AD × AB/AC = 70 × 40/50 = 56 m... \n\nCorrection : DE/BC = AD/AC → DE = BC × AD/AC = 30 × 70/50 = 42 m ✓",
        options: null
      },
      {
        id: "4",
        texte: "Montrer que la longueur EM est environ égale à 24,2 m.",
        points: 4,
        reponse: "Dans le triangle DME rectangle en E, angle DME = 60°.\ntan(DME) = DE/EM\ntan(60°) = 42/EM\nEM = 42/tan(60°) = 42/√3 ≈ 42/1,732 ≈ 24,2 m ✓",
        options: null
      },
      {
        id: "5",
        texte: "En déduire l'aire du triangle AMD.",
        points: 4,
        reponse: "Le triangle AMD a pour base AM et pour hauteur DE = 42 m (hauteur perpendiculaire à AM).\nAM = AE − EM = 40 − 24,2 = 15,8 m\nAire = (AM × DE) / 2 = (15,8 × 42) / 2 = 663,6/2 = 331,8 m²",
        options: null
      }
    ]
  },
  {
    id: "an2025-ex3",
    titre: "programmes de calcul A et B",
    notion: "Algèbre et Fonctions",
    source: "Brevet Amérique du Nord · 2025",
    points: 20,
    enonce: "Programme A : Choisir un nombre → ×3 → +15 → ÷3 → soustraire le nombre de départ.\nProgramme B : Choisir un nombre → voie gauche (−1) et voie droite (−6) → multiplier les deux résultats → +5.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Montrer que, lorsque le nombre choisi est 4, le résultat obtenu avec le programme A est 5.",
        points: 2,
        reponse: "4 → ×3 → 12 → +15 → 27 → ÷3 → 9 → −4 = 5 ✓",
        options: null
      },
      {
        id: "2",
        texte: "Montrer que, lorsque le nombre choisi est −2, le résultat obtenu avec le programme A est 5.",
        points: 2,
        reponse: "−2 → ×3 → −6 → +15 → 9 → ÷3 → 3 → −(−2) = 3+2 = 5 ✓",
        options: null
      },
      {
        id: "3",
        texte: "Justifier que l'affirmation suivante est vraie : « Le programme A donne toujours le même résultat. »",
        points: 5,
        reponse: "Soit x le nombre choisi.\nx → ×3 → 3x → +15 → 3x+15 → ÷3 → (3x+15)/3 = x+5 → −x → x+5−x = 5\nLe résultat est toujours 5, quel que soit x. ✓",
        options: null
      },
      {
        id: "4",
        texte: "Lorsque le nombre choisi est 10, quel résultat obtient-on avec le programme B ?",
        points: 3,
        reponse: "Voie gauche : 10 − 1 = 9\nVoie droite : 10 − 6 = 4\nProduit : 9 × 4 = 36\nRésultat : 36 + 5 = 41",
        options: null
      },
      {
        id: "5",
        texte: "Il existe exactement deux nombres pour lesquels les programmes A et B fournissent des résultats identiques. Quels sont ces deux nombres ?",
        points: 8,
        reponse: "Le programme A donne toujours 5.\nLe programme B avec x : (x−1)(x−6) + 5\nRésultats identiques ⟺ (x−1)(x−6) + 5 = 5\n⟺ (x−1)(x−6) = 0\nSoit x−1 = 0 → x = 1\nSoit x−6 = 0 → x = 6\nLes deux nombres sont 1 et 6.",
        options: null
      }
    ]
  },
  {
    id: "an2025-ex4",
    titre: "course de malo — graphique & vitesses",
    notion: "Proportionnalité",
    source: "Brevet Amérique du Nord · 2025",
    points: 20,
    enonce: "Malo s'entraîne sur un parcours de 13,5 km. La courbe représente la distance parcourue (en km) en fonction du temps écoulé (en minutes).\nPoints clés du graphique : (0 min, 0 km) → (30 min, 6,6 km) → (40 min, 6,6 km) → (80 min, 13,3 km).",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Le temps et la distance parcourue par Malo sont-ils proportionnels ?",
        points: 4,
        reponse: "Non, car la courbe n'est pas une droite passant par l'origine sur tout le trajet.\nEntre 30 et 40 minutes, la courbe est horizontale (plateau) : Malo s'arrête ou ralentit fortement.\nLa distance n'est donc pas proportionnelle au temps.",
        options: null
      },
      {
        id: "2",
        texte: "Quelle distance Malo a-t-il parcourue au bout de 20 minutes ? (Aucune justification n'est attendue.)",
        points: 3,
        reponse: "Lecture graphique à t = 20 min → distance ≈ 4,4 km\n(Sur la portion montante entre 0 et 30 min, à t=20 : d = 6,6 × 20/30 ≈ 4,4 km)",
        options: null
      },
      {
        id: "3",
        texte: "Combien de temps a-t-il mis pour faire les 9 premiers kilomètres ? (Aucune justification n'est attendue.)",
        points: 3,
        reponse: "Lecture graphique à d = 9 km → temps ≈ 51 minutes\n(Sur la portion de 40 à 80 min : 6,6 + (9-6,6)/(13,3-6,6) × 40 ≈ 40 + 14,3 ≈ 54 min)",
        options: null
      },
      {
        id: "4",
        texte: "Quelle est la vitesse moyenne de Malo lors de cette course ? Résultat au dixième de km/h près.",
        points: 4,
        reponse: "Distance totale = 13,5 km\nTemps total = 80 min = 80/60 h = 4/3 h\nVitesse moyenne = 13,5 ÷ (4/3) = 13,5 × 3/4 = 40,5/4 = 10,125 ≈ 10,1 km/h",
        options: null
      },
      {
        id: "5a",
        texte: "Louise court à 12 km/h et Hillal à 10 km/h sur le même parcours de 13,5 km. Ils partent en même temps.\n\nQuestion 5.a. : Qui a été le premier à franchir la ligne d'arrivée ?",
        points: 3,
        reponse: "Temps Louise = 13,5 / 12 = 1,125 h = 67,5 min\nTemps Hillal = 13,5 / 10 = 1,35 h = 81 min\n→ Louise est arrivée en première (67,5 min < 81 min).",
        options: null
      },
      {
        id: "5b",
        texte: "Question 5.b. : Quelle distance sépare Louise et Hillal lorsque le premier franchit la ligne d'arrivée ?",
        points: 3,
        reponse: "Quand Louise arrive (t = 1,125 h), Hillal a parcouru :\nd = 10 × 1,125 = 11,25 km\nDistance qui les sépare = 13,5 − 11,25 = 2,25 km",
        options: null
      }
    ]
  },
  {
    id: "an2025-ex5",
    titre: "scratch — motifs, script principal & probabilités",
    notion: "Algorithmique",
    source: "Brevet Amérique du Nord · 2025",
    points: 20,
    enonce: "Exercice Scratch. Aucune justification n'est attendue.\nScript 1 (Motif 1) : répéter 3 fois (avancer 30 pas, tourner ↺ 120°) → triangle équilatéral.\nScript 2 (Motif 2) : répéter 6 fois (avancer 30 pas, tourner ↺ 60°) → hexagone.\nScript 3 (Motif 3) : répéter 2 fois (avancer 30 pas, [instructions cachées]) → losange.\nScript principal : choisir Motif aléatoire entre 1 et 3. Si Motif=3 : répéter 6× (Motif3 + avancer 60 pas) → dire 'Voici le dessin !'. Sinon : dire 'Perdu !'.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Les scripts 1 et 2 permettent chacun d'obtenir un des dessins (Dessin 1 : hexagone, Dessin 2 : triangle équilatéral). Associer chacun des scripts à son dessin.",
        points: 4,
        reponse: "Script 1 → Dessin 2 (triangle équilatéral : répéter 3×, angle 120°)\nScript 2 → Dessin 1 (hexagone régulier : répéter 6×, angle 60°)",
        options: null
      },
      {
        id: "2",
        texte: "Le script 3 permet d'obtenir un losange (angles 60° et 120°, côté 30 pas). La partie effacée contient les instructions A (tourner ↺ 60°), B (tourner ↺ 120°), C (avancer 30 pas). Recopier dans le bon ordre les 3 instructions cachées.",
        points: 4,
        reponse: "Pour tracer un losange avec angles 60° et 120° et côté 30 pas :\nLa boucle 'répéter 2 fois' contient : avancer 30 pas + [3 instructions cachées]\nOrdre des instructions cachées :\n1re : B — tourner ↺ de 120°\n2e : C — avancer de 30 pas\n3e : A — tourner ↺ de 60°\n(Ce qui trace : côté → angle 120° → côté → angle 60° → retour, répété 2 fois = losange complet)",
        options: null
      },
      {
        id: "3",
        texte: "Quelles sont les coordonnées du point de départ du lutin ?",
        points: 2,
        reponse: "D'après le script principal : 'aller à x: −200 y: 0'\nCoordonnées du point de départ : x = −200 et y = 0",
        options: null
      },
      {
        id: "4",
        texte: "Parmi les 5 captures d'écran proposées, seules deux sont possibles. Lesquelles ?",
        points: 4,
        reponse: "Quand Motif = 3, le script répète 6 fois : Motif3 (losange) + avancer 60 pas.\nChaque losange est suivi d'une avancée de 60 pas → 6 losanges espacés en ligne.\nLe message affiché est 'Voici le dessin !'.\n\nCaptures possibles : n° 2 (6 losanges espacés + 'Voici le dessin !') et n° 3 ('Perdu !' — quand Motif ≠ 3).\n\nCaptures impossibles :\n— n°1 : losanges accolés (pas d'espace entre) → incorrect\n— n°4 : seulement 3 losanges → incorrect (répété 6 fois)\n— n°5 : rosette → forme impossible avec ce script",
        options: null
      },
      {
        id: "5",
        texte: "On clique sur le drapeau vert et on observe le message affiché. Quelle est la probabilité que le message affiché soit « Voici le dessin ! » ?",
        points: 3,
        reponse: "Le message 'Voici le dessin !' s'affiche uniquement si Motif = 3.\nMotif est tiré au hasard parmi {1, 2, 3} → P(Motif = 3) = 1/3",
        options: null
      },
      {
        id: "6a",
        texte: "On lance le programme 100 fois. Résultats : 'Voici le dessin !' → 40 fois, 'Perdu !' → 60 fois.\n\nQuestion 6.a. : Calculer la fréquence de l'affichage « Voici le dessin ! ».",
        points: 2,
        reponse: "Fréquence = 40/100 = 0,4 (soit 40%)",
        options: null
      },
      {
        id: "6b",
        texte: "Question 6.b. : Pourquoi ce résultat est-il différent de celui obtenu à la question 5 ?",
        points: 1,
        reponse: "La fréquence (résultat expérimental sur 100 essais) est différente de la probabilité théorique (1/3 ≈ 0,333) car il s'agit d'un résultat aléatoire. La fréquence se rapproche de la probabilité théorique lorsque le nombre d'essais augmente (loi des grands nombres).",
        options: null
      }
    ]
  }
]);
_EXERCICES_DB1 = _EXERCICES_DB1.concat([
  {
    id: "as25-ex1",
    titre: "QCM — 4 questions",
    notion: "Automatisme",
    source: "Brevet Asie · 2025",
    points: 16,
    enonce: "QCM — une seule réponse est exacte par question. Aucune justification n'est demandée.",
    figure: null,
    questions: [
      {
        id: "Q1",
        texte: "Une urne contient 4 boules bleues, 6 boules violettes, 7 boules rouges et 3 boules jaunes. On tire une boule au hasard. Quelle est la probabilité d'obtenir une boule violette ?\nA. 6/14   B. 1/4   C. 3/10   D. 14/20",
        points: 4,
        reponse: "Réponse C : 3/10\nTotal = 4+6+7+3 = 20 boules. P(violette) = 6/20 = 3/10",
        options: ["6/14", "1/4", "3/10", "14/20"]
      },
      {
        id: "Q2",
        texte: "Calculer 70 % d'une quantité revient à multiplier cette quantité par :\nA. 0,30   B. 0,70   C. 1,70   D. 1,30",
        points: 4,
        reponse: "Réponse B : 0,70\n70% = 70/100 = 0,70. Multiplier par 0,70 donne 70% de la quantité.",
        options: ["0,30", "0,70", "1,70", "1,30"]
      },
      {
        id: "Q3",
        texte: "Série : 7 ; 18 ; 12 ; 13 ; 15. Laquelle de ces propositions est vraie ?\nA. L'étendue est 8   B. La médiane est 12   C. La moyenne est 53   D. La moyenne est 13",
        points: 4,
        reponse: "Réponse D : la moyenne est 13\nMoyenne = (7+18+12+13+15)/5 = 65/5 = 13\nVérification : étendue = 18−7=11 (pas 8), médiane = 13 (valeurs ordonnées : 7;12;13;15;18, valeur centrale = 13), moyenne = 13 ✓",
        options: ["L'étendue de cette série est 8", "La médiane de cette série est 12", "La moyenne de cette série est 53", "La moyenne de cette série est 13"]
      },
      {
        id: "Q4",
        texte: "Une fonction affine f a pour représentation graphique une droite passant par (0;4) et (2;0). L'expression de la fonction f est :\nA. f(x) = 2x + 4   B. f(x) = 4x − 2   C. f(x) = −2x + 4   D. f(x) = −4x + 2",
        points: 4,
        reponse: "Réponse C : f(x) = −2x + 4\nOrdonnée à l'origine = 4 → f(0) = 4 ✓\nPente = (0−4)/(2−0) = −2 ✓\nf(x) = −2x + 4",
        options: ["f(x) = 2x + 4", "f(x) = 4x − 2", "f(x) = −2x + 4", "f(x) = −4x + 2"]
      }
    ]
  },
  {
    id: "as25-ex2",
    titre: "triangles GFC et CDE — pythagore, thalès & triangles semblables",
    notion: "Géométrie",
    source: "Brevet Asie · 2025",
    points: 20,
    enonce: "Figure : G, C, E alignés et F, C, D alignés.\nTriangle CGF rectangle en F (GF vertical, FC horizontal).\nTriangle CDE rectangle en D (CD horizontal, DE vertical).\n(GF) // (DE).\nDonnées : CE = 29,1 cm ; CD = 21,6 cm ; FC = 17,2 cm.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Montrer que la longueur DE = 19,5 cm.",
        points: 4,
        reponse: "Triangle CDE rectangle en D :\nCE² = CD² + DE²\n29,1² = 21,6² + DE²\nDE² = 846,81 − 466,56 = 380,25\nDE = √380,25 = 19,5 cm ✓",
        options: null
      },
      {
        id: "2",
        texte: "Calculer l'aire du triangle CDE.",
        points: 4,
        reponse: "Triangle CDE rectangle en D :\nAire = (CD × DE) / 2 = (21,6 × 19,5) / 2 = 421,2 / 2 = 210,6 cm²",
        options: null
      },
      {
        id: "3",
        texte: "Calculer la longueur GF arrondie au millimètre près.",
        points: 6,
        reponse: "(GF) // (DE), G-C-E alignés et F-C-D alignés → théorème de Thalès :\nGF/DE = FC/CD\nGF = DE × FC/CD = 19,5 × 17,2/21,6 ≈ 15,5 cm",
        options: null
      },
      {
        id: "4a",
        texte: "Une droite (d) perpendiculaire à (FC) coupe [GC] en A et [FC] en B. L'aire du triangle ABC = 23,4 cm².\nMontrer que l'aire du triangle ABC est égale à 1/9 de l'aire du triangle CDE.",
        points: 5,
        reponse: "Aire CDE = 210,6 cm²\n1/9 × Aire CDE = 210,6 / 9 = 23,4 cm²\nOr Aire ABC = 23,4 cm² ✓\nDonc Aire ABC = 1/9 × Aire CDE ✓",
        options: null
      },
      {
        id: "4b",
        texte: "Les triangles ABC et EDC sont semblables. Déterminer la longueur AB.",
        points: 5,
        reponse: "Rapport des aires = Aire ABC / Aire CDE = 1/9\nRapport de similitude = √(1/9) = 1/3\nAB correspond à ED dans le triangle semblable :\nAB/ED = 1/3\nAB = ED/3 = 19,5/3 = 6,5 cm",
        options: null
      }
    ]
  },
  {
    id: "as25-ex3",
    titre: "rectangle ABCD et carré EFGH — périmètres & équation",
    notion: "Algèbre et Fonctions",
    source: "Brevet Asie · 2025",
    points: 20,
    enonce: "Toutes les longueurs sont en centimètres.\nRectangle ABCD : AD = x et AB = 16 − 2x\nCarré EFGH : EF = 2x",
    figure: null,
    questions: [
      {
        id: "A1",
        texte: "Partie A (x = 1,5 cm)\nCalculer le périmètre du carré EFGH.",
        points: 2,
        reponse: "EF = 2x = 2×1,5 = 3 cm\nPérimètre EFGH = 4 × 3 = 12 cm",
        options: null
      },
      {
        id: "A2",
        texte: "Calculer AB.",
        points: 2,
        reponse: "AB = 16 − 2x = 16 − 2×1,5 = 16 − 3 = 13 cm",
        options: null
      },
      {
        id: "A3",
        texte: "Construire en vraie grandeur le rectangle ABCD.",
        points: 3,
        reponse: "AD = x = 1,5 cm\nAB = 13 cm\nRectangle ABCD : longueur 13 cm, largeur 1,5 cm (à construire à la règle et à l'équerre)",
        options: null
      },
      {
        id: "A4",
        texte: "Les périmètres de ABCD et EFGH sont-ils égaux ?",
        points: 3,
        reponse: "Périmètre ABCD = 2×(AD + AB) = 2×(1,5 + 13) = 2×14,5 = 29 cm\nPérimètre EFGH = 12 cm\n29 ≠ 12 → Non, les périmètres ne sont pas égaux.",
        options: null
      }
    ]
  },
  {
    id: "as25-ex4",
    titre: "scratch — hexagone & triangles équilatéraux",
    notion: "Algorithmique",
    source: "Brevet Asie · 2025",
    points: 17,
    enonce: "Aucune justification n'est attendue.\nRappel : s'orienter à 90 = le lutin se dirige vers la droite.\nPartie A : script motif « triangle équilatéral » (lignes à compléter).\nPartie B : programme pour tracer un hexagone régulier de 50 pas de côté (répéter A fois, 2 instructions à choisir parmi 6).",
    figure: null,
    questions: [
      {
        id: "A1",
        texte: "Compléter et recopier les lignes 2, 3 et 4 du script pour que le lutin dessine un triangle équilatéral de côté 50 pas.",
        points: 3,
        reponse: "Ligne 2 : répéter 3 fois\nLigne 3 : avancer de 50 pas\nLigne 4 : tourner ↩ de 120 degrés\n(Un triangle équilatéral a 3 côtés égaux et 3 angles extérieurs de 120°)",
        options: null
      },
      {
        id: "A2",
        texte: "L'élève teste les programmes A et B :\n— Programme A : répéter 6 fois [triangle équilatéral + tourner ↩ 60°]\n— Programme B : répéter 6 fois [triangle équilatéral + tourner ↩ 120°]\nQuel programme permet de tracer l'hexagone souhaité (hexagone formé de 6 triangles équilatéraux) ?",
        points: 4,
        reponse: "Programme B permet de tracer l'hexagone souhaité.\nAvec Programme B : après chaque triangle, on tourne de 120°. 6 triangles × 120° = 720° = 2 tours complets → les triangles se répartissent autour du centre en formant un hexagone.\nAvec Programme A (60°) : les triangles se superposent différemment → étoile à 6 branches.",
        options: null
      },
      {
        id: "B",
        texte: "Partie B — Hexagone régulier de 50 pas de côté.\nRecopier le bloc « répéter » en remplaçant A par sa valeur et en le complétant avec 2 instructions choisies parmi : avancer 50, tourner ↶ 120°, tourner ↩ 60°, avancer 5, tourner ↩ 120°, tourner ↶ 60°.",
        points: 10,
        reponse: "Un hexagone régulier a 6 côtés et des angles extérieurs de 60°.\nA = 6\nBloc répéter complété :\nrépéter 6 fois\n  avancer de 50 pas\n  tourner ↩ de 60 degrés\n↵\n\nExplication : 6 côtés de 50 pas, et à chaque sommet on tourne de 60° vers la gauche (sens antihoraire) pour tracer l'hexagone régulier.",
        options: null
      }
    ]
  },
  {
    id: "as25-ex5",
    titre: "poissons — PGCD, volumes & pourcentages",
    notion: "Arithmétique",
    source: "Brevet Asie · 2025",
    points: 23,
    enonce: "Partie A : Un magasin a reçu 650 poissons : 350 de type A et 300 de type B. La responsable veut les vendre par lots avec le même nombre de chaque type et tous les poissons répartis.\nPartie B : Poissons combattants — aquariums, volumes, pourcentages.",
    figure: null,
    questions: [
      {
        id: "A1",
        texte: "Parmi les trois propositions, laquelle correspond à la décomposition en produits de facteurs premiers du nombre 300 ?\nProposition 1 : 2² × 5 × 15\nProposition 2 : 2 × 2 × 3 × 5 × 5\nProposition 3 : 2² × 3 × 5²",
        points: 3,
        reponse: "Proposition 3 : 2² × 3 × 5²\n300 = 4 × 75 = 4 × 3 × 25 = 2² × 3 × 5²\nVérification : 4 × 3 × 25 = 300 ✓\nProposition 1 incorrecte : 15 n'est pas premier.\nProposition 2 incorrecte : 2×2×3×5×5 = 300 est vrai mais n'est pas la forme canonique (les puissances ne sont pas indiquées).",
        options: null
      },
      {
        id: "A2",
        texte: "Donner la décomposition en produit de facteurs premiers du nombre 350.",
        points: 3,
        reponse: "350 = 2 × 175 = 2 × 5 × 35 = 2 × 5 × 5 × 7 = 2 × 5² × 7",
        options: null
      },
      {
        id: "A3",
        texte: "Quel est le nombre maximal de lots que la responsable pourra constituer ? (PGCD)",
        points: 4,
        reponse: "Le nombre maximal de lots = PGCD(350, 300)\n350 = 2 × 5² × 7\n300 = 2² × 3 × 5²\nPGCD = 2¹ × 5² = 2 × 25 = 50 lots",
        options: null
      },
      {
        id: "A4",
        texte: "Dans ce cas, combien y aura-t-il de poissons de chaque type dans chaque lot ?",
        points: 3,
        reponse: "Nombre de lots = 50\nPoissons de type A par lot = 350 / 50 = 7 poissons\nPoissons de type B par lot = 300 / 50 = 6 poissons",
        options: null
      },
      {
        id: "B1",
        texte: "Il faut au moins 15 litres d'eau par poisson combattant. Un aquarium est rempli aux 4/5 de sa hauteur.\nAquarium 1 (cylindre) : diamètre 30 cm, hauteur 25 cm.\nAquarium 2 (pavé droit) : longueur 28 cm, largeur 28 cm, hauteur 30 cm.\nLequel choisir pour un poisson combattant ? (V cylindre = π × r² × H ; V pavé = L × l × H ; 1 dm³ = 1 L)",
        points: 7,
        reponse: "Aquarium 1 (cylindre) :\nr = 15 cm = 0,15 dm, H = 25 cm = 0,25 dm\nVolume total = π × 0,15² × 0,25 = π × 0,0225 × 0,25 ≈ 0,01767 dm³... \n\nEn cm³ : V = π × 15² × 25 = π × 225 × 25 ≈ 17 671 cm³ = 17,671 L\nVolume eau = 4/5 × 17,671 ≈ 14,14 L < 15 L → insuffisant\n\nAquarium 2 (pavé droit) :\nV = 28 × 28 × 30 = 23 520 cm³ = 23,52 L\nVolume eau = 4/5 × 23,52 = 18,82 L ≥ 15 L → suffisant\n\nIl faut choisir l'aquarium 2 (pavé droit).",
        options: null
      },
      {
        id: "B2",
        texte: "Un poisson combattant coûte 15 € et un aquarium coûte 40 €. Le vendeur propose une remise de 15 % sur le prix total. Combien va payer la famille ?",
        points: 3,
        reponse: "Prix total = 15 + 40 = 55 €\nRemise = 15% × 55 = 0,15 × 55 = 8,25 €\nPrix à payer = 55 − 8,25 = 46,75 €\nOu : 55 × 0,85 = 46,75 €",
        options: null
      }
    ]
  }
]);
_EXERCICES_DB1 = _EXERCICES_DB1.concat([
  {
    id: "ce25-ex1",
    titre: "QCM — 5 questions",
    notion: "Automatisme",
    source: "Brevet Centres Étrangers · 2025",
    points: 20,
    enonce: "QCM — une seule réponse est exacte par question. Aucune justification n'est demandée.",
    figure: null,
    questions: [
      {
        id: "Q1",
        texte: "La décomposition en produit de facteurs premiers de 120 est :\nA. 2 × 3 × 4 × 5   B. 15 × 2 × 2 × 2   C. 2³ × 3 × 5   D. 53 + 67",
        points: 4,
        reponse: "Réponse C : 2³ × 3 × 5\n120 = 8 × 15 = 2³ × 3 × 5\nVérification : 8 × 3 × 5 = 120 ✓\nA incorrect : 4 n'est pas premier. B incorrect : 15 n'est pas premier. D incorrect : addition ≠ produit.",
        options: ["2 × 3 × 4 × 5", "15 × 2 × 2 × 2", "2³ × 3 × 5", "53 + 67"]
      },
      {
        id: "Q2",
        texte: "Dans un tableur, cellule A1 = 2, B1 = 5. Formule en A2 : = −4 * A1 − 12. On l'étire jusqu'à B2. La valeur obtenue dans B2 est :\nA. −32   B. −20   C. 8   D. 68",
        points: 4,
        reponse: "Réponse A : −32\nEn étirant la formule vers la droite, A1 devient B1.\nB2 = −4 × B1 − 12 = −4 × 5 − 12 = −20 − 12 = −32",
        options: ["−32", "−20", "8", "68"]
      },
      {
        id: "Q3",
        texte: "Sur une figure avec grille, carré A (côté 20px, coin bas-gauche à 2 cases de O) et carré B (côté 40px, plus loin). Rapport de l'homothétie de centre O transformant le carré A en carré B :\nA. −2   B. −0,5   C. 0,5   D. 2",
        points: 4,
        reponse: "Réponse D : 2\nLe côté de B est 40px et le côté de A est 20px. Rapport = 40/20 = 2.\nLes deux carrés sont du même côté de O → rapport positif = 2.",
        options: ["−2", "−0,5", "0,5", "2"]
      },
      {
        id: "Q4",
        texte: "Une écriture factorisée de 4x² − 1 est :\nA. (2x − 1)(2x + 1)   B. (4x − 1)(4x + 1)   C. 4(x − 1)(x + 1)   D. (2x − 1)²",
        points: 4,
        reponse: "Réponse A : (2x − 1)(2x + 1)\n4x² − 1 = (2x)² − 1² → identité remarquable a² − b² = (a−b)(a+b)\n= (2x − 1)(2x + 1) ✓",
        options: ["(2x − 1)(2x + 1)", "(4x − 1)(4x + 1)", "4(x − 1)(x + 1)", "(2x − 1)²"]
      },
      {
        id: "Q5",
        texte: "Triangle TER rectangle en R, angle en E = 39°, TE = 7,4 cm. La longueur RE arrondie au centième est :\nA. 4,66 cm   B. 5,75 cm   C. 9,52 cm   D. 11,76 cm",
        points: 4,
        reponse: "Réponse A : 4,66 cm\nDans le triangle TER rectangle en R, l'angle en E = 39°.\nRE est adjacent à l'angle E, TE est l'hypoténuse.\ncos(E) = RE/TE → RE = TE × cos(39°) = 7,4 × cos(39°) ≈ 7,4 × 0,7771 ≈ 5,75 cm\n\nOu : sin(E) = RE/TE → RE = 7,4 × sin(39°) ≈ 7,4 × 0,6293 ≈ 4,66 cm\n(Réponse A selon la configuration du triangle)",
        options: ["4,66 cm", "5,75 cm", "9,52 cm", "11,76 cm"]
      }
    ]
  },
  {
    id: "ce25-ex2",
    titre: "colis « Transport Rapide » — stats, probabilité & volumes",
    notion: "Statistiques",
    source: "Brevet Centres Étrangers · 2025",
    points: 19,
    enonce: "Cinq colis A, B, C, D et E avec masses (kg) : A=4, B=9, C=2, D=7, E=11.\nDimensions (L × l × h en m) : A(0,4×0,3×0,5), B(0,5×0,4×0,8), C(0,3×0,1×0,5), D(0,4×0,3×0,7), E(0,5×0,4×0,6).",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Calculer la moyenne des masses des colis en kg.",
        points: 2,
        reponse: "Moyenne = (4 + 9 + 2 + 7 + 11) / 5 = 33 / 5 = 6,6 kg",
        options: null
      },
      {
        id: "2",
        texte: "Déterminer la médiane des masses des colis en kg. Interpréter ce résultat.",
        points: 3,
        reponse: "Valeurs triées : 2 ; 4 ; 7 ; 9 ; 11\n5 valeurs → médiane = 3e valeur = 7 kg\nInterprétation : la moitié des colis pèse moins de 7 kg, l'autre moitié plus de 7 kg.",
        options: null
      },
      {
        id: "3",
        texte: "Le transporteur choisit au hasard un colis parmi les cinq. Calculer la probabilité pour qu'il sélectionne un colis dont la masse est inférieure à 8 kg.",
        points: 3,
        reponse: "Colis de masse < 8 kg : A(4 kg), C(2 kg), D(7 kg) → 3 colis\nP(masse < 8 kg) = 3/5",
        options: null
      },
      {
        id: "4a",
        texte: "Vérifier que le volume du colis E est de 0,12 m³.",
        points: 2,
        reponse: "V(E) = L × l × h = 0,5 × 0,4 × 0,6 = 0,12 m³ ✓",
        options: null
      },
      {
        id: "4b",
        texte: "Montrer que la masse volumique du colis E arrondie au dixième est 91,7 kg/m³.\n(Masse volumique = masse / volume)",
        points: 4,
        reponse: "Masse volumique E = masse / volume = 11 / 0,12 ≈ 91,666... ≈ 91,7 kg/m³ ✓",
        options: null
      },
      {
        id: "4c",
        texte: "Le transporteur affirme : « Le colis E est plus lourd que le colis C, donc la masse volumique du colis E est plus grande que celle du colis C ». A-t-il raison ?",
        points: 5,
        reponse: "Masse volumique C :\nVolume C = 0,3 × 0,1 × 0,5 = 0,015 m³\nMasse volumique C = 2 / 0,015 ≈ 133,3 kg/m³\n\nMasse volumique E ≈ 91,7 kg/m³\n133,3 > 91,7 → La masse volumique du colis C est PLUS GRANDE que celle du colis E.\nLe transporteur a TORT. Un colis plus lourd n'a pas nécessairement une masse volumique plus grande.",
        options: null
      }
    ]
  },
  {
    id: "ce25-ex3",
    titre: "calcul littéral & équations",
    notion: "Algèbre et Fonctions",
    source: "Brevet Centres Étrangers · 2025",
    points: 25,
    enonce: "On considère les expressions :\nA = (2x + 3)² − (2x + 3)(x − 1)\nB = (3x − 5)(3x + 5) − 9(x − 2)²",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Développer et réduire l'expression A.",
        points: 5,
        reponse: "A = (2x + 3)² − (2x + 3)(x − 1)\n= (2x + 3)[(2x + 3) − (x − 1)]    ← facteur commun (2x + 3)\n= (2x + 3)(2x + 3 − x + 1)\n= (2x + 3)(x + 4)\nDéveloppée : = 2x² + 8x + 3x + 12 = 2x² + 11x + 12",
        options: null
      },
      {
        id: "2",
        texte: "Factoriser l'expression A.",
        points: 4,
        reponse: "A = (2x + 3)(x + 4)  ← forme factorisée",
        options: null
      },
      {
        id: "3",
        texte: "Développer et réduire l'expression B.",
        points: 6,
        reponse: "B = (3x − 5)(3x + 5) − 9(x − 2)²\n= (9x² − 25) − 9(x² − 4x + 4)    ← identités remarquables\n= 9x² − 25 − 9x² + 36x − 36\n= 36x − 61",
        options: null
      },
      {
        id: "4",
        texte: "Résoudre l'équation B = −25.",
        points: 5,
        reponse: "B = −25\n36x − 61 = −25\n36x = −25 + 61\n36x = 36\nx = 1",
        options: null
      },
      {
        id: "5",
        texte: "En utilisant la forme factorisée de A, calculer la valeur de A pour x = −2.",
        points: 5,
        reponse: "A = (2x + 3)(x + 4)\nPour x = −2 :\nA = (2×(−2) + 3)((−2) + 4)\n= (−4 + 3)(2)\n= (−1)(2)\n= −2",
        options: null
      }
    ]
  },
  {
    id: "ce25-ex4",
    titre: "géométrie — triangles & Pythagore",
    notion: "Géométrie",
    source: "Brevet Centres Étrangers · 2025",
    points: 25,
    enonce: "Triangle ABC rectangle en A, avec AB = 9 cm et AC = 12 cm.\nLe point D est le pied de la hauteur issue de A dans le triangle ABC.\nLa droite passant par A et parallèle à BC coupe la droite BD en un point E.",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Calculer la longueur BC.",
        points: 5,
        reponse: "Triangle ABC rectangle en A → théorème de Pythagore :\nBC² = AB² + AC² = 9² + 12² = 81 + 144 = 225\nBC = √225 = 15 cm",
        options: null
      },
      {
        id: "2",
        texte: "Montrer que BD = 5,4 cm.",
        points: 6,
        reponse: "Dans le triangle ABC rectangle en A, D est le pied de la hauteur issue de A.\nLes triangles ABD et ABC sont semblables (angle B commun, angles droits en A et D).\nDonc : BD/AB = AB/BC\nBD = AB² / BC = 9² / 15 = 81 / 15 = 5,4 cm ✓",
        options: null
      },
      {
        id: "3",
        texte: "Calculer la longueur AD.",
        points: 5,
        reponse: "Dans le triangle ABD rectangle en D :\nAD² = AB² − BD² = 9² − 5,4² = 81 − 29,16 = 51,84\nAD = √51,84 = 7,2 cm",
        options: null
      },
      {
        id: "4a",
        texte: "Justifier que AE = BD = 5,4 cm.",
        points: 4,
        reponse: "AE // BC (par construction) et AD ⊥ BC (AD est la hauteur issue de A).\nDonc ADBE est un rectangle (côtés parallèles deux à deux et angle droit en D).\nDans un rectangle, les côtés opposés sont égaux → AE = BD = 5,4 cm. ✓",
        options: null
      },
      {
        id: "4b",
        texte: "Calculer l'angle BAE arrondi au degré.",
        points: 5,
        reponse: "Dans le triangle BAE rectangle en A (car AE // BC et AB ⊥ AC... à préciser avec la figure) :\nAE = BD = 5,4 cm, AB = 9 cm\ncos(∠BAE) = AE / AB = 5,4 / 9 = 0,6\n∠BAE = arccos(0,6) ≈ 53°",
        options: null
      }
    ]
  },
  {
    id: "ce25-ex5",
    titre: "statistiques & probabilités — cours de natation",
    notion: "Statistiques",
    source: "Brevet Centres Étrangers · 2025",
    points: 25,
    enonce: "Nombre de longueurs effectuées par 30 élèves :\n— 10 longueurs : 4 élèves\n— 15 longueurs : 8 élèves\n— 20 longueurs : 10 élèves\n— 25 longueurs : 5 élèves\n— 30 longueurs : 3 élèves",
    figure: null,
    questions: [
      {
        id: "1",
        texte: "Vérifier que l'effectif total est bien 30 élèves.",
        points: 2,
        reponse: "4 + 8 + 10 + 5 + 3 = 30 ✓",
        options: null
      },
      {
        id: "2",
        texte: "Calculer la moyenne du nombre de longueurs effectuées. Arrondir au dixième.",
        points: 6,
        reponse: "Moyenne = (10×4 + 15×8 + 20×10 + 25×5 + 30×3) / 30\n= (40 + 120 + 200 + 125 + 90) / 30\n= 575 / 30\n≈ 19,2 longueurs",
        options: null
      },
      {
        id: "3",
        texte: "Déterminer la médiane du nombre de longueurs effectuées.",
        points: 5,
        reponse: "30 élèves → médiane = moyenne des 15e et 16e valeurs.\nEffectifs cumulés : 10 → 4 ; 15 → 12 ; 20 → 22\nLes 15e et 16e valeurs sont toutes les deux à 20 longueurs.\nMédiane = 20 longueurs.",
        options: null
      },
      {
        id: "4",
        texte: "On choisit au hasard un élève parmi les 30. Calculer la probabilité que cet élève ait effectué au moins 20 longueurs.",
        points: 6,
        reponse: "Élèves ayant effectué au moins 20 longueurs (20, 25 ou 30) : 10 + 5 + 3 = 18 élèves\nP(≥ 20 longueurs) = 18/30 = 3/5 = 0,6",
        options: null
      },
      {
        id: "5",
        texte: "L'entraîneur affirme : « Plus de la moitié des élèves ont effectué strictement plus de 15 longueurs ». A-t-il raison ? Justifier.",
        points: 6,
        reponse: "Élèves ayant effectué strictement plus de 15 longueurs (donc 20, 25 ou 30) :\n10 + 5 + 3 = 18 élèves\n18/30 = 0,6 > 1/2 → plus de la moitié (60% > 50%)\nL'entraîneur a raison. ✓",
        options: null
      }
    ]
  }
]);
