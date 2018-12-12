How to create tabs (with AngularJS)
===================================


.. role:: tutorial-keycap(emphasis)


.. rst-class:: header-information-tutorial

    ★★★ Advanced - time: ?? minutes

*This tutorial will teach you how to create tabs using AngularJS. These tabs will be fully customizable and reusable in any dashboard or piece of content created with HTML/CSS on OpenDataSoft.*

.. image:: images/module1_final.png

During this tutorial, you will learn how to use 4 AngularJS directives:

- ``ng-if``
- ``ng-click``
- ``ng-class``
- ``ng-init``


.. rst-class:: block-prerequisite-congratulation

 **PREREQUISITES**

 - In order to test this tutorial and/or integrate the tabs in an already existing page, you need to have access to the back office of an OpenDataSoft portal and be granted the "Edit all pages" permission.
 - Since this tutorial is labeled as "Advanced" in terms of difficulty level, we assume that you are familiar with OpenDatasoft pages and the OpenDataSoft widgets (visualizations widgets, context widget, etc.). We also assume that you already know HTML and CSS well enough to recognize and understand their structures and how they work. Other more technical elements will however be explained in details.


.. HIDE ALL / SHOW ALL:

.. rst-class:: expand-collapse-items expand-all expand-collapse-item-active

    Show all images

.. rst-class:: expand-collapse-items collapse-all

    Hide all images


.. PART 1 - HTML BASE:

.. rst-class:: title-level-2

    Create the structure


.. rst-class:: block-step

    1 + In this tutorial, we will create 3 tabs. Each tab will contain a visualization of our dataset. In our code, we will manage the tabs titles on the one hand and the tabs contents on the other hand. Let's start with the structure of our tabs titles! Put each tab title in an ``a`` tag.

.. admonition:: Note
   :class: note

   For this tutorial, we chose to put the tab titles in an ``a`` tag for accessibility reasons. That tag is also handy because it allows all titles to be displayed on the same line. If you feel comfortable enough with HTML/CSS, you can put your tab titles in another tag, but keep in mind that you will probably have to use more CSS to make them look like proper tabs.

.. code-block:: html

  <a>1st tab title</a>
  <a>2nd tab title</a>
  <a>3rd tab title</a>

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    2 + Right under our tabs titles, let's add our tabs contents. Put each of them in a ``div`` tag.

.. code-block:: html

 <div>
  Content of first tab
 </div>
 <div>
  Content of second tab
 </div>
 <div>
  Content of third tab
 </div>

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    3 + Now that we have the base, we should add some CSS for our tabs to look like proper tabs. Go to the CSS section of the page you are working on.

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    4 + First, we are going to create the default CSS class that will be applied on each one of our tab titles. We will especially work with the ``padding`` property to make sure our tabs are seen as 3 different items. We will also change the color of our tab titles.

.. admonition:: Note
   :class: note

   For this tutorial, we added comments in the CSS code. They are here as reminders to know which class or property does what. If you feel comfortable with CSS, don't hesitate to remove these comments. Note also that we have chosen to name the CSS class ``tab`` to make it easier, but feel free to rename it as well.

.. code-block:: css

 .tab {
    padding: 10px 20px; /* Gives some space to tab titles */
    color: gray; /* Colors the titles in grey by default */
 }

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    5 + Go back to the HTML section of the page you are working on. Now that our CSS class has been created, we can apply it on the HTML tags containing our tabs titles.

.. code-block:: html

 <div>
   <a class="tab">1st tab title</a>
   <a class="tab">2nd tab title</a>
   <a class="tab">3rd tab title</a>
 </div>

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    6 + Second, we are going to give a bit more style to our tabs contents. This time, instead of creating a whole new CSS class, we are going to use an already existing one. ``ods-box`` is a default OpenDataSoft CSS style that wraps the HTML items in a border. It will help us give the impression that our tabs content are a little bit 'outside' the rest of the page content. Add a ``div`` tag wrapping all our tabs contents, with the ``ods-box`` CSS class in it.

.. code-block:: html

 <div class="ods-box">
   <div>
     Content of first tab
   </div>
   <div>
     Content of second tab
   </div>
   <div>
     Content of third tab
   </div>
 </div>

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    7 + Check the preview of your page. We have created the structure of our tabs!


.. PART 2 - ANGULARJS:

.. rst-class:: title-level-2

    Add AngularJS


.. rst-class:: block-step

    8 + It's now time for AngularJS to come into play! We will need to use 4 AngularJS directives to make our tabs work. Let's start with ``ng-click``. This directive is basically used to tell AngularJS what to do when clicking on an HTML element. In our case, ``ng-click`` will allow us to go from one tab to another.

First thing first: let's take a look at the syntax to understand how to use the ``ng-click`` variable.

.. code-block:: javascript

 ng-click="myvariable = 'myvalue'"

``ng-click`` is our AngularJS directive. It is always followed by ``=`` which indicates that what comes after will be the expression that will be evaluated by the directive. This expression must be written between ``"``.

In our expression, we will assign a value to a variable. The variable comes first, followed by another ``=``. Second comes the value, which must be written between ``'``. At this point, neither the variable nor the value exist, we name them to create them.

The variable is the link between all the AngularJS directive that will be used throughout this tutorial: chose a name that is self-explanatory, to make sure that your code can be understood by someone else. In this tutorial, we will name our variable ``tabselector``.

The value is the identifier of a tab. Each tab that is created must have its very own identifier. There again, make sure that the name of the value is self-explanatory. In this tutorial, we will have 3 values for our 3 tabs, and we will name them ``firsttab``, ``secondtab`` and ``thirdtab``.

.. rst-class:: block-step

    9 + Add the ``ng-click`` variable in the HTML ``<a>`` tag of each tab title. At this point, we have indicated to AngularJS that we have 3 different clickable entities: our 3 tab titles.

.. code-block:: html

 <div>
   <a class="tab" ng-click="tabselector = 'firsttab'">1st tab title</a>
   <a class="tab" ng-click="tabselector = 'secondtab'">2nd tab title</a>
   <a class="tab" ng-click="tabselector = 'thirdtab'">3rd tab title</a>
 </div>

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    10 + On to ``ng-if`` now! This directive is based on a condition: if the condition is verified, then its content is displayed. In our case, ``ng-if`` will allow us to display the right tab content when clicking on a tab title.

Let's take a look at the syntax to understand how to use the ``ng-if`` variable.

.. code-block:: javascript

 ng-if="myvariable == 'myvalue'"

The structure of the ``ng-if`` AngularJS directive is the same as for ``ng-click``. The name of the directive is always followed by ``=`` and the expression that will be evaluated by the ``ng-if`` directive is always written between ``"``.

But the syntax differs a little bit. In our expression, we have once again the name of the variable and the name of the value (written between ``'``), which we have created in the step 8. However, this time, the variable and value must be separated by ``==``, which indicates that we express a condition. Basically, we could read it as follows: "If ``myvariable`` equals ``myvalue``, [display the content of ``myvalue``]".

.. rst-class:: block-step

    11 + Add the ``ng-if`` variable in the HTML ``<div>`` tag of each tab content. At this point, we have indicated AngularJS which tab content to display depending on which tab title we clicked on.

.. code-block:: html

  <div class="ods-box">
    <div ng-if="tabselector == 'firsttab'">
      Content of first tab
    </div>
    <div ng-if="tabselector == 'secondtab'">
      Content of second tab
    </div>
    <div ng-if="tabselector == 'thirdtab'">
      Content of third tab
    </div>
  </div>

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    12 + It's time to tackle ``ng-init``! This directive is used to initialize a variable: it basically means that when a web page is loaded, the code is going to be read from the first to the last line: ``ng-init`` will indicate that AngularJS will be used from there, and which variable will be used. In our case, ``ng-init`` will also be used to indicate which tab content should be displayed by default.

Let's take a look at the syntax to understand how to use the ``ng-init`` variable.

.. code-block:: javascript

 ng-init="myvariable = 'myvalue'"

The syntax of the ``ng-init`` AngularJS directive is exactly the same as for ``ng-click`` (see step 8).

In our expression, the variable is the same we created in step 8 and have been using since. The value is the identifier of the tab which content will be display by default.

.. rst-class:: block-step

    13 + Add the ``ng-init`` variable in an HTML tag that wraps the whole code of the tabs. For this tutorial, we are going to put ``ng-init`` in the default ``<div class="ods-box">`` tag that is by default in all OpenDataSoft page (right below ``<div class="container">`` - both tags being the default frame of any OpenDataSoft page). At this point, our tabs are fully functionable!

.. code-block:: html

 <div class="container">
    <div class="ods-box" ng-init="tabselector = 'firsttab'">

        <div>
            <a class="tab" ng-click="tabselector = 'firsttab'">1st tab title</a>
            <a class="tab" ng-click="tabselector = 'secondtab'">2nd tab title</a>
            <a class="tab" ng-click="tabselector = 'thirdtab'">3rd tab title</a>
        </div>

        <div class="ods-box">
            <div ng-if="tabselector == 'firsttab'">
                Content of first tab
            </div>
            <div ng-if="tabselector == 'secondtab'">
                Content of second tab
            </div>
            <div ng-if="tabselector == 'thirdtab'">
                Content of third tab
            </div>
        </div>

    </div>
 </div>

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    14 + Although our tabs fully work by now, there is still something that is missing. Nothing indicates which tab is selected! Let's do this, starting with the creation of the "selected tab" style. Go to the CSS section of the page you are working on.

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    15 + Create a distinct style which easily indicates which tab is selected. Here, we will call this CSS class ``activetab`` and play with both the color of the text and a bold border under the text.

.. code-block:: css

 .activetab {
    color: black; /* Colors the text in black */
    border-bottom: 3px solid #2d2d2d; /* Underlines the text with a bold dark border */
 }

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    16 + Go back to the HTML section of the page you are working on. We will now apply our CSS style using our fourth (and last!) AngularJS variable: ``ng-class``. This variable is used to apply a CSS style depending on an expression. In our case, ``ng-class`` will be used to apply a particular style to a tab title when it is selected.

Let's take a look at the syntax to understand how to use the ``ng-class`` variable.

.. code-block:: javascript

 ng-class="{'mycssclass' : myvariable == 'myvalue'}"

The structure of the ``ng-class`` AngularJS directive is the same as for the other directives: first comes the name of the directive, followed right after by ``=``, and the expression that will be evaluated by the directive is written between ``"``.

The expression must also written between ``{}``. First comes the name of the CSS class that should be used, followed by ``:``. Then, we will find the name of the variable as well as the name of the value (written between ``'``). The variable and value must be separated by ``==``, just like when we used ``ng-if`` in step 10. Basically, we could read it as follows: "``mycssclass`` must be used for when ``myvariable`` equals ``myvalue``".

.. rst-class:: block-step

    17 + Add the ``ng-class`` directive in the HTML ``<a>`` tag of each tab title.

.. code-block:: html

 <div>
   <a class="tab" ng-click="tabselector = 'firsttab'" ng-class="{'activetab' : tabselector == 'firsttab'}">1st tab title</a>
   <a class="tab" ng-click="tabselector = 'secondtab'" ng-class="{'activetab' : tabselector == 'secondtab'}">2nd tab title</a>
   <a class="tab" ng-click="tabselector = 'thirdtab'" ng-class="{'activetab' : tabselector == 'thirdtab'}">3rd tab title</a>
 </div>

.. rst-class:: img-hide

    SCREENSHOT


.. PART 2 - FINISHING TOUCHES:

.. rst-class:: title-level-2

    Finalize the tabs



.. rst-class:: block-step

    18 + Our ``ng-class`` directive works! But it isn't so pretty, is it? Let's go back to the CSS section to add the finishing touches!

.. code-block:: css

 .tabs {
    margin: 1em; /* Adds lots of space around the tabs, to avoid the border to fall into the tab content area */
 }

 /* Only visible when the mouse is on a tab title */
 .tab:hover {
    color: black; /* Colors the text in black to highlight the possible selection */
    text-decoration: none; /* Removes the hyperlink underline style */
 }

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    19 + Go back to the HTML section to apply the whole our new CSS style. Our ``tabs`` CSS class will do very well in the ``div`` tag that wraps our tab titles. As for ``tab:hover``, since it is built on top of the main CSS class ``tab``, it automatically also applies to the HTML elements with the ``tab`` CSS class.

.. code-block:: html

 <div class="container">
    <div class="ods-box" ng-init="tabselector = 'firsttab'">

        <div class="tabs">
          <a class="tab"
             ng-click="tabselector = 'firsttab'"
             ng-class="{'activetab' : tabselector == 'firsttab'}">1st tab title</a>
          <a class="tab"
             ng-click="tabselector = 'secondtab'"
             ng-class="{'activetab' : tabselector == 'secondtab'}">2nd tab title</a>
          <a class="tab"
             ng-click="tabselector = 'thirdtab'"
             ng-class="{'activetab' : tabselector == 'thirdtab'}">3rd tab title</a>
        </div>

        <div class="ods-box">
            <div ng-if="tabselector == 'firsttab'">
                Content of first tab
            </div>
            <div ng-if="tabselector == 'secondtab'">
                Content of second tab
            </div>
            <div ng-if="tabselector == 'thirdtab'">
                Content of third tab
            </div>
        </div>

    </div>
 </div>

.. rst-class:: img-hide

    SCREENSHOT

.. rst-class:: block-step

    20 + Our creation is almost complete! We still have yet to replace every example text by real content. For this tutorial, we will use the `Shanghai World University Ranking <https://data.opendatasoft.com/explore/dataset/shanghai-world-university-ranking%40public-us/>`_ dataset. The first tab will contain the table visualization, the second tab will contain a map created with the Map Builder and the third tab will contain a Top 20 chart visualization. Each tab title will be preceded by a `Font Awesome <https://fontawesome.com/>`_ icon (just to spice things up a bit!). And each visualization will be preceded by a title to make sure that everything is perfectly understood.

.. admonition:: Important
   :class: important

   When adding the visualizations, don't forget to declare your context with the ``ods-dataset-context`` widget, and to delete the context section in the visualizations widgets codes!

.. code-block:: html

 <ods-dataset-context context="worlduniversityranking"
                      worlduniversityranking-dataset="shanghai-world-university-ranking@public-us">

 <div class="container">
    <div class="ods-box" ng-init="tabselector = 'firsttab'">

        <div class="tabs">
          <a class="tab"
             ng-click="tabselector = 'firsttab'"
             ng-class="{'activetab' : tabselector == 'firsttab'}"><i class="fa fa-list-ol" aria-hidden="true"></i>
                    Full list</a>
          <a class="tab"
             ng-click="tabselector = 'secondtab'"
             ng-class="{'activetab' : tabselector == 'secondtab'}"><i class="fa fa-map" aria-hidden="true"></i>
                    World map</a>
          <a class="tab"
             ng-click="tabselector = 'thirdtab'"
             ng-class="{'activetab' : tabselector == 'thirdtab'}"><i class="fa fa-area-chart" aria-hidden="true"></i>
                    Top 20 ranking</a>
        </div>

        <div class="ods-box">
            <div ng-if="tabselector == 'firsttab'">
                    <h3>
                        University list
                    </h3>
                    <h5>
                        Sorted by rank
                    </h5>
                <ods-table context="worlduniversityranking"></ods-table>
            </div>
            <div ng-if="tabselector == 'secondtab'">
                    <h3>
                        University map
                    </h3>
                    <h5>
                        Colored by # of university
                    </h5>
                <ods-map no-refit="true"
                             scroll-wheel-zoom="false"
                             display-control="false"
                             search-box="false"
                             toolbar-fullscreen="false"
                             toolbar-geolocation="false"
                             basemap="mapbox.light">
                        <ods-map-layer-group>
                            <ods-map-layer context="worlduniversityranking"
                                           color-numeric-ranges="{'15':'#FFFFFF','50':'#C8CDE3','200':'#929BC8','400':'#5C69AD','1565':'#263892'}"
                                           color-undefined="#1B5AA5"
                                           color-out-of-bounds="#1BA566"
                                           color-numeric-range-min="1"
                                           display="choropleth"
                                           function="COUNT"
                                           expression="total_score"
                                           shape-opacity="0.8"
                                           point-opacity="1"
                                           border-color="#555555"
                                           border-opacity="0.8"
                                           border-size="1"
                                           border-pattern="solid"
                                           caption="true"
                                           title="Shanghai world university ranking"></ods-map-layer>
                        </ods-map-layer-group>
                    </ods-map>
            </div>
            <div ng-if="tabselector == 'thirdtab'">
                    <h3>
                        Top 20 university
                    </h3>
                    <h5>
                        by average score
                    </h5>
                <ods-chart single-y-axis="true"
                               single-y-axis-label="University average score"
                               display-legend="false"
                               labels-x-length="35"
                               align-month="true">
                        <ods-chart-query context="worlduniversityranking"
                                         field-x="university_name"
                                         maxpoints="20"
                                         sort="serie1-1">
                            <ods-chart-serie expression-y="total_score"
                                             chart-type="column"
                                             function-y="AVG"
                                             color="#263892"
                                             display-units="false"
                                             display-values="true">
                            </ods-chart-serie>
                        </ods-chart-query>
                    </ods-chart>
            </div>
        </div>

    </div>
 </div>

 </ods-dataset-context>

.. rst-class:: img-hide

    SCREENSHOT



.. rst-class:: block-prerequisite-congratulation

 **CONGRATULATIONS!**

 You have finished this tutorial and you now know how to create tabs using 4 different AngularJS directives!
