import React from 'react';

const Loading = () => {
    return (
        <div className='justify-center flex'>
            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                <div className="h-48 rounded-t dark:bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;


<div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
    <span class="visually-hidden">Loading...</span>
</div>