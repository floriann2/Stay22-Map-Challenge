# Stay22-Map-Challenge

---

## Setup

Local web server needed to generate/load the data files (Ex: XAMPP's Apache HTTP Server). Otherwise, please see URL above.  

## What It Does/How It Works

Using an open-source JS library (Leaflet) to build a web mapping application.
```
1) Hover over an existing pinpoint to view the business name and street address at that location. 

2) Click the pinpoint to view the # of times a user has hovered over that location (via alert message).

3) If the hover count is > 4, a message below the map will appear. 

4) If the click count is > 2, a different message below the map will appear.

5) Click anywhere on the map to generate a new pinpoint. Since they are new areas, no name/description shall appear, only its specified coordinates.

6) All pinpoints are draggable, adjusting to new coordinates (latitude, longitude), however saving the original pin location's hover/click count!

7) Toggle the latest pinpoint added, to remove or bring it back onto the map. 

```
## Technologies/Languages
```
- HMTL/CSS (scripting/styling)
- Vanilla JS + JQuery (functionality)
- JSON/GeoJSON (generate/load data points)
```
## What I Learned 
How to use GeoJSON to represent simple geographical features on a map, such as points and line strings.

### Mapbox vs. Leaflet
        
Given the requirements of this technical challenge, I knew that Mapbox wouldn't be the best choice, as it's meant for complex maps which hold a lot of data. Since I wasn't dealing with a large amount of data but still needed some interactivity, Leaflet was my best choice. Leaflet provided me with simplicity in my design, and the performance needed for my application to work efficiently across different platforms. I will surely use this platform for future work involving maps!

        
