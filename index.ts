'use strict';

import { writeFileSync } from "fs";

var theme = require('./theme');

var resume = require('./resume.json');
writeFileSync('./index.html', theme.render(resume));
