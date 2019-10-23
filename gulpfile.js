var gulp = require('gulp');
var reduce = require("gulp-reduce-async");
var rename = require("gulp-rename");
var S = require("string");
var fs = require("fs");
var algoliasearch = require("algoliasearch");

function genrateJSON(cb) {
  var pagesIndex = [];

  //return gulp.src("public/**/*.html")
  return gulp.src("public/**/*.html")
    .pipe(reduce(function(memo, content, file, cb) {
      var section      = S(file.path).chompLeft(file.cwd + "/public/").s,
          title        = S(content).between('<title data-react-helmet="true">', "</title>").collapseWhitespace().s,
          pageContent  = S(content).between('</nav>', '</div><footer').stripTags().collapseWhitespace().s,
          href         = S(file.path).chompLeft(file.cwd + "/public").s,
          pageInfo     = new Object()
          isRestricted = false,
          blacklist    = [
            "/page/",
            "/tags/",
            "/blog/",
            "/pages/index.html",
            "/thanks",
            "/admin/",
            "404"
          ];



      // Skips post index page
      if (title === "Posts") {
        isRestricted = true;
      }

      // fixes homepage title
      if (href === "/index.html") {
        title = "Homepage";
      }

      // remove trailing 'index.html' from qualified paths
      if (href.indexOf("/index.html") !== -1) {
        href = S(href).strip("index.html").s;
      }

      // determine if this file is restricted
      for (const ignoredString of blacklist) {
        if (href.indexOf(ignoredString) !== -1) {
          isRestricted = true;
          break;
        }
      }

      // only push files that aren't ignored
      if (!isRestricted) {
        pageInfo["section"] = section;
        pageInfo["title"]   = title.split('|')[0];
        pageInfo["href"]    = href;

        pageInfo["content"] = pageContent;

        pagesIndex.push(pageInfo);
      }

      cb(null, JSON.stringify(pagesIndex));
    }, "{}"))
    .pipe(rename("PagesIndex.json"))
    .pipe(gulp.dest("./"));
}

async function sendIndex () {
  const algolia = algoliasearch('W3Y8BZYHS2', 'bbc901c3fe65c9a5b29a6f638bb5ce4a');
  const algoliaIndex = algolia.initIndex("swasth");
  const index = JSON.parse(fs.readFileSync("./PagesIndex.json", "utf8"));
  await algoliaIndex.clearIndex();
  return algoliaIndex.addObjects(index)
}

exports.buildIndex = genrateJSON
exports.sendIndex = sendIndex
exports.default = genrateJSON