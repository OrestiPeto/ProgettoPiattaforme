STUDENTE: Oresti Peto

MATRICOLA: 30833

# MUSEI - Regione Marche

## Descrizione e scopo del servizio

Le Marche è una regione poco conosciuta ma la sua storia non è da sottovalutare, l'obbietivo della piattaforma e quello di mostrare i musei
presenti nella sua regione così da scoprirli.
La piattaforma uttilizza i dati forniti dalla regione (http://www.datiopen.it) attraverso delle API ed un sito web.

Il sito web permetterà di:
- cercare i musei presenti nella regione
- aggiungere nuovi luoghi alla lista dei musei

## Descrizione di architettura e scelte implementative

La piattaforma è basata su NodeJs ed i dati uttilizzati sono forniti tramite file CSV senza apportarli nessuna modifica.
Tale scelta e dovuta dal fatto che i file CSV e composta come un dato che rappresenta un punto d'intersse.

Il back-end è composto da JS e alcuni moduli:
- express: per usare NodeJs
- fs: per manipolare i file
- ejs: per effettuare il render delle pagine HTML con JS

## Documentazione API

- progetto-piattaforme-oresti-peto.glitch.me \
  Endpoint GET che restituisce la pagina iniziale \
  INPUT: niente \
  OUTPUT: views/index.html
 
- progetto-piattaforme-oresti-peto.glitch.me/dati \
  Endpoin GET che fornisce tutti i dati contenuti nel file Musei.csv \
  INPUT: niente \
  OUTPUT: views/musei.csv
  
- progetto-piattaforme-oresti-peto.glitch.me/inserisci \
  Endpoint GET che fornisce la pagina web per l'inserimento di nuovi musei \
  INPUT: niente \
  OUTPUT: views/inserisci.html
  
Per alcuni endpoint è stato scelto di utilizzare una funzione di conversione da CSV ad array, presa dal seguente link: (https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm) per poter lavorare meglio con i dati.
  ## Servizio online
  https://progetto-piattaforme-oresti-peto.glitch.me
  
  ## Utilizzo del servizio
  
  ### Interfaccia
  
  ![2023-02-12 (4)](https://user-images.githubusercontent.com/124849452/218340258-71c7297c-4771-49a4-8a22-6d721252a12b.png)
  
  ### inserimento
  
  L'uttente dovrà compilare i seguenti campi per aggiungere il museo
  
  ![2023-02-12 (7)](https://user-images.githubusercontent.com/124849452/218340472-e941eef1-d3d1-4b2a-b872-81d107d179c6.png)
  
  ## Postman 
  
  ### Ricerca
  
  Per la ricerca dei musei nella regione delle marche utilizziamo postman come su immagine \
  es:
  ![2023-02-12 (9)](https://user-images.githubusercontent.com/124849452/218340815-211722fb-2e89-4230-a3e2-ff07a2200c35.png)

  

  

 

