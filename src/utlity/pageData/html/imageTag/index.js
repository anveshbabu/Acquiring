// headingsTags
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export const HTML_IMAGE_TAGS = {
    document: "html",
    topic: "imageTag",
    data: (

        <div>

            <header className="docs-header">
                <h1 className="docs-heading">HTML Images: An Introduction to the Image Tag
                    {/* <span className="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section className="docs-intro">
                    <p>The <code>{'<img>'}</code> tag in HTML is used to embed images in a web page. The <code>{'<img>'}</code> tag has several attributes that can be used to specify the source of the image, its dimensions, and other properties.</p>
                    <p>The most important attribute of the <code>{'<img>'}</code>  tag is the {'"src"'} attribute, which stands for{'"source"'} and is used to specify the URL of the image file. For <strong>example:</strong></p>
                    <div className="callout-block callout-block-info">

                        <div className="content">
                            {'<img src="images/acquiring.jpg">'}
                        </div>
                    </div>
                </section>
            </header>
            <section >
                <p>This will display the image file on the web page.</p>
                <p>Another important attribute of the <code>{'<img>'}</code> tag is the <mark>{'"alt"'}</mark> attribute, which is used to provide alternative text for the image in case the image cannot be displayed. The alternative text is important for accessibility and SEO. For example:</p>
                <div className="callout-block callout-block-info">
                    <div className="content">
                        {'<img src="images/acquiring.jpg" alt="acquiring"> '}
                    </div>
                </div>
            </section>
            <section>
                <p>This will display the image file and provide the alternative text {'"acquiring" '}in case the image cannot be displayed.</p>
                <p>The <mark>title</mark> attribute in the HTML <code>{'<img>'}</code> tag is used to provide additional information about the image. This information is displayed as a tooltip when the mouse pointer hovers over the image.</p>
                <p>The title attribute is optional, but{" it's "}a good practice to include it as it provides a more accessible experience for users who are unable to see the image, such as those using screen readers. The text in the title attribute should provide a brief description of the image.For <strong>example:</strong></p>
                <div className="callout-block callout-block-info">
                    <div className="content">
                        {'<img src="images/acquiring.jpg" alt="acquiring" title="acquiring technologies is E-learn platform "> '}
                    </div>
                </div>
            </section>
            <section>
                <p>Other attributes of the <code>{'<img>'}</code> tag include <mark>{'"width"'}</mark>and <mark>{'"height" '}</mark> which are used to specify the dimensions of the image, <mark>{'"border"'}</mark> which is used to specify a border around the image, and <mark>{'"class"'}</mark> and <mark>{'"id"'}</mark> which are used to specify a CSS class or ID for the image.</p>


                <div className="callout-block callout-block-info">
                    <div className="content">
                        {'<img src="images/acquiring.jpg" alt="acquiring" title="acquiring technologies is E-learn platform " height="250px" width="400px" border="1" class="imgs" id=""> '}
                    </div>
                </div>
                <p>This will display the image file with width of 400px and height of 250px, with a border of 1 pixel and class of {'"acquiring-img"'} which can be used to apply a CSS style to it.</p>
                <p>{"It's"} also worth noting that the <code>{'<img>'}</code> tag is an empty tag, which means it{"doesn't"} have a closing tag.</p>
            </section>

            <section>
                <div class="docs-code-block">
                    <h5>Example</h5>

                    <CodeEditor
                        value={`
                        <html>
                        <head>
                          <title>Image Tag</title>
                        </head>
                        <body>
                          <h1>Image Tag</h1>
                          <img src="acquiring.jpg" alt="acquiring" height="250px" width="400px"> <!--image placed in the same folder--->
                          <img src="images/acquiring.jpg" alt="acquiring" height="250px" width="400px"> <!--image placed inside an images folder--->
                          <img src="../images/acquiring.jpg" alt="acquiring" height="250px" width="400px"> <!--image placed in the outside of the html file --->
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

                <p>This is an HTML code that displays an image. The code uses the <code>{'<img>'}</code> tag to embed an image in the web page. The <mark>{'"src"'}</mark> attribute is used to specify the URL of the image file.</p>
                <p>The <mark>{'"alt"'}</mark> attribute is used to provide a text description of the image, which is displayed if the image {"can't"} be loaded. The <mark>{'"height"'}</mark> and <mark>{'"width"'}</mark> attributes are used to specify the size of the image in pixels. In this case the image is set to 250 pixels in height and 400 pixels in width.</p>
           
                <ul>
                    <li> The first image is placed in the same folder as the HTML file and is referred to as <mark>acquiring.jpg</mark>.</li>
                    <li>The second image is placed inside an images folder and is referred to as <mark>images/acquiring.jpg</mark>.</li>
                    <li>The third image is placed in a folder that is outside the folder of the HTML file and is referred to as <mark>../images/acquiring.jp</mark>g where <mark>..</mark> refers to the parent directory.</li>
                </ul>
           
           
            </section>
        </div>
    )
}
