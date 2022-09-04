import { useState, useEffect } from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';

function App() {
  const [properties, setProperties] = useState();

  // use this state to keep track of the user's saved/bookmarked properties
  const [savedProperties, setSavedProperties] = useState([]);

  // search state
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  const onSearch = (e) => {
    setSearchTerm(e)
  }

  // Add a new property to your favorites list

  const handleSavedProperties = (property) => {
    const newSavedProperties = [...savedProperties, property]
    setSavedProperties(newSavedProperties)
  }

  // Remove a property from your favorites list

  const handleRemovedProperties = (property) => {
    const newSavedProperties = savedProperties.filter((bookmarked) => bookmarked.property_id !== property.property_id);
    setSavedProperties(newSavedProperties)
  }

  return (
    <div className="container mx-auto py-5 xl:px-4 font-dm">
      <Header onSearch={onSearch} />

      <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!properties && properties
          .filter((property) => {
            if (searchTerm === '') {
              return property
            } else if (property.short_description.toLowerCase().includes(searchTerm.toLowerCase())) {
              return property
            }
            return false
          })
          .map((property) => <PropertyCard
            key={property.property_id}
            property={property}
            saveBookmark={handleSavedProperties}
            removeBookmark={handleRemovedProperties}
          />)}
      </div>
    </div>
  );
}

export default App;


// if (searchTerm === '') {
//   return property
// } else if (property.short_description.toLowerCase().includes(searchTerm.toLowerCase())) {
//   return property
// }
