// fontTag
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export const HTML_TABLE_TAGS = {
    document: "html",
    topic: "tableTag",
    data: (

        <div>

            <header className="docs-header">
                <h1 className="docs-heading">Creating Tables in HTML: An Introduction to the Table Tag
                    {/* <span className="docs-time">Last updated: 2019-06-01</span> */}
                </h1>
                <section className="docs-intro">
                    <p>Tables are an essential element of HTML, and are used to display data in a structured format. The table tag is used to create tables in HTML, and it is one of the most versatile tags in the language. In this blog post, we will take a closer look at the table tag and explore how it can be used to create tables in HTML.</p>
                </section>
            </header>

            <section>
                <h5>Table Tags</h5>

                <div className="table-responsive my-4">
                    <table className="table table-bordered">

                        <tbody>
                            <tr>
                                <td>{'<table>'}</td>
                                <td>{'<tr>'}</td>
                                <td>{'<th>'}</td>
                                <td>{'<td>'}</td>
                                <td>{'<thead>'}</td>
                            </tr>
                            <tr>
                                <td>{'<tbody>'}</td>
                                <td>{'<tfoot>'}</td>
                                <td>{'<colgroup>'}</td>
                                <td>{'<col>'}</td>
                                <td>{'<caption>'}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>


            <section>
                <h5>In HTML, the following tags are used to create tables:</h5>

                <ul>
                    <li> <code>{"<table>"}</code>: Defines a table</li>
                    <li><code>{'<tr>'}</code>: Defines a table row</li>
                    <li><code>{"<th>"}</code>: Defines a header cell in a table</li>
                    <li><code>{'<td> '}</code> : Defines a regular cell in a table</li>
                    <li><code>{'<thead>'}</code> : Groups the header content in a table</li>
                    <li><code>{'<tbody>'}</code>: Groups the body content in a table</li>
                    <li><code>{'<tfoot>'}</code>: Groups the footer content in a table</li>
                    <li><code>{'<colgroup>'}</code>: Specifies a group of one or more columns in a table for formatting</li>
                    <li><code>{'<col>'}</code>: Specifies column properties for each column within a {`<colgroup>`} element.</li>
                    <li><code>{'<caption>'}</code>:  Defines the caption for a table.</li>

                </ul>
                <p>The table tag is used to create tables in HTML. It is an opening tag and must be closed with a closing table tag. The table tag is used in combination with other tags such as <mark>tr</mark> (table row), <mark>th</mark> (table header), and td (table data) to create a table.</p>

                <p>The <mark>tr</mark> tag is used to create <mark>rows</mark> in a table, and the <mark>th</mark> and <mark>td</mark> tags are used to create <mark>cells.</mark> The th tag is used for   <mark>table headers,</mark> and the td tag is used for <mark>table data.</mark> Table headers are typically used to label the columns of a table, and table data is used to populate the cells of a table.</p>
                <p>The table tag can also be used in combination with other attributes such as border, width, and align to control the appearance of the table. The <mark>border</mark> attribute can be used to set the width of the border around the table, the width attribute can be used to set the width of the table, and the align attribute can be used to set the alignment of the table.</p>

                <p><mark>colspan</mark> and <mark>rowspan</mark> are HTML table attributes used to specify the number of columns or rows a table cell should span.</p>

                <ul>
                    <li> <mark>colspan :</mark>is used to specify how many columns a cell should span <mark>horizontally</mark></li>
                    <li><mark>rowspan :</mark> is used to specify how many columns a cell should span <mark>vertically</mark></li>

                </ul>
                <p>Tables can also be stylized using CSS. CSS can be used to control the color, size, and spacing of table cells. It can also be used to change the background color of a table, add hover effects, and more</p>
                <p>Here is the simple example program for printing the table</p>
            </section>
            <section>


                <div class="docs-code-block">
                    <h5>Source Code</h5>

                    <CodeEditor
                        value={`
                     <html>
                     <head>
                         <title> HTML - TABLES</title>
                         <link rel="icon" type="image/x-icon" href="img/logo.png">
                     </head>
                     <body>
                         <table border='1' cellpadding='10' cellspacing='10'>
                             <caption>Table 1.1</caption>
                                 <colgroup>
                                     <col span="2">
                                     <col span="7" bgcolor="#e2ddb8">
                                     <col span="2">
                                 </colgroup>
                             <thead>
                                 <tr>
                                     <th colspan='7'>Mark List</th>
                                 </tr>
                                 <tr>                
                                     <th>SNO</th>
                                     <th>NAME</th>
                                     <th>ROLLNO</th>
                                     <th>TAMIL</th>
                                     <th>ENGLISH</th>
                                     <th>MATHS</th>
                                     <th>TOTAL</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td>1</td>
                                     <td><sup>2</sup>&#8730; x</td>
                                     <td>101</td>
                                     <td>76</td>
                                     <td>96</td>
                                     <td>90</td>
                                     <td>272</td>
                                 </tr>
                                 <tr>
                                     <td>2</td>
                                     <td>Sam</td>
                                     <td>102</td>
                                     <td bgcolor='red'><font color='white'>85</font></td>
                                     <td>79</td>
                                     <td>99</td>
                                     <td>282</td>
                                 </tr>
                                 <tr>
                                     <td>3</td>
                                     <td>Ram</td>
                                     <td>101</td>
                                     <td>76</td>
                                     <td>96</td>
                                     <td>90</td>
                                     <td>272</td>
                                 </tr>
                                 <tr>
                                     <td>4</td>
                                     <td>Sam</td>
                                     <td>102</td>
                                     <td>85</td>
                                     <td>79</td>
                                     <td>99</td>
                                     <td>282</td>
                                 </tr>
                                 <tr>
                                     <td>5</td>
                                     <td>Ram</td>
                                     <td>101</td>
                                     <td>76</td>
                                     <td>96</td>
                                     <td>90</td>
                                     <td>272</td>
                                 </tr>
                                 <tr>
                                     <td>6</td>
                                     <td>Sam</td>
                                     <td>102</td>
                                     <td>85</td>
                                     <td>79</td>
                                     <td>99</td>
                                     <td>282</td>
                                 </tr>
                             </tbody>
                             <tfoot>            
                                 <tr>
                                     <th colspan='6'>Total</th>
                                     <th>850</th>
                                 </tr>
                             </tfoot>        
                         </table>
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

                <p>The code is written in HTML and creates a table to display a mark list. The table has several elements such as a caption, header, body, and footer. The <code>{`<table>`}</code> element defines the table, with the <mark>border</mark>, <mark>cellpadding</mark>, and <mark>cellspacing</mark> attributes determining the appearance of the table. The  <code>{`<caption>`}</code> element is used to provide a title for the table, which is {`"Table 1.1"`}.
                </p>
                <p>The element is used to specify styles for specific columns within the table. In this case, the first two columns are given default styles, while the next seven columns are given a background color of {`"#e2ddb8".`}</p>
                <p>The <code>{`<thead>`}</code> element is used to define the header section of the table, and contains the headers for each column. The first row of headers is created with a <code>{`<tr>`}</code> element, and the column headers are defined with <code>{`<th>`}</code> elements.</p>
          <p>The <code>{`<tbody>`}</code> element contains the data for each row in the table, with each row being defined by a <code>{`<tr>`}</code> element and each cell within a row being defined by a <code>{`<td>`}</code> element. Some cells have special styling, such as a red background color, which is defined with the bgcolor attribute.</p>
          <p>The <code>{`<tfooter>`}</code>  element is used to define the footer section of the table, and in this case, contains the total for the last column. The <code>{`<th>`}</code>element is used to define the footer cell, and the colspan attribute is used to span multiple columns.</p>
            </section>

        </div>
    )
}