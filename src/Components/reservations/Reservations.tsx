import React from 'react';
import {
  ReservationsPropTypes,
  RestaurantsDataTypes,
} from '../../Types/global';
import '../../Styles/Reservations.css';

const Reservations = ({
  restaurants,
  onGoBack,
  onReserve,
  numOfGuests,
  setnumOfGuests,
  dayDropdown,
  setDayDropdown,
  timeDropdown,
  setTimeDropdown,
  setError,
}: ReservationsPropTypes) => {
  const checkValues = () => {
    const dropdownValues =
      dayDropdown !== '' && timeDropdown !== '' && numOfGuests !== '';

    // Note: Checking if there is current values in state not equal to empty strings
    if (dropdownValues) {
      setnumOfGuests('');
      setDayDropdown('');
      setTimeDropdown('');
      setError(false);

      // Note: Calling our function passed as props taking restaurant and an object with guest details
      onReserve(restaurants[0].id, {
        guests: numOfGuests,
        date: dayDropdown,
        time: timeDropdown,
      });
    } else {
      // Note: Calling our function passed as props passing null and empty array to trigger error toast
      onReserve(null, []);
      setError(true);
    }
  };
  return (
    <section>
      {restaurants &&
        restaurants?.map((restaurant: RestaurantsDataTypes) => {
          return (
            <section key={restaurant.id}>
              <div className="reservation-container">
                <img
                  src={restaurant.image}
                  alt="default image"
                  className="image"
                />
                <div className="main-container">
                  <div className="restaurant-name">{restaurant.name}</div>
                  <div>Description: {restaurant.description}</div>
                </div>

                <div className="dropdown-container">
                  <select
                    data-testid="guests"
                    className="guests-dropdown"
                    name="guests-dropdown"
                    value={numOfGuests}
                    onChange={(event) => setnumOfGuests(event.target.value)}
                  >
                    <option value="party size">Party Size </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7+">7+</option>
                  </select>

                  <select
                    data-testid="days"
                    name="day-dropdown"
                    value={dayDropdown}
                    onChange={(event) => setDayDropdown(event.target.value)}
                  >
                    <option value="reserve a day">Reserve a Day </option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>

                  <select
                    data-testid="times"
                    name="time-dropdown"
                    value={timeDropdown}
                    onChange={(event) => setTimeDropdown(event.target.value)}
                  >
                    <option value="reserve a time">Reserve a Time </option>
                    <option value="5:00pm">5:00pm</option>
                    <option value="5:30pm">5:30pm</option>
                    <option value="6:00pm">6:00pm</option>
                    <option value="6:30pm">6:30pm</option>
                    <option value="7:00pm">7:00pm</option>
                    <option value="7:30pm">7:30pm</option>
                    <option value="8:00pm">8:00pm</option>
                    <option value="8:30pm">8:30pm</option>
                    <option value="9:00pm">9:00pm</option>
                  </select>
                </div>

                <div className="reservation-buttons">
                  <button onClick={() => checkValues()}>Reserve</button>
                  <button onClick={onGoBack}>Back</button>
                </div>
              </div>
            </section>
          );
        })}
    </section>
  );
};

export default Reservations;
