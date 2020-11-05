var html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <script src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"></script>

    <style>
      #map {
        height: 600px;
      }
    </style>
  </head>

  <body>
    <div id="map"></div>

    <script>
      var MarkerAnnotation = mapkit.MarkerAnnotation,
        clickAnnotation;
      var sfo = new mapkit.Coordinate(37.616934, -122.38379),
        work = new mapkit.Coordinate(37.3349, -122.0090201);

      mapkit.init({
        authorizationCallback: function (done) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "/services/jwt");
          xhr.addEventListener("load", function () {
            done(this.responseText);
          });
          xhr.send();
        },
      });
      var map = new mapkit.Map("map");

      // Setting properties on creation:
      var sfoAnnotation = new MarkerAnnotation(sfo, {
        color: "#f4a56d",
        title: "SFO",
        glyphText: "✈️",
      });

      // Setting properties after creation:
      var workAnnotation = new MarkerAnnotation(work);
      workAnnotation.color = "#969696";
      workAnnotation.title = "Work";
      workAnnotation.subtitle = "Apple Park";
      workAnnotation.selected = "true";
      workAnnotation.glyphText = "";

      // Add and show both annotations on the map
      map.showItems([sfoAnnotation, workAnnotation]);

      // Drop an annotation where a Shift-click is detected:
      map.element.addEventListener("click", function (event) {
        if (!event.shiftKey) {
          return;
        }

        if (clickAnnotation) {
          map.removeAnnotation(clickAnnotation);
        }

        var coordinate = map.convertPointOnPageToCoordinate(
          new DOMPoint(event.pageX, event.pageY)
        );
        clickAnnotation = new MarkerAnnotation(coordinate, {
          title: "Click!",
          color: "#c969e0",
        });
        map.addAnnotation(clickAnnotation);
      });
    </script>
  </body>
</html>`;

async function handleRequest(request) {
  const res = new Response(html);
  res.headers.set("content-type", "text/html");
  return res;
}

module.exports = handleRequest;
