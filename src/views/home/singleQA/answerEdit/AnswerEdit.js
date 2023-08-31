import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import EditTextBox from '../eidtTextBox/EditTextBox';
import { Link } from 'react-router-dom'
import { useDeleteAnswerMutation, useUpdateAnswerMutation } from '../../../../store/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextareaAutosize from 'react-textarea-autosize';
const AnswerEdit = ({ item }) => {
  const [deleteAnswer] = useDeleteAnswerMutation()
  const [updateAnswer] = useUpdateAnswerMutation()
  const [hasChanged, setHasChanged] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [value, setValue] = useState(item.hint)
  const [record, setRecord] = useState({ id1: item.id1 })
  const r1 = useRef(null);
  const updateAnswer1 = (e) => {
    r1.current.blur();
    console.log(r1.current.id)
    if (!e.currentTarget.contains(e.relatedTarget)) {
      console.log("qsweewew")
      if (window.confirm("确定保存更改吗?")) {
        r1.current.blur();

      }
    }
    r1.current.blur();
    return
  }
  // useEffect(() => {
  //     console.log(record)
  // }, [record])
  const coverValue = (value) => {
    //console.log(value)
    //console.log(record)
    setRecord({ ...record, ...value })

  };
  const onShowMore1 = () => {
    //alert("shoq")
    setShowMore(true)
  };
  return (
    <div
      key={item.id1}
      className=''
      tabIndex='0'
      id={item.id1}
      ref={r1}
      //onBlur={updateAnswer1}
      onFocus={() => {
        onShowMore1()
      }}
    >
      <div className=' border-solid border-2 border-black '>
        <div className='flex justify-between w-full'>
          <div className='text-xs w-[14px]'>提示</div>
          <TextareaAutosize
            className='w-full'
            value={value}
            onChange={(e) => {
              //console.log(e.target.value)
              setValue(e.target.value)
              coverValue({ hint: e.target.value })
              setHasChanged(true)
            }}
          />
        </div>
        <EditTextBox
          qa={item}
          flag={'minimum'}
          text={item.minimum || ''}
          coverValue={coverValue}
        />

        <EditTextBox
          // className=" border-none border-b border-black  "
          //key={item.id1}
          qa={item}
          flag={'answer'}
          text={item.answer || ''}
          coverValue={coverValue}
        />
        <div className='flex flex-col   bg-green-300'>
          <div className='flex   bg-green-300'>
            <div className=''>
              <span>no号</span>
              <input
                type='number'
                defaultValue={item.no}
                onChange={(e) => {
                  //console.log(e.target.value)
                  coverValue({ no: e.target.value })
                  setHasChanged(true)
                }}
              />
            </div>
            <button
              className='bg-gray-300 text-center px-2 '
              onClick={() => {
                updateAnswer(record)
                toast('更改已经保存!', {
                  position: 'top-left',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })
              }}
            >
              保存
            </button>
            <button
              className={` border-solid border-2 border-black  px-2 flex items-center justify-center ${item.sayYNA == 1 ? 'bg-red-600 text-white' : 'bg-gray-300'
                }`}
              onClick={() => {
                let sayYNA
                if (item.sayYNA == 1) {
                  sayYNA = 0
                } else {
                  sayYNA = 1
                }
                updateAnswer({ sayYNA, id1: item.id1 })
              }}
            >
              听
            </button>
            <button
              className={` border-solid border-2 border-black  px-2 flex items-center justify-center ${item.watchYNA == 1 ? 'bg-red-600 text-white' : 'bg-gray-300'
                }`}
              onClick={() => {
                let watchYNA
                if (item.watchYNA == 1) {
                  watchYNA = 0
                } else {
                  watchYNA = 1
                }
                console.log(watchYNA)
                updateAnswer({ watchYNA, id1: item.id1 })
              }}
            >
              看
            </button>
            <button
              className='border-solid border-2 border-black bg-gray-300 px-2 flex items-center justify-center'
              onClick={() => {
                if (
                  window.confirm(
                    `确定删除答案吗?\n ${item.minimum ? item.minimum : item.answer
                    }`
                  )
                ) {
                  deleteAnswer({ id1: item.id1, delete1: 1 })
                }
              }}
            >
              删
            </button>
            <div>
              {item.id1}-{item.passYN ? 'pass' : 'fail'}-p{item.passQty}-f{item.failQty}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
export default AnswerEdit