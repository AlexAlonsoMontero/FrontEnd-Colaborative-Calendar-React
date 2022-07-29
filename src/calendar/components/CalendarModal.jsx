import Modal from 'react-modal'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
    const onCloseModal = () => {
        console.log('cerrando modal');
    }
    return (
        <Modal
            isOpen={true}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTieoutMS= { 200 }
        >
            <h1>Hola Modal</h1>
            <hr />
            <p>Elit incididunt incididunt ullamco minim dolor.</p>
        </Modal>
    )
}
