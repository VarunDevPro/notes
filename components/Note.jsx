import tinytime from "tinytime";
import { PencilIcon } from '@heroicons/react/solid'
import { StarIcon as StarSolid } from '@heroicons/react/solid'
import { StarIcon as StarOutlined } from '@heroicons/react/outline'
import { classNames } from '../utils/class-names'


const dateTemplate = tinytime("{MMMM} {DD}, {YYYY}");

export const Note = ({ color, content, date, isFav }) => {

    const onFav = () => {
        // Mark as favorite
    }

    return <div className='group flex flex-col p-8 rounded-2xl' style={{ minWidth: 280, minHeight: 280, backgroundColor: color }}>
        <div>
            {/* Favorite Button */}
            <button className={
                classNames(
                    'bg-black hover:bg-gray-900 hover:shadow-lg transition rounded-full p-2 ml-4 mb-4 float-right outline-none focus:ring-2 focus:ring-white',
                    isFav ? 'text-yellow-400' : 'text-white hover:text-yellow-400 opacity-0 group-hover:opacity-100 focus:opacity-100'
                )}>
                {isFav ?
                    <StarSolid className='w-4 h-4' /> :
                    <StarOutlined className='w-4 h-4' />}
            </button>

            {/* Content */}
            <p className='font-medium'>{content}</p>
        </div>

        <div className='flex justify-between items-center mt-auto clear-both'>

            {/* Last Updated At */}
            <time dateTime={date}>
                {dateTemplate.render(new Date(date))}
            </time>

            {/* Edit Button */}
            <button className='bg-black text-white hover:bg-gray-900 rounded-full p-3 transition transform hover:scale-105 hover:shadow-lg opacity-0 outline-none focus:ring-2 focus:ring-white group-hover:opacity-100 focus:opacity-100'>
                <PencilIcon className='w-4 h-4' />
            </button>
        </div>

    </div>
}