import React from 'react'
import Image from 'next/image'

const restaurants = [
  { name: 'Burger King', logo: '/Burger_King_logo.svg.png' },
  { name: 'Chick-fil-A', logo: '/Chick-fil-A_Logo.svg.png' },
  { name: 'Chipotle', logo: '/Chipotle_logo.svg.png' },
  { name: 'Dominos', logo: '/Dominos_pizza_logo.svg.png' },
  { name: 'Dunkin', logo: '/Dunkin_logo.svg.png' },
  { name: 'KFC', logo: '/KFC_logo.svg.png' },
  { name: 'McDonalds', logo: '/McDonald\'s_logo.svg.png' },
  { name: 'Starbucks', logo: '/Starbucks_Logo.svg.png' },
  { name: 'Subway', logo: '/Subway_logo.svg.png' },
  { name: 'Taco Bell', logo: '/Taco_Bell.svg.png' },
  { name: 'Wendys', logo: '/Wendys_logo.svg.png' },
]

interface RestaurantSelectionProps {
  selectedRestaurants: string[]
  setSelectedRestaurants: (restaurants: string[]) => void
}

const RestaurantSelection: React.FC<RestaurantSelectionProps> = ({ selectedRestaurants, setSelectedRestaurants }) => {
  const handleRestaurantClick = (name: string) => {
    setSelectedRestaurants(prevSelected => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter(r => r !== name)
      } else if (prevSelected.length < 5) {
        return [...prevSelected, name]
      }
      return prevSelected
    })
  }

  const isSelected = (name: string) => selectedRestaurants.includes(name)
  const isDisabled = selectedRestaurants.length >= 5

  return (
    <div className="mb-8 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-400">Select Restaurants:</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.name}
            onClick={() => handleRestaurantClick(restaurant.name)}
            className={`p-2 rounded-lg transition-all ${
              isSelected(restaurant.name)
                ? 'bg-green-600 ring-2 ring-green-400'
                : 'bg-gray-800 hover:bg-gray-700'
            } ${isDisabled && !isSelected(restaurant.name) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isDisabled && !isSelected(restaurant.name)}
            aria-label={`Select ${restaurant.name}`}
          >
            <Image
              src={restaurant.logo}
              alt={restaurant.name}
              width={64}
              height={64}
              className="rounded-md"
            />
          </button>
        ))}
      </div>
      <p className="text-center mt-4 text-green-400">
        {selectedRestaurants.length}/5 restaurants selected
      </p>
    </div>
  )
}

export default RestaurantSelection
