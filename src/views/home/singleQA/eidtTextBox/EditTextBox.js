import React, { useState, useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useUpdateAnswerMutation, useUpdateQuestionMutation } from '../../../../store/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTextBox = ({ flag, text, qa, coverValue }) => {
    //console.log(onShowMore)
    //alert(qa)
    //alert("ahaaaaa")
    const r1 = useRef(null);
    //console.log(qa)
    const [updateAnswer] = useUpdateAnswerMutation()
    const [updateQuestion] = useUpdateQuestionMutation()
    const [value, setValue] = useState(text)
    const [hasChanged, setHasChanged] = useState(false)
    const a = useEffect(() => {
        setValue(text);
    }, [text]);
    const updateAnswer1 = (e) => {
        //onShowMore()
        r1.current.blur();
        //alert("2")
        //console.log(hasChanged)
        if (hasChanged) {
            setHasChanged(false)
            if (window.confirm("确定保存更改吗?")) {

                updateAnswer2()
                r1.current.blur();
                toast("更改已经保存!", {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }
        }

        r1.current.blur();
        return
    }
    const updateAnswer2 = () => {
        //console.log({ ...answer, answer: value })
        //alert(id)
        switch (flag) {
            // case -1 : 
            // alert("ha1ha")
            case 'question':
                //alert("haha")
                //alert(qa)
                updateQuestion({ question: value, id: qa.id })
                break;
            case 'minimum':
                //updateMinimum({ question: value, id: qa.id  })
                break;
            case 'answer':
                updateAnswer({ ...qa, answer: value })
        }

    }
    return (
        <div className='flex justify-between'>
            <TextareaAutosize
                className={" border-dashed border-y border-black w-full h-[24px]" + (flag == 'minimum' && 'bg-yellow-200')}
                cacheMeasurements
                name="editBox"
                key={qa.id1}
                value={value}
                ref={r1}

                onChange={e => {
                    setValue(e.target.value)
                    //console.log(e.target.value)
                    coverValue({ [flag]: e.target.value })
                    setHasChanged(true)
                    //console.log(hasChanged)
                }}
            //onBlur={updateAnswer1}
            // onFocus={() => {
            //     onShowMore()
            // }}
            />

            <div className='bg-red-400 w-4 h-full'
                onClick={updateAnswer2}
            >{(flag == 'question' || flag == 'add') ? '_' : qa.no}</div>

            <ToastContainer />
        </div>
    )
}
export default EditTextBox