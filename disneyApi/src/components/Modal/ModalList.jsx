const ModalList = ({data, showName}) => {
	return  <ul>
            <h3>{showName}</h3>
            {data.map((show) => (
                <li key={show}>{show}</li>
            ))}
        </ul>

};
export default ModalList;
