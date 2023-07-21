import React from 'react'
import Button from '../button/Button';
import FieldFilter from './FieldFilter';
import OrderFilter from './OrderFilter';
import SortFilter from './SortFilter';

function Filter() {

    const handleAdvancedSearch = () => {
        let fieldKey = JSON.parse(localStorage.getItem('fFilter')) || ''
        let sortBy = JSON.parse(localStorage.getItem('sFilter')) || ''
        let order = JSON.parse(localStorage.getItem('oFilter')) || ''
        console.log(fieldKey, sortBy, order)
    }



    return (
        <div className=' sm:mx-7   lg:flex md:items-center md:gap-10 md:justify-around'>
            <FieldFilter />
            <SortFilter />
            <OrderFilter />
            <div onClick={handleAdvancedSearch}
                className="mb-2 lg:mb-0"
            >
                <Button className="w-full  bg-teal-200"><span className="text-green-800">Lọc</span></Button></div>
        </div>
    )
}

export default Filter
