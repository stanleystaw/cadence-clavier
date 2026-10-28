'use strict';

const LANGUAGES = {
  fr: {
    label: 'Français', locale: 'fr-FR',
    words: `bonjour monde rythme matin encore ensemble lumière chemin moment sourire facile demain écrire fenêtre clavier calme penser juste couleur détail parole voyager musique papier fenêtre vivre toujours assez étoile lettre livre fleur histoire nuage mémoire grande famille souffle écouter heureux rivière soleil minute beaucoup bientôt douceur calme forêt temps parfois petite place autour confiance lenteur découvrir mouvement jardin rapide aller penser simple chaque monde penser attention tendre comprendre langue ensemble trouver regarder nuit silence marche compter grand paysage envie maison saison apprendre chaque plaisir naturel avancer précieux hier chemin coeur accueil attendre demain passage long histoire accord enfant quelque vraiment dehors jamais dedans aimer réussir ligne minute atelier chemin découvrir heure feuille matin nature amis continuer aujourd'hui écoute devenir tranquille espace raison juste petite liberté valeur idée grand chance sourire horizon rythme plaisir`.split(/\s+/),
    sentences: [
      `À huit heures, le marché ouvre ses portes et les premiers clients choisissent leurs fruits.`,
      `Dans la bibliothèque, une table près de la fenêtre reste libre pour les lecteurs.`,
      `Le train traverse la campagne avant de rejoindre la gare au bord du fleuve.`,
      `La recette demande des tomates, un oignon, du riz et quelques feuilles de basilic.`,
      `Après la pluie, les rues reflètent les vitrines et les lumières du quartier.`,
      `Pour préparer le voyage, consultez les horaires et gardez une copie des billets.`,
      `Un carnet posé sur le bureau contient les notes de la réunion de lundi.`,
      `Au bord de la mer, les pêcheurs réparent leurs filets avant le départ.`,
      `Le musée présente des photographies anciennes et des cartes de la région.`,
      `Chaque samedi, les voisins se retrouvent au jardin pour échanger des graines et des plantes.`
    ],
    ui: {
      skip:'Aller au test', headerDescriptor:"Entraînement au clavier", preferences:'Préférences', activityLink:'Votre activité', languageLabel:'Langue du test et de l’interface',
      headline:"Test de frappe.", introText:"Mesurez votre vitesse et votre précision au clavier.", testTitle:"Entraînement", ready:"Prêt à commencer", running:'Test en cours', finished:'Test terminé', format:'Format', words:'Mots', sentences:'Phrases', duration:'Durée', yourText:'Votre texte', remaining:'Temps restant', inputLabel:'Tapez le texte affiché ici', typingHint:'Commencez à taper pour lancer le chrono.', runningHint:'Continuez à taper, vous pouvez corriger vos erreurs.', restart:'Recommencer', resultOverline:'Test terminé', resultHeading:"Résultats", wpmLong:'mots / min', speed:'Vitesse', wpmShort:'mots/min', accuracy:'Précision', errors:'Erreurs', keystrokes:'frappes', playAgain:'Faire un autre test', share:'Partager le résultat', liveStats:'Statistiques en direct', options:'Options', punctuation:'Ponctuation', numbers:'Chiffres', sound:'Son', howScores:'Comment sont calculés les scores ?', scoreExplanation:'La vitesse compte 5 caractères corrects par mot. La précision tient compte de toutes vos frappes, même celles que vous corrigez.', activity:'Votre activité', personalBest:'Record personnel', firstScore:"Aucun résultat enregistré.", bestOn:'Record établi le', completedTests:'Tests terminés', averageSpeed:'Vitesse moyenne', progress:'Votre progression', lastEight:'8 derniers tests', chartEmpty:"Aucun test à afficher.", recentTests:'Tests récents', clearHistory:'Effacer', historyEmpty:"Aucun test terminé.", privacy:'Vos résultats restent sur cet appareil.', keyboardHint:'pour recommencer', escape:'Échap', dark:'Sombre', light:'Clair', confirmChange:'Le test en cours sera interrompu. Voulez-vous continuer ?', confirmClear:'Effacer tous les résultats enregistrés sur cet appareil ?', shared:'Résultat partagé.', copied:'Résultat copié.', copyFailed:'Copie impossible. Vérifiez les autorisations de votre navigateur.', shareText:"Sur Cadence : {wpm} mots/min, {accuracy} % de précision.", chartLabel:'Vitesse des derniers tests', saved:'Enregistré sur cet appareil', storageWarning:'La sauvegarde locale est indisponible dans ce navigateur.'
    }
  },
  en: {
    label: 'English', locale: 'en-GB',
    words: `morning simple gentle little around world rhythm always wonder window quiet listen language orange people river better garden spring practice answer journey across enough together slowly planet letter writing thoughtful change autumn light careful bring different mountain family discover honest clear time story useful place beautiful book create friendly follow almost smile today paper between learn calm welcome words minute sound nature open evening warm future bright common dream table remember keyboard focus moment choose patience wonderful path soft favourite walk simple way enjoy breathe build small steady question ready number coffee explore home start fresh`.split(/\s+/),
    sentences: [
      `At eight, the market opens and the first customers choose fruit for the week.`,
      `In the library, a table near the window remains free for readers.`,
      `The train crosses the countryside before reaching the station beside the river.`,
      `The recipe calls for tomatoes, an onion, rice and a few basil leaves.`,
      `After the rain, the streets reflect shop windows and the lights of the neighborhood.`,
      `Before the trip, check the timetable and keep a copy of the tickets.`,
      `A notebook on the desk contains the notes from the meeting on Monday.`,
      `By the sea, the fishers repair their nets before leaving the harbor.`,
      `The museum displays old photographs and maps of the surrounding region.`,
      `Every Saturday, neighbors meet in the garden to exchange seeds and plants.`
    ],
    ui: {
      skip:'Skip to the test', headerDescriptor:"Keyboard practice", preferences:'Preferences', activityLink:'Your activity', languageLabel:'Test and interface language', headline:"Typing test.", introText:"Measure your typing speed and accuracy.", testTitle:"Practice", ready:"Ready to start", running:'Test in progress', finished:'Test complete', format:'Format', words:'Words', sentences:'Sentences', duration:'Duration', yourText:'Your text', remaining:'Time remaining', inputLabel:'Type the displayed text here', typingHint:'Start typing to begin the timer.', runningHint:'Keep typing; you can correct your mistakes.', restart:'Restart', resultOverline:'Test complete', resultHeading:"Results", wpmLong:'words / min', speed:'Speed', wpmShort:'words/min', accuracy:'Accuracy', errors:'Errors', keystrokes:'keystrokes', playAgain:'Take another test', share:'Share result', liveStats:'Live statistics', options:'Options', punctuation:'Punctuation', numbers:'Numbers', sound:'Sound', howScores:'How are scores calculated?', scoreExplanation:'Speed counts 5 correct characters per word. Accuracy includes every keystroke, even the ones you correct.', activity:'Your activity', personalBest:'Personal best', firstScore:"No results saved.", bestOn:'Record set on', completedTests:'Completed tests', averageSpeed:'Average speed', progress:'Your progress', lastEight:'Last 8 tests', chartEmpty:"No tests to show.", recentTests:'Recent tests', clearHistory:'Clear', historyEmpty:"No completed tests.", privacy:'Your results stay on this device.', keyboardHint:'to restart', escape:'Esc', dark:'Dark', light:'Light', confirmChange:'Your current test will be interrupted. Continue?', confirmClear:'Clear all results saved on this device?', shared:'Result shared.', copied:'Result copied.', copyFailed:'Could not copy. Check your browser permissions.', shareText:"Cadence: {wpm} words/min, {accuracy}% accuracy.", chartLabel:'Speed in recent tests', saved:'Saved on this device', storageWarning:'Local storage is unavailable in this browser.'
    }
  },
  es: {
    label: 'Español', locale: 'es-ES',
    words: `mañana mundo ritmo camino palabra juntos luz momento sonrisa fácil ventana teclado calma pensar color detalle viajar música papel vivir siempre estrella letra libro flor historia nube memoria familia respirar escuchar feliz río sol minuto pronto ternura bosque tiempo pequeño lugar alrededor confianza descubrir movimiento jardín rápido sencillo cada atención comprender idioma encontrar mirar noche silencio caminar contar paisaje deseo casa estación aprender placer natural avanzar querido ayer corazón llegada esperar mañana largo historia acuerdo niño algo fuera nunca dentro amar línea taller hoja naturaleza amigos continuar hoy espacio razón libertad valor idea suerte horizonte alegría escribir paciencia abrazo bonito lluvia pregunta verdad sueño inicio ciudad cerca claro compartir aire campo fuerte suave ventana primero proyecto ejemplo futuro`.split(/\s+/),
    sentences: [
      `A las ocho abre el mercado y los primeros clientes eligen fruta para la semana.`,
      `En la biblioteca, una mesa junto a la ventana queda libre para los lectores.`,
      `El tren cruza el campo antes de llegar a la estación junto al río.`,
      `La receta lleva tomates, una cebolla, arroz y unas hojas de albahaca.`,
      `Después de la lluvia, las calles reflejan los escaparates y las luces del barrio.`,
      `Antes del viaje, consulta los horarios y guarda una copia de los billetes.`,
      `Un cuaderno sobre la mesa contiene las notas de la reunión del lunes.`,
      `Junto al mar, los pescadores reparan sus redes antes de salir del puerto.`,
      `El museo presenta fotografías antiguas y mapas de la región.`,
      `Cada sábado, los vecinos se reúnen en el jardín para intercambiar semillas y plantas.`
    ],
    ui: {
      skip:'Ir a la prueba', headerDescriptor:"Práctica de mecanografía", preferences:'Preferencias', activityLink:'Tu actividad', languageLabel:'Idioma de la prueba y de la interfaz', headline:"Prueba de escritura.", introText:"Mide tu velocidad y precisión al escribir.", testTitle:"Práctica", ready:"Listo para empezar", running:'Prueba en curso', finished:'Prueba terminada', format:'Formato', words:'Palabras', sentences:'Frases', duration:'Duración', yourText:'Tu texto', remaining:'Tiempo restante', inputLabel:'Escribe aquí el texto mostrado', typingHint:'Empieza a escribir para iniciar el cronómetro.', runningHint:'Sigue escribiendo; puedes corregir tus errores.', restart:'Reiniciar', resultOverline:'Prueba terminada', resultHeading:"Resultados", wpmLong:'palabras / min', speed:'Velocidad', wpmShort:'palabras/min', accuracy:'Precisión', errors:'Errores', keystrokes:'pulsaciones', playAgain:'Hacer otra prueba', share:'Compartir resultado', liveStats:'Estadísticas en directo', options:'Opciones', punctuation:'Puntuación', numbers:'Números', sound:'Sonido', howScores:'¿Cómo se calculan los resultados?', scoreExplanation:'La velocidad cuenta 5 caracteres correctos por palabra. La precisión incluye todas las pulsaciones, incluso las corregidas.', activity:'Tu actividad', personalBest:'Récord personal', firstScore:"Sin resultados guardados.", bestOn:'Récord obtenido el', completedTests:'Pruebas terminadas', averageSpeed:'Velocidad media', progress:'Tu progreso', lastEight:'Últimas 8 pruebas', chartEmpty:"No hay pruebas para mostrar.", recentTests:'Pruebas recientes', clearHistory:'Borrar', historyEmpty:"No hay pruebas terminadas.", privacy:'Tus resultados se guardan en este dispositivo.', keyboardHint:'para reiniciar', escape:'Esc', dark:'Oscuro', light:'Claro', confirmChange:'Se interrumpirá la prueba actual. ¿Quieres continuar?', confirmClear:'¿Borrar todos los resultados guardados en este dispositivo?', shared:'Resultado compartido.', copied:'Resultado copiado.', copyFailed:'No se pudo copiar. Comprueba los permisos del navegador.', shareText:"Cadence: {wpm} palabras/min, {accuracy} % de precisión.", chartLabel:'Velocidad en las últimas pruebas', saved:'Guardado en este dispositivo', storageWarning:'El almacenamiento local no está disponible en este navegador.'
    }
  },
  pt: {
    label: 'Português', locale: 'pt-BR',
    words: `amanhã mundo ritmo caminho palavra juntos luz momento sorriso fácil janela teclado calma pensar cor detalhe viajar música papel viver sempre estrela letra livro flor história nuvem memória família respirar ouvir feliz rio sol minuto breve carinho floresta tempo pequeno lugar perto confiança descobrir movimento jardim rápido simples cada atenção entender língua encontrar olhar noite silêncio caminhar contar paisagem vontade casa estação aprender prazer natural avançar querido ontem coração chegada esperar longo acordo criança algo fora nunca dentro amar linha oficina folha natureza amigos continuar hoje espaço razão liberdade valor ideia sorte horizonte alegria escrever paciência abraço bonito chuva pergunta verdade sonho começo cidade perto claro compartilhar ar campo forte suave primeiro projeto exemplo futuro manhã presença palavra`.split(/\s+/),
    sentences: [
      `Às oito, o mercado abre e os primeiros clientes escolhem frutas para a semana.`,
      `Na biblioteca, uma mesa perto da janela fica livre para os leitores.`,
      `O trem cruza o campo antes de chegar à estação perto do rio.`,
      `A receita leva tomates, uma cebola, arroz e algumas folhas de manjericão.`,
      `Depois da chuva, as ruas refletem as vitrines e as luzes do bairro.`,
      `Antes da viagem, consulte os horários e guarde uma cópia das passagens.`,
      `Um caderno sobre a mesa contém as anotações da reunião de segunda-feira.`,
      `À beira-mar, os pescadores consertam as redes antes de sair do porto.`,
      `O museu apresenta fotografias antigas e mapas da região.`,
      `Aos sábados, os vizinhos se encontram no jardim para trocar sementes e plantas.`
    ],
    ui: {
      skip:'Ir para o teste', headerDescriptor:"Treino de digitação", preferences:'Preferências', activityLink:'Sua atividade', languageLabel:'Idioma do teste e da interface', headline:"Teste de digitação.", introText:"Meça sua velocidade e precisão ao digitar.", testTitle:"Treino", ready:"Pronto para começar", running:'Teste em andamento', finished:'Teste concluído', format:'Formato', words:'Palavras', sentences:'Frases', duration:'Duração', yourText:'Seu texto', remaining:'Tempo restante', inputLabel:'Digite aqui o texto exibido', typingHint:'Comece a digitar para iniciar o cronômetro.', runningHint:'Continue digitando; você pode corrigir seus erros.', restart:'Recomeçar', resultOverline:'Teste concluído', resultHeading:"Resultados", wpmLong:'palavras / min', speed:'Velocidade', wpmShort:'palavras/min', accuracy:'Precisão', errors:'Erros', keystrokes:'toques', playAgain:'Fazer outro teste', share:'Compartilhar resultado', liveStats:'Estatísticas em tempo real', options:'Opções', punctuation:'Pontuação', numbers:'Números', sound:'Som', howScores:'Como os resultados são calculados?', scoreExplanation:'A velocidade conta 5 caracteres corretos por palavra. A precisão inclui todos os toques, mesmo os corrigidos.', activity:'Sua atividade', personalBest:'Recorde pessoal', firstScore:"Nenhum resultado salvo.", bestOn:'Recorde feito em', completedTests:'Testes concluídos', averageSpeed:'Velocidade média', progress:'Seu progresso', lastEight:'Últimos 8 testes', chartEmpty:"Nenhum teste para mostrar.", recentTests:'Testes recentes', clearHistory:'Apagar', historyEmpty:"Nenhum teste concluído.", privacy:'Seus resultados ficam neste dispositivo.', keyboardHint:'para recomeçar', escape:'Esc', dark:'Escuro', light:'Claro', confirmChange:'O teste atual será interrompido. Deseja continuar?', confirmClear:'Apagar todos os resultados salvos neste dispositivo?', shared:'Resultado compartilhado.', copied:'Resultado copiado.', copyFailed:'Não foi possível copiar. Verifique as permissões do navegador.', shareText:"Cadence: {wpm} palavras/min, {accuracy}% de precisão.", chartLabel:'Velocidade nos últimos testes', saved:'Salvo neste dispositivo', storageWarning:'O armazenamento local não está disponível neste navegador.'
    }
  },
  de: {
    label: 'Deutsch', locale: 'de-DE',
    words: `morgen welt rhythmus weg wörter zusammen licht augenblick lächeln einfach fenster tastatur ruhe denken farbe detail reisen musik papier leben immer stern buch blume geschichte wolke erinnerung familie atmen hören glücklich fluss sonne minute bald wald zeit klein ort vertrauen entdecken bewegung garten schnell langsam klar aufmerksamkeit verstehen sprache finden schauen nacht stille gehen zählen landschaft wunsch haus jahreszeit lernen freude natürlich gestern herz warten lang kind draußen lieben zeile werkstatt blatt natur freunde heute raum freiheit wert idee glück horizont geduld umarmung schön regen frage wahrheit traum anfang stadt teilen luft feld stark sanft zuerst zukunft morgen übung freundlich wissen möchten glauben sommer ändern grüßen ruhig plötzlich`.split(/\s+/),
    sentences: [
      `Um acht Uhr öffnet der Markt und die ersten Kunden wählen Obst für die Woche.`,
      `In der Bibliothek bleibt ein Tisch am Fenster für die Leser frei.`,
      `Der Zug fährt durch die Landschaft und erreicht den Bahnhof am Fluss.`,
      `Für das Rezept braucht man Tomaten, eine Zwiebel, Reis und frisches Basilikum.`,
      `Nach dem Regen spiegeln sich die Schaufenster und die Lichter in den Straßen.`,
      `Vor der Reise solltest du die Fahrzeiten prüfen und eine Kopie der Tickets mitnehmen.`,
      `Auf dem Schreibtisch liegt ein Heft mit den Notizen vom Treffen am Montag.`,
      `Am Meer reparieren die Fischer ihre Netze, bevor sie den Hafen verlassen.`,
      `Das Museum zeigt alte Fotografien und Karten aus der Region.`,
      `Jeden Samstag treffen sich die Nachbarn im Garten und tauschen Samen und Pflanzen.`
    ],
    ui: {
      skip:'Zum Test springen', headerDescriptor:"Tipptraining", preferences:'Einstellungen', activityLink:'Deine Aktivität', languageLabel:'Sprache des Tests und der Oberfläche', headline:"Tipptest.", introText:"Miss dein Tipptempo und deine Genauigkeit.", testTitle:"Übung", ready:"Bereit zum Start", running:'Test läuft', finished:'Test beendet', format:'Format', words:'Wörter', sentences:'Sätze', duration:'Dauer', yourText:'Dein Text', remaining:'Verbleibende Zeit', inputLabel:'Tippe hier den angezeigten Text', typingHint:'Beginne zu tippen, um die Zeit zu starten.', runningHint:'Tippe weiter; du kannst deine Fehler korrigieren.', restart:'Neu starten', resultOverline:'Test beendet', resultHeading:"Ergebnisse", wpmLong:'Wörter / Min.', speed:'Tempo', wpmShort:'Wörter/Min.', accuracy:'Genauigkeit', errors:'Fehler', keystrokes:'Anschläge', playAgain:'Neuen Test starten', share:'Ergebnis teilen', liveStats:'Live-Statistiken', options:'Optionen', punctuation:'Satzzeichen', numbers:'Zahlen', sound:'Ton', howScores:'Wie werden die Ergebnisse berechnet?', scoreExplanation:'Für das Tempo zählen 5 korrekte Zeichen als ein Wort. Die Genauigkeit berücksichtigt alle Anschläge, auch korrigierte.', activity:'Deine Aktivität', personalBest:'Persönlicher Rekord', firstScore:"Keine Ergebnisse gespeichert.", bestOn:'Rekord vom', completedTests:'Beendete Tests', averageSpeed:'Durchschnittstempo', progress:'Dein Fortschritt', lastEight:'Letzte 8 Tests', chartEmpty:"Keine Tests vorhanden.", recentTests:'Letzte Tests', clearHistory:'Löschen', historyEmpty:"Keine Tests abgeschlossen.", privacy:'Deine Ergebnisse bleiben auf diesem Gerät.', keyboardHint:'zum Neustarten', escape:'Esc', dark:'Dunkel', light:'Hell', confirmChange:'Der laufende Test wird abgebrochen. Fortfahren?', confirmClear:'Alle auf diesem Gerät gespeicherten Ergebnisse löschen?', shared:'Ergebnis geteilt.', copied:'Ergebnis kopiert.', copyFailed:'Kopieren nicht möglich. Prüfe die Browserberechtigungen.', shareText:"Cadence: {wpm} Wörter/Min., {accuracy} % Genauigkeit.", chartLabel:'Tempo der letzten Tests', saved:'Auf diesem Gerät gespeichert', storageWarning:'Der lokale Speicher ist in diesem Browser nicht verfügbar.'
    }
  }
};

const INSTALL_TEXT = {
  fr: { install:'Installer l’application', installTitle:'Installer Cadence', close:'Fermer', installIOS:'Dans Safari, touchez Partager, puis « Sur l’écran d’accueil ».', installMac:'Dans Safari, ouvrez Fichier, puis choisissez « Ajouter au Dock ».', installBrowser:'Dans le menu du navigateur, choisissez l’option d’installation ou d’ajout à l’écran d’accueil, si elle est proposée.' },
  en: { install:'Install app', installTitle:'Install Cadence', close:'Close', installIOS:'In Safari, tap Share, then “Add to Home Screen”.', installMac:'In Safari, open File, then choose “Add to Dock”.', installBrowser:'Open your browser menu and choose the install or add to home screen option, if available.' },
  es: { install:'Instalar aplicación', installTitle:'Instalar Cadence', close:'Cerrar', installIOS:'En Safari, toca Compartir y después «Añadir a pantalla de inicio».', installMac:'En Safari, abre Archivo y elige «Añadir al Dock».', installBrowser:'Abre el menú del navegador y elige la opción de instalar o añadir a la pantalla de inicio, si aparece.' },
  pt: { install:'Instalar aplicativo', installTitle:'Instalar Cadence', close:'Fechar', installIOS:'No Safari, toque em Compartilhar e depois em «Adicionar à Tela de Início».', installMac:'No Safari, abra Arquivo e escolha «Adicionar ao Dock».', installBrowser:'Abra o menu do navegador e escolha a opção de instalar ou adicionar à tela inicial, se estiver disponível.' },
  de: { install:'App installieren', installTitle:'Cadence installieren', close:'Schließen', installIOS:'Tippe in Safari auf Teilen und dann auf „Zum Home-Bildschirm“.', installMac:'Öffne in Safari das Menü Ablage und wähle „Zum Dock hinzufügen“.', installBrowser:'Öffne das Browsermenü und wähle die Option zum Installieren oder zum Hinzufügen zum Startbildschirm, falls vorhanden.' }
};
Object.keys(INSTALL_TEXT).forEach(language => Object.assign(LANGUAGES[language].ui, INSTALL_TEXT[language]));

const FEATURE_TEXT = {
  "fr": {
    "code": "Code",
    "custom": "Texte personnel",
    "programLanguage": "Langage",
    "nextSnippet": "Autre extrait",
    "indentHint": "Tab insère l’indentation attendue. Maj + Tab change de champ.",
    "customPrompt": "Collez le texte ou le code à recopier",
    "customPrivacy": "Ce texte n’est ni envoyé ni enregistré par Cadence.",
    "useCustom": "Charger le texte",
    "emptyPassage": "Ajoutez un texte pour commencer.",
    "customEmpty": "Ajoutez du texte avant de le charger.",
    "customTooLong": "Limite : 6 000 caractères.",
    "customLoaded": "Texte chargé."
  },
  "en": {
    "code": "Code",
    "custom": "Custom text",
    "programLanguage": "Language",
    "nextSnippet": "Another snippet",
    "indentHint": "Tab inserts the expected indentation. Shift + Tab moves focus.",
    "customPrompt": "Paste the text or code to type",
    "customPrivacy": "Cadence does not send or save this text.",
    "useCustom": "Load text",
    "emptyPassage": "Add text to get started.",
    "customEmpty": "Add text before loading.",
    "customTooLong": "Limit: 6,000 characters.",
    "customLoaded": "Text loaded."
  },
  "es": {
    "code": "Código",
    "custom": "Texto propio",
    "programLanguage": "Lenguaje",
    "nextSnippet": "Otro fragmento",
    "indentHint": "Tab inserta la sangría esperada. Mayús + Tab cambia de campo.",
    "customPrompt": "Pega el texto o código que quieras copiar",
    "customPrivacy": "Cadence no envía ni guarda este texto.",
    "useCustom": "Cargar texto",
    "emptyPassage": "Añade un texto para empezar.",
    "customEmpty": "Añade texto antes de cargarlo.",
    "customTooLong": "Límite: 6000 caracteres.",
    "customLoaded": "Texto cargado."
  },
  "pt": {
    "code": "Código",
    "custom": "Texto próprio",
    "programLanguage": "Linguagem",
    "nextSnippet": "Outro trecho",
    "indentHint": "Tab insere a indentação esperada. Shift + Tab muda de campo.",
    "customPrompt": "Cole o texto ou código que deseja copiar",
    "customPrivacy": "O Cadence não envia nem salva este texto.",
    "useCustom": "Carregar texto",
    "emptyPassage": "Adicione um texto para começar.",
    "customEmpty": "Adicione texto antes de carregar.",
    "customTooLong": "Limite: 6.000 caracteres.",
    "customLoaded": "Texto carregado."
  },
  "de": {
    "code": "Code",
    "custom": "Eigener Text",
    "programLanguage": "Sprache",
    "nextSnippet": "Anderer Ausschnitt",
    "indentHint": "Tab fügt die erwartete Einrückung ein. Umschalt + Tab wechselt das Feld.",
    "customPrompt": "Füge den Text oder Code zum Abtippen ein",
    "customPrivacy": "Cadence sendet und speichert diesen Text nicht.",
    "useCustom": "Text laden",
    "emptyPassage": "Füge einen Text hinzu, um zu beginnen.",
    "customEmpty": "Füge vor dem Laden einen Text hinzu.",
    "customTooLong": "Limit: 6.000 Zeichen.",
    "customLoaded": "Text geladen."
  }
};
Object.keys(FEATURE_TEXT).forEach(language => Object.assign(LANGUAGES[language].ui, FEATURE_TEXT[language]));

const CODE_SAMPLES = {
  "python": [
    "def average(values):\n    if not values:\n        return 0\n    total = sum(values)\n    return total / len(values)\n\nscores = [12, 18, 15]\nprint(average(scores))",
    "def active_names(users):\n    names = []\n    for user in users:\n        if user[\"active\"]:\n            names.append(user[\"name\"])\n    return sorted(names)\n\npeople = [{\"name\": \"Mina\", \"active\": True}]\nprint(active_names(people))"
  ],
  "javascript": [
    "function groupByLength(words) {\n  const groups = new Map();\n  for (const word of words) {\n    const size = word.length;\n    const items = groups.get(size) ?? [];\n    groups.set(size, [...items, word]);\n  }\n  return groups;\n}",
    "async function loadItems(url) {\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(\"Request failed\");\n  }\n  const items = await response.json();\n  return items.filter((item) => item.active);\n}"
  ],
  "typescript": [
    "type User = { name: string; active: boolean };\n\nfunction activeNames(users: User[]): string[] {\n  return users\n    .filter((user) => user.active)\n    .map((user) => user.name);\n}",
    "interface Point {\n  x: number;\n  y: number;\n}\n\nfunction distance(point: Point): number {\n  return Math.sqrt(point.x ** 2 + point.y ** 2);\n}"
  ],
  "html": [
    "<form class=\"search-form\" action=\"/search\">\n  <label for=\"query\">Search</label>\n  <input id=\"query\" name=\"q\" type=\"search\">\n  <button type=\"submit\">Find</button>\n</form>",
    "<article class=\"card\">\n  <h2>Latest notes</h2>\n  <ul>\n    <li>Review the schedule</li>\n    <li>Update the project</li>\n  </ul>\n</article>"
  ],
  "css": [
    ".card {\n  display: grid;\n  gap: 1rem;\n  padding: 1.5rem;\n  border: 1px solid #333;\n}\n\n@media (max-width: 600px) {\n  .card { padding: 1rem; }\n}",
    ".navigation {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.navigation a:focus-visible {\n  outline: 2px solid currentColor;\n}"
  ],
  "sql": [
    "SELECT department, COUNT(*) AS total\nFROM employees\nWHERE active = TRUE\nGROUP BY department\nORDER BY total DESC;",
    "SELECT orders.id, customers.name, orders.total\nFROM orders\nJOIN customers ON customers.id = orders.customer_id\nWHERE orders.total > 100\nORDER BY orders.created_at DESC;"
  ],
  "java": [
    "import java.util.List;\n\npublic class Average {\n    public static double calculate(List<Integer> values) {\n        return values.stream()\n            .mapToInt(Integer::intValue)\n            .average()\n            .orElse(0);\n    }\n}",
    "public class Counter {\n    private int value = 0;\n\n    public void increment() {\n        value++;\n    }\n\n    public int getValue() {\n        return value;\n    }\n}"
  ],
  "cpp": [
    "#include <iostream>\n#include <vector>\n\nint sum(const std::vector<int>& values) {\n    int total = 0;\n    for (int value : values) {\n        total += value;\n    }\n    return total;\n}",
    "#include <algorithm>\n#include <string>\n#include <vector>\n\nvoid sort_names(std::vector<std::string>& names) {\n    std::sort(names.begin(), names.end());\n}"
  ],
  "go": [
    "package main\n\nimport \"fmt\"\n\nfunc sum(values []int) int {\n    total := 0\n    for _, value := range values {\n        total += value\n    }\n    return total\n}\n\nfunc main() {\n    fmt.Println(sum([]int{2, 4, 6}))\n}",
    "package main\n\nimport \"strings\"\n\nfunc cleanNames(names []string) []string {\n    result := make([]string, 0, len(names))\n    for _, name := range names {\n        result = append(result, strings.TrimSpace(name))\n    }\n    return result\n}"
  ],
  "rust": [
    "fn sum(values: &[i32]) -> i32 {\n    values.iter().copied().sum()\n}\n\nfn main() {\n    let values = [2, 4, 6];\n    println!(\"{}\", sum(&values));\n}",
    "fn active_names(users: &[(&str, bool)]) -> Vec<&str> {\n    users.iter()\n        .filter(|(_, active)| *active)\n        .map(|(name, _)| *name)\n        .collect()\n}"
  ]
};
const CODE_NAMES = { python:'Python', javascript:'JavaScript', typescript:'TypeScript', html:'HTML', css:'CSS', sql:'SQL', java:'Java', cpp:'C++', go:'Go', rust:'Rust' };
const CUSTOM_LIMIT = 6000;
const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter(undefined, { granularity:'grapheme' }) : null;
const splitCharacters = text => segmenter ? Array.from(segmenter.segment(text), item => item.segment) : Array.from(text);

const SETTINGS_KEY = 'cadence.settings.v1';
const HISTORY_KEY = 'cadence.history.v1';
const DEFAULT_SETTINGS = { language:'fr', mode:'words', codeLanguage:'python', duration:30, punctuation:false, numbers:false, sound:false, theme:'light' };
const $ = id => document.getElementById(id);
let storageAvailable = true;
function readStored(key, fallback) {
  try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); }
  catch { storageAvailable = false; return fallback; }
}
function writeStored(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { storageAvailable = false; }
}
const savedSettings = readStored(SETTINGS_KEY, {});
const settings = Object.assign({}, DEFAULT_SETTINGS, savedSettings && typeof savedSettings === 'object' ? savedSettings : {});
if (!LANGUAGES[settings.language]) settings.language = 'fr';
if (!['words','sentences','code','custom'].includes(settings.mode)) settings.mode = 'words';
if (!CODE_SAMPLES[settings.codeLanguage]) settings.codeLanguage = 'python';
if (![15,30,60,120].includes(settings.duration)) settings.duration = 30;
if (!['light','dark'].includes(settings.theme)) settings.theme = 'light';
settings.punctuation = settings.punctuation === true;
settings.numbers = settings.numbers === true;
settings.sound = settings.sound === true;
let savedHistory = readStored(HISTORY_KEY, []);
let history = Array.isArray(savedHistory) ? savedHistory.filter(item => item && Number.isFinite(item.wpm) && Number.isFinite(item.accuracy) && Number.isFinite(item.date) && item.date > 0).slice(0, 100) : [];
let session = null;
let timerId = null;
let characterNodes = [];
let lastResult = null;
let audioContext = null;
let customText = '';
let previousCode = '';

const t = key => LANGUAGES[settings.language].ui[key] || LANGUAGES.fr.ui[key] || key;
function persistSettings() { writeStored(SETTINGS_KEY, settings); }
function formatClock(seconds) {
  const value = Math.max(0, Math.ceil(seconds));
  return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
}
function randomItem(items) { return items[Math.floor(Math.random() * items.length)]; }
function buildPassage() {
  if (settings.mode === 'custom') return customText;
  if (settings.mode === 'code') {
    const samples = CODE_SAMPLES[settings.codeLanguage];
    let sample = randomItem(samples);
    while (samples.length > 1 && sample === previousCode) sample = randomItem(samples);
    previousCode = sample;
    return sample;
  }
  const content = LANGUAGES[settings.language];
  let text = '';
  if (settings.mode === 'sentences') {
    const list = [];
    let last = '';
    for (let i = 0; i < 26; i++) {
      let sentence = randomItem(content.sentences);
      while (sentence === last && content.sentences.length > 1) sentence = randomItem(content.sentences);
      last = sentence;
      list.push(sentence);
    }
    text = list.join(' ');
    if (!settings.punctuation) text = text.replace(/[.,;:!?¿¡]/g, '').toLocaleLowerCase(content.locale);
  } else {
    const list = [];
    let last = '';
    for (let i = 0; i < 260; i++) {
      let word = randomItem(content.words);
      while (word === last && content.words.length > 1) word = randomItem(content.words);
      last = word;
      if (settings.punctuation) {
        if (i % 14 === 0) word = word.charAt(0).toLocaleUpperCase(content.locale) + word.slice(1);
        if (i % 14 === 13) word += '.';
        else if (i % 7 === 6) word += ',';
      }
      list.push(word);
    }
    text = list.join(' ');
  }
  if (settings.numbers) {
    const parts = text.split(' ');
    for (let i = 14; i < parts.length; i += 17) parts.splice(i, 0, String(randomItem([7, 12, 24, 36, 48, 125, 2026])));
    text = parts.join(' ');
  }
  return text;
}
function renderStatic() {
  const language = LANGUAGES[settings.language];
  document.documentElement.lang = settings.language;
  document.documentElement.dataset.theme = settings.theme;
  document.querySelector('meta[name="theme-color"]').content = settings.theme === 'dark' ? '#1d1e1e' : '#e9e9e7';
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => { node.setAttribute('aria-label', t(node.dataset.i18nAria)); });
  $('language').value = settings.language;
  $('language').setAttribute('aria-label', t('languageLabel'));
  $('typingLanguage').textContent = settings.mode === 'code' ? CODE_NAMES[settings.codeLanguage] : settings.mode === 'custom' ? t('custom') : language.label;
  $('codeControls').hidden = settings.mode !== 'code';
  $('customControls').hidden = settings.mode !== 'custom';
  $('codeLanguage').value = settings.codeLanguage;
  $('typingCard').classList.toggle('is-code', settings.mode === 'code' || settings.mode === 'custom');
  $('punctuationOption').hidden = settings.mode === 'code' || settings.mode === 'custom';
  $('numbersOption').hidden = settings.mode === 'code' || settings.mode === 'custom';
  $('themeLabel').textContent = t(settings.theme === 'light' ? 'dark' : 'light');
  $('themeToggle').setAttribute('aria-pressed', String(settings.theme === 'dark'));
  document.querySelector('.clock').setAttribute('aria-label', t('remaining'));
  document.querySelector('kbd').textContent = t('escape');
  document.querySelectorAll('[data-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === settings.mode)));
  document.querySelectorAll('[data-duration]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.duration) === settings.duration)));
  $('punctuation').checked = settings.punctuation;
  $('numbers').checked = settings.numbers;
  $('sound').checked = settings.sound;
  if (session) updateStatus();
  renderHistory();
}
function updateStatus() {
  if (!session) return;
  $('testStatus').textContent = t(session.status === 'running' ? 'running' : session.status === 'finished' ? 'finished' : 'ready');
  $('typingHint').textContent = t(session.status === 'running' ? 'runningHint' : 'typingHint');
}
function createCharacterNodes(characters) {
  const fragment = document.createDocumentFragment();
  characterNodes = characters.map(char => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = char;
    fragment.appendChild(span);
    return span;
  });
  $('passage').replaceChildren(fragment);
  if (characterNodes[0]) characterNodes[0].classList.add('current');
  $('accessiblePassage').textContent = session.passage;
}
function resetTest(shouldFocus = false) {
  clearInterval(timerId); timerId = null;
  const passage = buildPassage();
  const passageChars = splitCharacters(passage);
  session = { status:'waiting', passage, passageChars, typed:'', typedChars:[], attempts:0, errors:0, startAt:0, endAt:0 };
  lastResult = null;
  $('typingInput').value = '';
  $('typingInput').disabled = passageChars.length === 0;
  $('emptyPassage').hidden = passageChars.length > 0;
  $('typingView').hidden = false;
  $('resultView').hidden = true;
  $('textViewport').scrollTop = 0;
  $('shareMessage').textContent = '';
  createCharacterNodes(passageChars);
  updateStatus();
  $('timer').textContent = formatClock(settings.duration);
  $('timeProgress').style.transform = 'scaleX(1)';
  $('wpm').textContent = '0';
  $('accuracy').textContent = '100';
  $('errors').textContent = '0';
  if (shouldFocus && passageChars.length) $('typingInput').focus({ preventScroll:true });
}
function countCorrect(typed, expected) {
  let count = 0;
  for (let i = 0; i < typed.length; i++) if (typed[i] === expected[i]) count++;
  return count;
}
function currentValues(now = Date.now()) {
  const elapsed = session.startAt ? Math.min(settings.duration, Math.max((now - session.startAt) / 1000, 1)) : 0;
  const correct = countCorrect(session.typedChars, session.passageChars);
  return {
    wpm: elapsed ? Math.round((correct / 5) * (60 / elapsed)) : 0,
    accuracy: session.attempts ? Math.max(0, Math.round(((session.attempts - session.errors) / session.attempts) * 100)) : 100,
    errors: session.errors,
    elapsed
  };
}
function refreshLive(now = Date.now()) {
  const values = currentValues(now);
  $('wpm').textContent = String(values.wpm);
  $('accuracy').textContent = String(values.accuracy);
  $('errors').textContent = String(values.errors);
  const remaining = session.status === 'waiting' ? settings.duration : Math.max(0, (session.endAt - now) / 1000);
  $('timer').textContent = formatClock(remaining);
  $('timeProgress').style.transform = `scaleX(${Math.max(0, Math.min(1, remaining / settings.duration))})`;
}
function startTest(now) {
  session.status = 'running';
  session.startAt = now;
  session.endAt = now + settings.duration * 1000;
  updateStatus();
  timerId = setInterval(() => {
    if (!session || session.status !== 'running') return;
    const current = Date.now();
    if (current >= session.endAt) finishTest(session.endAt);
    else refreshLive(current);
  }, 100);
}
function paintChanges(previous) {
  const current = session.typedChars;
  let start = 0;
  while (start < previous.length && start < current.length && previous[start] === current[start]) start++;
  if (characterNodes[previous.length]) characterNodes[previous.length].classList.remove('current');
  for (let i = start; i < Math.max(previous.length, current.length) && i < characterNodes.length; i++) {
    const node = characterNodes[i];
    node.classList.remove('correct', 'incorrect');
    if (i < current.length) node.classList.add(current[i] === session.passageChars[i] ? 'correct' : 'incorrect');
  }
  const cursor = characterNodes[current.length];
  if (cursor) {
    cursor.classList.add('current');
    const viewport = $('textViewport');
    const top = cursor.offsetTop;
    const lineHeight = parseFloat(getComputedStyle(viewport).lineHeight) || 40;
    if (top + lineHeight > viewport.scrollTop + viewport.clientHeight) viewport.scrollTop = Math.max(0, top - lineHeight);
    else if (top < viewport.scrollTop) viewport.scrollTop = Math.max(0, top - lineHeight);
  }
}
function playKeySound(isCorrect) {
  if (!settings.sound) return;
  try {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    audioContext = audioContext || new Context();
    if (audioContext.state === 'suspended') audioContext.resume();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = isCorrect ? 440 : 220;
    gain.gain.setValueAtTime(0.018, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.055);
    oscillator.connect(gain); gain.connect(audioContext.destination);
    oscillator.start(); oscillator.stop(audioContext.currentTime + 0.06);
  } catch {  }
}
function onTyping(event) {
  if (!session || session.status === 'finished') return;
  const now = Date.now();
  if (session.status === 'running' && now >= session.endAt) {
    $('typingInput').value = session.typed;
    finishTest(session.endAt);
    return;
  }
  const previous = session.typedChars;
  const nextChars = splitCharacters($('typingInput').value).slice(0, session.passageChars.length);
  const next = nextChars.join('');
  if ($('typingInput').value !== next) $('typingInput').value = next;
  if (session.status === 'waiting' && nextChars.length) startTest(now);
  let prefix = 0;
  while (prefix < previous.length && prefix < nextChars.length && previous[prefix] === nextChars[prefix]) prefix++;
  let suffix = 0;
  while (suffix < previous.length - prefix && suffix < nextChars.length - prefix && previous[previous.length - 1 - suffix] === nextChars[nextChars.length - 1 - suffix]) suffix++;
  const inserted = nextChars.slice(prefix, nextChars.length - suffix);
  let allCorrect = true;
  for (let i = 0; i < inserted.length; i++) {
    session.attempts++;
    if (inserted[i] !== session.passageChars[prefix + i]) { session.errors++; allCorrect = false; }
  }
  if (inserted.length) playKeySound(allCorrect);
  session.typed = next;
  session.typedChars = nextChars;
  paintChanges(previous);
  refreshLive(now);
  if (!event.isComposing) {
    try { $('typingInput').setSelectionRange(next.length, next.length); } catch {}
  }
  if (nextChars.length >= session.passageChars.length && session.status === 'running') finishTest(now);
}
function finishTest(now) {
  if (!session || session.status !== 'running') return;
  clearInterval(timerId); timerId = null;
  const values = currentValues(now);
  session.status = 'finished';
  lastResult = { wpm:values.wpm, accuracy:values.accuracy, errors:values.errors, duration:settings.duration, elapsed:Math.round(values.elapsed), mode:settings.mode, language:settings.language, date:Date.now() };
  history.unshift(lastResult); history = history.slice(0, 100);
  writeStored(HISTORY_KEY, history);
  refreshLive(now);
  updateStatus();
  $('typingInput').disabled = true;
  $('typingView').hidden = true;
  $('resultView').hidden = false;
  $('resultWpm').textContent = String(values.wpm);
  $('resultAccuracy').replaceChildren(document.createTextNode(String(values.accuracy)));
  const percent = document.createElement('span'); percent.textContent = '%'; $('resultAccuracy').append(percent);
  $('resultErrors').textContent = String(values.errors);
  $('resultTime').textContent = `${Math.round(values.elapsed)} s`;
  renderHistory();
  $('resultHeading').focus({ preventScroll:true });
}
function renderHistory() {
  const locale = LANGUAGES[settings.language].locale;
  const best = history.length ? history.reduce((a, b) => b.wpm > a.wpm ? b : a) : null;
  $('bestScore').textContent = best ? String(best.wpm) : '';
  $('bestNumber').hidden = !best;
  $('bestUnit').hidden = !best;
  $('totalTests').textContent = String(history.length);
  $('averageSpeed').textContent = history.length ? String(Math.round(history.reduce((sum, item) => sum + item.wpm, 0) / history.length)) : '—';
  const dateFormat = new Intl.DateTimeFormat(locale, { day:'numeric', month:'short', year:'numeric' });
  const shortDate = new Intl.DateTimeFormat(locale, { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' });
  $('bestCaption').textContent = best ? `${t('bestOn')} ${dateFormat.format(new Date(best.date))}.` : t('firstScore');
  $('clearHistory').hidden = !history.length;
  $('historyEmpty').hidden = history.length > 0;
  $('chartEmpty').hidden = history.length > 0;
  const chart = $('chart'); chart.replaceChildren();
  const recent = history.slice(0, 8).reverse();
  if (recent.length) {
    const max = Math.max(1, ...recent.map(item => item.wpm));
    recent.forEach(item => {
      const bar = document.createElement('div');
      bar.className = 'chart-bar';
      bar.style.height = `${Math.max(5, (item.wpm / max) * 100)}%`;
      bar.title = `${shortDate.format(new Date(item.date))} — ${item.wpm} ${t('wpmShort')}`;
      bar.setAttribute('aria-hidden', 'true');
      chart.append(bar);
    });
    chart.setAttribute('role', 'img');
    chart.setAttribute('aria-label', `${t('chartLabel')}: ${recent.map(item => item.wpm).join(', ')} ${t('wpmShort')}`);
  } else { chart.removeAttribute('role'); chart.removeAttribute('aria-label'); }
  const list = $('historyList'); list.replaceChildren();
  history.slice(0, 4).forEach(item => {
    const li = document.createElement('li');
    const detail = document.createElement('span');
    detail.textContent = `${shortDate.format(new Date(item.date))}  ·  ${item.duration} s`;
    const score = document.createElement('strong');
    score.textContent = `${item.wpm} ${t('wpmShort')}`;
    li.append(detail, score); list.append(li);
  });
  const privacy = document.querySelector('.privacy-note [data-i18n="privacy"]');
  privacy.textContent = storageAvailable ? t('privacy') : t('storageWarning');
}
function canChangeTest() { return session.status !== 'running' || window.confirm(t('confirmChange')); }
function changeSetting(key, value) {
  if (settings[key] === value) return;
  if (!canChangeTest()) { renderStatic(); return; }
  settings[key] = value;
  persistSettings();
  renderStatic();
  resetTest();
}
async function shareResult() {
  if (!lastResult) return;
  const text = `${t('shareText').replace('{wpm}', lastResult.wpm).replace('{accuracy}', lastResult.accuracy)} ${location.href.split('?')[0].split('#')[0]}`;
  $('shareMessage').textContent = '';
  try {
    if (navigator.share) { await navigator.share({ title:'Cadence', text }); $('shareMessage').textContent = t('shared'); return; }
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); $('shareMessage').textContent = t('copied'); return; }
    const temporary = document.createElement('textarea');
    temporary.value = text; temporary.setAttribute('readonly', '');
    temporary.style.position = 'fixed'; temporary.style.left = '-9999px';
    document.body.append(temporary); temporary.select();
    const copied = document.execCommand('copy'); temporary.remove();
    if (!copied) throw new Error('copy unavailable');
    $('shareMessage').textContent = t('copied');
  } catch (error) {
    if (error.name !== 'AbortError') $('shareMessage').textContent = t('copyFailed');
  }
}

function insertIndentation(event) {
  if (event.key !== 'Tab' || event.shiftKey || event.ctrlKey || event.altKey || event.metaKey || !session || session.status === 'finished') return;
  if (settings.mode !== 'code' && settings.mode !== 'custom') return;
  const input = $('typingInput');
  if (input.selectionStart !== session.typed.length || input.selectionEnd !== input.selectionStart) return;
  const line = session.typed.slice(session.typed.lastIndexOf('\n') + 1);
  if (!/^[ \t]*$/.test(line)) return;
  const index = session.typedChars.length;
  const expected = session.passageChars[index];
  let insertion = '';
  if (expected === '\t') insertion = '\t';
  else if (expected === ' ') {
    let column = 0;
    for (const char of line) column += char === '\t' ? 4 - column % 4 : 1;
    const limit = 4 - column % 4;
    let count = 0;
    while (count < limit && session.passageChars[index + count] === ' ') count++;
    insertion = ' '.repeat(count);
  }
  if (!insertion) return;
  event.preventDefault();
  input.setRangeText(insertion, input.selectionStart, input.selectionEnd, 'end');
  input.dispatchEvent(new Event('input', { bubbles:true }));
}
function loadCustomText() {
  const raw = $('customSource').value.replace(/\r\n?/g, '\n');
  if (!raw.trim()) { $('customMessage').textContent = t('customEmpty'); return; }
  if (raw.length > CUSTOM_LIMIT * 8 || splitCharacters(raw).length > CUSTOM_LIMIT) {
    $('customMessage').textContent = t('customTooLong');
    return;
  }
  if (!canChangeTest()) return;
  customText = raw;
  $('customMessage').textContent = t('customLoaded');
  resetTest(true);
}

document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => changeSetting('mode', button.dataset.mode)));
document.querySelectorAll('[data-duration]').forEach(button => button.addEventListener('click', () => changeSetting('duration', Number(button.dataset.duration))));
$('language').addEventListener('change', event => changeSetting('language', event.target.value));
$('codeLanguage').addEventListener('change', event => changeSetting('codeLanguage', event.target.value));
$('nextSnippet').addEventListener('click', () => { if (canChangeTest()) resetTest(true); });
$('useCustom').addEventListener('click', loadCustomText);
$('customSource').addEventListener('input', () => { $('customMessage').textContent = ''; });
$('punctuation').addEventListener('change', event => changeSetting('punctuation', event.target.checked));
$('numbers').addEventListener('change', event => changeSetting('numbers', event.target.checked));
$('sound').addEventListener('change', event => { settings.sound = event.target.checked; persistSettings(); });
$('themeToggle').addEventListener('click', () => { settings.theme = settings.theme === 'light' ? 'dark' : 'light'; persistSettings(); renderStatic(); });
$('typingInput').addEventListener('input', onTyping);
$('typingInput').addEventListener('keydown', insertIndentation);
$('restart').addEventListener('click', () => resetTest(true));
$('playAgain').addEventListener('click', () => resetTest(true));
$('shareResult').addEventListener('click', shareResult);
$('clearHistory').addEventListener('click', () => {
  if (!history.length || !window.confirm(t('confirmClear'))) return;
  history = []; writeStored(HISTORY_KEY, history); renderHistory();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !event.isComposing && !$('installDialog').open && event.target !== $('customSource')) { event.preventDefault(); resetTest(true); }
});
renderStatic();
resetTest();

let deferredInstallPrompt = null;
const standaloneDisplay = window.matchMedia('(display-mode: standalone)');
function syncInstallButton() {
  const installed = standaloneDisplay.matches || navigator.standalone === true;
  $('installButton').hidden = installed || !window.isSecureContext || !('serviceWorker' in navigator) || location.protocol === 'file:';
}
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  syncInstallButton();
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  $('installButton').hidden = true;
});
if (standaloneDisplay.addEventListener) standaloneDisplay.addEventListener('change', syncInstallButton);
else if (standaloneDisplay.addListener) standaloneDisplay.addListener(syncInstallButton);
$('installButton').addEventListener('click', async () => {
  if (deferredInstallPrompt) {
    const prompt = deferredInstallPrompt;
    deferredInstallPrompt = null;
    try {
      await prompt.prompt();
      await prompt.userChoice;
      return;
    } catch {}
  }
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const safariMac = /Macintosh/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent) && !/Chrome|Chromium|CriOS|Edg|OPR/.test(navigator.userAgent);
  $('installHelp').textContent = t(ios ? 'installIOS' : safariMac ? 'installMac' : 'installBrowser');
  $('installDialog').showModal();
});
$('closeInstallDialog').addEventListener('click', () => $('installDialog').close());
syncInstallButton();
if ('serviceWorker' in navigator && window.isSecureContext && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { updateViaCache:'none' }).catch(() => {});
  });
}
