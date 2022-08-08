import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from "../store";
export const useUiStore = () =>{

    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector(state => state.ui);
    

    const openDateModal = () => {
        dispatch( onOpenDateModal());
    }

    const closeDateModal = () =>{
        dispatch( onCloseDateModal());
    }
    return {
        //Propiedades
        isDateModalOpen,
        //Métodos
        openDateModal,
        closeDateModal
    }
}

