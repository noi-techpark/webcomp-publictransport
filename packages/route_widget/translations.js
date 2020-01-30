const translations = {
  it: {
    public_means: 'Mezzi pubblici',
    car: 'Auto',
    current_position: 'Posizione corrente',
    use_my_position: 'La mia posizione',
    options: 'Opzioni',
    depart_now: 'Partenza ora',
    depart_at: 'Partenza alle',
    options_text: 'Puoi escludere alcuni tipi di strada nella ricerca del percorso.',
    options_car_text: 'IN AUTO, EVITA:',
    options_public_means_text: 'COI MEZZI PUBBLICI, EVITA:',
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
    funicolar: 'Funicolare',
    train: 'Treni',
    bus: 'Autobus',
    tollroad: 'Pedaggi',
    motorway: 'Autostrade',
    boatFerry: 'Traghetto FIXME',
    railFerry: 'Treno traghetto FIXME',
    tunnel: 'Gallerie',
    dirtRoad: 'Strade non asfaltate',
    no_results_with_public_means: 'Nessun risultato trovato con i mezzi pubblici',
    no_results_with_car: 'Nessun percorso trovato in macchina',
    by_foot: `A piedi `,
    minutes: 'minuti',
    faster_badge: 'PIÚ VELOCE',
    geolocation_no_permissions: 'Non hai dato i permessi per la geolocalizzazione. Per piacere attivali e riprova.',
    geolocation_timeout: 'Non è stato possibile geolocalizzarti.',
    is_geolocating: 'Ti sto localizzando'
  },
  en: {
    public_means: 'Public means',
    car: 'Car',
    current_position: 'Current position',
    use_my_position: 'Use my position',
    options: 'Options',
    depart_now: 'Depart now',
    depart_at: 'Depart at',
    options_text: '',
    options_car_text: 'By car, avoid:',
    options_public_means_text: 'By public  means, avoid:',
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
    funicolar: 'Funicolar',
    train: 'Trains',
    bus: 'Buses',
    tollroad: 'Tolls roads',
    motorway: 'Motorways',
    boatFerry: 'Ferries',
    railFerry: 'Motorail trains',
    tunnel: 'Tunnels',
    dirtRoad: 'Unpaved Roads',
    no_results_with_public_means: 'No results found with public means',
    no_results_with_car: 'Nessun percorso trovato in macchina',
    by_foot: `By foot`,
    minutes: 'minutes',
    faster_badge: 'FASTER',
    geolocation_no_permissions: 'No geolocation permissions given',
    is_geolocating: 'Ti sto localizzando',
    geolocation_timeout: 'It was not possible to geolocate you.'
  },
  de: {
    public_means: 'placeholder',
    car: 'placeholder',
    current_position: 'placeholder',
    use_my_position: 'placeholder',
    options: 'placeholder',
    depart_now: 'placeholder',
    depart_at: 'placeholder',
    options_text: 'placeholder',
    options_car_text: 'placeholder',
    options_public_means_text: 'placeholder',
    save: 'placeholder',
    cancel: 'placeholder',
    changes: 'placeholder',
    change: 'placeholder',
    departure_time: 'placeholder',
    arrival_time: 'placeholder',
    all_results: 'placeholder',
    download_pdf: 'placeholder',
    print: 'placeholder',
    with_tolls: 'placeholder',
    funicolar: 'Funicolare',
    train: 'Treni',
    bus: 'Autobus',
    tollroad: 'Pedaggi',
    motorway: 'Autostrade',
    boatFerry: 'baba',
    railFerry: 'bababa',
    tunnel: 'Gallerie',
    dirtRoad: 'Strade non asfaltate',
    no_results_with_public_means: 'No results found with public means',
    no_results_with_car: 'Nessun percorso trovato in macchina',
    by_foot: `By foot`,
    minutes: 'minutes',
    faster_badge: 'PIÚ VELOCE',
    geolocation_no_permissions: 'Non hai dato i permessi per la geolocalizzazione. Per piacere attivali e riprova.',
    geolocation_timeout: 'Non è stato possibile geolocalizzarti.',
    is_geolocating: 'Ti sto localizzando'
  }
};

const createTranslator = lang => key => translations[lang][key];

export default createTranslator;
