import {config} from "dotenv"

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GMAP_API_KEY}`;
    document.body.appendChild(script);
}

window.onload = loadScript;
