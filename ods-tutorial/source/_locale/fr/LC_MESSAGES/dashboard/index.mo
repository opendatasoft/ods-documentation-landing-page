��    6      �              |     }  �   �  -     =   B  �  �  �   (  T   �  �     v   �  �   a  �   +	  g   
  �   i
  T   �
  v   O  �  �  `   \     �  U   �       �   /     �  \   
  �   g  �  3  '     ,   7  �  d  '   2  �   Z     �  %   �  &        B  9   R  �   �  	   A  �   K    �  =   �  �  '  -   �     �  �     /   �  2   '     Z  #   w  ?   �     �     �  5   �  %   4  �  Z     �  �   �  -   |  =   �  �  �  �   �!  T   +"  �   �"  v   R#  �   �#  �   �$  g   i%  �   �%  T   b&  v   �&  �  .'  `   �(     %)  U   &*     |*  �   �*     ^+  \   r+  �   �+  �  �,  '   w.  ,   �.  �  �.  '   �0  �   �0     D1  %   ]1  &   �1     �1  9   �1  �   �1  	   �2  �   �2    G3  =   [4  �  �4  -   @6     n6  �   �6  /   t7  2   �7     �7  #   �7  ?   8     X8     i8  5   {8  %   �8   **Prerequisites:** *This tutorial will teach you how to create a dashboard using 3 visualizations from a dataset published on an OpenDataSoft portal.* 1 + Go the Back office, in the Pages section. 10 + Let's start with the Table view. Click on the Table tab. 11 + Scroll down the table. You should see 3 tabs: Share, Embed and Widget. Share displays the direct URL of the visualization. Embed displays the iframe code of the visualization. Widget displays the widget code of the visualizations. Each, whereas it is a URL or a code, are ready to be copied and pasted. For this tutorial, we will use the widget codes of the Table, Map and Analyze visualizations of our chosen dataset. 12 + Still in the Table tab of your dataset, where the widget code is displayed, click the COPY button to copy the widget code of the table visualization. 13 + Go back to the back office, to continue to edit your OpenDataSoft content page. 14 + Paste your table visualization widget code at the right place, between the ``<div class="ods-box">`` tag (see step 6). If you used the same dataset as in this tutorial, you should have the following code: 15 + :tutorial-keycap:`Save` your page and click the Open page button: there is now a table visualization in our page! 16 + Let's add a map to our page! Just like before, get the widget code of the Map view of your chosen dataset (see steps 9 to 12 in Get the widget code of a visualization, but applied to the Map tab). 17 + Paste your map visualization widget code below the widget code of the table visualization (see Add a widget to your page). If you used the same dataset as in this tutorial, you should have the following code: 18 + Let's add one more thing: a chart! Get the widget code of the Analyze view of your chosen dataset. 19 + Paste your analyze visualization widget code below the widget code of the map visualization. Your code should now look something like that: 2 + Click on the :tutorial-keycap:`+` New page button, to create a new content page. 20 + :tutorial-keycap:`Save` your page and click the Open page button: this is what your page should look like by now! 21 + In HTML, titles (called headers) are generally defined by ``<h1>`` brackets. The h doesnt change, it stands for "header". The number (here 1) can be replaced by any number from 1 to 6, ``<h1>`` being the highest level title and ``<h6>`` the lowest. Above all visualization widget codes added to the page, and right below the ``<div class="ods-box">`` tag, add a high level title to your content page. 22 + :tutorial-keycap:`Save` your page and click the Open page button: our page now has a title! 3 + By default, you land on the Properties tab. It contains several information about the page, some of which you need to fill up otherwise you will not be able to save the page. Enter a page URL suffix and a title. You can also add a description and tags. 4 + Click the :tutorial-keycap:`Save` button to save your newly created content page. 5 + Go to the Content tab. 6 + Click on :tutorial-keycap:`</>` Edit in expert mode to access the HTML/CSS code of the page. A pop up will appear, click on :tutorial-keycap:`Yes, switch to expert mode` for confirmation matter. 7 + Save your page. 8 + Click on the :tutorial-keycap:`Open page` button to see the current result of your page. 9 + Go to the portal where the dataset you have chosen for the dataset is published. Make sure you are on your dataset's page of the portal, where you can see the different data visualizations available. A widget is a piece of code that allows anyone to integrate an interactive element directly on a webpage. In OpenDataSoft, there are several widgets which are all listed and explained in the widget documentation. Some of the most common OpenDataSoft widgets -those we will use in this tutorial- are the visualization widgets. Each data visualizations of a published dataset is indeed available as a widget, which code is displayed below the visualization, ready to be copied! Add a visualization widget to your page Add more widgets to your page: map and chart An iframe allows anyone to show OpenDataSoft content in an isolated frame, independent from the rest of the page. Iframes, as opposed to widgets, are indeed all-in-one, integrated, and secure, so they can be embedded outside the OpenDataSoft environment, at the cost of interaction and customization. Widgets are more customizable and interactive (i.e: several widgets on the same page can interact with each other), but can only work inside OpenDataSoft pages. Complete your content page with a title Congratulations! You have finished this tutorial and you now know how to create a simple dashboard with 3 dataset visualizations! Create your content page During this tutorial, you will learn: Get the widget code of a visualization Hide all images How to build a dashboard (part 1: dataset visualizations) If you want to go further with your dashboard, you can follow the second part of this tutorial: "How to build a dashboard (part 2: formatting the dashboard & linking the widgets)". Important In order to create a dashboard, you need to have access to the back office of an OpenDataSoft portal and the "Edit all pages" permission. In the HTML language, every element is represented by a tag. This tag is written between brackets and always comes in a pair, with an opening bracket and a closing bracket. E.g. <p></p> for paragraphs, <h1></h1> for first level title, <div></div> for a division/section, etc. In the HTML/CSS code area, you should see the following code: Pick a dataset from the portal, with which you want to work during the tutorial. Preferably, choose a dataset with a Table view, as well as a Map view and an Analyze view. If you do not want to pick your own dataset, you can follow the tutorial with the same dataset as the one used for the examples of the tutorial : link of the dataset. >> https://data.opendatasoft.com/explore/dataset/world-heritage-list%40public-us/ ? Put content in your page: data visualizations Show all images The <div> tags help formatting your page the right way, in order for all elements of your content page to be in a predefined frame with borders. All new elements that you will add in the future should be put inside these 2 <div> tags. [screenshot content page with 3 visualizations] [screenshot content page with table view embedded] [screenshot page with title] [screenshot result of the tutorial] how to use a widget in a content page created with OpenDataSoft what a widget is what an iframe is what is the difference between a widget and an iframe ★☆☆ Beginner - time: 30 minutes Project-Id-Version: OpenDataSoft Tutorials 1.0
Report-Msgid-Bugs-To: 
POT-Creation-Date: 2018-09-10 15:56+0200
PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE
Last-Translator: FULL NAME <EMAIL@ADDRESS>
Language: fr
Language-Team: fr <LL@li.org>
Plural-Forms: nplurals=2; plural=(n > 1)
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: 8bit
Generated-By: Babel 2.5.3
 **Prerequisites:** *This tutorial will teach you how to create a dashboard using 3 visualizations from a dataset published on an OpenDataSoft portal.* 1 + Go the Back office, in the Pages section. 10 + Let's start with the Table view. Click on the Table tab. 11 + Scroll down the table. You should see 3 tabs: Share, Embed and Widget. Share displays the direct URL of the visualization. Embed displays the iframe code of the visualization. Widget displays the widget code of the visualizations. Each, whereas it is a URL or a code, are ready to be copied and pasted. For this tutorial, we will use the widget codes of the Table, Map and Analyze visualizations of our chosen dataset. 12 + Still in the Table tab of your dataset, where the widget code is displayed, click the COPY button to copy the widget code of the table visualization. 13 + Go back to the back office, to continue to edit your OpenDataSoft content page. 14 + Paste your table visualization widget code at the right place, between the ``<div class="ods-box">`` tag (see step 6). If you used the same dataset as in this tutorial, you should have the following code: 15 + :tutorial-keycap:`Save` your page and click the Open page button: there is now a table visualization in our page! 16 + Let's add a map to our page! Just like before, get the widget code of the Map view of your chosen dataset (see steps 9 to 12 in Get the widget code of a visualization, but applied to the Map tab). 17 + Paste your map visualization widget code below the widget code of the table visualization (see Add a widget to your page). If you used the same dataset as in this tutorial, you should have the following code: 18 + Let's add one more thing: a chart! Get the widget code of the Analyze view of your chosen dataset. 19 + Paste your analyze visualization widget code below the widget code of the map visualization. Your code should now look something like that: 2 + Click on the :tutorial-keycap:`+` New page button, to create a new content page. 20 + :tutorial-keycap:`Save` your page and click the Open page button: this is what your page should look like by now! 21 + In HTML, titles (called headers) are generally defined by ``<h1>`` brackets. The h doesnt change, it stands for "header". The number (here 1) can be replaced by any number from 1 to 6, ``<h1>`` being the highest level title and ``<h6>`` the lowest. Above all visualization widget codes added to the page, and right below the ``<div class="ods-box">`` tag, add a high level title to your content page. 22 + :tutorial-keycap:`Save` your page and click the Open page button: our page now has a title! 3 + By default, you land on the Properties tab. It contains several information about the page, some of which you need to fill up otherwise you will not be able to save the page. Enter a page URL suffix and a title. You can also add a description and tags. 4 + Click the :tutorial-keycap:`Save` button to save your newly created content page. 5 + Go to the Content tab. 6 + Click on :tutorial-keycap:`</>` Edit in expert mode to access the HTML/CSS code of the page. A pop up will appear, click on :tutorial-keycap:`Yes, switch to expert mode` for confirmation matter. 7 + Save your page. 8 + Click on the :tutorial-keycap:`Open page` button to see the current result of your page. 9 + Go to the portal where the dataset you have chosen for the dataset is published. Make sure you are on your dataset's page of the portal, where you can see the different data visualizations available. A widget is a piece of code that allows anyone to integrate an interactive element directly on a webpage. In OpenDataSoft, there are several widgets which are all listed and explained in the widget documentation. Some of the most common OpenDataSoft widgets -those we will use in this tutorial- are the visualization widgets. Each data visualizations of a published dataset is indeed available as a widget, which code is displayed below the visualization, ready to be copied! Add a visualization widget to your page Add more widgets to your page: map and chart An iframe allows anyone to show OpenDataSoft content in an isolated frame, independent from the rest of the page. Iframes, as opposed to widgets, are indeed all-in-one, integrated, and secure, so they can be embedded outside the OpenDataSoft environment, at the cost of interaction and customization. Widgets are more customizable and interactive (i.e: several widgets on the same page can interact with each other), but can only work inside OpenDataSoft pages. Complete your content page with a title Congratulations! You have finished this tutorial and you now know how to create a simple dashboard with 3 dataset visualizations! Create your content page During this tutorial, you will learn: Get the widget code of a visualization Masquer toutes les images How to build a dashboard (part 1: dataset visualizations) If you want to go further with your dashboard, you can follow the second part of this tutorial: "How to build a dashboard (part 2: formatting the dashboard & linking the widgets)". Important In order to create a dashboard, you need to have access to the back office of an OpenDataSoft portal and the "Edit all pages" permission. In the HTML language, every element is represented by a tag. This tag is written between brackets and always comes in a pair, with an opening bracket and a closing bracket. E.g. <p></p> for paragraphs, <h1></h1> for first level title, <div></div> for a division/section, etc. In the HTML/CSS code area, you should see the following code: Pick a dataset from the portal, with which you want to work during the tutorial. Preferably, choose a dataset with a Table view, as well as a Map view and an Analyze view. If you do not want to pick your own dataset, you can follow the tutorial with the same dataset as the one used for the examples of the tutorial : link of the dataset. >> https://data.opendatasoft.com/explore/dataset/world-heritage-list%40public-us/ ? Put content in your page: data visualizations Afficher toutes les images The <div> tags help formatting your page the right way, in order for all elements of your content page to be in a predefined frame with borders. All new elements that you will add in the future should be put inside these 2 <div> tags. [screenshot content page with 3 visualizations] [screenshot content page with table view embedded] [screenshot page with title] [screenshot result of the tutorial] how to use a widget in a content page created with OpenDataSoft what a widget is what an iframe is what is the difference between a widget and an iframe ★☆☆ Beginner - time: 30 minutes 