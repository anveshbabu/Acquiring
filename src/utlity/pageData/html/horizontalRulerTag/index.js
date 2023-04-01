
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);



export const HTML_HORIZONTAL_RULE = {
    document: "html",
    topic: "horizontalTags",
    data: (
        <div>

            <header class="docs-header">
                <h1 class="docs-heading">Creating a Stylish Horizontal Ruler in HTML
                    {/* <span class="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section class="docs-intro">
                    <p>HTML horizontal rules, also known as horizontal lines, are used to create a visual separation between different sections of content on a webpage. They are represented by the <code>{'<hr>'}</code> tag.</p>
                </section>
            </header>
            <section>
                <p>Using the hr tag is very simple, as it requires only one line of code:</p>

                <div class="callout-block callout-block-info">

                    <div class="content">
                        <h4 class="callout-title">
                            <span class="callout-icon-holder me-1">
                                <i class="fas fa-info-circle"></i>
                            </span>
                            example:
                        </h4>
                        {'<hr>'}
                    </div>
                </div>

                <p>The   tag does not have any closing tag, it is a self-closing tag. It does not require any attributes, and it does not have any specific properties or styling options.</p>

                <p>When rendered by a browser, the <code>{'<hr>'}</code> tag creates a horizontal line that spans the full width of its container element, like a div or a section. You can use it to separate different parts of the content, like different sections of an article, different elements in a form, or between different sections of a webpage.</p>
                <p>You can also use CSS to style the <code>{'<hr>'}</code> tag, such as changing its color, width, and height.</p>
                <p>The following are some common attributes used with the</p>
            </section>
            <section>
                <h5>tag:</h5>

                <ul>
                    <li> <code>{"align"}</code>: Specifies the horizontal alignment of the rule on the page (left, right, center).</li>
                    <li><code>{'width'}</code>: Specifies the width of the rule in pixels or as a percentage of the containing element.</li>
                    <li><code>{"size"}</code>: Specifies the height of the rule in pixels.</li>
                    <li><code>{'color'}</code> : Specifies the color of the rule.</li>
                    <li><code>{'noshade'}</code> : Specifies that the rule should have a solid color instead of a shading effect.</li>

                </ul>
                <div class="callout-block callout-block-info">

                    <div class="content">
                        <h4 class="callout-title">
                            <span class="callout-icon-holder me-1">
                                <i class="fas fa-info-circle"></i>
                            </span>
                            example:
                        </h4>
                        {'<hr align="center" width="70%" size="3" color="#8080ff">'}
                    </div>
                </div>

                <div class="docs-code-block">
                    <h5>Example</h5>

                    <CodeEditor
                        value={`
                        <html>
                        <head>
                          <title>Horizontal Rule</title>
                        </head>
                        <body>
                          <h1>Heading 1</h1>
                          <hr>
                        <h2>Heading 2</h2>
                        <hr align="center" width="70%" size="3" color="#8080ff">
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

                </div>

                <p>Between the two headings, there is a horizontal rule represented by the <code>{'<hr>'}</code>  tag. This creates a horizontal line on the webpage that spans the full width of its container element, in this case the <code>{'<body>'}</code>  element. It separates the two headings and helps to visually break up the content on the webpage, making it easier to read and understand.</p>

                <p>A second horizontal rule <code>{'<hr>'}</code> tag having the following attributes:</p>

                <ul>
                    <li> <code>{"align"}</code>: The rule is centered on the page.</li>
                    <li><code>{'width'}</code>:  The width of the rule is 70% of the containing element.</li>
                    <li><code>{"size"}</code>: The height of the rule is 3 pixels.</li>
                    <li><code>{'color'}</code>: The color of the rule is #8080ff (a shade of blue).</li>
                </ul>
            </section>
        </div>



    )
};