import React from 'react'
import Image from 'next/image';
import styles  from '@/components/Location/location.module.css';

const Location = () => {
  const places = ["Dubai", "Abu Dhabi", "Sharjah", "Fujairah", "Ras Al Khaimah"];

  return (
    <div className={styles.locationsDiv}>
               <h2>Locations</h2>
    {places.map((place, index) => (
        <div
          key={place}
          className={styles.place} 
        >
          <Image src="images\loc.svg" width={18} height={20} alt="" />
                        
          <span>{place}</span>
        </div>
      ))}
    </div>
  );
}

export default Location