// fontTag
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export const HTML_MARQUEE_TAGS = {
    document: "html",
    topic: "marqueeTag",
    data: (

        <div>

            <header className="docs-header">
                <h1 className="docs-heading">Creating Scrolling Text with the Marquee Tag in HTML
                    {/* <span className="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section className="docs-intro">
                    <p>The <code>{`<marquee>`}</code> tag in HTML is used to create a scrolling text or an image. It is an HTML element that is used to scroll certain text or image across a web page. The tag was first introduced in the early versions of HTML and is now deprecated in HTML5.</p>
                    <p>The <code>{`<marquee>`}</code> tag can be used to create scrolling text, images, or other content that moves horizontally or vertically across the web page. It is a non-standard HTML element and is not supported by all web browsers.</p>
                </section>
            </header>

            <section>
                <h5>Attributes of the <code>{`<marquee>`}</code> tag include:</h5>


                <ul>
                    <li> <mark>{"direction"}</mark>: Specifies the direction of the scrolling content. The values can be <mark>left, right, up, or down </mark></li>
                    <li><mark>{'behavior'}</mark>: Specifies the scrolling behavior. The values can be <mark>scroll, slide, or alternate</mark></li>
                    <li><mark>{"bgcolor"}</mark>: Specifies the background color of the scrolling content.</li>
                    <li><mark>{'height and width'}</mark>: Specifies the height and width of the scrolling content.</li>
                    <li><mark>{'scrollamount'}</mark> : Specifies the speed of the scrolling content.</li>
                    <li><mark>{'loop'}</mark>: Specifies the scrolling content moving count.</li>
                </ul>
                <p>The Marquee Tag is not recommended to use because it is not supported by many modern web browsers and it can make the website less accessible to users. Other ways to create scrolling text or images are by using CSS or JavaScript.</p>
            </section>


            <section>
                <div class="docs-code-block">
                    <h5>Source Code</h5>

                    <CodeEditor
                        value={`
                        <html>
  <head>
    <title>Acquiring Technology</title>
  </head>
  <body>
    <h1>Marquee Tag in HTML</h1>
    <marquee bgcolor="green" height="100px" width="300px" behavior="alternate" 
     direction="left">
     Acquiring Technology
    </marquee>
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


                <p>The code you provided creates an HTML document that has a heading {`"Marquee Tag in HTML"`} and a scrolling text within a marquee tag. The marquee tag is used to create a scrolling text or an image.</p>

                <p>In this code, the <mark>bgcolor</mark> attribute is set to {`"orange"`} which sets the background color of the marquee to orange. The <mark>height</mark> attribute is set to {`"100px"`} and <mark>width</mark> attribute is set to {`"300px"`} which sets the height and width of the marquee. The behavior <mark>attribute</mark> is set to {`"alternate"`} which causes the text to alternate back and forth within the marquee. The direction attribute is set to {`"left"`} which causes the text to scroll from right to left. The text inside the marquee tag is {`"Acquiring technologies"`}.</p>

                <p>{`It's`} worth noting that the Marquee tag is considered as deprecated and {`it's`} not recommended to use it in new development due to its non-standard and accessibility issues.</p>

                <p>In conclusion, the above code demonstrates the use of the HTML <code>{`<marquee>`}</code> tag, which is used to create scrolling text or images on a web page. The tag is represented by the <code>{`<marquee>`}</code> tag, and it is set to scroll left in an alternating manner. The background color of the marquee is set to orange, the height is set to 100px, and the width is set to 300px. The text within the tag is {`"Acquiring technologies"`}. It should be noted that the <code>{`<marquee>`}</code> tag is no longer considered a standard in HTML and its use is not recommended in modern web development. So, {`it's`} better to avoid using it.</p>
            </section>

        </div>
    )
}