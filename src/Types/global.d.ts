export interface RestaurantsDataTypes {
  id: string;
  image?: string;
  name?: string;
  reviews?: number;
  typeofFood?: string;
  cost?: RestaurantCost;
  description?: string;
  rating?: number;
  reservations?: Array;
}

export interface TablesProps {
  restaurants?: RestaurantsDataTypes[];
  onClick?: () => void;
}

export interface CurrentInfoStateType {
  name: string | null | undefined;
  guests: string | null;
  date: string | null;
  time: string | null;
}

export interface ReservationsPropTypes {
  restaurants: RestaurantsDataTypes[];
  setnumOfGuests: (num: string) => void;
  setDayDropdown: (day: string) => void;
  setTimeDropdown: (time: string) => void;
  onReserve: (id: string | null, reservationInfo: object | []) => void;
  setError: (error: boolean) => void;
  onGoBack: () => void;
  error: boolean;
  numOfGuests: string;
  dayDropdown: string;
  timeDropdown: string;
}

export interface ToastPropTypes {
  currentInfo: CurrentInfoStateType;
  error: boolean;
}

export interface TablesListItemsProps {
  id: string;
  image?: string;
  name?: string;
  reviews?: number;
  typeofFood?: string;
  cost?: string;
  rating?: number;
  onClick?: () => void;
}
