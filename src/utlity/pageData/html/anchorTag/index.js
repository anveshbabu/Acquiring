// fontTag
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export const HTML_ANCHOR_TAGS = {
    document: "html",
    topic: "anchorTag",
    data: (

        <div>

            <header className="docs-header">
                <h1 className="docs-heading">Creating Hyperlinks with the Anchor Tag in HTML
                    {/* <span className="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section className="docs-intro">
                    <p>In HTML, the anchor tag (<code>{`<a>`}</code>) is used to create hyperlinks. Hyperlinks are links that allow users to navigate to other pages or sections within a website. The anchor tag is one of the most important tags in HTML as it is used to create links between different web pages.</p>

                    <p>The <mark>href</mark> attribute is used to specify the destination of the link. This attribute can take a variety of values, including an absolute URL, a relative URL, or an ID of an element within the same page. For example, <a href="https://www.example.com">Go to Example.com</a> creates a link that directs users to the Example.com website.</p>
                </section>
            </header>

            <section>
                <p>Additionally, the <mark>target</mark> attribute can be used to specify where the link should open. This can be set to <strong>two</strong> values :</p>


                <ul>
                    <li> <mark>{"_blank "}</mark>: to open the link in a new tab or window</li>
                    <li><mark>{'_self'}</mark>: to open the link in the same tab or window.</li>
                </ul>

                <p>You can also use the <mark>name</mark> attribute to create a named anchor and the <mark>id</mark> attribute to create an id for an element. You can then use these attributes to create links that jump to specific parts of the page, such as <code>{`<a href="#top">`}</code> Go to Top <code>{`</a>`}</code> where the href value of the link is <mark>{`"#top"`}</mark> and the id of the element is {`"top".`}</p>

                <p>In addition, you can also use the <mark>title</mark> attribute to provide a brief description of the link, which will display when the user hovers over the link. This can be useful for providing additional context for users who are accessing the website with assistive technologies.</p>
                <p>Overall, the anchor tag is a powerful and versatile tool for creating links and allowing users to navigate your website. It is essential for making your website user-friendly and easy to use.</p>
            </section>


            <div class="docs-code-block">
                <p>Here is the simple example program for printing the anchor tag</p>
                <h5>Example</h5>

                <CodeEditor
                    value={`
                    <html>
                    <head>
                        <title>Anchor</title>
                    </head>
                    <body>
                        <ul>
                            <li><a href="07_tables.html" target="_blank"> Tables</a></li>
                            <li><a href="07_tables.html" target="_self"> Tables</a></li>
                            <li><a href="07_tables.html" target="_parent"> Tables</a></li>
                            <li><a href="07_tables.html" target="_top"> Tables</a></li>
                            <li><a href="https://www.acquiring.in/html_tutorial/image_tag_example_program_in_html" target="_blank" > Images</a></li>
                            <li ><a href="v2.jpg"> Lists</a></li>
                            <li ><a href="img/v.jpg"> Lists</a></li>
                        </ul>
                    <a href="mailto:acquiring@gmail.com"> Send E-Mail</a>
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
                <p>In the body section of the document, there is an unordered list created using the <mark>ul</mark> tag. The list contains several <mark>li</mark> elements, each of which contains an anchor tag (a).</p>
                <p>TThe a tag is used to create hyperlinks, which can either link to another webpage, a specific section of the current webpage, or a different resource such as an image or email.</p>

                <h5>Each a tag has two attributes:</h5>
                <ul>
                    <li> href</li>
                    <li>target</li>
                </ul>
                <p>The <mark>target</mark> attribute specifies the target frame or window where the linked document or resource should be displayed.</p>

                <p>In the example, the first four a tags have the <mark>href</mark> attribute set to {`"07_tables.html"`} and the target attribute set to <mark>_blank, _self, _parent, or _top</mark>.</p>

                <ul>
                    <li> <mark>{"_blank "}</mark>: means that the linked document will be opened in a new window or tab</li>
                    <li><mark>{'_self'}</mark>: means that the linked document will replace the current document in the same window or tab</li>
                    <li><mark>{'_parent'}</mark>: means that the linked document will replace the parent frame</li>
                    <li><mark>{'_parent'}</mark>: means that the linked document will replace the entire window.</li>
                </ul>

                <p>The fifth a tag has the href attribute set to {`"https://www.example.in/html_tutorial/image_tag_example_program_in_html"`} and the target attribute set to _blank. This will open the linked document in a new window or tab.</p>
            <p>The last two a tags have the href attribute set to {`"v2.jpg" and "img/v.jpg"`}. These links will point to an image file with the specified file name.</p>
            
            <p>Finally, there is a mailto link created using the a tag with the href attribute set to {`"mailto:acquiring@gmail.com"`}. This will create a link that opens the {`user's`} email client and creates a new email to the specified address.</p>
            </div>
        </div>
    )
}