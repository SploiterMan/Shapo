import { createSlice } from '@reduxjs/toolkit';
import imgPost1 from '../../assets/images/blog/post1.jpg'
import imgPost2 from '../../assets/images/blog/post2.jpg'
import imgPost3 from '../../assets/images/blog/post3.jpg'

export const $_posts = createSlice({
    name: '_posts',
    initialState: {
        data: [
            {
                id: 1,
                title: 'نام پست',
                coverImg: imgPost1,
                creator: 'ادمین',
                dateCreated: '1402-01-02',
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 2,
                title: 'نام پست',
                coverImg: imgPost2,
                creator: 'ادمین',
                dateCreated: '1402-01-05',
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 3,
                title: 'نام پست',
                coverImg: imgPost3,
                creator: 'ادمین',
                dateCreated: '1402-01-07',
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 4,
                title: 'نام پست',
                coverImg: imgPost1,
                creator: 'ادمین',
                dateCreated: '1402-01-02',
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 5,
                title: 'نام پست',
                coverImg: imgPost2,
                creator: 'ادمین',
                dateCreated: '1402-01-05',
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 6,
                title: 'نام پست',
                coverImg: imgPost3,
                creator: 'ادمین',
                dateCreated: '1402-01-07',
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 7,
                title: 'نام پست',
                coverImg: imgPost1,
                creator: 'ادمین',
                dateCreated: '1402-01-02',
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 8,
                title: 'نام پست',
                coverImg: imgPost2,
                creator: 'ادمین',
                dateCreated: '1402-01-05',
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 9,
                title: 'نام پست',
                coverImg: imgPost3,
                creator: 'ادمین',
                dateCreated: '1402-01-07',
                desc: 'این صندلی یک صندلی عالی است'
            },
        ],
        itemsToShow: 3
    },
    reducers: {
        setPosts: (state, { payload }) => {
            state.data = payload;
        },
        showMoreItem: state => {
            state.itemsToShow += 3;
        },
        showLessItem: state => {
            state.itemsToShow = 3;
        },
    }
});

export const { setPosts, showMoreItem, showLessItem } = $_posts.actions;