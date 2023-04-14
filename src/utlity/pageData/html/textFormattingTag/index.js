// textFormattingTag
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export const HTML_TEXT_FORMAT_TAGS = {
    document: "html",
    topic: "textFormattingTag",
    data: (

        <div>
            <header className="docs-header">
                <h1 className="docs-heading">Text Formatting in HTML: An Introduction to Formatting Tags
                    {/* <span className="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section className="docs-intro">
                    <p>HTML provides several tags for formatting text, such as bold, italic, underline, and more. These tags can be used to apply formatting to text in order to make it stand out or to indicate different types of content.</p>
                </section>
            </header>

            <div className="table-responsive my-4">
                <table className="table table-bordered">
                    {/* <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>{'<p>'}</td>
                            <td>{'<strong>'}</td>
                            <td>{'<em>'}</td>
                            <td>{'<u>'}</td>
                            <td>{'<sup>'}</td>
                        </tr>
                        <tr>
                            <td>{'<sub>'}</td>
                            <td>{'<mark>'}</td>
                            <td>{'<del>'}</td>
                            <td>{'<ins>'}</td>
                            <td>{'<small>'}</td>
                        </tr>
                        <tr>
                            <td>{'<br>'}</td>
                            <td>{'<hr>'}</td>
                            <td>{'<blockquote>'}</td>
                            <td>{'<q>'}</td>
                            <td>{'<pre>'}</td>
                        </tr>
                        <tr>
                            <td>{'<code>'}</td>
                            <td>{'<samp>'}</td>
                            <td>{'<kbd>'}</td>
                            <td>{'<var>'}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <section>
                <h5>Some common text formatting tags in HTML include:</h5>

                <ul>
                    <li> <code>{"<p>"}</code>: Defines a paragraph.</li>
                    <li><code>{'<b>'}</code> and <code>{'<strong>'}</code> :  These tags make the text bold. The <code>{`<b>`}</code> tag is used to indicate that the text is important, while the <code>{'<strong>'}</code> tag is used to indicate that the text has strong importance.</li>
                    <li><code>{'<i>'}</code> and <code>{'<em>'}</code> : These tags make the text italic. The <code> {`<i>`}</code> tag is used to indicate that the text is in an alternate voice or tone, while the <code> {`<em>`}</code> tag is used to indicate that the text should be emphasized.</li>
                    <li><code>{'<u>'}</code> : This tag underlines the text.</li>
                    <li><code>{'<s>'}</code> and <code>{'<strike>'}</code> : These tags create a line through the text. The <code> {`<s>`}</code>   tag is used to indicate that the text is no longer accurate or relevant, while the  <code> {`<strike>`}</code> tag is used to indicate that the text is no longer relevant.</li>
                    <li><code>{'<mark>'}</code> : This tag highlights the text with a yellow background.</li>
                    <li><code>{'<sub>'}</code> and <code>{'<sup>'}</code> : These tags create subscript and superscript text respectively.</li>
                    <li><code>{'<big>'}</code> and <code>{'<small>'}</code> : These tags increase or decrease the size of the text.</li>
                    <li><code>{'<del>'}</code> : Defines deleted text and strikes it through.</li>
                    <li><code>{'<ins>'}</code> : Defines inserted text and underlines it.</li>
                    <li><code>{'<br>'}</code> : Inserts a line break.</li>
                    <li><code>{'<hr>'}</code> : Inserts a horizontal rule.</li>
                    <li><code>{'<blockquote>'}</code> : Defines a long quotation.</li>
                    <li><code>{'<q>'}</code> : Defines a short quotation.</li>
                    <li><code>{'<pre>'}</code> : Defines preformatted text.</li>
                    <li><code>{'<code>'}</code> : Defines computer code text.</li>
                    <li><code>{'<samp>'}</code> : Defines sample output from a computer program.</li>
                    <li><code>{'<kbd>'}</code> : Defines keyboard input text.</li>
                    <li><code>{'var'}</code> : Defines a variable or placeholder.</li>

                </ul>
                <p>It is important to keep in mind that these tags have semantic meaning, and {`it's`} good practice to use them accordingly. Also, it is better to use CSS to style text, instead of using these tags, as using CSS allows you to have more control over the appearance of text and make it more consistent throughout the website.</p>
                <p>This is an example of HTML code that creates a webpage with various text formatting tags.</p>
            </section>

            <section>
             

                <div class="docs-code-block">
                <h5>Source Code</h5>

                    <CodeEditor
                        value={`
                        <!DOCTYPE html>
                        <html>
                            <head>
                                <title> HTML | Acquiring technologies</title>
                            </head>
                            <body>
                                <h1>Text Formatting Tags</h1>
                                <hr/>
                                <h1>HTML - <i>Hyper</i> <u>Text Markup</u> Language</h1>
                                <h2>HTML - Hyper <u>T</u>ext Markup Language</h2>
                                <u><h3>HTML - Hyper Text Markup Language</h3></u>
                                <h4>HTML -<i> Hyper</i> Text Markup Language</h4>
                                <h5>HTML - Hyper Text Markup Language</h5>
                                <h6>HTML - Hyper Text Markup Language</h6>
                                
                                <b>ghfjhk</b><br><br>
                                <strong>kjhkjh</strong><br><br>
                                <s>kjklxcvxcmb.vcnbm;vlcj</s><br><br>
                                <strike>kjklxcvxcmb.vcnbm;vlcj</strike><br><br>
                                
                                <h1>Acquiring technologies <sub><small>Learn More Be Smart</small> </sub> </h1>
                                <h1>Acquiring technologies <sub>Learn More Be Smart </sub> Computer Education</h1>
                                <h1>Acquiring technologies <sup><small>Learn More Be Smart</small> </sup> </h1>
                                
                                <h1>H<sub>2</sub>O</h1>
                                <h1>H<sup>2</sup>O</h1>
                                <p>ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                <em>Learn More Be Smart</em>
                                <h1>Acquiring technologies <mark>Software</mark> Solution</h1>
                                
                                <big>Learn More Be Smart</big><br><br>
                                <small>Learn More Be Smart</small><br><br>
                                
                                <p>On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these<del> galleries to insert tables, headers, </del>footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.<ins>You can easily change </ins>the formatting of selected text in the document text by choosing a look for the selected text from the Quick Styles gallery</p>
                                
                                <p>On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.
                                <blockquote>On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.</blockquote>
                                On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.</p>
                                
                                <h1><q>Acquiring technologies Software Solution</q></h1>
                                <pre>Acquiring technologies
                                    Computer Education
                                </pre>
                                <code><h1>Acquiring technologies Computer Education</h1></code>
                                <samp><h1>Output : <br>Enter Text : Acquiring technologies</h1></samp>
                                <kbd> Test Line </kbd>
                                
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
            <p>{`It's`} good to note that some of these tags have been deprecated like <code>{'<b>'}</code> and <code>{'<t>'}</code> {`it's`} better to use CSS to style text, instead of using these tags.</p>
        </div>
    )
}