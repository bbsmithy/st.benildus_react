var fs = require("fs");

function editPage(path, ) {
  fs.readFile("filelist.txt", "utf-8", function(err, data) {
    if (err) throw err;

    var newValue = data.replace(/^\./gim, "myString");

    // fs.writeFile("filelistAsync.txt", newValue, "utf-8", function(err) {
    //   if (err) throw err;
    //   console.log("filelistAsync complete");
    // });
  });
}
