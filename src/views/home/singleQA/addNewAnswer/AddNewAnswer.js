import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import EditTextBox from '../eidtTextBox/EditTextBox';
import { Link } from 'react-router-dom'
import { useAddAnswerMutation } from '../../../../store/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewAnswer = ({ id }) => {
  //console.log(id)
    const [addAnswer] = useAddAnswerMutation()
    const [hasChanged, setHasChanged] = useState(false)
    const [showMore, setShowMore] = useState(false)
  const [record, setRecord] = useState({ id })
    useEffect(() => {
      setRecord({ ...record, id })
    }, [id])
  //console.log(record)
    const r1 = useRef(null);
    //const item ={id1:1}
    //console.log(item)
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
        console.log(value)
        console.log(record)
        setRecord({ ...record, ...value })

    };
    const onShowMore1 = () => {
        //alert("shoq")
        setShowMore(true)
    };
    return (
      <div
        className='border-solid border-4 border-black '
        onFocus={() => {
          //record ={ ...{ id: id }}
          //onShowMore1()
        }}
      >
        <div className='flex justify-between w-full'>
          <div className='text-xs w-[14px]'>提示</div>
          <input
            placeholder=''
            type='text'
            //defaultValue={item.hint}
            className='w-full'
            onChange={(e) => {
              //console.log(e.target.value)
              coverValue({ hint: e.target.value })
              //setHasChanged(true)
            }}
          />
        </div>

        <EditTextBox
          // className=" border-none border-b border-black "
          qa={{ id1: 1, id, no: 1 }}
          flag={'minimum'}
          text={''}
          coverValue={coverValue}
        />
        <EditTextBox
          // className=" border-none border-b border-black  "
          //key={item.id1}
          qa={{ id1: 1, id, no: 1 }}
          flag={'answer'}
          text={''}
          coverValue={coverValue}
        />
        <div className='flex   bg-green-300'>
          <div className=''>
            <span>no号</span>
            <input
              type='number'
              //defaultValue={item.no}
              onChange={(e) => {
                //console.log(e.target.value)
                coverValue({ no: e.target.value })
                //setHasChanged(true)
              }}
            />
          </div>
          <button
            className='bg-gray-300 text-center px-2'
            onClick={() => {
              //setRecord({ ...record, id: id })
              console.log(record)
              addAnswer(record)
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
          <div className='flex justify-between '>
            <div className='text-xs w-[18px]'>删除</div>
            <input
              type='checkbox'
            //   defaultValue={item.acronymHint}
              onChange={(e) => {
                //console.log(e.target.value)
                coverValue({ acronymHint: e.target.value })
                //setHasChanged(true)
              }}
            />
          </div>
          <div>
            {id}
          </div>
        </div>
        <ToastContainer />
      </div>
    )
}
export default AddNewAnswer