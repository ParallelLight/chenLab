var express = require('express');
var router = express.Router();

/* GET Resources page. */
router.get('/', function (req, res, next) {
    var data = {
        code: 0,
        data: {
            resources: [
                {
                    title: "Database",
                    subtitle: "Databases developed by the group",
                    tools: [
                        {
                            name: "TeCD",
                            desc: "We are mainly committed to the research of Biological Big Data and AI theory",
                            link: "http://www.eccdna.org:2022/"
                        },
                        {
                            name: "CASA",
                            desc: "Hello CASA",
                            link: "https://casadbtools.com/"
                        }
                    ]
                },
                {
                    title: "Source Code",
                    subtitle: "Source code provided by the group",
                    tools: [
                        {
                            name: "TeCD",
                            desc: "We are mainly committed to the research of Biological Big Data and AI theory",
                            link: "http://www.eccdna.org:2022/"
                        },
                        {
                            name: "CASA",
                            desc: "Hello CASA",
                            link: "https://casadbtools.com/"
                        }
                    ]
                },
                {
                    title: "Books",
                    subtitle: "Books written by the group",
                    tools: [
                        {
                            name: "TeCD",
                            desc: "We are mainly committed to the research of Biological Big Data and AI theory",
                            link: "http://www.eccdna.org:2022/"
                        }
                    ]
                },
            ]
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
