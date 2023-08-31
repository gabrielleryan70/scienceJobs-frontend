import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import {
  useGetSearchedQAQuery,
  useSetUpdatedAtMutation,
} from '../../../store/apiSlice'
import {
    setStatus, setId
} from '../../../store/postsSlice';
const SearchQA = ({ searchText }) => {
    const [setUpdatedAt] = useSetUpdatedAtMutation()
    console.log(searchText)
    const dispatch = useDispatch();
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSearchedQAQuery(searchText)

    const showDetail = (id) => {
        dispatch(setStatus("showDetail"))
        setUpdatedAt({ id })
        dispatch(setId(id))
    }
    let content, question1, answer1;
    let id = 0;
    if (isLoading ) {
        content = <p>Loading...</p>
    } else if (isSuccess  && todos.length>0 ) {
        console.log(todos)
        console.log(todos[0])
        content = todos[0].map((item, key) => {
            question1="" 
            answer1=""
            if (id != item.id) {
                id = item.id
                question1 = (
                  <div
                    className='overflow-hidden font-bold border-y border-black bg-black text-white max-h-12'
                    onClick={() => {
                      showDetail(item.id)
                    }}
                    // key={item.id1}
                  >
                    {item.question}
                  </div>
                )
            }else{
                question1=""
            }
            // console.log(item)
        
            if (item.minimum && (item.minimum?.toLowerCase()).indexOf(searchText) >= 0) {
                answer1 = (
                  <div
                    className='overflow-hidden font-bold border-y border-black max-h-12'
                    onClick={() => {
                      showDetail(item.id)
                    }}
                    // key={item.id1}
                  >
                    {item.minimum}
                  </div>
                )
            } else {
                if (item.answer) {
                    if ((item.answer?.toLowerCase()).indexOf(searchText) >= 0) {
                        answer1 = (
                          <div
                            className='overflow-hidden font-bold border-y border-black max-h-12 '
                            onClick={() => {
                              showDetail(item.id)
                            }}
                            // key={item.id1}
                          >
                            {item.answer}
                          </div>
                        )
                    }
                }
            }
            return (
                <div key={item.id1} >{question1}{answer1}</div>
            )


        })
    }
    return (
        <div className="overflow-y">
            {content}

        </div>
    )
}


export default SearchQA