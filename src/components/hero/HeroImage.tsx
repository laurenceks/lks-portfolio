const HeroImage = ({ showImage }: { showImage: boolean }) => (
    <div
        className={`hero-image animation-fade-in-up fade-in-up-25 mt-4 mt-lg-none ${
            showImage ? "animation-start" : ""
        }`}
    >
        <img
            src={"images/profilePicture.jpeg"}
            alt={"A picture of me, Laurence Summers. Hello!"}
        />
    </div>
);
export default HeroImage;

HeroImage.defaultProps = {
    heroTypingStage: 0,
};
