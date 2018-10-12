��    5      �              l     m     �  �   �  -     =   F  �  �  �   %  T   �  m     l   �  �   �     �  _   	  a   g	  T   �	  f   
  �  �
  [     i   g     �  U   �     (  �   C       �     �   �    W  '   d  ,   �  �  �  '   �     �  %   �  &   �       !   !  :  C  	   ~  �   �  %    =   8  -   v     �  �   �    �  ;  �  p   �  ?   b     �     �  5   �  %   �  �  !               �   5   1   �   U   !  �  e!  �   d#  `   $  �   $  �   %  �   �%  �   o&  x   '  o   �'  g   �'  �   c(  �  �(  t   �*  u   8+  K  �+  l   �,  )   g-  �   �-     }.  �   �.  �   t/  8  K0  7   �2  @   �2  �  �2  /   �4     '5  +   G5  1   s5     �5      �5  V  �5     37  �   ;7  X  �7  D   '9  ;   l9     �9  �   �9  @  �:  �  �;  �   c>  N   �>     7?     J?  6   ]?  '   �?   **CONGRATULATIONS!** **PREREQUISITES** *This tutorial will teach you how to create a dashboard using 3 visualizations from a dataset published on an OpenDataSoft portal.* 1 + Go the Back office, in the Pages section. 10 + Let's start with the Table view. Click on the Table tab. 11 + Scroll down the table. You should see 3 tabs: Share, Embed and Widget. Share displays the direct URL of the visualization. Embed displays the iframe code of the visualization. Widget displays the widget code of the visualizations. Each, whereas it is a URL or a code, are ready to be copied and pasted. For this tutorial, we will use the widget codes of the Table, Map and Analyze visualizations of our dataset. 12 + Still in the Table tab of our dataset, where the widget code is displayed, click the COPY button to copy the widget code of the table visualization. 13 + Go back to the back office, to continue to edit your OpenDataSoft content page. 14 + Paste your table visualization widget code at the right place, between the ``ods-box`` tag (see step 6). 15 + Save your page and click on :tutorial-keycap:`Preview`: there is now a table visualization in our page! 16 + Let's add a map to our page! Just like before, get the widget code of the Map view of our dataset (see steps 9 to 12, but applied to the Map tab). 17 + Paste your map visualization widget code below the widget code of the table visualization (see Add a widget to your page). 18 + Let's add one more thing: a chart! Get the widget code of the Analyze view of our dataset. 19 + Paste your analyze visualization widget code below the widget code of the map visualization. 2 + Click on the :tutorial-keycap:`+ New page button`, to create a new content page. 20 + Save your page and click on :tutorial-keycap:`Preview`. We have now 3 visualizations on our page! 21 + In HTML, titles (called headers) are generally defined by ``h1`` tags. The h doesnt change, it stands for "header". The number (here 1) can however be replaced by any number from 1 to 6, ``h1`` being the highest level title and ``h6`` the lowest. Above all visualization widget codes added to the page, and right below the ``ods-box`` tag, add a high level title to your content page. 22 + Save your page and click on :tutorial-keycap:`Preview`: our dashboard now has a title! 23 + Click on the :tutorial-keycap:`Open page` button to see the final result of your page in the portal. 3 + By default, you land on the Properties tab. It contains several information about the page, some of which you need to fill up otherwise you will not be able to save the page. Enter a page URL suffix and a title. You can also add a description and tags. 4 + Click the :tutorial-keycap:`Save` button to save your newly created content page. 5 + Go to the Content tab. 6 + Click on :tutorial-keycap:`Edit in expert mode` to access the HTML/CSS code of the page. A pop up will appear, click on :tutorial-keycap:`Yes, switch to expert mode` for confirmation matter. 7 + Save your page. 8 + Click on :tutorial-keycap:`Preview` to see the current result of your page. Click again on :tutorial-keycap:`Preview` to hide the preview window and go back to your code. 9 + Go to Data, where our dataset is published. Make sure you are on the dataset's page, where you can see the available data visualizations. A widget is a piece of code that allows anyone to integrate an interactive element directly on a webpage. In OpenDataSoft, there are several widgets which are `all listed and explained in the widget documentation <https://help.opendatasoft.com/widgets/#/api/>`_. Some of the most common OpenDataSoft widgets -those we will use in this tutorial- are the visualization widgets. Each data visualization of a published dataset is indeed available as a widget, which code is displayed below the visualization, ready to be copied! Add a visualization widget to your page Add more widgets to your page: map and chart An iframe is a way to easily and safely integrate OpenDataSoft content in an isolated frame, independent from the rest of the page. If you want to integrate OpenDataSoft content outside the OpenDataSoft environment, iframes would be the best way to go, even though some interaction and customization work would probably be needed. Widgets could also be integrated into a page outside the OpenDataSoft environment, but know that heavy work would be required. Complete your content page with a title Create your content page During this tutorial, you will learn: Get the widget code of a visualization Hide all images How to build a dashboard (part 1) If you want to go further with your dashboard, you can follow the second part of this tutorial: :doc:`"How to build a dashboard (part 2)" <how_to_build_dashboard_part2>`. It will teach you how to link your widgets together, how to add more advanced widgets but also how to organize and style your dashboard better. Important In order to create a dashboard, you need to have access to the back office of an OpenDataSoft portal and the "Edit all pages" permission. In the HTML language, every element is represented by a tag. This tag is written between ``<`` and ``>`` and almost always comes in a pair, with an opening tag and a closing tag. E.g. ``<p></p>`` for paragraphs, ``<h1></h1>`` for first level title, ``<div></div>`` for a division/section, etc. In the HTML/CSS code area, you should see the following code: Put content in your page: data visualizations Show all images Since we are building a dashboard directly in an OpenDataSoft page, using OpenDataSoft widgets is the best option. In the OpenDataSoft environment, they are indeed easily customizable and very interactive with other widgets. The ``<div class="container-fluid">`` and ``<div class="ods-box" >`` tags help formatting your page the right way, in order for all elements of your content page to be in a predefined frame with borders. All new elements that you will add in the future should be put inside these 2 tags. We highly recomment to follow the tutorial with the  `World Heritage List dataset published on our data network, Data <https://data.opendatasoft.com/explore/dataset/world-heritage-list%40public-us/map/?location=2,18.46273,-0.44037&basemap=mapbox.streets>`_. This dataset will be our example dataset used throughout the whole tutorial. If you however choose to follow the tutorial with another dataset, make sure to choose one with a Table view, as well as a Map view and an Analyze view. You will also need to adapt your own page code for it to match your chosen dataset. You have finished this tutorial and you now know how to create a simple dashboard with 3 dataset visualizations! how to use a widget in a content page created with OpenDataSoft what a widget is what an iframe is what is the difference between a widget and an iframe ★☆☆ Beginner - time: 30 minutes Project-Id-Version: OpenDataSoft Tutorials 1.0
Report-Msgid-Bugs-To: 
POT-Creation-Date: 2018-09-13 21:42+0200
PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE
Last-Translator: Super Traducteur <thibaut.dupre+shared@opendatasoft.com>, 2018
Language: de
Language-Team: German (https://www.transifex.com/opendatasoft/teams/57849/de/)
Plural-Forms: nplurals=2; plural=(n != 1)
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: 8bit
Generated-By: Babel 2.6.0
 **HERZLICHEN GLÜCKWUNSCH!** **VORRAUSSETZUNGEN** *In diesem Tutorial erfahren Sie, wie Sie ein Dashboard mit 3 Visualisierungen aus einem Datensatz erstellen, der auf einem OpenDataSoft-Portal veröffentlicht wurde*. 1 + Öffnen Sie den Seitenbereich des Backoffice. 10 + Beginnen wir mit der Tabellenansicht. Klicken Sie auf die Registerkarte Tabelle. 11 + Scrollen Sie in der Tabelle nach unten. 3 Registerkarten sollten zu sehen sein: Teilen, Einbettung und Widget. Unter Teilen wird die direkte URL der Visualisierung angezeigt. Unter Einbettung wird der Iframe-Code der Visualisierung angezeigt. Unter Widget wird der Widget-Code der Visualisierungen angezeigt. Ob Code oder URL: jedes Element kann kopiert und dann eingefügt werden. Für dieses Tutorial verwenden wir die Widget-Codes der Tabellen-,Karten- und Analyse-Visualisierungen unseres Datensatzes. 12 + Klicken Sie in der Registerkarte Tabelle unseres Datensatzes (wo der Widget-Code angezeigt wird) auf den Button KOPIEREN, um den Widget-Code der Tabellenvisualisierung zu kopieren. 13 + Wechseln Sie erneut zum Backoffice, um Ihre OpenDataSoft-Inhaltsseite weiter zu bearbeiten. 14 + Fügen Sie Ihren Widget-Code der Tabellenvisualisierung  an der richtigen Stelle ein, d. h. zwischen den Tag ``ods-box`` (siehe 6. Schritt). 15 + Speichern Sie Ihre Seite und klicken Sie auf :tutorial-keycap:`Vorschau`: unsere Seite verfügt nun über eine Tabellenvisualisierung! 16 + Fügen wir unserer Seite jetzt eine Karte hinzu! Rufen Sie wie eben den Widget-Code aus der Kartenansicht unseres Datensatzes ab (siehe Schritte 9 bis 12, jedoch unter Verwendung der Registerkarte Karte). 17 + Fügen Sie Ihren Widget-Code der Kartenvisualisierung unter dem Widget-Code der Tabellenvisualisierung ein (siehe "Fügen Sie Ihrer Seite ein Widget hinzu"). 18 + Fügen wir noch etwas hinzu: ein Diagramm! Rufen Sie den Widget-Code aus der Analyseansicht unseres Datensatzes ab. 19 + Fügen Sie Ihren Widget-Code der Analysevisualisierung unter dem Widget-Code der Kartenvisualisierung ein. 2 + Klicken Sie auf den Button :tutorial-keycap:`+ Neue Seite`, um eine neue Inhaltsseite zu erstellen. 20 + Speichern Sie Ihre Seite und klicken Sie auf :tutorial-keycap:`Vorschau`: Wir haben jetzt 3 Visualisierungen auf unserer Seite! 21 + In HTML werden Titel (Header genannt) im Allgemeinen durch ``h1``-Tags definiert. Das h ist unveränderlich, es steht für "header". Die Zahl (hier 1) kann jedoch durch eine beliebige Zahl von 1 bis 6 ersetzt werden, wobei ``h1`` die Hauptüberschrift und ``h6`` die letzte Zwischenüberschrift ist. Fügen Sie über allen der Seite hinzugefügten Widget-Codes der Visualisierung und direkt unter dem Tag ``ods-box`` eine Hauptüberschrift für Ihre Inhaltsseite hinzu. 22 + Speichern Sie Ihre Seite und klicken Sie auf:tutorial-keycap:`Vorschau`: unser Dashboard hat jetzt einen Titel! 23 + Klicken Sie auf den Button :tutorial-keycap:`Seite öffnen`, um das Endergebnis Ihrer Seite im Portal zu sehen.  3 + Standardmäßig gelangen Sie zur Registerkarte Eigenschaften. Diese enthält verschiedene Informationen über die Seite. Einige hiervon müssen ausgefüllt werden, da Sie die Seite sonst nicht speichern können. Geben Sie einen URL-Suffix sowie einen Titel der Seite an. Sie können auch eine Beschreibung und Tags hinzufügen. 4 + Klicken Sie auf den Button :tutorial-keycap:`Speichern`, um die neu erstellte Inhaltsseite zu speichern. 5 + Öffnen Sie die Registerkarte Inhalt. 6 + Klicken Sie auf :tutorial-keycap:`Im Expertenmodus bearbeiten`, um auf den HTML-/CSS-Code der Seite zuzugreifen. Es erscheint ein Popup-Fenster. Klicken Sie zur Bestätigung auf :tutorial-keycap:`Ja, in den Expertenmodus wechseln`. 7 + Speichern Sie Ihre Seite. 8 + Klicken Sie auf :tutorial-keycap:`Vorschau`, um die aktuelle Darstellung Ihrer Seite zu sehen. Klicken Sie erneut auf :tutorial-keycap:`Vorschau`, um das Vorschaufenster auszublenden und zum Code zurückzukehren. 9 + Öffnen Sie den Datenbereich, wo unser Datensatz veröffentlicht wird. Stellen Sie sicher, dass Sie sich auf der Seite des Datensatzes befinden, auf der Sie die verfügbaren Datenvisualisierungen sehen können. Ein Widget ist ein Code, der es jedem ermöglicht, ein interaktives Element direkt auf einer Webseite zu integrieren. OpenDataSoft bietet unterschiedliche Widgets, die `in der Widget-Dokumentation aufgelistet und erläutert werden <https://help.opendatasoft.com/widgets/#/api/>`_. Einige der häufigsten OpenDataSoft-Widgets - die wir in diesem Tutorial verwenden - sind die Visualisierungs-Widgets. Jede Datenvisualisierung eines veröffentlichten Datensatzes ist als Widget verfügbar. Dessen Code wird unterhalb der Visualisierung angezeigt und kann kopiert werden. Fügen Sie Ihrer Seite ein Visualisierungs-Widget hinzu Fügen Sie Ihrer Seite weitere Widgets hinzu: Karte und Diagramm Ein Iframe bietet die Möglichkeit, OpenDataSoft-Inhalte einfach und sicher in einen isolierten Bereich zu integrieren, unabhängig vom Rest der Seite. Iframes eignen sich ideal, wenn Sie OpenDataSoft-Inhalte außerhalb der OpenDataSoft-Umgebung integrieren möchten, wobei wahrscheinlich einige Interaktions- und Anpassungsmaßnahmen erforderlich sind. Widgets können auch in eine Seite außerhalb der OpenDataSoft-Umgebung integriert werden, doch würde dies einen erheblichen Aufwand mit sich bringen. Fügen Sie Ihrer Inhaltsseite einen Titel hinzu Erstellen Sie Ihre Inhaltsseite Dieses Tutorial vermittelt Ihnen Folgendes: Rufen Sie den Widget-Code einer Visualisierung ab Alle Bilder verbergen Ein Dashboard aufbauen (1. Teil) Wenn Sie Ihr Dashboard noch mehr anpassen möchten, können Sie sich den zweiten Teil dieses Tutorials ansehen: :doc:`"Ein Dashboard aufbauen (2. Teil)" <how_to_build_dashboard_part2>`. Hier erfahren Sie, wie Sie Ihre Widgets miteinander verknüpfen, erweiterte Widgets hinzufügen und Ihr Dashboard besser organisieren und gestalten können. Wichtig Um ein Dashboard zu erstellen, benötigen Sie Zugriff auf das Backoffice eines OpenDataSoft-Portals und die Berechtigung "Alle Seiten bearbeiten". In der HTML-Sprache wird jedes Element durch ein Tag dargestellt. Dieses Tag wird zwischen den Zeichen ``<`` und ``>`` geschrieben und besteht meist aus zwei Teilen, einem einleitenden Tag und einem abschließenden Tag. Z. b. ``<p></p>`` für Absätze, ``<h1></h1>`` für die Titelzeile, ``<div></div>`` für einen Abschnitt/Unterabschnitt usw. Im Bereich des HTML-/CSS-Codes sollten Sie den folgenden Code sehen: Versehen Sie Ihre Seite mit Inhalten: Datenvisualisierungen Alle Bilder anzeigen Da wir ein Dashboard direkt auf einer OpenDataSoft-Seite erstellen, ist die Verwendung von OpenDataSoft-Widgets die beste Option. In der OpenDataSoft-Umgebung sind sie leicht anpassbar und sehr interaktiv mit anderen Widgets. Die Tags ``<div class="container-fluid">`` und ``<div class="ods-box" >`` helfen Ihnen, Ihre Seite richtig zu formatieren, damit sich alle Elemente Ihrer Inhaltsseite in einem vordefinierten Fenster mit Rändern befinden. Alle neuen Elemente, die Sie später hinzufügen, sollten zwischen diese 2 Tags eingefügt werden. Wir empfehlen Ihnen, für dieses Tutorial den Datensatz "World Heritage List" (Liste der Weltkulturerbe) zu verwenden, der in unserem Datennetzwerk veröffentlicht wurde <https://data.opendatasoft.com/explore/dataset/world-heritage-list%40public-us/map/?location=2,18.46273,-0.44037&basemap=mapbox.streets>`_. Diesen Datensatz verwenden wir als Beispiel im gesamten Tutorial. Wenn Sie das Tutorial mit einem anderen Datensatz fortsetzen möchten, so sollte dieser über eine Tabellenansicht, eine Kartenansicht sowie eine Analyseansicht verfügen. Sie müssen außerdem Ihren eigenen Seitencode an den von Ihnen gewählten Datensatz anpassen. Sie haben dieses Tutorial abgeschlossen und wissen jetzt, wie man ein einfaches Dashboard mit 3 Datensatz-Visualisierungen erstellt! Wie Sie ein Widget in einer mit OpenDataSoft erstellten Inhaltsseite verwenden Was ein Widget ist Was ein Iframe ist Der Unterschied zwischen einem Widget und einem Iframe ★☆☆ Anfänger - Dauer: 30 Minuten 