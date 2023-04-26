import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hooks';
import { servicesDetailsRequest } from '../../../slices/servicesSlice';
import '../List.scss';

interface Item {
  name: string;
  price: number;
  id: number;
}

export default function ListItem({ element }: { element: Item }) {
  const { name, price, id } = element;
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(servicesDetailsRequest({ clickedID: String(id) }));
    navigate('/ra-12.2-redux_observable-main_details-front/:id/details');
  }

  return (
    <tr>
      <td onClick={handleClick}>{name}</td>
      <td>{price}</td>
      <td>
        <span className='icon-edit'></span>
        <span className='icon-delete'></span>
      </td>
    </tr>
  )
}
