import React, { useState } from 'react';
import TablesListItems from './Components/tables/TablesListItems';
import Reservations from './Components/reservations/Reservations';
import Toast from './Components/toast/Toast';
import { RestaurantsData } from './Types/index';
import { CurrentInfoStateType } from './Types/global';
import './Styles/App.css';

function App() {
  // Note: State for reservations component
  const [numOfGuests, setnumOfGuests] = useState<string>('');
  const [dayDropdown, setDayDropdown] = useState<string>('');
  const [timeDropdown, setTimeDropdown] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const [showRestaurants, setShowRestaurants] = useState<boolean>(false);
  const [confirmedRes, setConfirmedRes] = useState<boolean>(false);
  const [filteredArray, setFilteredArray] = useState(RestaurantsData);
  const [currentInfo, setCurrentInfo] = useState<CurrentInfoStateType>({
    name: null,
    guests: null,
    date: null,
    time: null,
  });

  // Note: returns restaurant based on its id, changing the view state
  const handleClick = (id: string) => {
    const filteredRestaurants = RestaurantsData?.filter((value) => {
      return value.id === id;
    });

    setShowRestaurants(true);
    setFilteredArray(filteredRestaurants);
  };

  const goBack = () => {
    setShowRestaurants(false);
  };

  // Note: Toast state for error or success message
  const toastTimeout = () => {
    setTimeout(() => {
      setConfirmedRes(false);
      setCurrentInfo({ name: null, guests: null, date: null, time: null });
    }, 5000);
  };

  // Note: Could take in a string or null, as well as an empty array
  const reserveTable = (
    id: string | null = null,
    reservationInfo: any = []
  ) => {
    // Note: Set confirmed for toast
    setConfirmedRes(true);
    // Note: If id is null and there is no reservationInfo return timeout calling error toast
    if (id === null && reservationInfo.length <= 0) {
      return toastTimeout();
    }

    // Note: finding the restaurant based on its id
    const value = RestaurantsData.find((index) => {
      return index.id === id;
    });

    setnumOfGuests('');
    setDayDropdown('');
    setTimeDropdown('');
    setError(false);

    // Note: pushing the info into the array
    value?.reservations.push(reservationInfo);

    setCurrentInfo({
      name: value?.name,
      guests: reservationInfo.guests,
      date: reservationInfo.date,
      time: reservationInfo.time,
    });

    goBack();
    toastTimeout();
  };

  const restaurantLists = (): JSX.Element[] => {
    return RestaurantsData.map((restaurant) => {
      return (
        <TablesListItems
          key={restaurant.id}
          id={restaurant.id}
          image={restaurant.image}
          name={restaurant.name}
          reviews={restaurant.reviews}
          typeofFood={restaurant.typeofFood}
          cost={restaurant.cost}
          rating={restaurant.rating}
          onClick={() => handleClick(restaurant.id)}
        />
      );
    });
  };

  const reservations = (): JSX.Element => {
    return (
      <Reservations
        numOfGuests={numOfGuests}
        setnumOfGuests={setnumOfGuests}
        dayDropdown={dayDropdown}
        setDayDropdown={setDayDropdown}
        timeDropdown={timeDropdown}
        setTimeDropdown={setTimeDropdown}
        restaurants={filteredArray}
        error={error}
        setError={setError}
        onGoBack={goBack}
        onReserve={reserveTable}
      />
    );
  };

  const headers = () => {
    return !showRestaurants ? 'Aailable Today!' : 'Reserve a Table';
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1>{headers()}</h1>
      </div>
      {confirmedRes && <Toast currentInfo={currentInfo} error={error} />}
      <div className="restaurants-container">
        {!showRestaurants ? restaurantLists() : reservations()}
      </div>
    </div>
  );
}

export default App;
