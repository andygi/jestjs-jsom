var mergeFiles = require("merge-files");

var path = require("path");
var fs = require("fs");

var PATH_TEMP = "js";
var fileAr = [];
var directoryPath = path.join(PATH_TEMP, "__tests__");
var TEMP_DIR = PATH_TEMP + "/_temp_test";

if (!fs.existsSync(TEMP_DIR)){
    fs.mkdirSync(TEMP_DIR);
}

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }

    // get list name or file to tes from __test__ dir
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        var isTestable = file.search(/.test./i);
        if (isTestable > 0) {
            var fileName = file.replace(".test.", ".");
            fileAr.push(fileName);
        }
    });

    // create testing file by prepend config each file
    fileAr.forEach(function (file) {
        var outputPath = TEMP_DIR + "/" + file;

        var inputPathList = [
            PATH_TEMP + "/_test.config.js",
            PATH_TEMP + "/" + file,
        ];

        mergeFiles(inputPathList, outputPath).then((status) => {
            // console.log("__done", status);
        });
    });
});
