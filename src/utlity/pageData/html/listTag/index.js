// fontTag
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export const HTML_LIST_TAGS = {
    document: "html",
    topic: "listTag",
    data: (

        <div>

            <header className="docs-header">
                <h1 className="docs-heading">Creating Lists in HTML: Understanding the List Tag
                    {/* <span className="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section className="docs-intro">
                    <p>HTML Lists are used to specify lists of information. All lists may contain one or more list elements.</p>
                    <p>In HTML, there are several types of list elements used to display a list of items</p>
                </section>
            </header>

            <section>
                <p><mark>Unordered List:</mark> {`<ul>...</ul> `}- Represents a list of items with bullet point</p>
                <strong>Values :</strong>
                <ul>
                    <li>disc</li>
                    <li>circle</li>
                    <li>square</li>
                </ul>
                <p><mark>Ordered List:</mark> {`<ol>...</ol> `}- Represents a list of items with numbers</p>
                <strong>Values :</strong>
                <ul>
                    <li>1</li>
                    <li>I</li>
                    <li>i</li>
                    <li>a</li>
                    <li>A</li>
                </ul>
                <p><mark>Definition List:</mark> {`<dl>...</dl> `}- Represents a list of terms and their associated descriptions</p>
                <p><mark>Menu List:</mark> {`<menu>...</menu> `}- Represents a list of commands</p>
                <p><mark>Directory List:</mark> {`<dir>...</dir> `}- Represents a list of file names with bullet points</p>
            </section>


            <section>
                <h5>Ordered List</h5>
                <p>An ordered list in HTML is a list of items that are marked with numbers, letters, or Roman numerals. It is created using the <code>{`<ol>`}</code> (ordered list) tag, which is a container for a set of <code>{`<li>`}</code> (list item) elements. The order of the items is determined by the HTML code, and the browser automatically generates the numbers for each item. This type of list is useful for creating lists of steps, instructions, or for organizing items in a specific order.</p>
                <p>The <code>{'<ol>'}</code> tag can also have various attributes, such as start (which sets the starting value of the first item) and type (which sets the type of numbering, such as decimal, lowercase Roman, etc.).</p>
            </section>


            <section>
                <div class="docs-code-block">
                    <h5>Here is the simple program for printing the ordered list tag example in html</h5>

                    <CodeEditor
                        value={`
                        <html>
                        <head>
                            <title>HTML - Acquiring technologies</title>
                        </head>
                        <body>
                            <ol>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ol>
                            <ol type="a">
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ol>        
                            <ol type="A">
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ol>
                            <ol type="i">
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ol>        
                            <ol type="I">
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ol>
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


            <section>
                <h5>unordered List</h5>
                <p>An unordered list in HTML is a list of items represented by bullet points. It is defined using the <code>{'<ul>'}</code> tag and each list item is denoted by the  <code>{'<li>'}</code> tag.</p>
                <div class="docs-code-block">

                    <h5>Here is the simple program for printing the unordered list tag example in html</h5>
                    <CodeEditor
                        value={`
                        <html>
                        <head>
                            <title>HTML - Acquiring technologies</title>
                        </head>
                        <body>
                            <ul>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ul>        
                            <ul type="circle">
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ul>
                            <ul type="square">
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ul>
                            <ul type="circle">
                                <li> Computer</li>
                                <li>
                                    Computer
                                        <ul type="square">
                                            <li>Keyboard</li>
                                            <li>Keyboard</li>
                                            <li>Keyboard</li>
                                            <li>Keyboard</li>
                                            <li>Keyboard</li>
                                        </ul>
                                </li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </ul>
                        
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


            <section>
                <h5>definition List</h5>
                <p>A definition list in HTML is a list of terms and their associated definitions. It is created using the <code>{`<dl>`}</code> tag along with <code>{`<dt>`}</code>(definition term) and <code>{`<dd>`}</code> (definition description) tags.</p>
                <div class="docs-code-block">

                    <h5>Here is the simple program for printing the Definition list tag example in html</h5>
                    <CodeEditor
                        value={`
                        <html>
                        <head>
                            <title>HTML - Acquiring technologies</title>
                        </head>
                        <body>
                            <dl>
                                <dt>HTML</dt>
                                <dd> 
                                    Hyper text Markup Language
                                    <dl>
                                        <dt>CSS</dt>
                                        <dd> Cascading Stylesheet</dd>
                                    </dl>
                                </dd>
                                <dt>CSS</dt>
                                <dd> 
                                    Cascading Stylesheet
                                        <ul type="square">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JS</li>
                                            <li>JQUERY</li>
                                            <li>PHP</li>
                                        </ul>
                                </dd>
                            </dl>
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


            <section>
                <h5>menu List</h5>
                <p>A <code>{`<menu> `}</code>element can contain one or more <code>{`<li>`}</code> or <code>{`<menuitem>`}</code> elements within it.</p>
                <div class="docs-code-block">

                    <h5>Here is the simple program for printing the Menu list tag example in html </h5>
                    <CodeEditor
                        value={`
                        <html>
                        <head>
                            <title>HTML - Acquiring technologies</title>
                        </head>
                        <body>
                            <menu>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                                <li> Computer</li>
                            </menu>
                            
                            <menu>
                                <menuitem> Computer</menuitem>
                                <menuitem> Computer</menuitem>
                                <menuitem> Computer</menuitem>
                                <menuitem> Computer</menuitem>
                                <menuitem> Computer</menuitem>
                            </menu>
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


            <section>
                <h5>directory List</h5>
                <p>The <mark>dir</mark> tag in HTML was used to create a directory list, which is a list of files or folders, each represented by a li element. However, the dir tag has been deprecated in HTML5 and should not be used in modern web development. Instead, it is recommended to use the unordered list (ul) or ordered list (ol) tags to create lists in HTML.</p>
                <div class="docs-code-block">

                    <h5>Here is the simple program for printing the directory list tag example in html</h5>
                    <CodeEditor
                        value={`
                        <html>
    <head>
        <title>HTML - Acquiring technologies</title>
    </head>
    <body>
        <dir>
            <li> Computer</li>
            <li> Computer</li>
            <li> Computer</li>
            <li> Computer</li>
            <li> Computer</li>
        </dir>
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
                <p>In summary, the list tag is an essential tool for creating structured and organized content on a website. With the help of the <code>{`<ul>`}</code> and <code>{`<ol>`}</code> tags, you can create unordered and ordered lists respectively, and with the help of <code>{`<li>`}</code> tag you can create list items in those lists. These tags give the web developers more options to format the content on website.</p>

            </section>

        </div>
    )
}