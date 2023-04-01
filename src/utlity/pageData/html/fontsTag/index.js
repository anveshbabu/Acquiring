// fontTag
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export const HTML_FONT_TAGS = {
    document: "html",
    topic: "fontTag",
    data: (

        <div>

            <header className="docs-header">
                <h1 className="docs-heading">HTML Fonts: An Introduction to the Font Tag
                    {/* <span className="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section className="docs-intro">
                    <p>The <code>{'<font>'}</code> tag in HTML is used to specify the <mark>font</mark>, <mark>color</mark>, and <mark>size</mark> of text. The  <code>{'<font>'}</code> tag is now considered deprecated, which means it is no longer recommended for use and may not be supported in future versions of HTML. Instead, {"it's"} better to use CSS to style text.</p>
                </section>
            </header>

            <section>
                <h5> The <code>{'<font>'}</code> tag takes several attributes, including:</h5>

                <ul>
                    <li> <code>{"<face>"}</code>: This attribute specifies the font to be used.</li>
                    <li><code>{'<size>'}</code>: This attribute specifies the size of the text. The size can be specified as a number (1-7) or as a relative value (e.g. +1, -2).</li>
                    <li><code>{"<color>"}</code>: This attribute specifies the color of the text. The color can be specified as a named color (e.g. {"red"}), as a hexadecimal color code (e.g. {"#FF0000"}), or as an RGB value (e.g. {"rgb(255,0,0)"}).s</li>


                </ul>
                <p>Here is the simple example program for printing the text within the font tag</p>
            </section>


            <div class="docs-code-block">
                <h5>Example</h5>

                <CodeEditor
                    value={`
                        <html>
                        <head>
                          <title>Font Tag</title>
                        </head>
                        <body>
                          <h1>Font Tag</h1>
                          <font face="roboto" size='5' color="red">
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                          </font>
                        </body>
                      </html>
         `}
                    readOnly
                    language="html"
                    data-color-mode="dark"
                    placeholder="Please enter JS code."
                    // onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 14,
                        background: "#5d6778",
                        fontFamily:
                            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                    }}
                />
                <p>This code creates an HTML document with a title of {"Font Tag"} in the head. In the body of the document, there is a heading with the text {'"Font Tag"'} and a paragraph of text that is contained within a <code>{'<font>'}</code> tag.</p>
                <p>The <code>{'<font>'}</code> tag has three attributes:</p>
                <ul>
                    <li> <code>{"face"}</code>: This attribute specifies the font family to be used for the text within the tag. In this case, the font family is <mark>{'"roboto"'}</mark>.</li>
                    <li><code>{'size'}</code>: This attribute specifies the size of the text within the tag. In this case, the size is <mark>{`"5"`}</mark>.</li>
                    <li><code>{"color"}</code>: This attribute specifies the color of the text within the tag. In this case, the color is <mark>{'"red"'}</mark>.</li>
                </ul>
                <p>So, the paragraph text {'"Lorem ipsum dolor sit amet, consectetuer adipiscing elit." '}will be displayed in the Roboto font, with a size of 5 and in red color.</p>
            </div>
        </div>
    )
}