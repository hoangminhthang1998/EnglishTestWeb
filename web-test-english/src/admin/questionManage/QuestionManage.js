import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import ChangeSentence from '../../components/main/takeTest/changesentence/ChangeSentence'
import questionsApi from '../../api/questionApi'
import './QuestionManage.scss'
import axios from 'axios'


function QuestionManage() {
    const [listQuestions, setListQuestions] = useState([])
    const [value, setValue] = useState('questions')
    const [edit, setEdit] = useState('')
    const [question, setQuestion] = useState({text : ''})
    const [correctAnswer, setCorrectAnswer] = useState({text : ''})
    const [answer, setAnswer] = useState('')
    const [putQues, setPutQues] = useState({})
    // const [valueAnswer, setValueAnswer] = useState({text : ''})
    const fetchQuestionApi = async (e) => {
        const response = await questionsApi.fetchQuestionApi(value)
            setListQuestions(response)
    }
    useEffect(() => {
        fetchQuestionApi()
    }, [value, putQues])
    const onValue = (e) =>{
        setValue(e.target.value)
        setEdit('')
    }
    const onEdit = (index, item,correctAnswer, answer) => {
        setEdit(index)
        setQuestion({text: item})
        setCorrectAnswer({text: correctAnswer})
        if (answer){
            setAnswer(Object.values(answer))
        }
        else{
            setAnswer([])
        }
    }
    const onOk = (item) => {
        setEdit('')
        const editQues ={
            id: item.id,
            typeID: item.typeID,
            question: question.text,
            correctAnswer: correctAnswer.text,
            answer: answer
        }
        setPutQues(editQues)
        return( axios.put(`http://localhost:3004/${value}/${item.id}`,editQues)
            .then(function (response) {
                return(
                    // fetchAccountApi(),
                    setEdit(''),
                    alert('Thành công')
                )
                
            })
            .catch(function (error) {
                console.log(error)
            })
        )
    }
    const onHandleChangeQues = (e) =>{
        setQuestion({text: e.target.value})
    }
    const onCancel = () => {
        setQuestion({text: ''})
        setEdit('')
    }
    const onHandleCorrectAnswer = (e) =>{
        setCorrectAnswer({text: e.target.value})
    }
    const onHandleChangeAnwser = (e, index) => {
        // if(item){
        //     setAnswer(e.target.value)
        //     console.log('answer');
        // }
        var emails = answer.slice();
        emails[index] = e.target.value;
        setAnswer(emails); 
    }
    return (
        <div className='questionmanage'>
            <div style={{display: 'flex', padding: '20px'}}>
                {/* <form > */}
                <div  className="col-8">
                    <select  
                        className="col-6" name="cars" id="cars" value ={value}
                        onChange = {onValue}
                    >
                        <option value="questions">questions</option>
                        <option value="formFillOut">formFillOut</option>
                        <option value="changesentence">changesentence</option>
                        <option value="listening">listening</option>
                    </select>
                </div>
                    {/* <input type="submit" value="Submit"/> */}
                {/* </form> */}
                <div className="col-4">
                    <button>hi</button>
                </div>
            </div>
            <div className='questionmanage__list'>
                {
                    listQuestions && 
                    listQuestions.map((item, index) => {
                        // let newArr = []
                        // if (item.answer){
                        //     newArr= Object.values(item.answer)
                        //     // console.log(newArr);
                        // }
                        // else{
                        //     newArr = []
                        // }
                        return(
                            <div className='questionmanage__list__show'>
                                <div className='questionmanage__list__show__ques col-9'>
                                    <a>{item.question}</a>
                                    { edit === index ? (
                                        <div className='questionmanage__list__show__ques__btn'> 
                                            <><a>Câu hỏi: </a>
                                            {/* <a>{item.answer.a}</a> */}
                                            <input
                                                type="text" 
                                                className="form-control"  
                                                placeholder="Câu hỏi" 
                                                name = "question"
                                                value ={question.text}
                                                onChange = {onHandleChangeQues}
                                            /></>
                                            <><p>Đán án đúng: </p>
                                            <input
                                                type="text" 
                                                className="form-control"  
                                                placeholder="Câu hỏi" 
                                                name = "question"
                                                value ={correctAnswer.text}
                                                onChange = {onHandleCorrectAnswer}
                                            /></>
                                            { answer.length > 0  ? <p>Đán án: </p> : ''}
                                            { 
                                                answer && answer.map((item,index) =>{
                                                    return( 
                                                        <>
                                                            <input
                                                                key={index}
                                                                style={{marginTop:'3px'}}
                                                                type="text" 
                                                                className="form-control"  
                                                                placeholder="item" 
                                                                name = "text"
                                                                value ={item}
                                                                onChange = {(e) => onHandleChangeAnwser(e,index)}
                                                            />
                                                        </>
                                                    )
                                                })
                                            }
                                        <button className='questionmanage__list__show__ques__btn--ok' onClick={() =>onOk(item)}>ok</button>
                                        <button className='questionmanage__list__show__ques__btn--cancel' onClick={onCancel}>hủy</button>
                                    </div>
                                ) : '' }
                                <hr/>
                                </div>
                                <div className='questionmanage__list__show__action col-3'>
                                    <a className='questionmanage__list__show__action--edit' onClick={() => onEdit(index, item.question, item.correctAnswer, item.answer)}>Sửa</a>
                                    <a className='questionmanage__list__show__action--del'>Xóa</a>
                                </div>
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
    );
}

export default QuestionManage;

// const [listQuestions, setListQuestions] = useState([])
//     const [arrQuestionFillOut, setArrQuestionFillOut] = useState([])
//     const [listChangeSentence, setListChangeSentence] = useState([])
//     const [listQuestionListen, setListQuestionListen] = useState([])
//     const [listQuestionSynonyms, setListQuestionSynonyms] = useState([])
//     const [listQuestionRead, setListQuestionRead] = useState([])
//     const [listQuestionSelect, setListQuestionSelect] = useState([])
//     const fetchQuestionApi = async () => {
//         const response = await questionsApi.fetchQuestionApi('questions')
//         setListQuestions(response)

//         const questionFillOut = await questionsApi.fetchQuestionApi('formFillOut')
//         setArrQuestionFillOut(questionFillOut)
  
//         const questionChangeSentence = await questionsApi.fetchQuestionApi('changesentence')
//         setListChangeSentence(questionChangeSentence)
  
//         const questionListen = await questionsApi.fetchQuestionApi('listening')
//         setListQuestionListen(questionListen)
  
//         const questionSynonyms = await questionsApi.fetchQuestionApi('synonyms')
//         setListQuestionSynonyms(questionSynonyms)
  
//         const questionRead = await questionsApi.fetchQuestionApi('readandanswer')
//         setListQuestionRead(questionRead)
  
//         const questionSelect = await questionsApi.fetchQuestionApi('selectasuitableword')
//         setListQuestionSelect(questionSelect)
//     }