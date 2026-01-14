const StarRating = ({ rating = 0, size = "14px" }) => {
  const rateAverage = (rating > 4 ? 1 : rating / 5) * 100;
  return (
    <span
      className={`inline max-w-fit text-transparent  bg-clip-text`}
      style={{
        letterSpacing: ".5rem",
        fontSize: size,
        // backgroundImage: `linear-gradient(90deg,rgba(255, 247, 0, 1) ${rateAverage}%, rgba(132, 132, 131, 0.2) 0%)`,
        backgroundImage: `linear-gradient(90deg, var(--color-primary-main) ${rateAverage}%, rgba(132, 132, 131, 0.2) 0%)`,
      }}
    >
      ★★★★★
    </span>
  );
};

export default StarRating;
