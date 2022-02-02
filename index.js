const { response } = require('express');
const express = require('express');
const { all } = require('express/lib/application');
const {Question} = require('./data')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/questions', (req, res)=>{
    const page = parseInt(req.query.page);
    const limit =parseInt(req.query.limit);
    const allQuestion= Question();
    if(limit > allQuestion.length){
        res.status(404).json(" page limit Exceded ")
    }
    const startIndex = (page-1) *limit;
    const endIndex = page * limit;
    const allQuestions = Question();
    const results = {}
    if(endIndex <allQuestion.length){

        results.next = {
            page:page+1,
            limit:limit
        }
    }
    if(startIndex > 0){

        results.previos = {
            page:page-1,
            limit:limit
        }
    }
    results.results = allQuestions.slice(startIndex, endIndex);
    res.json(results);
});
app.get('/question/:id', (req, res)=>{
    const {id} = req.params;
   const allQuestion = Question();
    allQuestion.map((question)=>{
        if(question.id === id){
            res.json(question);
        }
    });
    res.status(404).json("Not Found");
});
app.use('/',  (req, res, next)=>{
	const filters = req.query;
    const searchQuestions = Question();
    const filterQuestion = searchQuestions.filter((question)=>{
		let isvalid = true;
		for( key in filters){
 			isvalid =isvalid && question[key] == filters[key];
		}
		return isvalid;
	});
	res.json(filterQuestion);
	

});

app.listen(process.env.PORT|| 5000, ()=>{
    console.log("App is Listening to Port 5000");
})