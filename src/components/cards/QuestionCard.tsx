import Link from 'next/link'
import React from 'react'
import RenderTag from '../shared/RenderTag'
import Metric from '../shared/Metric'
import { getTimestamp } from '@/lib/utils'

interface Props {
    _id:string
    title:string
    author:{
        _id:string
        name:string
        picture:string
    }
    tags:{
        _id:number
        name:string
    }[]
    upvotes:number
    views:number
    answers:Array<object>
    createdAt:Date
}

const QuestionCard = ({
    _id, title, author, tags, upvotes, views, answers, createdAt
}:Props) => {
  return (
    <div className='card-wrapper p-9 sm:px-11 rounded-[10px]' >
            <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
                <div className="">
                    <span className="subtle-regular text-dark400_light700  line-clamp-1 flex sm:hidden">
                        {getTimestamp(createdAt)}
                    </span>
                    <Link href={`/question/${_id}`}>
                        <h3 className="sm:h3-bold base-semibold text-dark200_light900 line-clamp-1 flex-1">
                            {title}
                        </h3>
                    </Link>
                </div>
                {/* if signed in add edit actions */}
            </div>
            <div className="mt-3 5 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (<RenderTag key={idx} _id={tag._id} name={tag.name}/>))}
            </div>

            <div className="flex-between mt-6 w-full flex-wrap gap-3">
                <Metric 
                    imgUrl={author?author.picture:'/assets/icons/avatar.svg'}
                    alt='user'
                    value={author?author.name:''}
                    title={`- asked ${getTimestamp(createdAt)}`}
                    href={`/profile/${author?author._id:null}`}
                    isAuthor={true}
                    textStyles='body-medium text-dark400_light700'
                />
                <Metric 
                    imgUrl='/assets/icons/like.svg'
                    alt='upvotes'
                    value={upvotes}
                    title={'Votes'}
                    textStyles='small-medium text-dark400_light800'
                />
                <Metric 
                    imgUrl='/assets/icons/message.svg'
                    alt='message'
                    value={answers.length}
                    title={'Answers'}
                    textStyles='small-medium text-dark400_light800'
                />
                <Metric 
                    imgUrl='/assets/icons/eye.svg'
                    alt='eye'
                    value={views}
                    title={'Views'}
                    textStyles='small-medium text-dark400_light800'
                />
            </div>
    </div>
  )
}

export default QuestionCard