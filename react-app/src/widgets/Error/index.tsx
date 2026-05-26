type Props = {
    message?: string,
}

const Error = ({message="Помилка..."}:Props) => {
    return (
        <>
            <div style={{ color: '#f44336', textAlign: 'center', padding: '50px', fontSize: '18px' }}>
                {message}
            </div>
        </>
    );
}
export default Error;