var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content ={ 
    title: ' Article [ Amber]',
    heading:'Article one',
    date : '10 Oct 2016',
    content :`p>
         This is the content for my first article. Yo Yo YO YO.
    </p>
      <p>
         This is the content for my first article. Yo Yo YO YO.
    </p>
      <p>
         This is the content for my first article. Yo Yo YO YO.
    </p> `
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    

var htmltemplate=`

        <html>
         <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet"/>
         </head>
          <body>
               <div class="container">
              <div>
                  <a href="/">Home</a>
             </div>
             <hr/>
             <h1>
                   ${heading}
             </h1>
             <div>
                 ${date}
                  </div>
            <div>
            ${content}
            </div>
            </div>
           </body>         
           
        </html>
        `;

 return htmlTemplate;
 }
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
   res.send(createTemplate(articleOne));
    
});
app.get('/article-two',function(req,res){
    res.send('ARTICLE 2  ARE REQUESTED AND WILL BE SERVED HERE');
    
});
app.get('/article-three',function(req,res){
    res.send('ARTICLE 3  ARE REQUESTED AND WILL BE SERVED HERE');
    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});