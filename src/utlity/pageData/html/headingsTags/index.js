// headingsTags
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export const HTML_HEADINGS_TAGS = {
    document: "html",
    topic: "headingsTags",
    data: (

        <div>

            <header class="docs-header">
                <h1 class="docs-heading">HTML Headings Tags
                    {/* <span class="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section class="docs-intro">
                    <p>HTML headings are used to create headings and subheadings within a webpage. They are represented by the <code>{'<h1>'}</code>  to <code>{'<h6>'}</code>  tags.</p>
                </section>
            </header>

            <section>
                <h5>There are 6 levels of headings in HTML:</h5>

                <ul>
                    <li> <code>{"<h1>"}</code>: used for the main heading of the webpage and is typically the largest in size</li>
                    <li><code>{'<h2>'}</code>: the second level of headings</li>
                    <li><code>{"<h3>"}</code>: the third level of headings</li>
                    <li><code>{'<h4> '}</code> : the fourth level of headings</li>
                    <li><code>{'<h5>'}</code> : the second smallest level of headings</li>
                    <li><code>{'<h6>'}</code>: being the most smallest heading size</li>

                </ul>
                <p>Using headings properly can improve the accessibility and readability of a webpage for users. Search engines also use headings to understand the structure and content of a webpage.{"It's"} good practice to have only one h1 heading per page, and then use the other headings accordingly</p>
                <p>For example, you could use an <code>{'<h1>'}</code> for the title of an article, and then use <code>{'<h2>'}</code> for the subheadings within the article. You could also use <code>{'<h3>'}</code> for sub-subheadings and so on. This helps to organize the content and make it easier for users to navigate and understand the page.</p>
                <p>This is an example of HTML code which creates a webpage with different levels of headings. The code creates an HTML document with a head and a body. Within the head, there is a title element which sets the title of the webpage as <mark>{"Heading Tags"}</mark>.</p>
                <p>In the body, there are six heading elements, each with a different level from <mark>h1</mark> to <mark>h6</mark>. These headings are used to organize and structure the content of the webpage. The <mark>h1</mark> heading is the highest level and is used for the <mark>main heading</mark> of the webpage, while <mark>h2</mark> is used for <mark>subheadings</mark>, <mark>h3</mark> for <mark>sub-subheadings</mark> and so on. The text within each heading element will be displayed as a heading on the webpage. </p>

                <p>The most common attribute used in heading tags is the <mark>{"id"}</mark> attribute, which allows you to create an anchor link that can be used to link to a specific heading on a page. For example:</p>

                <div class="callout-block callout-block-info">

                    <div class="content">
                        <h4 class="callout-title">
                            <span class="callout-icon-holder me-1">
                                <i class="fas fa-info-circle"></i>
                            </span>
                            example:
                        </h4>
                        {'<h1 id="main-title">Acquiring technologies</h1>'}
                    </div>
                </div>

                <div class="docs-code-block">
                    <h5>Example</h5>

                    <CodeEditor
                        value={`
        <html>
        <head>
          <title>Heading Tags</title>
        </head>
        <body>
          <h1>Heading Level 1</h1>
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>
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
            </section>
        </div>
    )
}