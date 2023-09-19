import { useState } from "react";

export function WeatherInput(props) {
  const [inputText, setInputText] = useState("");

  const updateWeatherByCity = props.inputHandle;

  const handleClick = () => {
    if (inputText) updateWeatherByCity(inputText);
  };

  return (
    <form action='' className='form d-flex gap-2 col-sm-6'>
      <input
        type='text'
        className='form-control'
        name='city'
        placeholder='Enter the city...'
        onChange={(event) => setInputText(event.target.value)}
      />
      <button type='submit' className='btn' onClick={handleClick}>
        <i className='fa-solid fa-arrow-right'></i>
      </button>
    </form>
  );
}
