import { FormEvent } from 'react'
import Image from 'next/image'
export default function Home() {

	return (
		
		<div className='search-form-container'>
            <input className="search-input" type="text" placeholder="Where to go?"  />
			<select name="category-select" className='category-select'>
				<option value="all">Choose a location </option>
				<option value="Category-1">Category 1  </option>
				<option value="Category-2">Category 2 </option>
				<option value="Category-2">Category 3 </option>
			</select>
            <button className="search-button" type="submit" >  Search</button> 
  
		</div>

	)
}

