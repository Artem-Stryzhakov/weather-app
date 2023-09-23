import { useState } from "react";

export type CitySearchProps = {
    handleSearch: (city?: string, days?: string) => void
}

export function CitySearch({
    handleSearch
}: CitySearchProps) {
    const [inputText, setInputText] = useState("");

    const handleClick = () => {
        if (inputText) handleSearch(inputText);
    };

    return (
    <form action='' className='form d-flex gap-2 col-sm-6'>
        <input
            type='text'
            className='form-control'
            name='city'
            placeholder='Enter the city...'
            onChange={(event) => setInputText(event.currentTarget.value)}
        />
        <button type='submit' className='btn' onClick={handleClick}>
            <i className='fa-solid fa-arrow-right'></i>
        </button>
    </form>
    );
}
