// deno-lint-ignore-file
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { parse } from "https://deno.land/std@0.148.0/datetime/mod.ts";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();
let visitas:number = 0
app.handle("/", async (req) => {
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
        <html>
            <head>
                <meta charSet="utf-8" />
                <title>denon</title>
            </head>
            <body>
                <h1 style={{color:'blue'}}>Hello World</h1>
                <h2 style={{color:'red'}}>visitas: {++visitas}</h2>
                <h3 style={{color:'purple'}}>FyH: {new Date().toLocaleString()}</h3>
            </body>
        </html>
    ),
});
});
app.listen({ port: 8899 });

const myDate = parse("14-07-2022", "dd-mm-yyyy");

console.log(myDate);