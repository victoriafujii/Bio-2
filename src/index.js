import React from "react";
import ReactDOM from "react-dom";

import {Header} from "./js/header.js";
import {TempHumi} from "./js/temp_humi.js";

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<TempHumi />, document.getElementById('temp-humi'));
