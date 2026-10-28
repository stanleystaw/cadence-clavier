/* Cadence: a private-by-default typing exercise. No backend or analytics. */
'use strict';

const LANGUAGES = {
  fr: {
    label: 'Français', locale: 'fr-FR',
    words: `bonjour monde rythme matin encore ensemble lumière chemin moment sourire facile demain écrire fenêtre clavier calme penser juste couleur détail parole voyager musique papier fenêtre vivre toujours assez étoile lettre livre fleur histoire nuage mémoire grande famille souffle écouter heureux rivière soleil minute beaucoup bientôt douceur calme forêt temps parfois petite place autour confiance lenteur découvrir mouvement jardin rapide aller penser simple chaque monde penser attention tendre comprendre langue ensemble trouver regarder nuit silence marche compter grand paysage envie maison saison apprendre chaque plaisir naturel avancer précieux hier chemin coeur accueil attendre demain passage long histoire accord enfant quelque vraiment dehors jamais dedans aimer réussir ligne minute atelier chemin découvrir heure feuille matin nature amis continuer aujourd'hui écoute devenir tranquille espace raison juste petite liberté valeur idée grand chance sourire horizon rythme plaisir`.split(/\s+/),
    sentences: [
      `Le matin, la ville se réveille doucement et les premières lumières dansent sur les fenêtres.`,
      `Prendre son temps ne veut pas dire rester immobile, mais avancer avec attention.`,
      `Une bonne idée commence parfois par une simple question posée au bon moment.`,
      `Les petites habitudes donnent de grands résultats quand on les répète chaque jour.`,
      `Au bout du chemin, le jardin sentait la pluie et les feuilles fraîchement tombées.`,
      `Écrire avec précision devient plus facile lorsque les mains trouvent leur propre rythme.`,
      `Les mots ont le pouvoir de rapprocher les personnes, même à travers les kilomètres.`,
      `La curiosité ouvre des portes que la vitesse seule ne permet pas de voir.`,
      `Un café chaud, une page blanche et le calme peuvent suffire pour bien commencer.`,
      `Chaque erreur corrigée est une occasion de comprendre et de recommencer autrement.`
    ],
    ui: {
      skip:'Aller au test', headerDescriptor:'Un espace pour mieux taper', preferences:'Préférences', activityLink:'Votre activité', languageLabel:'Langue du test et de l’interface',
      introKicker:'Votre moment à vous', headline:'Trouvez votre rythme.', introText:'Quelques mots, un peu de temps. Faites le point sur votre frappe et progressez à votre rythme.', introAside:'Moins de précipitation.\nPlus de précision.',
      testTitle:'Test de frappe', ready:'Prêt quand vous l’êtes', running:'Test en cours', finished:'Test terminé', format:'Format', words:'Mots', sentences:'Phrases', duration:'Durée', yourText:'Votre texte', remaining:'Temps restant', inputLabel:'Tapez le texte affiché ici', typingHint:'Commencez à taper pour lancer le chrono.', runningHint:'Continuez à taper, vous pouvez corriger vos erreurs.', restart:'Recommencer', resultOverline:'Test terminé', resultHeading:'Bien joué.', resultDescription:'Voici votre résultat. Chaque test est un nouveau point de départ.', wpmLong:'mots / min', speed:'Vitesse', wpmShort:'mots/min', accuracy:'Précision', errors:'Erreurs', keystrokes:'frappes', playAgain:'Faire un autre test', share:'Partager le résultat', liveStats:'Statistiques en direct', options:'Options', punctuation:'Ponctuation', numbers:'Chiffres', sound:'Son', howScores:'Comment sont calculés les scores ?', scoreExplanation:'La vitesse compte 5 caractères corrects par mot. La précision tient compte de toutes vos frappes, même celles que vous corrigez.', activity:'Votre activité', personalBest:'Record personnel', firstScore:'Votre premier score vous attend.', bestOn:'Record établi le', completedTests:'Tests terminés', averageSpeed:'Vitesse moyenne', progress:'Votre progression', lastEight:'8 derniers tests', chartEmpty:'Votre progression apparaîtra ici après un premier test.', recentTests:'Tests récents', clearHistory:'Effacer', historyEmpty:'Pas encore de test terminé.', privacy:'Vos résultats restent sur cet appareil.', footer:'Une petite pause pour votre clavier.', keyboardHint:'pour recommencer', escape:'Échap', dark:'Sombre', light:'Clair', confirmChange:'Le test en cours sera interrompu. Voulez-vous continuer ?', confirmClear:'Effacer tous les résultats enregistrés sur cet appareil ?', shared:'Résultat partagé.', copied:'Résultat copié.', copyFailed:'Copie impossible. Vérifiez les autorisations de votre navigateur.', shareText:'J’ai atteint {wpm} mots/min avec {accuracy} % de précision sur Cadence. À vous de jouer :', chartLabel:'Vitesse des derniers tests', saved:'Enregistré sur cet appareil', storageWarning:'La sauvegarde locale est indisponible dans ce navigateur.'
    }
  },
  en: {
    label: 'English', locale: 'en-GB',
    words: `morning simple gentle little around world rhythm always wonder window quiet listen language orange people river better garden spring practice answer journey across enough together slowly planet letter writing thoughtful change autumn light careful bring different mountain family discover honest clear time story useful place beautiful book create friendly follow almost smile today paper between learn calm welcome words minute sound nature open evening warm future bright common dream table remember keyboard focus moment choose patience wonderful path soft favourite walk simple way enjoy breathe build small steady question ready number coffee explore home start fresh`.split(/\s+/),
    sentences: [
      `The morning light moved slowly across the table as the city began to wake.`,
      `Taking your time does not mean standing still; it means moving with intention.`,
      `A good idea often begins with a simple question at just the right moment.`,
      `Small habits can lead to remarkable progress when you return to them each day.`,
      `At the end of the path, the garden smelled of rain and freshly fallen leaves.`,
      `Typing accurately becomes easier when your hands find a rhythm of their own.`,
      `Words have a way of bringing people closer, even across a great distance.`,
      `Curiosity opens doors that speed alone might never help us notice.`,
      `A warm cup, a blank page and a little quiet can be a wonderful beginning.`,
      `Every mistake you correct is a chance to learn and start again.`
    ],
    ui: {
      skip:'Skip to the test', headerDescriptor:'A little space to type better', preferences:'Preferences', activityLink:'Your activity', languageLabel:'Test and interface language', introKicker:'A moment for yourself', headline:'Find your rhythm.', introText:'A few words, a little time. See how you type and improve at your own pace.', introAside:'Less rushing.\nMore accuracy.', testTitle:'Typing test', ready:'Ready when you are', running:'Test in progress', finished:'Test complete', format:'Format', words:'Words', sentences:'Sentences', duration:'Duration', yourText:'Your text', remaining:'Time remaining', inputLabel:'Type the displayed text here', typingHint:'Start typing to begin the timer.', runningHint:'Keep typing; you can correct your mistakes.', restart:'Restart', resultOverline:'Test complete', resultHeading:'Nicely done.', resultDescription:'Here is your result. Every test is a fresh starting point.', wpmLong:'words / min', speed:'Speed', wpmShort:'words/min', accuracy:'Accuracy', errors:'Errors', keystrokes:'keystrokes', playAgain:'Take another test', share:'Share result', liveStats:'Live statistics', options:'Options', punctuation:'Punctuation', numbers:'Numbers', sound:'Sound', howScores:'How are scores calculated?', scoreExplanation:'Speed counts 5 correct characters per word. Accuracy includes every keystroke, even the ones you correct.', activity:'Your activity', personalBest:'Personal best', firstScore:'Your first score is waiting.', bestOn:'Record set on', completedTests:'Completed tests', averageSpeed:'Average speed', progress:'Your progress', lastEight:'Last 8 tests', chartEmpty:'Your progress will appear here after your first test.', recentTests:'Recent tests', clearHistory:'Clear', historyEmpty:'No completed tests yet.', privacy:'Your results stay on this device.', footer:'A little break for your keyboard.', keyboardHint:'to restart', escape:'Esc', dark:'Dark', light:'Light', confirmChange:'Your current test will be interrupted. Continue?', confirmClear:'Clear all results saved on this device?', shared:'Result shared.', copied:'Result copied.', copyFailed:'Could not copy. Check your browser permissions.', shareText:'I reached {wpm} words/min with {accuracy}% accuracy on Cadence. Your turn:', chartLabel:'Speed in recent tests', saved:'Saved on this device', storageWarning:'Local storage is unavailable in this browser.'
    }
  },
  es: {
    label: 'Español', locale: 'es-ES',
    words: `mañana mundo ritmo camino palabra juntos luz momento sonrisa fácil ventana teclado calma pensar color detalle viajar música papel vivir siempre estrella letra libro flor historia nube memoria familia respirar escuchar feliz río sol minuto pronto ternura bosque tiempo pequeño lugar alrededor confianza descubrir movimiento jardín rápido sencillo cada atención comprender idioma encontrar mirar noche silencio caminar contar paisaje deseo casa estación aprender placer natural avanzar querido ayer corazón llegada esperar mañana largo historia acuerdo niño algo fuera nunca dentro amar línea taller hoja naturaleza amigos continuar hoy espacio razón libertad valor idea suerte horizonte alegría escribir paciencia abrazo bonito lluvia pregunta verdad sueño inicio ciudad cerca claro compartir aire campo fuerte suave ventana primero proyecto ejemplo futuro`.split(/\s+/),
    sentences: [
      `Por la mañana, la ciudad despierta despacio y la luz se refleja en las ventanas.`,
      `Tomarse el tiempo necesario no significa detenerse, sino avanzar con atención.`,
      `Una buena idea puede empezar con una pregunta sencilla en el momento justo.`,
      `Los pequeños hábitos dan grandes resultados cuando se practican cada día.`,
      `Al final del camino, el jardín olía a lluvia y a hojas recién caídas.`,
      `Escribir con precisión resulta más fácil cuando las manos encuentran su ritmo.`,
      `Las palabras pueden acercar a las personas incluso a través de la distancia.`,
      `La curiosidad abre puertas que la velocidad por sí sola no nos deja ver.`,
      `Una taza caliente, una página en blanco y un poco de calma son un buen comienzo.`,
      `Cada error que corriges es una oportunidad para aprender y volver a empezar.`
    ],
    ui: {
      skip:'Ir a la prueba', headerDescriptor:'Un espacio para escribir mejor', preferences:'Preferencias', activityLink:'Tu actividad', languageLabel:'Idioma de la prueba y de la interfaz', introKicker:'Un momento para ti', headline:'Encuentra tu ritmo.', introText:'Unas palabras y un poco de tiempo. Conoce tu escritura y mejora a tu propio ritmo.', introAside:'Menos prisa.\nMás precisión.', testTitle:'Prueba de escritura', ready:'Todo listo para empezar', running:'Prueba en curso', finished:'Prueba terminada', format:'Formato', words:'Palabras', sentences:'Frases', duration:'Duración', yourText:'Tu texto', remaining:'Tiempo restante', inputLabel:'Escribe aquí el texto mostrado', typingHint:'Empieza a escribir para iniciar el cronómetro.', runningHint:'Sigue escribiendo; puedes corregir tus errores.', restart:'Reiniciar', resultOverline:'Prueba terminada', resultHeading:'Bien hecho.', resultDescription:'Este es tu resultado. Cada prueba es un nuevo punto de partida.', wpmLong:'palabras / min', speed:'Velocidad', wpmShort:'palabras/min', accuracy:'Precisión', errors:'Errores', keystrokes:'pulsaciones', playAgain:'Hacer otra prueba', share:'Compartir resultado', liveStats:'Estadísticas en directo', options:'Opciones', punctuation:'Puntuación', numbers:'Números', sound:'Sonido', howScores:'¿Cómo se calculan los resultados?', scoreExplanation:'La velocidad cuenta 5 caracteres correctos por palabra. La precisión incluye todas las pulsaciones, incluso las corregidas.', activity:'Tu actividad', personalBest:'Récord personal', firstScore:'Tu primer resultado te espera.', bestOn:'Récord obtenido el', completedTests:'Pruebas terminadas', averageSpeed:'Velocidad media', progress:'Tu progreso', lastEight:'Últimas 8 pruebas', chartEmpty:'Tu progreso aparecerá aquí después de tu primera prueba.', recentTests:'Pruebas recientes', clearHistory:'Borrar', historyEmpty:'Aún no hay pruebas terminadas.', privacy:'Tus resultados se guardan en este dispositivo.', footer:'Una pequeña pausa para tu teclado.', keyboardHint:'para reiniciar', escape:'Esc', dark:'Oscuro', light:'Claro', confirmChange:'Se interrumpirá la prueba actual. ¿Quieres continuar?', confirmClear:'¿Borrar todos los resultados guardados en este dispositivo?', shared:'Resultado compartido.', copied:'Resultado copiado.', copyFailed:'No se pudo copiar. Comprueba los permisos del navegador.', shareText:'He alcanzado {wpm} palabras/min con un {accuracy} % de precisión en Cadence. Te toca:', chartLabel:'Velocidad en las últimas pruebas', saved:'Guardado en este dispositivo', storageWarning:'El almacenamiento local no está disponible en este navegador.'
    }
  },
  pt: {
    label: 'Português', locale: 'pt-BR',
    words: `amanhã mundo ritmo caminho palavra juntos luz momento sorriso fácil janela teclado calma pensar cor detalhe viajar música papel viver sempre estrela letra livro flor história nuvem memória família respirar ouvir feliz rio sol minuto breve carinho floresta tempo pequeno lugar perto confiança descobrir movimento jardim rápido simples cada atenção entender língua encontrar olhar noite silêncio caminhar contar paisagem vontade casa estação aprender prazer natural avançar querido ontem coração chegada esperar longo acordo criança algo fora nunca dentro amar linha oficina folha natureza amigos continuar hoje espaço razão liberdade valor ideia sorte horizonte alegria escrever paciência abraço bonito chuva pergunta verdade sonho começo cidade perto claro compartilhar ar campo forte suave primeiro projeto exemplo futuro manhã presença palavra`.split(/\s+/),
    sentences: [
      `Pela manhã, a cidade acorda devagar e a luz dança sobre as janelas.`,
      `Ter calma não significa ficar parado, mas avançar com atenção.`,
      `Uma boa ideia pode começar com uma pergunta simples no momento certo.`,
      `Pequenos hábitos trazem grandes resultados quando são praticados todos os dias.`,
      `No fim do caminho, o jardim tinha cheiro de chuva e de folhas recém caídas.`,
      `Digitar com precisão fica mais fácil quando as mãos encontram seu próprio ritmo.`,
      `As palavras têm o poder de aproximar as pessoas, mesmo a longas distâncias.`,
      `A curiosidade abre portas que a velocidade sozinha não nos deixa enxergar.`,
      `Uma bebida quente, uma página em branco e um pouco de silêncio são um bom começo.`,
      `Cada erro corrigido é uma oportunidade de aprender e começar de novo.`
    ],
    ui: {
      skip:'Ir para o teste', headerDescriptor:'Um espaço para digitar melhor', preferences:'Preferências', activityLink:'Sua atividade', languageLabel:'Idioma do teste e da interface', introKicker:'Um momento para você', headline:'Encontre seu ritmo.', introText:'Algumas palavras e um pouco de tempo. Conheça sua digitação e melhore no seu ritmo.', introAside:'Menos pressa.\nMais precisão.', testTitle:'Teste de digitação', ready:'Tudo pronto para começar', running:'Teste em andamento', finished:'Teste concluído', format:'Formato', words:'Palavras', sentences:'Frases', duration:'Duração', yourText:'Seu texto', remaining:'Tempo restante', inputLabel:'Digite aqui o texto exibido', typingHint:'Comece a digitar para iniciar o cronômetro.', runningHint:'Continue digitando; você pode corrigir seus erros.', restart:'Recomeçar', resultOverline:'Teste concluído', resultHeading:'Muito bem.', resultDescription:'Este é seu resultado. Cada teste é um novo ponto de partida.', wpmLong:'palavras / min', speed:'Velocidade', wpmShort:'palavras/min', accuracy:'Precisão', errors:'Erros', keystrokes:'toques', playAgain:'Fazer outro teste', share:'Compartilhar resultado', liveStats:'Estatísticas em tempo real', options:'Opções', punctuation:'Pontuação', numbers:'Números', sound:'Som', howScores:'Como os resultados são calculados?', scoreExplanation:'A velocidade conta 5 caracteres corretos por palavra. A precisão inclui todos os toques, mesmo os corrigidos.', activity:'Sua atividade', personalBest:'Recorde pessoal', firstScore:'Seu primeiro resultado está esperando.', bestOn:'Recorde feito em', completedTests:'Testes concluídos', averageSpeed:'Velocidade média', progress:'Seu progresso', lastEight:'Últimos 8 testes', chartEmpty:'Seu progresso aparecerá aqui depois do primeiro teste.', recentTests:'Testes recentes', clearHistory:'Apagar', historyEmpty:'Nenhum teste concluído ainda.', privacy:'Seus resultados ficam neste dispositivo.', footer:'Uma pequena pausa para seu teclado.', keyboardHint:'para recomeçar', escape:'Esc', dark:'Escuro', light:'Claro', confirmChange:'O teste atual será interrompido. Deseja continuar?', confirmClear:'Apagar todos os resultados salvos neste dispositivo?', shared:'Resultado compartilhado.', copied:'Resultado copiado.', copyFailed:'Não foi possível copiar. Verifique as permissões do navegador.', shareText:'Alcancei {wpm} palavras/min com {accuracy}% de precisão no Cadence. Sua vez:', chartLabel:'Velocidade nos últimos testes', saved:'Salvo neste dispositivo', storageWarning:'O armazenamento local não está disponível neste navegador.'
    }
  },
  de: {
    label: 'Deutsch', locale: 'de-DE',
    words: `morgen welt rhythmus weg wörter zusammen licht augenblick lächeln einfach fenster tastatur ruhe denken farbe detail reisen musik papier leben immer stern buch blume geschichte wolke erinnerung familie atmen hören glücklich fluss sonne minute bald wald zeit klein ort vertrauen entdecken bewegung garten schnell langsam klar aufmerksamkeit verstehen sprache finden schauen nacht stille gehen zählen landschaft wunsch haus jahreszeit lernen freude natürlich gestern herz warten lang kind draußen lieben zeile werkstatt blatt natur freunde heute raum freiheit wert idee glück horizont geduld umarmung schön regen frage wahrheit traum anfang stadt teilen luft feld stark sanft zuerst zukunft morgen übung freundlich wissen möchten glauben sommer ändern grüßen ruhig plötzlich`.split(/\s+/),
    sentences: [
      `Am Morgen erwacht die Stadt langsam und das Licht tanzt auf den Fenstern.`,
      `Sich Zeit zu nehmen bedeutet nicht stillzustehen, sondern bewusst voranzugehen.`,
      `Eine gute Idee beginnt oft mit einer einfachen Frage zum richtigen Zeitpunkt.`,
      `Kleine Gewohnheiten führen zu großen Ergebnissen, wenn man sie täglich pflegt.`,
      `Am Ende des Weges roch der Garten nach Regen und frisch gefallenem Laub.`,
      `Genaues Tippen fällt leichter, wenn die Hände ihren eigenen Rhythmus finden.`,
      `Worte können Menschen einander näherbringen, selbst über große Entfernungen.`,
      `Neugier öffnet Türen, die Geschwindigkeit allein nicht sichtbar machen kann.`,
      `Eine warme Tasse, eine leere Seite und etwas Ruhe sind ein guter Anfang.`,
      `Jeder korrigierte Fehler ist eine Gelegenheit, zu lernen und neu zu beginnen.`
    ],
    ui: {
      skip:'Zum Test springen', headerDescriptor:'Ein Ort, um besser zu tippen', preferences:'Einstellungen', activityLink:'Deine Aktivität', languageLabel:'Sprache des Tests und der Oberfläche', introKicker:'Ein Moment für dich', headline:'Finde deinen Rhythmus.', introText:'Ein paar Wörter und etwas Zeit. Entdecke dein Tipptempo und verbessere dich in deinem eigenen Rhythmus.', introAside:'Weniger Eile.\nMehr Genauigkeit.', testTitle:'Tipptest', ready:'Bereit, wenn du es bist', running:'Test läuft', finished:'Test beendet', format:'Format', words:'Wörter', sentences:'Sätze', duration:'Dauer', yourText:'Dein Text', remaining:'Verbleibende Zeit', inputLabel:'Tippe hier den angezeigten Text', typingHint:'Beginne zu tippen, um die Zeit zu starten.', runningHint:'Tippe weiter; du kannst deine Fehler korrigieren.', restart:'Neu starten', resultOverline:'Test beendet', resultHeading:'Gut gemacht.', resultDescription:'Hier ist dein Ergebnis. Jeder Test ist ein neuer Anfang.', wpmLong:'Wörter / Min.', speed:'Tempo', wpmShort:'Wörter/Min.', accuracy:'Genauigkeit', errors:'Fehler', keystrokes:'Anschläge', playAgain:'Neuen Test starten', share:'Ergebnis teilen', liveStats:'Live-Statistiken', options:'Optionen', punctuation:'Satzzeichen', numbers:'Zahlen', sound:'Ton', howScores:'Wie werden die Ergebnisse berechnet?', scoreExplanation:'Für das Tempo zählen 5 korrekte Zeichen als ein Wort. Die Genauigkeit berücksichtigt alle Anschläge, auch korrigierte.', activity:'Deine Aktivität', personalBest:'Persönlicher Rekord', firstScore:'Dein erstes Ergebnis wartet auf dich.', bestOn:'Rekord vom', completedTests:'Beendete Tests', averageSpeed:'Durchschnittstempo', progress:'Dein Fortschritt', lastEight:'Letzte 8 Tests', chartEmpty:'Nach deinem ersten Test erscheint hier dein Fortschritt.', recentTests:'Letzte Tests', clearHistory:'Löschen', historyEmpty:'Noch keine Tests beendet.', privacy:'Deine Ergebnisse bleiben auf diesem Gerät.', footer:'Eine kleine Pause für deine Tastatur.', keyboardHint:'zum Neustarten', escape:'Esc', dark:'Dunkel', light:'Hell', confirmChange:'Der laufende Test wird abgebrochen. Fortfahren?', confirmClear:'Alle auf diesem Gerät gespeicherten Ergebnisse löschen?', shared:'Ergebnis geteilt.', copied:'Ergebnis kopiert.', copyFailed:'Kopieren nicht möglich. Prüfe die Browserberechtigungen.', shareText:'Ich habe auf Cadence {wpm} Wörter/Min. mit {accuracy} % Genauigkeit erreicht. Du bist dran:', chartLabel:'Tempo der letzten Tests', saved:'Auf diesem Gerät gespeichert', storageWarning:'Der lokale Speicher ist in diesem Browser nicht verfügbar.'
    }
  }
};

const SETTINGS_KEY = 'cadence.settings.v1';
const HISTORY_KEY = 'cadence.history.v1';
const DEFAULT_SETTINGS = { language:'fr', mode:'words', duration:30, punctuation:false, numbers:false, sound:false, theme:'light' };
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
if (!['words','sentences'].includes(settings.mode)) settings.mode = 'words';
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

const t = key => LANGUAGES[settings.language].ui[key] || LANGUAGES.fr.ui[key] || key;
function persistSettings() { writeStored(SETTINGS_KEY, settings); }
function formatClock(seconds) {
  const value = Math.max(0, Math.ceil(seconds));
  return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
}
function randomItem(items) { return items[Math.floor(Math.random() * items.length)]; }
function buildPassage() {
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
  document.querySelector('meta[name="theme-color"]').content = settings.theme === 'dark' ? '#192e27' : '#dce7df';
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => { node.setAttribute('aria-label', t(node.dataset.i18nAria)); });
  $('language').value = settings.language;
  $('language').setAttribute('aria-label', t('languageLabel'));
  $('typingLanguage').textContent = language.label;
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
function createCharacterNodes(text) {
  const fragment = document.createDocumentFragment();
  characterNodes = Array.from(text, char => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = char;
    fragment.appendChild(span);
    return span;
  });
  $('passage').replaceChildren(fragment);
  if (characterNodes[0]) characterNodes[0].classList.add('current');
  $('accessiblePassage').textContent = text;
}
function resetTest(shouldFocus = false) {
  clearInterval(timerId); timerId = null;
  const passage = buildPassage();
  session = { status:'waiting', passage, typed:'', attempts:0, errors:0, startAt:0, endAt:0 };
  lastResult = null;
  $('typingInput').value = '';
  $('typingInput').disabled = false;
  $('typingView').hidden = false;
  $('resultView').hidden = true;
  $('textViewport').scrollTop = 0;
  $('shareMessage').textContent = '';
  createCharacterNodes(passage);
  updateStatus();
  $('timer').textContent = formatClock(settings.duration);
  $('wpm').textContent = '0';
  $('accuracy').textContent = '100';
  $('errors').textContent = '0';
  if (shouldFocus) $('typingInput').focus({ preventScroll:true });
}
function countCorrect(typed, expected) {
  let count = 0;
  for (let i = 0; i < typed.length; i++) if (typed[i] === expected[i]) count++;
  return count;
}
function currentValues(now = Date.now()) {
  const elapsed = session.startAt ? Math.min(settings.duration, Math.max((now - session.startAt) / 1000, 1)) : 0;
  const correct = countCorrect(session.typed, session.passage);
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
  $('timer').textContent = formatClock(session.status === 'waiting' ? settings.duration : Math.max(0, (session.endAt - now) / 1000));
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
  const current = session.typed;
  let start = 0;
  while (start < previous.length && start < current.length && previous[start] === current[start]) start++;
  if (characterNodes[previous.length]) characterNodes[previous.length].classList.remove('current');
  for (let i = start; i < Math.max(previous.length, current.length) && i < characterNodes.length; i++) {
    const node = characterNodes[i];
    node.classList.remove('correct', 'incorrect');
    if (i < current.length) node.classList.add(current[i] === session.passage[i] ? 'correct' : 'incorrect');
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
  } catch { /* Audio is an optional enhancement. */ }
}
function onTyping(event) {
  if (!session || session.status === 'finished') return;
  const now = Date.now();
  if (session.status === 'running' && now >= session.endAt) {
    $('typingInput').value = session.typed;
    finishTest(session.endAt);
    return;
  }
  const previous = session.typed;
  const next = $('typingInput').value.slice(0, session.passage.length);
  if ($('typingInput').value !== next) $('typingInput').value = next;
  if (session.status === 'waiting' && next.length) startTest(now);
  let prefix = 0;
  while (prefix < previous.length && prefix < next.length && previous[prefix] === next[prefix]) prefix++;
  let suffix = 0;
  while (suffix < previous.length - prefix && suffix < next.length - prefix && previous[previous.length - 1 - suffix] === next[next.length - 1 - suffix]) suffix++;
  const inserted = next.slice(prefix, next.length - suffix);
  let allCorrect = true;
  for (let i = 0; i < inserted.length; i++) {
    session.attempts++;
    if (inserted[i] !== session.passage[prefix + i]) { session.errors++; allCorrect = false; }
  }
  if (inserted.length) playKeySound(allCorrect);
  session.typed = next;
  paintChanges(previous);
  refreshLive(now);
  if (!event.isComposing) {
    try { $('typingInput').setSelectionRange(next.length, next.length); } catch { /* Some input methods manage their own selection. */ }
  }
  if (next.length >= session.passage.length && session.status === 'running') finishTest(now);
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
  $('resultDescription').textContent = t('resultDescription');
  renderHistory();
  $('resultHeading').focus({ preventScroll:true });
}
function renderHistory() {
  const locale = LANGUAGES[settings.language].locale;
  const best = history.length ? history.reduce((a, b) => b.wpm > a.wpm ? b : a) : null;
  $('bestScore').textContent = best ? String(best.wpm) : '—';
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

document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => changeSetting('mode', button.dataset.mode)));
document.querySelectorAll('[data-duration]').forEach(button => button.addEventListener('click', () => changeSetting('duration', Number(button.dataset.duration))));
$('language').addEventListener('change', event => changeSetting('language', event.target.value));
$('punctuation').addEventListener('change', event => changeSetting('punctuation', event.target.checked));
$('numbers').addEventListener('change', event => changeSetting('numbers', event.target.checked));
$('sound').addEventListener('change', event => { settings.sound = event.target.checked; persistSettings(); });
$('themeToggle').addEventListener('click', () => { settings.theme = settings.theme === 'light' ? 'dark' : 'light'; persistSettings(); renderStatic(); });
$('typingInput').addEventListener('input', onTyping);
$('restart').addEventListener('click', () => resetTest(true));
$('playAgain').addEventListener('click', () => resetTest(true));
$('shareResult').addEventListener('click', shareResult);
$('clearHistory').addEventListener('click', () => {
  if (!history.length || !window.confirm(t('confirmClear'))) return;
  history = []; writeStored(HISTORY_KEY, history); renderHistory();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !event.isComposing) { event.preventDefault(); resetTest(true); }
});
renderStatic();
resetTest();
