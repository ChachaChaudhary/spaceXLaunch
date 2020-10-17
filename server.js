let express= require("express");
var app = express();
app.use(express.static('./dist/spaceX-launch'));
app.get("/*", function(req, res) {
    res.sendFile("index.html", {root: 'dist/spaceX-launch/'}
  );
  });
  app.listen(process.env.PORT || 8080);
