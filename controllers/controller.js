import Question from "../models/questionSchema.js";


// get all questions
export async function getQuestions(req,res){
  const questions = await Question.find();
  console.log(questions);
  res.json({
    "status":true,
    "message":"Questions retrieved",
    "data":questions,
  });
}



export async function createQuestion(req,res){
const {question,options,answer,type} = req.body;
try {
   await Question.insertMany(req.body).then(()=>{
    res.json({
        "status":true,
        "msg":"inserted",
    })
   })
} catch (error) {
    res.status(500).send({
        "status":false,
        "message":"something went wrong",
    })
}
}


export async function deleteAllQuestion(req,res){
   await Question.deleteMany().then(()=>{
        res.json({
            "status":true,
            "message":"All questions deleted",
        });
    });
}

export async function deleteOneQuestion(req,res){
    const id = req.params.id;
    try {
        await Question.findByIdAndDelete(id).then(()=>{
            res.status(200).send({
                "status":true,
                "message":"Question deleted"
            });
        })
    } catch (error) {
        res.json({
            "status":false,
            "message":error,
        })
    }
}

export async function getOneQuestion(req,res){
    const id = req.params.id;
    try {
        await Question.findById(id).then((question)=>{
            res.status(200).send({
                "status":true,
                "data":question,
            })
        })
    } catch (error) {
        res.status(500).send({
            "status":false,
            "message":"invalid id",
        })
    }
}

