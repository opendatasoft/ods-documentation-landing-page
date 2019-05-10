How to build a dashboard (part 1)
=================================


.. role:: tutorial-keycap(emphasis)


.. rst-class:: header-information-tutorial

    ★☆☆ Beginner - time: 30 minutes

*This tutorial will teach you how to create a dashboard using 3 visualizations from a dataset published on an Opendatasoft portal.*

.. image:: images/dashboard1_final.png

During this tutorial, you will learn:

- what a widget is
- what an iframe is
- what is the difference between a widget and an iframe
- how to use a widget in a content page created with Opendatasoft


.. rst-class:: block-prerequisite-congratulation

 **PREREQUISITES**

 - In order to create a dashboard, you need to have access to the back office of an Opendatasoft portal and the "Edit all pages" permission.
 - We highly recommend to follow the tutorial with the  `World Heritage List dataset published on our data network, Data <https://data.opendatasoft.com/explore/dataset/world-heritage-list%40public-us/map/?location=2,18.46273,-0.44037&basemap=mapbox.streets>`_. This dataset will be our example dataset used throughout the whole tutorial. If you however choose to follow the tutorial with another dataset, make sure to choose one with a Table view, as well as a Map view and an Analyze view. You will also need to adapt your own page code for it to match your chosen dataset.


.. HIDE ALL / SHOW ALL:

.. rst-class:: expand-collapse-items expand-all expand-collapse-item-active

    Show all images

.. rst-class:: expand-collapse-items collapse-all

    Hide all images


.. PART 1 - CREATE CONTENT PAGE:

.. rst-class:: title-level-2

    Create your content page


.. rst-class:: block-step

    1 + Go the Back office, in the Pages section.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step1.png

.. rst-class:: block-step

    2 + Click on the :tutorial-keycap:`+ New page button`, to create a new content page.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step2.png

.. rst-class:: block-step

    3 + By default, you land on the Properties tab. It contains several information about the page, some of which you need to fill up otherwise you will not be able to save the page. Enter a page URL suffix and a title. You can also add a description and tags.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step3.png

.. rst-class:: block-step

    4 + Click the :tutorial-keycap:`Save` button to save your newly created content page.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step4.png

.. rst-class:: block-step

    5 + Go to the Content tab.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step5.png

.. rst-class:: block-step

    6 + Click on :tutorial-keycap:`Edit in expert mode` to access the HTML/CSS code of the page. A pop up will appear, click on :tutorial-keycap:`Yes, switch to expert mode` for confirmation matter.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step6.png

In the HTML/CSS code area, you should see the following code:

.. code-block:: html

	<div class="container-fluid">
	    <div class="ods-box" ></div>
	</div>

.. admonition:: Important
   :class: important

   In the HTML language, every element is represented by a tag. This tag is written between ``<`` and ``>`` and almost always comes in a pair, with an opening tag and a closing tag. E.g. ``<p></p>`` for paragraphs, ``<h1></h1>`` for first level title, ``<div></div>`` for a division/section, etc.

The ``<div class="container-fluid">`` and ``<div class="ods-box" >`` tags help formatting your page the right way, in order for all elements of your content page to be in a predefined frame with borders. All new elements that you will add in the future should be put inside these 2 tags.

.. code-block:: html

 <div class="container-fluid">
  <div class="ods-box">

    This is where you will put your code

  </div>
 </div>

.. rst-class:: img-hide

    .. image:: images/steps_d1/step6b.png

.. rst-class:: block-step

    7 + Save your page.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step7.png

.. rst-class:: block-step

    8 + Click on :tutorial-keycap:`Preview` to see the current result of your page. Click again on :tutorial-keycap:`Preview` to hide the preview window and go back to your code.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step8.png


.. PART 2 - ADD DATA VISUALIZATIONS:

.. rst-class:: title-level-2

    Put content in your page: data visualizations


.. rst-class:: title-level-3

    Get the widget code of a visualization


.. admonition:: Important
   :class: important

   A widget is a piece of code that allows anyone to integrate an interactive element directly on a webpage. In Opendatasoft, there are several widgets which are `all listed and explained in the widget documentation <https://help.opendatasoft.com/widgets/#/api/>`_. Some of the most common Opendatasoft widgets -those we will use in this tutorial- are the visualization widgets. Each data visualization of a published dataset is indeed available as a widget, which code is displayed below the visualization, ready to be copied!

.. rst-class:: block-step

    9 + Go to Data, where our dataset is published. Make sure you are on the dataset's page, where you can see the available data visualizations.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step10.png

.. rst-class:: block-step

    10 + Let's start with the Table view. Click on the Table tab.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step9.png

.. rst-class:: block-step

    11 + Scroll down the table. You should see 3 tabs: Share, Embed and Widget. Share displays the direct URL of the visualization. Embed displays the iframe code of the visualization. Widget displays the widget code of the visualizations. Each, whereas it is a URL or a code, are ready to be copied and pasted. For this tutorial, we will use the widget codes of the Table, Map and Analyze visualizations of our dataset.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step11.png

.. admonition:: Important
   :class: important

   An iframe is a way to easily and safely integrate Opendatasoft content in an isolated frame, independent from the rest of the page. If you want to integrate Opendatasoft content outside the Opendatasoft environment, iframes would be the best way to go, even though some interaction and customization work would probably be needed. Widgets could also be integrated into a page outside the Opendatasoft environment, but know that heavy work would be required.

   Since we are building a dashboard directly in an Opendatasoft page, using Opendatasoft widgets is the best option. In the Opendatasoft environment, they are indeed easily customizable and very interactive with other widgets.

.. rst-class:: block-step

    12 + Still in the Table tab of our dataset, where the widget code is displayed, click the COPY button to copy the widget code of the table visualization.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step12.png


.. rst-class:: title-level-3

    Add a visualization widget to your page

.. rst-class:: block-step

    13 + Go back to the back office, to continue to edit your Opendatasoft content page.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step13.png

.. rst-class:: block-step

    14 + Paste your table visualization widget code at the right place, between the ``ods-box`` tag (see step 6).

.. code-block:: html

 <div class="container-fluid">
   <div class="ods-box">

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us" worldheritagelistpublicus-parameters="{'disjunctive.states':true,'sort':'date_inscribed'}">
       <ods-table context="worldheritagelistpublicus" sort="date_inscribed"></ods-table>
     </ods-dataset-context>

   </div>
 </div>

.. rst-class:: img-hide

    .. image:: images/steps_d1/step14.png

.. rst-class:: block-step

    15 + Save your page and click on :tutorial-keycap:`Preview`: there is now a table visualization in our page!

.. rst-class:: img-hide

    .. image:: images/steps_d1/step15.png



.. rst-class:: title-level-3

    Add more widgets to your page: map and chart

.. rst-class:: block-step

    16 + Let's add a map to our page! Just like before, get the widget code of the Map view of our dataset (see steps 9 to 12, but applied to the Map tab).

.. rst-class:: img-hide

    .. image:: images/steps_d1/step16.png

.. rst-class:: block-step

    17 + Paste your map visualization widget code below the widget code of the table visualization (see Add a widget to your page).

.. code-block:: html

 <div class="container-fluid">
   <div class="ods-box">

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us" worldheritagelistpublicus-parameters="{'disjunctive.states':true,'sort':'date_inscribed'}">
       <ods-table context="worldheritagelistpublicus" sort="date_inscribed"></ods-table>
     </ods-dataset-context>

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us" worldheritagelistpublicus-parameters="{'disjunctive.states':true,'sort':'date_inscribed'}">
       <ods-map context="worldheritagelistpublicus" scroll-wheel-zoom="false" location="2,18.46273,-0.44037" basemap="mapbox.streets"></ods-map>
     </ods-dataset-context>

   </div>
 </div>

.. rst-class:: img-hide

    .. image:: images/steps_d1/step17.png

.. rst-class:: block-step

    18 + Let's add one more thing: a chart! Get the widget code of the Analyze view of our dataset.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step18.png

.. rst-class:: block-step

    19 + Paste your analyze visualization widget code below the widget code of the map visualization.

.. code-block:: html

 <div class="container-fluid">
   <div class="ods-box">

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us">
       <ods-table context="worldheritagelistpublicus"></ods-table>
     </ods-dataset-context>

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us">
       <ods-map context="worldheritagelistpublicus" scroll-wheel-zoom="false" location="2,18.46273,-0.44037" basemap="mapbox.streets"></ods-map>
     </ods-dataset-context>

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us" worldheritagelistpublicus-parameters="{'disjunctive.states':true,'sort':'date_inscribed'}">
       <ods-chart align-month="true">
         <ods-chart-query context="worldheritagelistpublicus" field-x="region" maxpoints="50" stacked="normal" series-breakdown="category">
           <ods-chart-serie expression-y="area_hectares" chart-type="column" function-y="COUNT" color="range-Accent" scientific-display="true">
           </ods-chart-serie>
         </ods-chart-query>
       </ods-chart>
     </ods-dataset-context>

   </div>
 </div>

.. rst-class:: img-hide

    .. image:: images/steps_d1/step19.png

.. rst-class:: block-step

    20 + Save your page and click on :tutorial-keycap:`Preview`. We have now 3 visualizations on our page!

.. rst-class:: img-hide

    .. image:: images/steps_d1/step20.png


.. PART 3 - ADD A TITLE:

.. rst-class:: title-level-2

    Complete your content page with a title

.. rst-class:: block-step

    21 + In HTML, titles (called headers) are generally defined by ``h1`` tags. The h doesnt change, it stands for "header". The number (here 1) can however be replaced by any number from 1 to 6, ``h1`` being the highest level title and ``h6`` the lowest. Above all visualization widget codes added to the page, and right below the ``ods-box`` tag, add a high level title to your content page.

.. code-block:: html

 <div class="container-fluid">
   <div class="ods-box">

     <h1>Write your title here</h1>

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us">
       <ods-table context="worldheritagelistpublicus"></ods-table>
     </ods-dataset-context>

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us">
       <ods-map context="worldheritagelistpublicus" scroll-wheel-zoom="false" location="2,18.46273,-0.44037" basemap="mapbox.streets"></ods-map>
     </ods-dataset-context>

     <ods-dataset-context context="worldheritagelistpublicus" worldheritagelistpublicus-dataset="world-heritage-list@public-us" worldheritagelistpublicus-parameters="{'disjunctive.states':true,'sort':'date_inscribed'}">
       <ods-chart align-month="true">
         <ods-chart-query context="worldheritagelistpublicus" field-x="region" maxpoints="50" stacked="normal" series-breakdown="category">
           <ods-chart-serie expression-y="area_hectares" chart-type="column" function-y="COUNT" color="range-Accent" scientific-display="true">
           </ods-chart-serie>
         </ods-chart-query>
       </ods-chart>
     </ods-dataset-context>

   </div>
 </div>

.. rst-class:: img-hide

    .. image:: images/steps_d1/step21.png

.. rst-class:: block-step

    22 + Save your page and click on :tutorial-keycap:`Preview`: our dashboard now has a title!

.. rst-class:: img-hide

    .. image:: images/steps_d1/step22.png

.. rst-class:: block-step

    23 + Click on the :tutorial-keycap:`Open page` button to see the final result of your page in the portal.

.. rst-class:: img-hide

    .. image:: images/steps_d1/step23.png

|

.. rst-class:: block-prerequisite-congratulation

 **CONGRATULATIONS!**

 You have finished this tutorial and you now know how to create a simple dashboard with 3 dataset visualizations!

 If you want to go further with your dashboard, you can follow the second part of this tutorial: :doc:`"How to build a dashboard (part 2)" <how_to_build_dashboard_part2>`. It will teach you how to link your widgets together, how to add more advanced widgets but also how to organize and style your dashboard better.
