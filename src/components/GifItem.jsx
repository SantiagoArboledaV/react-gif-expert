export const GifItem = ({ title, url, id, onDelete }) => {
  return (
    <div className="card">
      <span
        className="delete-icon"
        onClick={(e) => {
          onDelete(id);
        }}
      >
        x
      </span>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
