function ComicCard({ title, thumb }) {
    return (
        <div className="comic-card">
            <img src={thumb} alt={title} />
            <h4>{title}</h4>
        </div>
    );
}

export default ComicCard;