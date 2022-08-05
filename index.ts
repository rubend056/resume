'use strict';

import { writeFileSync } from "fs";

var theme = require('jsonresume-theme-eloquent-mod');

var resume = require('./resume.json');
writeFileSync('./index.html', theme.render(resume));
