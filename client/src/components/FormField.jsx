import React from "react"

const FormField = ({ name, text, labelName, placeholder, value, handleChange, isSupriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <label htmlFor={name} className="block text-sm font-medium text-gray-500">{labelName}</label>
        {
          isSupriseMe?<button type="button" onClick={handleSurpriseMe} className="font-bold bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black" >Surprise Me!</button> : null
        }
</div>

        <input type={text}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          id={name}
          required
          
          className="border border-gray-500 rounded bg-gray-50 text-gray-900 focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
        />
    </div>
  )
}

export default FormField