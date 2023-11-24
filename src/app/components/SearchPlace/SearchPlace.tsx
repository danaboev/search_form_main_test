import styles  from './SearchPlase.module.scss'
import { FormEvent } from 'react'
import Image from 'next/image'
export default function SearchPlace() {

	return (
		
		<div className={styles['search-form-container']}>
            <div className={styles['search-input-wrapper']}>
            <input className={styles['search-input']} type="text" placeholder="Where to go?" />    
            </div> 
            
			<select name="category-select" className={styles['category-select']}>
				<option value="all">Choose a location </option>
				<option value="Category-1">Category 1  </option>
				<option value="Category-2">Category 2 </option>
				<option value="Category-2">Category 3 </option>
			</select>
            <button className={styles['search-button']} type="submit"  >   Search</button> 
  
		</div>

	)
}

