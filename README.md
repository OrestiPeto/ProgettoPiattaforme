STUDENTE: Oresti Peto

MATRICOLA: 30833

# MUSEI - Regione Marche

## Descrizione e scopo del servizio

Le Marche è una regione poco conosciuta ma la sua storia non è da sottovalutare, l'obbietivo della piattaforma e quello di mostrare i musei
presenti nella sua regione così da scoprirli.
La piattaforma uttilizza i dati forniti dalla regione [(http://www.datiopen.it)](http://www.datiopen.it) attraverso delle API ed un sito web.

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

Per poter aggiungere un nuovo museo bisogna inserire:
- didascalia
- denominazione
- località
- indirizzo
- civico
- comune
- telefono
- email
- sito web
- categoria
- categoria secondaria
- latitudine
- longitudine
- orario
- note orario
- ingresso
- 
