---
sidebar_position: 3
---

# Measurement Panel

## Introduction
In `Basic Viewer` mode, the right panel is the `Measurement Panel`. The Measurement Panel can be expanded or hidden by clicking on the arrow to the left of `Measurements`.
<!-- We might want to make an entire section about the tracking workflow including SR hydration because it's pretty complicated. Let's review after the deploy branch is ready. Logic is in OHIF-63 OHIF-339 tickets for reference -->
Select a measurement tool and mark an image to initiate measurement tracking. A pop up will ask if you want to track measurements for the series on which the annotation was drawn.

![user-measurement-panel-modal](../../assets/img/user-measurement-panel-modal.png)

If you select `Yes`, the series becomes a `tracked series`, and the current drawn measurement and next measurements will get shown up on the measurement panel on the right.


![user-measurement-panel-tracked](../../assets/img/user-measurement-panel-tracked.png)

If you select `No`, the measurement becomes temporary. The next annotation made will repeat the measurement tracking prompt.

If you select `No, do not ask again`, all annotations made on the study will be temporary.
<!-- Temporary measurement screenshot -->

## Labeling Measurements
You can edit the measurement name by hovering over the measurement and selecting the edit icon. You can also label or relabel a measurement by right-clicking on it in the viewport.
<!-- I would make this first screenshot smaller. Remove the other 2 screenshots as they are pretty self explanatory. Add another screenshot that shows the right-click menu option to lable/relabel measurement and justify the two screenshots in line together -->

![user-measurement-edit](../../assets/img/user-measurement-edit.png)

![user-measurement-edit-name](../../assets/img/user-measurement-edit-name.png)

Result:

![user-measurement-name](../../assets/img/user-measurement-name.png)


## Deleting a Measurement
A measurement can be deleting by dragging it outside the image in the viewport or by right-clicking on the measurement in the viewport and selecting 'Delete'.


## Jumping to a Measurement
Measurement navigation inside the top viewport can be used to move to previous and next measurement.

![user-measurement-prevnext](../../assets/img/user-measurement-prevnext.png)

If a series containing a measurement is currently being displayed in a viewport, you can jump to display the measurement in the viewport by clicking on it in the Measurement Panel.

## Export Measurements
<!-- I think PDF and DICOM export didn't make it into this version but should be options. Let's confirm -->
You can export the measurements by clicking on the `Export`. A CSV file will get downloaded to your local computer containing the drawn measurements.


![user-measurement-export](../../assets/img/user-measurement-export.png)


If you have set up your DICOM server to be able to store instances from the viewer, then you are able to create a report by clicking on the `Create Report`.
This will create a DICOM Structured Report (SR) from the measurements and push it
to the server.

For instance, running the Viewer on a local DCM4CHEE:



<div style={{padding:"56.25% 0 0 0", position:"relative"}}>
    <iframe src="https://player.vimeo.com/video/557569965?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style= {{ position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="measurement-report"></iframe>
</div>

## Overview Video
An overview of measurement drawing and exporting can be seen below:


<div style={{padding:"56.25% 0 0 0", position:"relative"}}>
    <iframe src="https://player.vimeo.com/video/545986384?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style= {{ position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="measurement-report"></iframe>
</div>
