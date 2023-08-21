Realisation d'une Todo Liste ne js
résumé de la structure et de l'organisation du code pour cette todo list en JavaScript moderne :

                #index.html
Fichier HTML principal
Contient les éléments statiques : div pour la liste, formulaire, etc
Importe les fichiers CSS et JavaScript

                #style.css
Feuille de style
Définit les styles pour les éléments HTML

            #TodoItem.js
Classes JS
Exporte la classe TodoItem
Représente un todo
Propriétés : text, completed

                #TodoList.js
Classes JS
Importe TodoItem
Exporte TodoList
Représente la liste complète
Propriétés : tous les todos
Méthodes : ajouter, supprimer, compléter des todos

                #app.js
Code JS principal
Importe TodoList
Sélectionne et manipule les éléments HTML
Gère les évènements : soumission du formulaire, clic sur un todo
Appelle les méthodes de TodoList pour modifier les données
On a donc :

index.html : squelette HTML
styles.css : mise en forme
Classes JS : modélisation des données (TodoItem, TodoList)
app.js : code pour faire le lien entre HTML/CSS et classes JS