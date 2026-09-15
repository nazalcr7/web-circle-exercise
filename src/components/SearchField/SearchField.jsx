import styles from "./SearchField.module.css";

const SearchField = ({ onSearch }) => {
  
  return (
    <div className={styles.wrapper}>
        <input
        placeholder="Filter dishes..."     
        type="text"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchField;
