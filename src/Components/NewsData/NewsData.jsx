import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsAllData from '../NewsAllData/NewsAllData';
import ScrollToTop from 'react-scroll-to-top';

const NewsData = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get('https://api-creator-server.vercel.app/news-data')
            .then(function (res) {
                setNewsData(res.data)
            })
    }, [])

    console.log(newsData);
    return (
        <div className='news__data__main py-8 lg:py-20'>
            <ScrollToTop color='orange' height='30' width='30'/>
            <h1 className='text-3xl lg:text-left text-center lg:text-5xl font-bold'>All News Data</h1>

            <div className="news__all__data mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        newsData.map(data => <NewsAllData key={data._id} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsData;
