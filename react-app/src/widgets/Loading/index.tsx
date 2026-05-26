type Props = {
    message?: string,
}

const Loading = ({message="Завантаження..."}:Props) => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', color: '#fff', fontSize: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '50px', height: '50px', border: '5px solid #2c3e50', borderTop: '5px solid #ff4c4c', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px' }}></div>
                    {message}
                    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                </div>
            </div>
        </>
    )
};

export default Loading;