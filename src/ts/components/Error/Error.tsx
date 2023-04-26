import './Error.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectClickedId, servicesDetailsRequest, servicesRequest } from '../../slices/servicesSlice';

export default function Error({ error }: { error: string }): JSX.Element {
  const dispatch = useAppDispatch();
  const clickedID = useAppSelector(selectClickedId);

  const handleClick = () => {
    clickedID
      ? dispatch(servicesDetailsRequest({ clickedID }))
      : dispatch(servicesRequest())
  }

  return (
    <div className="error">
      <div>{error}
        <button onClick={handleClick} className="error__btn">Повторить запрос</button>
      </div>
    </div>
  )
}