const translations = {
  it: {
    public_means: 'Mezzi pubblici',
    car: 'Auto',
    origin_placeholder: 'Punto di partenza',
    destination_placeholder: 'Punto di destinazione',
    current_position: 'Posizione corrente',
    use_my_position: 'Usa la mia posizione corrente',
    options: 'Opzioni',
    depart_now: 'Partenza ora',
    depart_at: 'Partenza alle',
    max_walking_minutes: 'Durata massima del percorso a piedi fino alla fermata',
    options_text: 'Puoi escludere alcuni tipi di strada nella ricerca del percorso',
    options_car_text: 'In Auto, evita:',
    options_public_means_text: 'Con i mezzi pubblici, evita:',
    save: 'Salva',
    cancel: 'Annulla',
    changes: 'cambi',
    change: 'cambio',
    departure_time: 'Partenza',
    arrival_time: 'Arrivo',
    all_results: 'Tutti i risultati',
    download_pdf: 'Scarica PDF',
    print: 'Stampa',
    with_tolls: 'Con pedaggi',
    funicolar: 'Funicolari',
    train: 'Treni',
    bus: 'Autobus',
    tollroad: 'Pedaggi',
    motorway: 'Autostrade',
    boatFerry: 'Traghetti',
    railFerry: 'Treni traghettati',
    tunnel: 'Gallerie',
    dirtRoad: 'Strade non asfaltate',
    no_results_with_public_means: 'Non ho trovato nessun risultato con i mezzi pubblici',
    no_results_with_car: 'Non ho trovato nessun percorso in auto',
    by_foot: 'A piedi',
    minutes: 'minuti',
    faster_badge: 'PIÚ VELOCE',
    geolocation_no_permissions: 'Non ho i permessi per la geolocalizzazione.',
    geolocation_timeout: 'Non sono riuscito a trovare la tua posizione.',
    is_geolocating: 'Sto cercando…'
  },
  en: {
    public_means: 'Public transport',
    car: 'Car',
    origin_placeholder: 'Starting point',
    destination_placeholder: 'Destination',
    current_position: 'Current position',
    use_my_position: 'Use my position',
    options: 'Options',
    depart_now: 'Depart now',
    depart_at: 'Depart at',
    max_walking_minutes: 'Maximum walking distance to the next stop',
    options_text: 'You can exclude some options for your search',
    options_car_text: 'By car, avoid:',
    options_public_means_text: 'By public transport, avoid:',
    save: 'Save',
    cancel: 'Cancel',
    changes: 'changes',
    change: 'change',
    departure_time: 'Departure',
    arrival_time: 'Arrival',
    all_results: 'All results',
    download_pdf: 'Download PDF',
    print: 'Print',
    with_tolls: 'With tolls',
    funicolar: 'Funicolars',
    train: 'Trains',
    bus: 'Buses',
    tollroad: 'Tolls roads',
    motorway: 'Motorways',
    boatFerry: 'Ferries',
    railFerry: 'Motorail trains',
    tunnel: 'Tunnels',
    dirtRoad: 'Unpaved roads',
    no_results_with_public_means: 'No public transport solutions found',
    no_results_with_car: 'No car route found',
    by_foot: 'By foot',
    minutes: 'minutes',
    faster_badge: 'FASTEST',
    geolocation_no_permissions: 'No geolocation permission granted',
    geolocation_timeout: "Your position couldn't be found.",
    is_geolocating: 'Locating your current position...'
  },
  de: {
    public_means: 'Öffentliche Verkehrsmittel',
    car: 'Auto',
    origin_placeholder: 'Startpunkt',
    destination_placeholder: 'Ziel',
    current_position: 'Mein Standpunkt',
    use_my_position: 'Mein derzeitiger Standpunkt',
    options: 'Einstellungen',
    depart_now: 'Jetzt starten',
    depart_at: 'Start um',
    max_walking_minutes: 'Maximale Dauer der Gehzeit bis zur Haltestelle',
    options_text: 'Bei der Suche folgende Optionen auschließen',
    options_car_text: 'Vermeide mit dem Auto:',
    options_public_means_text: 'Vermeide mit öffentlichen Verkehrsmitteln:',
    save: 'Speichern',
    cancel: 'Abbrechen',
    changes: 'Umstiege',
    change: 'Umstieg',
    departure_time: 'Abfahrt',
    arrival_time: 'Ankunft',
    all_results: 'Alle Ergebnisse',
    download_pdf: 'PDF downloaden',
    print: 'Drucken',
    with_tolls: 'Mautgebühren',
    funicolar: 'Seilbahnen',
    train: 'Züge',
    bus: 'Busse',
    tollroad: 'Mautgebühren',
    motorway: 'Autobahnen',
    boatFerry: 'Fähren',
    railFerry: 'Eisenbahnfähren',
    tunnel: 'Tunnels',
    dirtRoad: 'Nicht asphaltierte Straßen',
    no_results_with_public_means: 'Keine Verbindung mit öffentlichen Verkehrsmitteln gefunden',
    no_results_with_car: 'Keine Auto Route gefunden',
    by_foot: 'Zu Fuß',
    minutes: 'Minuten',
    faster_badge: 'SCHNELLSTE ROUTE',
    geolocation_no_permissions: 'Erlaubnis zur Standortermittlung nicht erteilt.',
    geolocation_timeout: 'Standort konnte nicht ermittelt werden.',
    is_geolocating: 'Standortermittlung im Gange...'
  }
};

const createTranslator = lang => key => translations[lang][key];

export default createTranslator;
