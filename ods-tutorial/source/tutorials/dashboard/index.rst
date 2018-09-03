How to build a dashboard (part 1: dataset visualizations)
=========================================================

.. role:: tutorial-keycap(emphasis)

.. rst-class:: header-information-tutorial
    
    ★☆☆ Beginner - time: 30 minutes

*This tutorial will teach you how to create a dashboard using 3 visualizations from a dataset published on an OpenDataSoft portal.*

During this tutorial, you will learn:

- what a widget is
- what an iframe is
- what is the difference between a widget and an iframe
- how to use a widget in a content page created with OpenDataSoft

.. rst-class:: block-prerequisite-congratulation

    Prerequisites:

    - In order to create a dashboard, you need to have access to the back office of an OpenDataSoft portal and the "Edit all pages" permission.
    - Pick a dataset from the portal, with which you want to work during the tutorial. Preferably, choose a dataset with a Table view, as well as a Map view and an Analyze view. If you do not want to pick your own dataset, you can follow the tutorial with the same dataset as the one used for the examples of the tutorial : link of the dataset. >> https://data.opendatasoft.com/explore/dataset/world-heritage-list%40public-us/ ?

[screenshot result of the tutorial]

.. rst-class:: title-level-2

    Create your content page

.. rst-class:: block-step

    1 + Go the Back office, in the Pages section.

.. rst-class:: img-hide

    .. image:: images/step1.png

.. rst-class:: block-step
    
    2 + Click on the :tutorial-keycap:`+` New page button, to create a new content page.

.. rst-class:: img-hide
    
    .. image:: images/step2.png

.. rst-class:: block-step

    3 + By default, you land on the Properties tab. It contains several information about the page, some of which you need to fill up otherwise you will not be able to save the page. Enter a page URL suffix and a title. You can also add a description and tags.

.. rst-class:: img-hide
    
    .. image:: images/step3.png

.. rst-class:: block-step

    4 + Click the :tutorial-keycap:`Save` button to save your newly created content page.

.. rst-class:: img-hide
    
    .. image:: images/step4.png

.. rst-class:: block-step
    
    5 + Go to the Content tab.

.. rst-class:: img-hide
    
    .. image:: images/step5.png

.. rst-class:: block-step

    6 + Click on :tutorial-keycap:`</>` Edit in expert mode to access the HTML/CSS code of the page. A pop up will appear, click on :tutorial-keycap:`Yes, switch to expert mode` for confirmation matter.

.. rst-class:: img-hide
    
    .. image:: images/step6.png

In the HTML/CSS code area, you should see the following code:

.. code-block:: html

	<div class="container-fluid">
	    <div class="ods-box" ></div>
	</div>

.. admonition:: Important
   :class: important

   In the HTML language, every element is represented by a tag. This tag is written between brackets and always comes in a pair, with an opening bracket and a closing bracket. E.g. <p></p> for paragraphs, <h1></h1> for first level title, <div></div> for a division/section, etc.

The <div> tags help formatting your page the right way, in order for all elements of your content page to be in a predefined frame with borders. All new elements that you will add in the future should be put inside these 2 <div> tags.

.. code-block:: html

    <div class="container-fluid">
        <div class="ods-box">
            THIS IS WHERE YOU WILL PUT YOUR CODE
        </div>
	</div>

.. rst-class:: block-step
    
    7 + Save your page.

.. rst-class:: block-step
    
    8 + Click on the :tutorial-keycap:`Open page` button to see the current result of your page.

.. rst-class:: title-level-2

    Put content in your page: data visualizations

.. rst-class:: title-level-3

    Get the widget code of a visualization

.. admonition:: Important
   :class: important

   A widget is a piece of code that allows anyone to integrate an interactive element directly on a webpage. In OpenDataSoft, there are several widgets which are all listed and explained in the widget documentation. Some of the most common OpenDataSoft widgets -those we will use in this tutorial- are the visualization widgets. Each data visualizations of a published dataset is indeed available as a widget, which code is displayed below the visualization, ready to be copied!

.. rst-class:: block-step

    9 + Go to the portal where the dataset you have chosen for the dataset is published. Make sure you are on your dataset's page of the portal, where you can see the different data visualizations available.

.. rst-class:: block-step
    
    10 + Let's start with the Table view. Click on the Table tab.

.. rst-class:: block-step
    
    11 + Scroll down the table. You should see 3 tabs: Share, Embed and Widget. Share displays the direct URL of the visualization. Embed displays the iframe code of the visualization. Widget displays the widget code of the visualizations. Each, whereas it is a URL or a code, are ready to be copied and pasted. For this tutorial, we will use the widget codes of the Table, Map and Analyze visualizations of our chosen dataset.

.. admonition:: Important
   :class: important

   An iframe allows anyone to show OpenDataSoft content in an isolated frame, independent from the rest of the page. Iframes, as opposed to widgets, are indeed all-in-one, integrated, and secure, so they can be embedded outside the OpenDataSoft environment, at the cost of interaction and customization. Widgets are more customizable and interactive (i.e: several widgets on the same page can interact with each other), but can only work inside OpenDataSoft pages.

.. rst-class:: block-step
    
    12 + Still in the Table tab of your dataset, where the widget code is displayed, click the COPY button to copy the widget code of the table visualization.

.. rst-class:: title-level-3

    Add a visualization widget to your page

.. rst-class:: block-step
    
    13 + Go back to the back office, to continue to edit your OpenDataSoft content page.

.. rst-class:: block-step
    
    14 + Paste your table visualization widget code at the right place, between the ``<div class="ods-box">`` tag (see step 6). If you used the same dataset as in this tutorial, you should have the following code:

.. code-block:: html

 <div class="container-fluid">
     <div class="ods-box">

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
             <ods-table context="worldheritageunescolist"></ods-table>
        </ods-dataset-context>

     </div>
 </div>

.. rst-class:: block-step
    
    15 + :tutorial-keycap:`Save` your page and click the Open page button: there is now a table visualization in our page!

[screenshot content page with table view embedded]

.. rst-class:: title-level-3

    Add more widgets to your page: map and chart

.. rst-class:: block-step
    
    16 + Let's add a map to our page! Just like before, get the widget code of the Map view of your chosen dataset (see steps 9 to 12 in Get the widget code of a visualization, but applied to the Map tab).

.. rst-class:: block-step

    17 + Paste your map visualization widget code below the widget code of the table visualization (see Add a widget to your page). If you used the same dataset as in this tutorial, you should have the following code:

.. code-block:: html

 <div class="container-fluid">
     <div class="ods-box">

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
             <ods-table context="worldheritageunescolist"></ods-table>
        </ods-dataset-context>

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
             <ods-map context="worldheritageunescolist" scroll-wheel-zoom="false" location="2,18.46273,-0.44037"></ods-map>
        </ods-dataset-context>

     </div>
 </div>

.. rst-class:: block-step

    18 + Let's add one more thing: a chart! Get the widget code of the Analyze view of your chosen dataset.

.. rst-class:: block-step

    19 + Paste your analyze visualization widget code below the widget code of the map visualization. Your code should now look something like that:

.. code-block:: html

 <div class="container-fluid">
     <div class="ods-box">

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
             <ods-table context="worldheritageunescolist"></ods-table>
        </ods-dataset-context>

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
             <ods-map context="worldheritageunescolist" scroll-wheel-zoom="false" location="2,18.46273,-0.44037"></ods-map>
        </ods-dataset-context>

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
            <ods-chart align-month="true">
               <ods-chart-query context="worldheritageunescolist" field-x="date_inscribed" maxpoints="0" timescale="year">
                  <ods-chart-serie expression-y="area_hectares" chart-type="line" function-y="AVG" color="#4CDEF5" scientific-display="true">
                  </ods-chart-serie>
               </ods-chart-query>
            </ods-chart>
        </ods-dataset-context>

     </div>
 </div>

.. rst-class:: block-step
    
    20 + :tutorial-keycap:`Save` your page and click the Open page button: this is what your page should look like by now!

[screenshot content page with 3 visualizations]

.. rst-class:: title-level-2

Complete your content page with a title

.. rst-class:: block-step
    
    21 + In HTML, titles (called headers) are generally defined by ``<h1>`` brackets. The h doesnt change, it stands for "header". The number (here 1) can be replaced by any number from 1 to 6, ``<h1>`` being the highest level title and ``<h6>`` the lowest. Above all visualization widget codes added to the page, and right below the ``<div class="ods-box">`` tag, add a high level title to your content page.

.. code-block:: html

 <div class="container-fluid">
     <div class="ods-box">

     <h1>WRITE THE NAME OF YOUR PAGE HERE</h1>

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
             <ods-table context="worldheritageunescolist"></ods-table>
        </ods-dataset-context>

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
             <ods-map context="worldheritageunescolist" scroll-wheel-zoom="false" location="2,18.46273,-0.44037"></ods-map>
        </ods-dataset-context>

        <ods-dataset-context context="worldheritageunescolist" worldheritageunescolist-dataset="world-heritage-unesco-list">
            <ods-chart align-month="true">
               <ods-chart-query context="worldheritageunescolist" field-x="date_inscribed" maxpoints="0" timescale="year">
                  <ods-chart-serie expression-y="area_hectares" chart-type="line" function-y="AVG" color="#4CDEF5" scientific-display="true">
                  </ods-chart-serie>
               </ods-chart-query>
            </ods-chart>
        </ods-dataset-context>

     </div>
 </div>

.. rst-class:: block-step
    
    22 + :tutorial-keycap:`Save` your page and click the Open page button: our page now has a title!

[screenshot page with title]

.. rst-class:: block-prerequisite-congratulation

    Congratulations! You have finished this tutorial and you now know how to create a simple dashboard with 3 dataset visualizations!

If you want to go further with your dashboard, you can follow the second part of this tutorial: "How to build a dashboard (part 2: formatting the dashboard & linking the widgets)".
