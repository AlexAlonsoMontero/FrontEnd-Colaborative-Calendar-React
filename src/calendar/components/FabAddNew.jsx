import { useCalendarStore, useUiStore } from "../../hooks"
import { addHours } from 'date-fns'
export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();
    const handleClickNew = () => {
        setActiveEvent({
            _id: new Date().getTime(),
            title: 'Hola',
            notes: 'Mundo',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: '123456',
                name: 'Alex'

            }
        })
        openDateModal();
    }
    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>

        </button>
    )
}
